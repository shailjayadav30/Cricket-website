import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-200 via-white to-gray-300 p-8 sm:p-16 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 w-full max-w-3xl transform transition-transform duration-300 hover:scale-105 mt-[5rem]">
        {/* Title Section */}
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-6 text-center text-sm md:text-base">
          **Effective Date: [Insert Date]**
        </p>

        {/* Content Section */}
        <div className="space-y-6 text-left">
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to [Your Cricket Website Name]. These Terms of Service govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Eligibility</h2>
            <p className="text-gray-700 leading-relaxed">
              You must be at least 13 years old to use our services. By using our website, you represent and warrant that you meet this eligibility requirement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">User Accounts</h2>
            <p className="text-gray-700 leading-relaxed">
              To access certain features of our website, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Content</h2>
            <p className="text-gray-700 leading-relaxed">
              You are solely responsible for any content you post on our website. By posting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Prohibited Activities</h2>
            <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-1">
              <li>Posting false or misleading information</li>
              <li>Harassing or intimidating others</li>
              <li>Using automated means to access the website</li>
              <li>Violating any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to suspend or terminate your access to our website at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users or our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Disclaimer of Warranties</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website is provided on an "as-is" and "as-available" basis. We make no warranties or representations about the accuracy or completeness of the content or the availability of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall [Your Cricket Website Name] be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Changes to These Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update these Terms of Service from time to time. We will notify you of any changes by posting the new Terms on this page. You are advised to review these Terms periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising from these Terms shall be resolved in the courts of [Your Jurisdiction].
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsOfService;
