import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div>
      <h2>404 page non existante</h2>
      <p>Vérifiez la page</p>
      <Link href="/">Retounez à la page d'accueil</Link>
    </div>
  )
}

export default NotFound
