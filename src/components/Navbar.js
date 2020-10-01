import React from 'react'

import './Navbar.css'
import Logo from '../logo/logo.png'

const Navbar = () => {

	return (
		<nav id='navigation'>
			<ul>
				<img className='logo' src={Logo} alt='trainline logo'/>
				<li>FR/EUR</li>
				<li>Business</li>
				<li>Aide</li>
				<li>Achat carte ou abonnement</li>
				<li>Créer un compte</li>
				<li>Se connecter</li>
			</ul>
		</nav>
	)
}

export default Navbar
