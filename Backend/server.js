const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const express = require('express');
const fs = require('fs');
const fsPromises = require('fs/promises');
const { Pool } = require('pg');
const cors = require('cors');
const multer = require('multer');
const nodemailer = require('nodemailer');

const app = express();
const port = Number(process.env.PORT || 8081);

app.use(cors());
app.use(express.json());

/* =========================
   DATABASE CONNECTION
========================= */
const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// const db = new Pool({
//   host: process.env.PGHOST || 'localhost',
//   port: Number(process.env.PGPORT || 5432),
//   user: process.env.PGUSER || 'postgres',
//   password: process.env.PGPASSWORD || '',
//   database: process.env.PGDATABASE || 'amivel_db',
// });

db.connect()
  .then(() => console.log('✅ PostgreSQL Connected'))
  .catch((err) => console.log('❌ DB Connection Error:', err.message));

/* =========================
   FILE UPLOAD
========================= */

const uploadDir = path.join(__dirname, 'uploads');

fs.mkdirSync(uploadDir, { recursive: true });

const upload = multer({
  dest: uploadDir,
  limits: {
    fileSize: Number(process.env.MAX_RESUME_SIZE || 5 * 1024 * 1024),
  },
});

/* =========================
   VALIDATION
========================= */

function required(value) {
  return value !== undefined &&
    value !== null &&
    String(value).trim() !== '';
}

/* =========================
   MAIL CONFIGURATION
========================= */

function getMailer() {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = (process.env.SMTP_PASS || '').replace(/\s+/g, '');

  if (!smtpUser || !smtpPass) {
    throw new Error('SMTP credentials missing in .env');
  }

//  return nodemailer.createTransport({
//   host: process.env.SMTP_HOST || 'smtp.gmail.com',
//   port: Number(process.env.SMTP_PORT || 587),
//   secure: String(process.env.SMTP_SECURE || '').toLowerCase() === 'true',
//   auth: {
//     user: smtpUser,
//     pass: smtpPass,
//   },
// });
return nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  family: 4,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});
}

async function sendMail({ subject, text, replyTo, attachments = [] }) {
  try {
    const mailer = getMailer();

    await mailer.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.MAIL_TO || 'HR@amiveltech.com',
      replyTo,
      subject,
      text,
      attachments,
    });

    console.log('✅ Email Sent Successfully');

  } catch (err) {
    console.log('❌ Mail Error:', err.message);
    throw err;
  }
}

/* =========================
   TEST ROUTE
========================= */

app.get('/', (req, res) => {
  return res.json({
    status: 'success',
    message: 'Backend Running Successfully',
  });
});

app.get('/api/mail-status', async (req, res) => {
  try {
    const mailer = getMailer();
    await mailer.verify();

    return res.json({
      status: 'success',
      message: 'Mail login verified',
    });
  } catch (err) {
    console.log('Mail Status Error:', err.message);

    return res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
});

/* =========================
   USERS ROUTE
========================= */

app.get('/users', async (req, res) => {
  try {
    const { rows } = await db.query(
      'SELECT * FROM users ORDER BY id'
    );

    return res.json(rows);

  } catch (err) {
    console.log('❌ Users Fetch Error:', err.message);

    return res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
});

/* =========================
   CONTACT API
========================= */

app.post('/api/contact', async (req, res) => {

  console.log('📩 Contact Request:', req.body);

  const {
    firstName,
    lastName,
    email,
    subject,
    message,
  } = req.body;

  const fields = {
    firstName,
    lastName,
    email,
    subject,
    message,
  };

  const missing = Object.entries(fields)
    .filter(([, value]) => !required(value))
    .map(([key]) => key);

  if (missing.length > 0) {
    return res.status(400).json({
      status: 'error',
      message: `Missing fields: ${missing.join(', ')}`,
    });
  }

  try {

    /* INSERT INTO DATABASE */

    await db.query(
      `
      INSERT INTO contact_messages
      (firstname, lastname, email, subject, message)
      VALUES ($1, $2, $3, $4, $5)
      `,
      [firstName, lastName, email, subject, message]
    );

    console.log('✅ Contact Saved To DB');

    /* SEND EMAIL */

    await sendMail({
      subject: `Contact Form - ${subject}`,
      replyTo: email,
      text:
        `New Contact Form Submission\n\n` +
        `Name: ${firstName} ${lastName}\n` +
        `Email: ${email}\n` +
        `Subject: ${subject}\n\n` +
        `Message:\n${message}`,
    });

    return res.json({
      status: 'success',
      message: 'Submitted Successfully',
    });

  } catch (err) {

    console.log('❌ Contact API Error:', err);

    return res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
});

/* =========================
   JOB APPLICATION API
========================= */

app.post('/api/apply', upload.single('resume'), async (req, res) => {

  console.log('📄 Application Request Received');

  const {
    firstName,
    lastName,
    email,
    mobile,
    college,
    experience,
    jobId,
    jobTitle,
    company,
  } = req.body;

  const fields = {
    firstName,
    lastName,
    email,
    mobile,
    college,
    experience,
  };

  const missing = Object.entries(fields)
    .filter(([, value]) => !required(value))
    .map(([key]) => key);

  if (missing.length > 0) {
    return res.status(400).json({
      status: 'error',
      message: `Missing fields: ${missing.join(', ')}`,
    });
  }

  if (!req.file) {
    return res.status(400).json({
      status: 'error',
      message: 'Resume file required',
    });
  }

  const storedResume =
    `${Date.now()}_${req.file.originalname}`;

  const storedResumePath =
    path.join(uploadDir, storedResume);

  try {

    await fsPromises.rename(
      req.file.path,
      storedResumePath
    );

    /* INSERT INTO DATABASE */

    await db.query(
      `
      INSERT INTO applications
      (
        firstname,
        lastname,
        email,
        mobile,
        college,
        experience,
        resume,
        job_id,
        job_title,
        company
      )
      VALUES
      ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
      `,
      [
        firstName,
        lastName,
        email,
        mobile,
        college,
        experience,
        storedResume,
        jobId,
        jobTitle,
        company,
      ]
    );

    console.log('✅ Application Saved');

    /* SEND EMAIL */

    await sendMail({
      subject: `New Job Application - ${jobTitle || 'Application'}`,
      replyTo: email,
      text:
        `New Job Application\n\n` +
        `Name: ${firstName} ${lastName}\n` +
        `Email: ${email}\n` +
        `Mobile: ${mobile}\n` +
        `College: ${college}\n` +
        `Experience: ${experience}\n`,
      attachments: [
        {
          filename: req.file.originalname,
          path: storedResumePath,
        },
      ],
    });

    return res.json({
      status: 'success',
      message: 'Application submitted successfully',
    });

  } catch (err) {

    console.log('❌ Application API Error:', err);

    return res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
});

/* =========================
   SERVER START
========================= */

app.listen(port, () => {
  // console.log(`🚀 Backend running on http://localhost:${port}`);
  console.log(`🚀 Backend running on port ${port}`);
});
