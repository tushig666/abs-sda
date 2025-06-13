import emailjs from "@emailjs/browser";
import "./Contact.css";
import {
  FaMapMarkerAlt
} from "react-icons/fa";
import {
  FaPhoneAlt
} from "react-icons/fa";
import {
  FaEnvelope
} from "react-icons/fa";
import React, { useRef, useState } from "react";
const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_your_service_id", // Replace with your actual EmailJS service ID
        "template_your_template_id", // Replace with your actual EmailJS template ID
        form.current,
        "your_public_key" // Replace with your actual EmailJS public key
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          console.log("Success", result.text);
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
          console.log("Error", error.text);
        }
      );
  };
  return (
    <section id="contact" className="contact">
      <div className="contact_content">
        <h2 className="contact_title">Contact Us</h2>
        <p className="contact_description">
          We would love to hear from you! Please fill out the form below or reach us at our contact details.
        </p>
        <form ref={form} onSubmit={sendEmail} className="contact_form">
          <input type="text" name="user_name" placeholder="Your Name" required className="contact_input" />
          <input type="email" name="user_email" placeholder="Your Email" required className="contact_input" />
          <textarea name="message" placeholder="Your Message" required className="contact_textarea"></textarea>
          <button type="submit" className="contact_button">Send Message</button>
        </form>
        {status && <p className="contact_status">{status}</p>}
        <div className="contact_info">
          <div className="contact_info_item">
            <FaMapMarkerAlt className="contact_icon" />
            <p>123 Main Street, City, Country</p>
          </div>
          <div className="contact_info_item">
            <FaPhoneAlt className="contact_icon" />
            <p>+1 234 567 890</p>
          </div>
          <div className="contact_info_item">
            <FaEnvelope className="contact_icon" />
            <p>info@example.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;