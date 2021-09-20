import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'
import { GoThreeBars } from 'react-icons/go'
import logo from '../../assets/logo.png'

export default function Header(){
	return (
		<header>
			<div className="header-logo">
				<Link to='/'><img src={logo} alt='logo pepsi'/></Link>
			</div>
			<div className='header-links'>
				<ul className="header-links-items">
					<li><Link to="/products">PRODUCTS</Link></li>
					<li><Link to="/news">WHAT'S NEW</Link></li>
					<li><Link to="/newsletter">NEWSLETTER</Link></li>
					<li><Link to="/contact">CONTACT US</Link></li>
				</ul>
			</div>
			<div className="header-button">
				<button>BUY PEPSI PRODUCTS</button>
			</div>
			<div className="header-toggle">
				<GoThreeBars  className="header-toggle-a"  />
			</div>
		</header>
	)
}