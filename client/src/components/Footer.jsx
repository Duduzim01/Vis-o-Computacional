import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer>
      <ul className='footer__categries'>
        <li><Link to="posts/categories/Agriculture"> Agriculture </Link></li>
        <li><Link to="posts/categories/Busines"> Busines </Link></li>
        <li><Link to="posts/categories/Education"> Education </Link></li>
        <li><Link to="posts/categories/Entretainement"> Entretainement </Link></li>
        <li><Link to="posts/categories/Investiment"> Investiment </Link></li>
        <li><Link to="posts/categories/Uncategorized"> Uncategorized </Link></li>
        <li><Link to="posts/categories/Weather"> Weather </Link></li>
      </ul>
    </footer>
  )
}

export default Footer