import React from 'react'
import Link from 'next/link'

export default function Nav({links}) {
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
        </nav>
    </div>
  )
}
