import React from 'react'
import Link from 'next/link'

export default function Nav({links, session}) {
  return (
    <div>
        <nav>
            <ul className='nav__list'>
                {
                    links.map((link, index) => {
                        return (
                            <li key={`nav-${index}`}>
                                <Link className='link' href={link.href}>
                                    <h3>
                                        {link.title}
                                    </h3>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            {
                (session.ready && !session.user) ? (
                    <div className='auth'>
                        <Link className='link' href='/login'>
                            <h3>
                                Login
                            </h3>
                        </Link>
                    </div>
                ) : (
                    <div className='auth'>
                        <Link className='link' href='/login' onClick={session.logout}>
                            <h3>
                                Logout
                            </h3>
                        </Link>
                        <Link className='link' href='/profile'>
                            <h3>
                                {session.user?.name}
                            </h3>
                        </Link>
                    </div>                
                )
            }
        </nav>
    </div>
  )
}
