import "./Contact.css";
const Contact = () => {
  return (
    <section className="contact">
      <div className="contact_content">
        <h2 className="contact_title">Contact Us</h2>
        <p className="contact_description">
          We would love to hear from you! Please fill out the form below or reach us at our contact details.
        </p>
        <form className="contact_form">
          <input type="text" placeholder="Your Name" required className="contact_input" />
          <input type="email" placeholder="Your Email" required className="contact_input" />
          <textarea placeholder="Your Message" required className="contact_textarea"></textarea>
          <button type="submit" className="contact_button">Send Message</button>
        </form>
      </div>
    </section>
  );
};
export default Contact;