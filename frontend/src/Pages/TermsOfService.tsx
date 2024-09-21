
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-300 p-[6rem]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 w-full max-w-2xl transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-3xl font-bold text-blue-800 mb-4 text-center">
          Terms of Service
        </h1>
        <p className="text-gray-700 mb-4 text-center">
          **Effective Date: [Insert Date]**
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Introduction</h2>
        <p className="text-gray-700 mb-4">
          Welcome to [Your Cricket Website Name]. These Terms of Service govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Eligibility</h2>
        <p className="text-gray-700 mb-4">
          You must be at least 13 years old to use our services. By using our website, you represent and warrant that you meet this eligibility requirement.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mb-2">User Accounts</h2>
        <p className="text-gray-700 mb-4">
          To access certain features of our website, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Content</h2>
        <p className="text-gray-700 mb-4">
          You are solely responsible for any content you post on our website. By posting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such content.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Prohibited Activities</h2>
        <p className="text-gray-700 mb-4">
          You agree not to engage in any of the following prohibited activities:
          <ul className="list-disc list-inside mb-4">
            <li>Posting false or misleading information</li>
            <li>Harassing or intimidating others</li>
            <li>Using automated means to access the website</li>
            <li>Violating any applicable laws or regulations</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Termination</h2>
        <p className="text-gray-700 mb-4">
          We reserve the right to suspend or terminate your access to our website at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users or our website.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Disclaimer of Warranties</h2>
        <p className="text-gray-700 mb-4">
          Our website is provided on an "as-is" and "as-available" basis. We make no warranties or representations about the accuracy or completeness of the content or the availability of our services.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          In no event shall [Your Cricket Website Name] be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our website or services.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Changes to These Terms</h2>
        <p className="text-gray-700 mb-4">
          We may update these Terms of Service from time to time. We will notify you of any changes by posting the new Terms on this page. You are advised to review these Terms periodically for any changes.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Governing Law</h2>
        <p className="text-gray-700 mb-4">
          These Terms shall be governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising from these Terms shall be resolved in the courts of [Your Jurisdiction].
        </p>
      </div>
    </motion.div>
  );
};

export default TermsOfService;
