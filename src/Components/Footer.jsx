import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-black text-gray-400 '>
            <div className='w-10/12 p-14 mx-auto grid grid-cols-1 md:grid-cols-6 gap-3'>
            <div className=' col-span-1 md:col-span-2 space-y-2'>
            <h1 className='font-bold text-white text-2xl'>DigiTools</h1>
            <p className='font-semibold'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
            </div> 
            <div>
                <h2 className='text-white  mb-3 font-extrabold'>Product</h2>
                <ul className='font-semibold'>
                <li>Features</li>
                <li>Pricing</li>
                <li>Templates</li>
                <li>Integrations</li>

                </ul>
            </div>

            <div>
                <h2 className='text-white  mb-3 font-extrabold'>Company</h2>
                <ul className='font-semibold'>
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Press</li>

                </ul>
            </div>
            <div>
                <h2 className='text-white mb-3 font-extrabold'>Resources</h2>
                <ul className='font-semibold'>
                <li>Documentation</li>
                <li>Help Center</li>
                <li>Community</li>
                <li>Contact</li>

                </ul>
            </div>
            
            <div>
                <h2>Social Links</h2>
                <div className='flex gap-2'>
                    <img src="src/assets/Instagram.png" alt="Instragam icon" />
                    <img src="src/assets/Facebook.png" alt="facebook icon" />
                    <img src="src/assets/Twitter.png" alt="twitter icon" />
                </div>
            </div>
            
            
            </div>
            <div className='w-10/12 py-3 mx-auto flex flex-col md:flex-row font-semibold border-t-2 items-center justify-between'>
                <p>© 2026 Digitools. All rights reserved.</p>
                <div className='flex gap-3 items-center'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
           
        </div>
    );
};

export default Footer;