import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h2>Contactez-nous</h2>
      <form action="https://formspree.io/f/xvgaojre" method="POST">
        <label>Nom</label>
        <input type="text" name="name" required />

        <label>Email</label>
        <input type="email" name="email" required />

        <label>Message</label>
        <textarea name="message" required></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
