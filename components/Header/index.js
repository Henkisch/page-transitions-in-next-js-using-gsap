import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-white z-50 absolute top-0">
      <div className="container mx-auto px-6 py-6 flex flex-col justify-between items-center lg:py-12 lg:flex-row">
        <Link href="/">
          Page transitions using Next + GSAP
        </Link>
        <nav className='mt-4'>
          <ul className="flex space-x-6 lg:space-x-12">
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
  )
}

export default Header;