import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white shadow-sm">
      <div className="w-full px-20 mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
          
            <span className="self-center text-2xl font-bold whitespace-nowrap text-pink-600">
              Glamora
            </span>
          </a>

          <ul className="flex flex-wrap gap-4 mb-10 text-gray-700">
            <li><Link href="/info/about" className="hover:text-pink-600">About</Link></li>
            <li><Link href="/info/privacy" className="hover:text-pink-600">Privacy Policy</Link></li>
            <li><Link href="/info/licensing" className="hover:text-pink-600">Licensing</Link></li>
            <li><Link href="/info/contact" className="hover:text-pink-600">Contact</Link></li>
          </ul>
        </div>

        <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-600 sm:text-center">
            © {new Date().getFullYear()} <a href="/" className="hover:text-pink-600">Glamora™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            
            {/* Facebook */}
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2c0-2 1.2-3 3-3 .9 0 1.8.1 2 .1v2h-1.1c-1.1 0-1.4.7-1.4 1.3V12h2.5l-.5 3h-2v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>

            {/* Discord */}
            <a href="#" className="text-gray-600 hover:text-indigo-600 ms-5">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 0H4C1.8 0 0 1.8 0 4v16c0 2.2 1.8 4 4 4h12l-.6-2h2.1l.5 2h2c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM8.3 15.6c-.9 0-1.6-.8-1.6-1.7s.7-1.7 1.6-1.7c.9 0 1.6.8 1.6 1.7s-.7 1.7-1.6 1.7zm7.4 0c-.9 0-1.6-.8-1.6-1.7s.7-1.7 1.6-1.7 1.6.8 1.6 1.7-.7 1.7-1.6 1.7z" />
              </svg>
            </a>

            {/* Twitter */}
            <a href="#" className="text-gray-600 hover:text-sky-500 ms-5">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.6a9.8 9.8 0 0 1-2.8.8 4.9 4.9 0 0 0 2.1-2.7 9.7 9.7 0 0 1-3.1 1.2A4.8 4.8 0 0 0 12 9.7a13.7 13.7 0 0 1-10-5A4.8 4.8 0 0 0 3 11a4.8 4.8 0 0 1-2.2-.6v.1a4.9 4.9 0 0 0 3.9 4.7 4.8 4.8 0 0 1-2.2.1 4.9 4.9 0 0 0 4.6 3.4A9.7 9.7 0 0 1 0 19.6a13.6 13.6 0 0 0 7.4 2.2c8.9 0 13.8-7.5 13.8-14v-.6A9.7 9.7 0 0 0 24 4.6z" />
              </svg>
            </a>

            {/* GitHub */}
            <a href="#" className="text-gray-600 hover:text-black ms-5">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.1-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 2.6 1.7 4.3 1.2.1-.7.4-1.2.8-1.5-2.6-.3-5.3-1.3-5.3-6a4.7 4.7 0 0 1 1.3-3.2c-.1-.3-.6-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.2-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1a4.7 4.7 0 0 1 1.3 3.2c0 4.7-2.7 5.7-5.3 6 .4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0 0 12 0z" />
              </svg>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
