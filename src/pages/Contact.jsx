import React from "react";

function Contact() {
  const email = "vivekreddypeddireddy@gmail.com"; // Replace with your actual email
  const phone = "+14049887941"; // Replace with your actual phone number

  return (
    <main
      style={{
        background: '#181818',
        borderRadius: '1.2rem',
        boxShadow: '0 2px 12px 0 rgba(0,0,0,0.13)',
        padding: '2.5rem 2rem 2rem 2rem',
        maxWidth: 480,
        margin: '48px auto',
        border: '2px solid #222',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#fff',
      }}
    >
      <h1 style={{
        fontFamily: 'Oswald, Segoe UI, Arial, sans-serif',
        fontWeight: 700,
        fontSize: 28,
        marginBottom: 18,
        color: '#fff',
        textAlign: 'center',
      }}>
        To Contact, please drop a mail
      </h1>
      <h3 style={{
        fontFamily: 'Oswald, Segoe UI, Arial, sans-serif',
        fontWeight: 500,
        fontSize: 18,
        marginBottom: 10,
        color: '#fff',
        textAlign: 'center',
      }}>
        <a
          href={`mailto:${email}`}
          style={{
            color: '#e74c3c',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: 1,
            transition: 'color 0.18s',
          }}
          onMouseOver={e => (e.currentTarget.style.color = '#fff')}
          onMouseOut={e => (e.currentTarget.style.color = '#e74c3c')}
        >
          {email}
        </a>
      </h3>
      <span style={{ color: '#aaa', fontSize: 15, margin: '8px 0' }}>or</span>
      <h3 style={{
        fontFamily: 'Oswald, Segoe UI, Arial, sans-serif',
        fontWeight: 500,
        fontSize: 18,
        marginBottom: 0,
        color: '#fff',
        textAlign: 'center',
      }}>
        <a
          href={`tel:${phone}`}
          style={{
            color: '#e74c3c',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: 1,
            transition: 'color 0.18s',
          }}
          onMouseOver={e => (e.currentTarget.style.color = '#fff')}
          onMouseOut={e => (e.currentTarget.style.color = '#e74c3c')}
        >
          {phone}
        </a>
      </h3>
    </main>
  );
}

export default Contact;
