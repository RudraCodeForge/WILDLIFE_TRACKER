import styles from "../styles/TermsAndPrivercy.module.css";
const PrivacyPolicy = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Privacy Policy</h1>

      <p>
        This Privacy Policy explains how the Wildlife Tracker Project Team
        ("we", "our", "us") collects, uses, discloses, and safeguards your
        information when you ("User") access or use the Wildlife Tracker
        application ("App", "Service"). By using this App, you agree to the
        practices described in this policy.
      </p>

      <h3>1. Information We Collect</h3>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>
          <strong>Wildlife Data:</strong> GPS coordinates, movement patterns,
          species type, health data, and conservation-related information.
        </li>
        <li>
          <strong>User Information:</strong> Name, email address, organization,
          device information, and usage activity within the App.
        </li>
        <li>
          <strong>Technical Data:</strong> IP address, browser type, operating
          system, and other analytical information for improving the Service.
        </li>
      </ul>

      <h3>2. Use of Information</h3>
      <p>We use the collected information for the following purposes:</p>
      <ul>
        <li>Monitoring and conserving wildlife populations.</li>
        <li>Generating reports, analytics, and research insights.</li>
        <li>Improving the functionality and security of the App.</li>
        <li>
          Communicating with users regarding updates, changes, or conservation
          alerts.
        </li>
      </ul>

      <h3>3. Data Sharing and Disclosure</h3>
      <p>
        We do not sell or trade your personal information. However, data may be
        shared in the following cases:
      </p>
      <ul>
        <li>
          With authorized conservation authorities, NGOs, and research
          institutions for legitimate conservation purposes.
        </li>
        <li>
          With trusted third-party service providers (e.g., cloud hosting,
          mapping APIs) strictly to support the App’s functionality.
        </li>
        <li>
          When required by law, regulation, or legal process to protect rights,
          safety, or property.
        </li>
      </ul>

      <h3>4. Data Security</h3>
      <p>
        We implement reasonable technical and organizational measures to protect
        data against unauthorized access, loss, or misuse. However, no system is
        completely secure, and we cannot guarantee absolute security of data
        transmitted via the internet.
      </p>

      <h3>5. Data Retention</h3>
      <p>
        Data collected will be retained only as long as necessary for the
        purposes outlined in this Privacy Policy or as required by applicable
        law. Wildlife data may be anonymized and retained for research purposes.
      </p>

      <h3>6. User Rights</h3>
      <p>
        Users have the right to:
      </p>
      <ul>
        <li>Access the personal data we hold about them.</li>
        <li>Request corrections to inaccurate or incomplete information.</li>
        <li>Request deletion of their personal data, subject to legal obligations.</li>
        <li>Withdraw consent where applicable.</li>
      </ul>

      <h3>7. Third-Party Services</h3>
      <p>
        Our App may integrate services such as Google Maps, GPS devices, and
        cloud hosting. These third parties have their own privacy practices, and
        we are not responsible for their policies or actions.
      </p>

      <h3>8. Changes to This Policy</h3>
      <p>
        We reserve the right to update or revise this Privacy Policy at any
        time. Users will be notified of changes via the App or by email. Continued
        use of the App after modifications constitutes acceptance of the updated
        policy.
      </p>

      <h3>9. Contact Us</h3>
      <p>
        For questions, concerns, or requests related to this Privacy Policy,
        please contact us at:
      </p>
      <p>
        <strong>Email:</strong> wildlifetracker.support@example.com <br />
        <strong>Phone:</strong> +91-XXXXXXXXXX
      </p>
    </div>
  );
};

export default PrivacyPolicy;