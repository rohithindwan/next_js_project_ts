'use client'

import Link from 'next/link'
import './login.css'
import { usePathname } from "next/navigation"
export default function LoginLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const router = usePathname()
  console.log(router)

  return (
    <section>
      {
        router !== "/login/collegelogin" ?
        <ul className='login-menu'>
          <li> <Link href="/">Home</Link></li>
          <li> <Link href="/login">Login Page</Link></li>
          <li> <Link href="/login/studentlogin">Student Login</Link></li>
          <li> <Link href="/login/collegelogin">College Login</Link></li>
        </ul> :
        <ul className='login-menu'>
          <li> <Link href="/login">Login Page</Link></li>
        </ul>
      }


      {children}
    </section>
  )
}