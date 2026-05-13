import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>

        {/* Heading */}
        <div className={styles.header}>
          <h1>Contact Us</h1>
          <p>Have questions or need help? We’re here for you.</p>
        </div>

        {/* Content */}
        <div className={styles.grid}>

          {/* Left Info */}
          <div className={styles.info}>
            <h2>Get in Touch</h2>
            <p>Reach out to us anytime. Our team will respond quickly.</p>

            <div className={styles.details}>
              <div className={styles.item}>
                <span>📧</span>
                <p>hello@zanzee.in</p>
              </div>

              <div className={styles.item}>
                <span>📞</span>
                <p>+91 98765 43210</p>
              </div>

              <div className={styles.item}>
                <span>📍</span>
                <p>Rajasthan, India</p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className={styles.inputGroup}>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className={styles.inputGroup}>
              <label>Message</label>
              <textarea placeholder="Write your message..." rows="5" />
            </div>

            <button type="submit" className={styles.btn}>
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}