import styles from "../styles/ContactUs.module.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const ContactUs = () => {
  const SubmitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target); // form ke sare input values uthayega
    const data = Object.fromEntries(formData.entries()); // object me convert

    console.log(data); // console me saara data ek object ke form me aayega
  };
  return (
    <div className={styles.wrapper}>
      <div className={` d-flex align-items-center justify-content-center`}>
        <div className={`${styles.card} p-4 p-sm-5 shadow-lg`}>
          <h2 className="text-center text-light mb-3 h3 h-sm-2">Contact Us</h2>
          <p className="text-center text-secondary mb-4 small">
            We'd love to hear from you! Whether you have questions, suggestions,
            or just want to connect, feel free to reach out.
          </p>

          <form onSubmit={SubmitHandler}>
            <div className="mb-3">
              <label htmlFor="username" className="text-white">
                Name
              </label>
              <input
                id="username"
                name="username"
                type="text"
                className={`form-control ${styles.input}`}
                placeholder="Enter Your Name : "
                required
                autoComplete="username"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="Email" className="text-white">
                Email
              </label>
              <input
                id="Email"
                name="Email"
                type="Email"
                className={`form-control ${styles.input}`}
                placeholder="Enter Your Email : "
                required
                autoComplete="fakeemail@email.com"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Textarea" className="form-label text-white">
                Message
              </label>
              <textarea
                name="Message"
                className="form-control"
                id="Textarea"
                rows="3"
                placeholder="Enter Your Message : "
              ></textarea>
            </div>

            <button type="submit" className={`btn ${styles.MessageBtn} w-100`}>
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className=" mt-3 text-center text-white">
        <h2>Contact Information</h2>
        <a href="mailto:jitandradaksh533@gmail.com" className={styles.Mail}>
          Email :{" "}
          <span className={styles.ConEmail}>jitandradaksh533@gmail.com</span>
          <br />
        </a>
        <div className="d-flex justify-content-center gap-3">
          <a
            href="https://in.linkedin.com/in/prince-daksh-a4a70a2a2"
            className={styles.ConIcon}
          >
            <FaLinkedin size={25} />
          </a>
          <a
            href="https://github.com/RudraCodeForge"
            className={styles.ConIcon}
          >
            <FaGithub size={25} />
          </a>
          <a href="https://x.com/RUDRA21446" className={styles.ConIcon}>
            <FaTwitter size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
