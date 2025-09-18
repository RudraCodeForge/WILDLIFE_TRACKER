
import styles from "../styles/TermsAndPrivercy.module.css";

const TermsAndCondition = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.contentCard} ${styles.fadeIn}`}>
        <h1 className={styles.title}>Terms and Conditions</h1>

        <div className={styles.introText}>
          These Terms and Conditions ("Terms") govern the use of the Wildlife
          Tracker application ("App", "Service") operated by the Wildlife Tracker
          Project Team ("we", "our", or "us"). By accessing or using this App,
          you ("User") agree to comply with and be bound by these Terms. If you
          do not agree, please discontinue use of the App immediately.
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>1. Purpose of Service</h3>
          <div className={styles.sectionContent}>
            The App is designed for the tracking, monitoring, and conservation of
            wildlife species. It is strictly intended for educational, research, and
            conservation purposes. Users agree not to exploit the App for poaching,
            harassment of animals, or any unlawful activity.
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>2. Eligibility</h3>
          <div className={styles.sectionContent}>
            By using this App, you represent that you are at least 18 years old or
            are under the supervision of a parent/guardian or authorized
            institution. You must have the legal capacity to enter into these Terms.
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>3. Data Collection and Use</h3>
          <div className={styles.sectionContent}>
            We may collect and process data including, but not limited to:
            (a) animal location and movement, (b) species information, (c) user
            activity within the App. This data is used exclusively for conservation,
            research, and reporting. By using the App, you consent to this data
            collection and acknowledge that sensitive data such as animal location
            may be restricted from public view for security reasons.
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>4. User Responsibilities</h3>
          <div className={styles.sectionContent}>
            Users agree to:
          </div>
          <ul className={styles.list}>
            <li className={styles.listItem}>Not misuse or manipulate the App or its data.</li>
            <li className={styles.listItem}>Not distribute sensitive information that could endanger wildlife.</li>
            <li className={styles.listItem}>Ensure accuracy when submitting field data or observations.</li>
            <li className={styles.listItem}>Comply with all applicable laws, regulations, and conservation guidelines.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>5. Intellectual Property</h3>
          <div className={styles.sectionContent}>
            All content, logos, databases, maps, designs, and software associated
            with the App are the intellectual property of the Wildlife Tracker
            Project Team. Users are granted a limited, non-transferable license to
            use the App for personal, non-commercial purposes. Unauthorized copying,
            modification, or redistribution is strictly prohibited.
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>6. Limitation of Liability</h3>
          <div className={styles.sectionContent}>
            <div className={styles.highlight}>
              While we strive to maintain accurate and up-to-date information, we make
              no guarantees regarding the accuracy, reliability, or completeness of
              the App's data. The Wildlife Tracker Project Team shall not be held
              liable for any damages, losses, or consequences arising from the use or
              inability to use the App, including but not limited to technical errors,
              data inaccuracies, or third-party misuse.
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>7. Privacy and Security</h3>
          <div className={styles.sectionContent}>
            We take reasonable measures to safeguard data collected within the App.
            However, no system is fully secure. By using this App, you acknowledge
            that we cannot guarantee absolute protection against unauthorized access
            or breaches. Sensitive wildlife data may be shared only with authorized
            conservation authorities.
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>8. Third-Party Services</h3>
          <div className={styles.sectionContent}>
            The App may integrate third-party services such as GPS devices, mapping
            APIs, and cloud hosting providers. We are not responsible for the
            performance, policies, or data handling practices of such third-party
            providers.
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>9. Amendments</h3>
          <div className={styles.sectionContent}>
            We reserve the right to update or revise these Terms at any time without
            prior notice. Continued use of the App after such modifications shall
            constitute acceptance of the updated Terms.
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>10. Governing Law</h3>
          <div className={styles.sectionContent}>
            These Terms shall be governed by and construed in accordance with the
            laws of India. Any disputes arising under
            these Terms shall be subject to the exclusive jurisdiction of the courts
            located in Meerut Uttar Pradesh.
          </div>
        </div>

        <div className={styles.contactInfo}>
          <h3 className={styles.sectionTitle}>11. Contact Information</h3>
          <div className={styles.sectionContent}>
            For questions, concerns, or legal inquiries regarding these Terms,
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

export default TermsAndCondition;
