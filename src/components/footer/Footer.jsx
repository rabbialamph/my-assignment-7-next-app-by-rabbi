import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logoimg from "../../assets/logo-xl.png";
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {

    return (
        <div>
          <footer className=" bg-green-900 text-base-content rounded p-10">
           <div className='border-b border-green-800 pb-5 footer footer-horizontal footer-center'>
            <div>
             <nav className="grid grid-flow-col gap-4">
              <Link href="/">
                <Image src={logoimg}
                   alt="Logo"
                   width={280}
                   height={280}
                   className='mb-2'
                />
              </Link>
             </nav>
             <p className='text-gray-300'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            </div>
            <nav>
             <div>
              <p className='text-white mb-2'>Social Links</p>
              <div className="grid grid-flow-col gap-4">
                <Link className='bg-white p-1 rounded-full' href="https://www.linkedin.com/in/rabbialam-webdeveloper/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </Link>
                <Link className='bg-white p-1 rounded-full' href="https://web.facebook.com/rabbialambd" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </Link>
                <Link className='bg-white p-1 rounded-full' href="https://github.com/rabbialamph" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </Link>
              </div>
             </div>
            </nav>
           </div>
          <aside className="text-gray-300 px-4 mt-5">
             <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
               <p className="text-sm">
                   Copyright © {new Date().getFullYear()} - KeenKeeper. All rights reserved.
               </p>    
              <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm">
                  <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                 <li className="hover:text-white cursor-pointer">Terms of Service</li>
                 <li className="hover:text-white cursor-pointer">Cookies</li>
              </ul>
            </div>
          </aside>
          </footer>
      </div>
    );
};

export default Footer;