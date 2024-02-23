import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <Link href={'/'} className="btn text-lg">
            Amazon
          </Link>
          <ul className="flex gap-1">
            <li>
              <Link href={'/cart'} className="btn text-lg">
                Cart
              </Link>
            </li>
            <li>
              <Link href={'/signIn'} className="btn text-lg">
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
