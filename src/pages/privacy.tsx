
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-16 bg-gradient-to-br from-primary to-purple-700 text-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-white/80">
              How we collect, use, and protect your information
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="lead">
                At MuscleMetric, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our fitness tracking application.
              </p>

              <h2>1. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us when using our Services, including:
              </p>
              <ul>
                <li><strong>Personal Information:</strong> Name, email address, age, gender, and other demographic information you choose to provide</li>
                <li><strong>Fitness Data:</strong> Workout histories, exercise logs, weights, repetitions, personal records, and other fitness metrics</li>
                <li><strong>Account Information:</strong> Login credentials and preference settings</li>
                <li><strong>User Content:</strong> Comments, feedback, and other content you submit</li>
              </ul>

              <p>
                We may also automatically collect certain information when you use our Services, including:
              </p>
              <ul>
                <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers</li>
                <li><strong>Usage Data:</strong> How you interact with our Services, features you use, time spent on the platform</li>
                <li><strong>Location Data:</strong> If you grant permission, we may collect location information</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Provide, maintain, and improve our Services</li>
                <li>Create and update your account</li>
                <li>Process and track your fitness progress</li>
                <li>Provide personalised recommendations and insights</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Send you technical notices, updates, security alerts, and support messages</li>
                <li>Develop new features and services</li>
                <li>Monitor and analyse trends, usage, and activities in connection with our Services</li>
              </ul>

              <h2>3. Sharing Your Information</h2>
              <p>
                We may share your information in the following circumstances:
              </p>
              <ul>
                <li><strong>With Your Consent:</strong> When you explicitly consent to the sharing</li>
                <li><strong>Service Providers:</strong> With third-party vendors who need access to your information to provide services on our behalf</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect rights, property, or safety</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition of all or a portion of our company</li>
              </ul>

              <h2>4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorised access, alteration, disclosure, or destruction. However, no internet or electronic storage system is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2>5. Your Choices</h2>
              <p>
                You can access, update, or delete your account information at any time through your account settings. You may also contact us directly to request access to, correction of, or deletion of personal information that you have provided to us.
              </p>

              <h2>6. Children's Privacy</h2>
              <p>
                Our Services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>

              <h2>7. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>

              <h2>8. Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy, please contact us at support@musclemetric.com.
              </p>

              <p className="text-muted-foreground text-sm mt-8">
                Last Updated: {new Date().toLocaleDateString()}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;