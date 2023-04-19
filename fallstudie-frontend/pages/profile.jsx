import { useRedirectToLogin } from '@lib/session'
import React from 'react'

export default function ProjilePage({ session }) {
    useRedirectToLogin(session)
    
  return (
    <div>
        <pre>{JSON.stringify(session, null, 4)}</pre>
    </div>
  )
}
