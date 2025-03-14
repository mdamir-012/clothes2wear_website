import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const links = [
    {title: "Home", path: "/"},
    {title: "Product", path: "/product"},
    {title: "About", path: "/about"},
    {title: "Contact", path: "/contact"},
  ]
  return (
    <div>
      <div className='flex justify-around items-center border border-amber-400 py-2'>
        <img src={'https://www.clothes2wear.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg.cebb490c.webp&w=828&q=75'} width={250} height={100} alt="logo" />
        <div className=''>
        <ul className='flex justify-between items-center gap-2'>
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
