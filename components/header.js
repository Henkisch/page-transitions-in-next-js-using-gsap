import React  from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-white z-50 absolute top-0">
      <div className="container mx-auto py-12 flex justify-between items-center">
        <Link href="/">
          Page transitions using Next + GSAP
        </Link>
        <nav>
          <ul className="flex space-x-12">
            <li>
              <Link href="/">
                First page
              </Link>
            </li>
            <li>
              <Link href="/second-page">
                Second page
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;