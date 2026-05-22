const SHEET_ID = "1Y85QmL43iN4TPGDwwO1vR8i2zCTBv6uRTRSsOdUdSoY";
const NOTIFICATION_EMAIL = "HR@amiveltech.com";
const RESUME_FOLDER_ID = "1Nd1nLPnl4CwHaOvqq6p7LmhokNX6krJ3";

function doPost(e) {
  try {
    const data = parseRequestBody(e);

    if (data.formType === "contact") {
      return handleContact(data);
    }

    if (data.formType === "application") {
      return handleApplication(data);
    }

    return jsonResponse({
      status: "error",
      message: "Invalid form type.",
    });
  } catch (error) {
    return jsonResponse({
      status: "error",
      message: error.message || "Unable to save submission.",
    });
  }
}

function parseRequestBody(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error("No form data received.");
  }

  return JSON.parse(e.postData.contents);
}

function handleContact(data) {
  const sheet = getOrCreateSheet("Contact", [
    "Timestamp",
    "First Name",
    "Last Name",
    "Email",
    "Subject",
    "Message",
  ]);

  sheet.appendRow([
    new Date(),
    data.firstName || "",
    data.lastName || "",
    data.email || "",
    data.subject || "",
    data.message || "",
  ]);

  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: "New Contact Form Submission",
    htmlBody:
      "<h2>New Contact Form Submission</h2>" +
      "<p><b>Name:</b> " + escapeHtml(data.firstName) + " " + escapeHtml(data.lastName) + "</p>" +
      "<p><b>Email:</b> " + escapeHtml(data.email) + "</p>" +
      "<p><b>Subject:</b> " + escapeHtml(data.subject) + "</p>" +
      "<p><b>Message:</b><br>" + escapeHtml(data.message) + "</p>",
  });

  return jsonResponse({
    status: "success",
    message: "Contact submission saved.",
  });
}

function handleApplication(data) {
  const resumeUrl = saveResumeFile(data);
  const sheet = getOrCreateSheet("Applications", [
    "Timestamp",
    "Job ID",
    "Job Title",
    "Company",
    "First Name",
    "Last Name",
    "Email",
    "Mobile",
    "College",
    "Experience",
    "Resume",
  ]);

  sheet.appendRow([
    new Date(),
    data.jobId || "",
    data.jobTitle || "",
    data.company || "",
    data.firstName || "",
    data.lastName || "",
    data.email || "",
    data.mobile || "",
    data.college || "",
    data.experience || "",
    resumeUrl || data.resumeName || "",
  ]);

  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: "New Job Application" + (data.jobTitle ? " - " + data.jobTitle : ""),
    htmlBody:
      "<h2>New Job Application</h2>" +
      "<p><b>Job:</b> " + escapeHtml(data.jobTitle) + "</p>" +
      "<p><b>Company:</b> " + escapeHtml(data.company) + "</p>" +
      "<p><b>Name:</b> " + escapeHtml(data.firstName) + " " + escapeHtml(data.lastName) + "</p>" +
      "<p><b>Email:</b> " + escapeHtml(data.email) + "</p>" +
      "<p><b>Mobile:</b> " + escapeHtml(data.mobile) + "</p>" +
      "<p><b>College:</b> " + escapeHtml(data.college) + "</p>" +
      "<p><b>Experience:</b> " + escapeHtml(data.experience) + "</p>" +
      "<p><b>Resume:</b> " + (resumeUrl ? '<a href="' + resumeUrl + '">View resume</a>' : escapeHtml(data.resumeName)) + "</p>",
  });

  return jsonResponse({
    status: "success",
    message: "Application saved.",
  });
}

function saveResumeFile(data) {
  if (!data.resumeBase64 || !data.resumeName) {
    return "";
  }

  const bytes = Utilities.base64Decode(data.resumeBase64);
  const blob = Utilities.newBlob(
    bytes,
    data.resumeMimeType || "application/octet-stream",
    data.resumeName
  );

  const file = RESUME_FOLDER_ID
    ? DriveApp.getFolderById(RESUME_FOLDER_ID).createFile(blob)
    : DriveApp.createFile(blob);

  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  return file.getUrl();
}

function getOrCreateSheet(sheetName, headers) {
  const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  let sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
  }

  return sheet;
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
