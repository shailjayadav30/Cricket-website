import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sponser1 from "../images/logo.png";
import sponser2 from "../images/cricketbg2.jpg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Quick Links Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="/" className="hover:text-[#1b9aaa]">Home</a></li>
            <li><a href="#tournaments" className="hover:text-[#1b9aaa]">Tournaments</a></li>
            <li><a href="/history" className="hover:text-[#1b9aaa]">Live Scores</a></li>
            <li><a href="/contact" className="hover:text-[#1b9aaa]">Contact Us</a></li>
          </ul>
        </div>

        {/* Stay Updated Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
          <form className="mb-4">
            <label htmlFor="email" className="block text-sm">Subscribe to our newsletter</label>
            <input
              type="email"
              id="email"
              className="p-3 mt-2 text-black border rounded w-full"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="mt-4 p-3 bg-[#1b9aaa] text-white rounded w-full hover:bg-[#147a85] transition duration-300"
            >
              Subscribe
            </button>
          </form>
          <div className="flex space-x-6">
            <a href="https://facebook.com" className="hover:text-[#1b9aaa] transition duration-300">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="https://twitter.com" className="hover:text-[#1b9aaa] transition duration-300">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://instagram.com" className="hover:text-[#1b9aaa] transition duration-300">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <p className="mb-2">Email: <a href="mailto:info@cricketwebsite.com" className="hover:underline">info@cricketwebsite.com</a></p>
          <p className="mb-6">Phone: <a href="tel:+1234567890" className="hover:underline">+123-456-7890</a></p>

          {/* Sponsor Section */}
          <h4 className="text-xl font-semibold mb-4">Our Sponsors</h4>
          <div className="flex space-x-4">
            <img src={sponser1} alt="Sponsor 1" className="h-12 w-12 rounded-full object-cover" />
            <img src={sponser2} alt="Sponsor 2" className="h-12 w-12 rounded-full object-cover" />
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-12 text-center border-t border-gray-700 pt-6">
        <p className="text-sm">&copy; 2024 Cricket Website. All rights reserved.</p>
        <ul className="flex justify-center space-x-6 mt-4">
          <li><a href="/termsofservice" className="hover:text-[#1b9aaa]">Terms of Service</a></li>
          <li><a href="/privacy" className="hover:text-[#1b9aaa]">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
