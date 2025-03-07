
import { motion } from "framer-motion";

const Terms = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-lg text-white/80">
              Please read these terms carefully before using our services.
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
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using MuscleMetric's website, mobile application, or any other services provided by MuscleMetric (collectively, the "Services"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our Services.
              </p>

              <h2>2. Description of Services</h2>
              <p>
                MuscleMetric provides a fitness tracking and workout planning platform that allows users to create, manage, and track their fitness activities and progress. The specific features and functionalities may change over time as we continuously improve our Services.
              </p>

              <h2>3. User Accounts</h2>
              <p>
                To access certain features of our Services, you may need to create an account. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activity that occurs under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>

              <h2>4. User Content</h2>
              <p>
                Any content you submit, post, or display on or through our Services ("User Content") is your responsibility. By providing User Content, you grant MuscleMetric a worldwide, non-exclusive, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such content in any and all media or distribution methods.
              </p>

              <h2>5. Prohibited Conduct</h2>
              <p>
                You agree not to engage in any of the following prohibited activities:
              </p>
              <ul>
                <li>Violating any applicable laws or regulations</li>
                <li>Infringing on the intellectual property rights of others</li>
                <li>Distributing malware or other harmful code</li>
                <li>Attempting to gain unauthorized access to our Services or systems</li>
                <li>Interfering with or disrupting the integrity or performance of our Services</li>
                <li>Harassing, threatening, or intimidating other users</li>
              </ul>

              <h2>6. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, MUSCLEMETRIC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OR INABILITY TO USE THE SERVICES.
              </p>

              <h2>7. Disclaimer of Warranties</h2>
              <p>
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>

              <h2>8. Health Disclaimer</h2>
              <p>
                MuscleMetric is not a medical organization and our Services are not intended to diagnose, treat, cure, or prevent any disease. Always consult with a qualified healthcare professional before starting any diet, exercise program, or taking any dietary supplement.
              </p>

              <h2>9. Changes to Terms</h2>
              <p>
                We may modify these Terms and Conditions at any time. We will notify you of any material changes by posting the new Terms and Conditions on our platform and updating the "Last Updated" date. Your continued use of our Services after such modifications will constitute your acknowledgment of the modified Terms and Conditions and your agreement to follow and be bound by the modified Terms.
              </p>

              <h2>10. Governing Law</h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.
              </p>

              <h2>11. Contact Information</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at support@musclemetric.com.
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

export default Terms;