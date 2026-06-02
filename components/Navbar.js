import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="border-yellow-200 rounded-2xl border-2 m-4 bg-white px-4 py-3">
  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

    <div className="font-bold text-2xl text-yellow-400 text-center md:text-left">
      <Link href="/">LinkShort</Link>
    </div>

    <ul className="flex flex-col md:flex-row items-center gap-4">
      <li>
        <Link className="text-yellow-400" href="/">
          Home
        </Link>
      </li>

      <li>
        <Link className="text-yellow-400" href="/about">
          About
        </Link>
      </li>

      <li>
        <Link className="text-yellow-400" href="/shorten">
          Shorten
        </Link>
      </li>

      <li>
        <Link className="text-amber-300" href="/contact">
          Contact Us
        </Link>
      </li>

      <li className="flex-row gap-3">
        <Link href="/shorten">
          <button className="bg-yellow-500 rounded-lg shadow-lg px-4 py-2 m-2 font-bold text-white">
            Try Now
          </button>
        </Link>

        <Link href="/github">
          <button className="bg-yellow-500 rounded-lg shadow-lg px-4 py-2 m-2 font-bold text-white">
            GitHub
          </button>
        </Link>
      </li>
    </ul>

  </div>
</nav>
  )
}

export default Navbar