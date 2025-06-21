import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Tech</h3>
          <p className="text-sm max-w-xs">
            High‑quality tech products for everyday life. Committed to excellence and innovation.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="text-white font-medium mb-3">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/products?category=laptops" className="hover:text-white">Laptop</a></li>
            <li><a href="/products?category=smartphones" className="hover:text-white">Smart Phones</a></li>
            <li><a href="/products?category=headphones" className="hover:text-white">Headphones</a></li>
            <li><a href="/products?category=accessories" className="hover:text-white">Accessories</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-white font-medium mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">About Us</a></li>
            <li><a href="/" className="hover:text-white">Blog</a></li>
            <li><a href="/" className="hover:text-white">Contact</a></li>
            <li><a href="/" className="hover:text-white">Careers</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-white font-medium mb-3">Contact Us</h4>
          <p className="text-sm">123 Tech Street<br/>UP<br/>India</p>
          <p className="text-sm mt-2">a@gmail.com</p>
          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
