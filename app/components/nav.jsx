import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



export default function Nav() {
  return (
    <>
    <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">
      <Image src="/img/logo.png" alt="Logo" width="40" height="40"/>
      <span className='px-2'>online marketing team</span>
    </Link>
  </div>
</nav>
      
    </>
  )
}
