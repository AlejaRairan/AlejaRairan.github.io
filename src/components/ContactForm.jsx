import { useState } from "react";

const API_URL = "https://api.wtwrr.chickenkiller.com/contact";

const EMPTY_FORM = { name: "", email: "", message: "", website: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Same rules as the API, so users see errors before sending
function validate(field, value) {
  const text = value.trim();
  if (field === "name" && text.length < 2) {
    return "Please enter your name (at least 2 characters).";
  }
  if (field === "email" && !EMAIL_PATTERN.test(text)) {
    return "Please enter a valid email address.";
  }
  if (field === "message" && text.length < 10) {
    return "Please write a message (at least 10 characters).";
  }
  return "";
}

function ContactForm() {
  const [values, setValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ text: "", type: "" });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
    }
  }

  function handleBlur(evt) {
    const { name, value } = evt.target;
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    const newErrors = {
      name: validate("name", values.name),
      email: validate("email", values.email),
      message: validate("message", values.message),
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) {
      return;
    }

    setIsSending(true);
    setStatus({ text: "", type: "" });

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.status === 429) {
        throw new Error("You've sent several messages already. Please try again later.");
      }
      if (!res.ok) {
        throw new Error("Something went wrong. Please try again or email me directly.");
      }

      setValues(EMPTY_FORM);
      setErrors({});
      setStatus({ text: "Thanks for your message! I'll get back to you soon.", type: "success" });
    } catch (err) {
      const text =
        err instanceof TypeError
          ? "Couldn't reach the server. Please try again or email me directly."
          : err.message;
      setStatus({ text, type: "error" });
    } finally {
      setIsSending(false);
    }
  }

  function inputClass(field, extra = "") {
    const invalid = errors[field] ? "contact-form__input_invalid" : "";
    return `contact-form__input ${extra} ${invalid}`.trim();
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label className="contact-form__label" htmlFor="contact-name">
        Name
      </label>
      <input
        className={inputClass("name")}
        id="contact-name"
        name="name"
        type="text"
        autoComplete="name"
        maxLength={60}
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <span className="contact-form__error">{errors.name}</span>

      <label className="contact-form__label" htmlFor="contact-email">
        Email
      </label>
      <input
        className={inputClass("email")}
        id="contact-email"
        name="email"
        type="email"
        autoComplete="email"
        maxLength={254}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <span className="contact-form__error">{errors.email}</span>

      <label className="contact-form__label" htmlFor="contact-message">
        Message
      </label>
      <textarea
        className={inputClass("message", "contact-form__textarea")}
        id="contact-message"
        name="message"
        rows={6}
        maxLength={1000}
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <span className="contact-form__error">{errors.message}</span>

      {/* Hidden from people, bots fill it in */}
      <input
        className="contact-form__honeypot"
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={values.website}
        onChange={handleChange}
      />

      <button className="contact-form__button" type="submit" disabled={isSending}>
        {isSending ? "Sending..." : "Send message"}
      </button>
      <p
        className={`contact-form__status ${status.type ? `contact-form__status_type_${status.type}` : ""}`}
        role="status"
        aria-live="polite"
      >
        {status.text}
      </p>
    </form>
  );
}

export default ContactForm;
