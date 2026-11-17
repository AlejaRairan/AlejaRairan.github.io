import ContactForm from "./ContactForm.jsx";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Contact me</h2>
      <div className="contact__content">
        <p className="contact__description">
          Hiring for a Full Stack or Frontend role, or want to talk about a project? Send me a
          message and I&apos;ll get back to you within 24 hours.
        </p>
        <ContactForm />
      </div>
      <div className="contact__email">
        <a href="mailto:alejandra.0219@hotmail.com">alejandra.0219@hotmail.com</a>
      </div>
    </section>
  );
}

export default Contact;
