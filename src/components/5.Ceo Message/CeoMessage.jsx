import "./CeoMessage.css";

const CeoMessage = () => {
  return (
    <section id="ceo-message" className="ceo-message">
      <div className="ceo-message_content">
        <h2 className="ceo-message_title">Message from the CEO</h2>
        <p className="ceo-message_text">
          Welcome to ABS Construction. We are committed to delivering excellence in every project we undertake. Our team works tirelessly to ensure that we meet and exceed our clients' expectations.
        </p>
        <p className="ceo-message_signature">
          <strong>John Doe</strong><br />
        </p>
      </div>
        <div className="ceo-message_image">
            <img src="/ceo.jpg" alt="CEO" className="ceo-image" />
        </div>          
    </section>
  );
}
export default CeoMessage;