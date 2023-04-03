import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineMenu } from 'react-icons/hi';

const NavLinks = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/characters',
    label: 'Characters',
  },
  {
    path: '/quotes',
    label: 'Quotes',
  },
];

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className='bg-dark'>
      <div className='container mx-auto my-4 flex justify-between items-center'>
        <div className='flex items-center'>
          <Link href='/'>
            <Image src='/logo.png' alt='Logo' width={120} height={40} />
          </Link>
        </div>
        <div className='hidden md:block'>
          <ul className='flex'>
            {NavLinks.map((link) => (
              <li key={link.path} className='mr-6'>
                <Link href={link.path}>
                  <p className='text-success hover:text-light font-medium'>
                    {link.label}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='md:hidden'>
          <button className='mobile-menu-button' onClick={toggleMobileMenu}>
            <HiOutlineMenu className='text-light' size={30} />
          </button>
        </div>
      </div>
      <div
        className={`md:hidden mobile-menu ${
          showMobileMenu ? 'block' : 'hidden'
        }`}
      >
        <ul>
          {NavLinks.map((link) => (
            <li key={link.path} className='mb-4 px-5'>
              <Link href={link.path}>
                <p className='text-white font-medium'>{link.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
