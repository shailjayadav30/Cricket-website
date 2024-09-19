import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import sponser1 from "../images/logo.png"
import sponser2 from "../images/cricketbg2.jpg"
const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-8">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    <div>
      <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
      <ul className="space-y-2">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="#tournaments" className="hover:underline">Tournaments</a></li>
        <li><a href="/history" className="hover:underline">Live Scores</a></li>
        <li><a href="/contact" className="hover:underline">Contact Us</a></li>
      </ul>
    </div>
    
    <div>
      <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
      <form className="mb-4">
        <label htmlFor="email" className="block text-sm">Subscribe to our newsletter</label>
        <input type="email" id="email" className="p-2 mt-2 text-black border rounded w-full" placeholder="Enter your email"/>
        <button type="submit" className="mt-2 p-2 bg-[#1b9aaa] text-white rounded w-full">Subscribe</button>
      </form>
      <div className="flex space-x-4">
        <a href="https://facebook.com" className="hover:text-[#1b9aaa]"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="https://twitter.com" className="hover:text-[#1b9aaa]"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://instagram.com" className="hover:text-[#1b9aaa]"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
    </div>

    <div>
      <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
      <p>Email: <a href="mailto:info@cricketwebsite.com" className="hover:underline">info@cricketwebsite.com</a></p>
      <p>Phone: <a href="tel:+1234567890" className="hover:underline">+123-456-7890</a></p>
      <h4 className="text-lg font-semibold mt-6 mb-4">Our Sponsors</h4>
      <div className="flex space-x-4">
        <img src={sponser1} alt="Sponsor 1" className=" rounded-full h-10"/>
        <img src={sponser2} alt="Sponsor 2" className="h-10 w-10 rounded-full"/>
      </div>
    </div>
  </div>

  <div className="mt-8 text-center">
    <p className="text-sm">&copy; 2024 Cricket Website. All rights reserved.</p>
    <ul className="flex justify-center space-x-4 mt-2">
      <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
      <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
    </ul>
  </div>
</footer>

    </div>
  )
}

export default Footer
