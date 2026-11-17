function ContactFab() {
  return (
    <a href="#contact" className="contact-fab" aria-label="Contact me">
      <svg
        className="contact-fab__icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
      <span className="contact-fab__text">Contact me</span>
    </a>
  );
}

export default ContactFab;
