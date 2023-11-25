'use client';

import { useEffect, useState } from 'react';
import { UserNav } from './UserNav';
import TeamSwitcher from './TeamSwitcher';
import { usePathname } from 'next/navigation';
import configuration from '@/lib/config/dashboard';
import { MobileNav } from '@/components/MobileNav';

interface HeaderProps {
  display_name: string;
  email: string;
  avatar_url: string;
}

const Header = ({ display_name, email, avatar_url }: HeaderProps) => {
  const [headerText, setHeaderText] = useState('');
  const pathname = usePathname().split('/');
  const { routes } = configuration;

  useEffect(() => {
    if (pathname.includes('main')) {
      setHeaderText('Dashboard');
    } else if (pathname.includes('todos')) {
      setHeaderText('Todos');
    } else if (pathname.includes('settings')) {
      setHeaderText('Settings');
    } else {
      setHeaderText('Dashboard');
    }
  }, [pathname]);

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        {/* <div className="mr-8">
          <MobileNav items={routes} />
        </div>
        <div className="max-[410px]:hidden">
          <TeamSwitcher />
        </div> */}
        <div className="container mx-14 flex flex-wrap pt-5  justify-between md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-yellow mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-2xl text-green-600">ESG.ai</span>
    </a>
    <nav className="flex flex-wrap items-center text-base justify-center gap-6">
      <a className="mr-5 text-gray-900">Home</a>
      <a className="mr-5 text-gray-900">Our solutions</a>
      <a className="mr-5 text-gray-900">Clients</a>
      <a className="mr-5 text-gray-900">About us</a>
      <a className="mr-5 text-gray-900">Contact us</a>
      
    </nav>


  </div>

        {/* <div className="hidden md:inline-block text-lg ml-3">{headerText}</div> */}

        <div className="ml-auto flex items-center space-x-4">
          <UserNav avatar_url={avatar_url} display_name={display_name} email={email} />
        </div>
      </div>
    </div>
  );
};

export default Header;
