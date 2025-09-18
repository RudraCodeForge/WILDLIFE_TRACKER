
import styles from "../styles/TermsAndPrivercy.module.css";

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.contentCard} ${styles.fadeIn}`}>
        <h1 className={styles.title}>Privacy Policy</h1>

        <div className={styles.introText}>
          This Privacy Policy explains how the Wildlife Tracker Project Team
          ("we", "our", "us") collects, uses, discloses, and safeguards your
          information when you ("User") access or use the Wildlife Tracker
          application ("App", "Service"). By using this App, you agree to the
          practices described in this policy.
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>1. Information We Collect</h3>
          <div className={styles.sectionContent}>We may collect the following types of information:</div>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.strongText}>Wildlife Data:</span> GPS coordinates, movement patterns,
              species type, health data, and conservation-related information.
            </li>
            <li className={styles.listItem}>
              <span className={styles.strongText}>User Information:</span> Name, email address, organization,
              device information, and usage activity within the App.
            </li>
            <li className={styles.listItem}>
              <span className={styles.strongText}>Technical Data:</span> IP address, browser type, operating
              system, and other analytical information for improving the Service.
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>2. Use of Information</h3>
          <div className={styles.sectionContent}>We use the collected information for the following purposes:</div>
          <ul className={styles.list}>
            <li className={styles.listItem}>Monitoring and conserving wildlife populations.</li>
            <li className={styles.listItem}>Generating reports, analytics, and research insights.</li>
            <li className={styles.listItem}>Improving the functionality and security of the App.</li>
            <li className={styles.listItem}>
              Communicating with users regarding updates, changes, or conservation
              alerts.
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>3. Data Sharing and Disclosure</h3>
          <div className={styles.sectionContent}>
            <div className={styles.highlight}>
              We do not sell or trade your personal information. However, data may be
              shared in the following cases:
            </div>
          </div>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              With authorized conservation authorities, NGOs, and research
              institutions for legitimate conservation purposes.
            </li>
            <li className={styles.listItem}>
              With trusted third-party service providers (e.g., cloud hosting,
              mapping APIs) strictly to support the App's functionality.
            </li>
            <li className={styles.listItem}>
              When required by law, regulation, or legal process to protect rights,
              safety, or property.
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>4. Data Security</h3>
          <div className={styles.sectionContent}>
            We implement reasonable technical and organizational measures to protect
            data against unauthorized access, loss, or misuse. However, no system is
            completely secure, and we cannot guarantee absolute security of data
            transmitted via the internet.
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>5. Data Retention</h3>
          <div className={styles.sectionContent}>
            Data collected will be retained only as long as necessary for the
            purposes outlined in this Privacy Policy or as required by applicable
            law. Wildlife data may be anonymized and retained for research purposes.
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>6. User Rights</h3>
          <div className={styles.sectionContent}>
            Users have the right to:
          </div>
          <ul className={styles.list}>
            <li className={styles.listItem}>Access the personal data we hold about them.</li>
            <li className={styles.listItem}>Request corrections to inaccurate or incomplete information.</li>
            <li className={styles.listItem}>Request deletion of their personal data, subject to legal obligations.</li>
            <li className={styles.listItem}>Withdraw consent where applicable.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>7. Third-Party Services</h3>
          <div className={styles.sectionContent}>
            Our App may integrate services such as Google Maps, GPS devices, and
            cloud hosting. These third parties have their own privacy practices, and
            we are not responsible for their policies or actions.
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>8. Changes to This Policy</h3>
          <div className={styles.sectionContent}>
            <div className={styles.highlight}>
              We reserve the right to update or revise this Privacy Policy at any
              time. Users will be notified of changes via the App or by email. Continued
              use of the App after modifications constitutes acceptance of the updated
              policy.
            </div>
          </div>
        </div>

        <div className={styles.contactInfo}>
          <h3 className={styles.sectionTitle}>9. Contact Us</h3>
          <div className={styles.sectionContent}>
            For questions, concerns, or requests related to this Privacy Policy,
            please contact us at:
          </div>
          <p>
            <span className={styles.strongText}>Email:</span> wildlifetracker.support@example.com <br />
            <span className={styles.strongText}>Phone:</span> +91-XXXXXXXXXX
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
