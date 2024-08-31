import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import galley1 from '../../assets/images/gallery/footer-1.jpg'
import galley2 from '../../assets/images/gallery/footer-4.jpg'
const Footer = () => {
    return (
        <footer className="bg-teal-900 text-white py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* Links Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Links</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/about" className="text-sm hover:underline">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-sm hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* All Contacts Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">ALL CONTACTS</h2>
                    <p className="flex items-center mb-4">
                        <i className="fas fa-map-marker-alt mr-2"></i> 111 8th Ave, New York U.S.A.
                    </p>
                    <p className="flex items-center mb-4">
                        <i className="fas fa-phone-alt mr-2"></i> Office +1-202-555-0153
                    </p>
                    <p className="flex items-center mb-4">
                        <i className="fas fa-envelope mr-2"></i> shadin@tennisclub.com
                    </p>
                    <p className="flex items-center">
                        <i className="fas fa-clock mr-2"></i> 08 am – 06 pm Sunday closed
                    </p>
                </div>

                {/* Subscribe Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">SUBSCRIBE</h2>
                    <p className="text-sm mb-6">
                       keep focus on our website we regudlary offere incredbly price . Just stay tune.
                    </p>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Insert Your Email"
                            className="p-2 w-full text-gray-800 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-yellow-500 text-white px-6 py-2 ml-2"
                        >
                            SEND
                        </button>
                    </form>
                </div>

                {/* Gallery Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">GALLERY</h2>
                    <div className="grid grid-cols-3 gap-2">
                     
                        <img src={galley1} alt="Gallery 1" className="w-full h-auto" />
                        <img src={galley2} alt="Gallery 1" className="w-full h-auto" />
                        <img src={galley1} alt="Gallery 1" className="w-full h-auto" />
                        <img src={galley2} alt="Gallery 1" className="w-full h-auto" />
                        <img src={galley1} alt="Gallery 1" className="w-full h-auto" />
                        <img src={galley2} alt="Gallery 1" className="w-full h-auto" />
                        <img src={galley2} alt="Gallery 1" className="w-full h-auto" />
                        <img src={galley1} alt="Gallery 1" className="w-full h-auto" />
                        <img src={galley1} alt="Gallery 1" className="w-full h-auto" />
                    </div>
                </div>
            </div>

            <div className="border-t border-teal-800 mt-10 pt-6">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p className="mb-4 md:mb-0">© Made by Nazmul Hasan Shadin</p>
                    <div className="flex space-x-4">
                        <a href="mailto:info@atptheme.com">info@atptheme.com</a>
                        <a href="mailto:courses@atptheme.com">sprots@atptheme.com</a>
                        <a href="mailto:book@atptheme.com">book@atptheme.com</a>
                    </div>
                </div>
            </div>

            {/* Social Media Section */}
            <div className="bg-teal-800 py-6">
                <div className="container mx-auto px-4 flex justify-center space-x-4">
                    <a href="https://www.facebook.com" aria-label="Facebook" className="text-white hover:text-yellow-500">
                        <FaFacebookF className="text-xl" />
                    </a>
                    <a href="https://twitter.com" aria-label="Twitter" className="text-white hover:text-yellow-500">
                        <FaTwitter className="text-xl" />
                    </a>
                    <a href="https://www.youtube.com" aria-label="YouTube" className="text-white hover:text-yellow-500">
                        <FaYoutube className="text-xl" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
