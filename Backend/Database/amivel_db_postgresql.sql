CREATE TABLE IF NOT EXISTS applications (
  id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  firstname varchar(100) NOT NULL,
  lastname varchar(100) NOT NULL,
  email varchar(150) NOT NULL,
  mobile varchar(15) NOT NULL,
  college varchar(100) NOT NULL,
  experience varchar(50) NOT NULL,
  resume varchar(255),
  job_id varchar(100),
  job_title varchar(150),
  company varchar(150),
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  firstname varchar(100) NOT NULL,
  lastname varchar(100) NOT NULL,
  email varchar(150) NOT NULL,
  subject varchar(150) NOT NULL,
  message text NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
  id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  firstname varchar(100) NOT NULL,
  lastname varchar(100) NOT NULL,
  email varchar(150) NOT NULL,
  jobtitle varchar(100) NOT NULL,
  company varchar(100) NOT NULL,
  country varchar(100) NOT NULL,
  message text NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);
