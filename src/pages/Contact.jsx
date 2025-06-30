import React from "react";

function Contact() {
  const email = "vivekreddypeddireddy@gmail.com"; // Replace with your actual email
  const phone = "+14049887941"; // Replace with your actual phone number

  return (
    <main className="container mx-auto max-width section" style={{ backgroundColor: "#121212", padding: "3rem", borderRadius: "10px" }}>
      <h1 className="contact-heading">
          To Contact, please drop a mail
      </h1>
      <h3 className="contact-info">
        <a href={`mailto:${email}`} className="contact-link">
          {email}
        </a>
      </h3>
      <span className="contact-or">or</span>
      <h3 className="contact-info">
        <a href={`tel:${phone}`} className="contact-link">
          {phone}
        </a>
      </h3>
    </main>
  );
}

export default Contact;
