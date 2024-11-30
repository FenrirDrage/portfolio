import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contacto</h2>
      <p>Entre em contacto comigo através de:</p>
      <ul>
        <li>Email: smoreiralves@gmail.com</li>
        <div className="social-links">
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/sérgio-alves-5a016947/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/FenrirDrage"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </div>
      </ul>
    </section>
  );
}

export default Contact;
