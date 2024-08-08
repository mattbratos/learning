import Link from 'next/link'
import navLinks from '@/config/nav'

const Navbar = () => {
  return (
    <nav className='p-4 mb-8'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-white font-bold text-xl'>
          <Link href='/'>Nextjs Demo</Link>
        </div>
        <div className='space-x-12'>
          {navLinks.slice().map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='text-gray-300 hover:text-white'
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
