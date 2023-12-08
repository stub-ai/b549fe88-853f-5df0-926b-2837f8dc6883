import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-blue-500 text-white">
      <Link href="/">
        <a className="text-2xl font-bold">Audio Call Booking</a>
      </Link>
      <nav>
        <Link href="/profile">
          <a className="mr-6">Profile</a>
        </Link>
        <Link href="/bookings">
          <a className="mr-6">Bookings</a>
        </Link>
        <Link href="/book">
          <a>Book a Call</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;