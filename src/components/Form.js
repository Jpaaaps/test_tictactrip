import React from 'react'
import SearchBar from './SearchBar.js'

import appleStore from '../logo/appleStore.png'
import Card from '../logo/Card.png'
import Lock from '../logo/Lock.png'
import playStore from '../logo/playStore.png'
import Tag from '../logo/Tag.png'

import './Form.css'

const Form = () => {
	
		return (
			<div className='container-form'>
				<div className='form'>
					<SearchBar />
				</div>
				<div className='form'>
					<div className='form-fidel'>
						<img className='logo-form' src={Tag} alt='price tag'/>
						<div className='form-text'>
							<p><span id='bold'>Trouvez le meilleur prix pour votre trajet</span></p>
							<p>Comparez et réservez vos billets pour voyager avec SNCF, OUIGO, Eurostar et plus de 200 autres transporteurs.</p>
						</div>
					</div>
					<div className='form-fidel'>
						<img className='logo-form' src={Card} alt='fidelity card'/>
						<div className='form-text'>
							<p><span id='bold'>Obtenez vos points de fidélité et vos réductions</span></p>
							<p>Nous acceptons les cartes de réduction et abonnements SNCF et bien d'autres encore.</p>
						</div>
					</div>
					<div className='form-fidel'>
						<img className='logo-form' src={Lock} alt='lock'/>
						<div className='form-text'>
							<p><span id='bold'>Payez en toute sécurité</span></p>
							<p>Nous acceptons PayPal, Apple Pay, Visa, Amex et toutes les cartes bancaires internationales.</p>
						</div>
					</div>
					<hr/>
					<p>L'app leader en Europe pour voyager en train et en bus</p>
					<div className='dl'>
						<img className='logo-dl' src={appleStore} alt='logo apple store'/>
						<img className='logo-dl' src={playStore} alt='logo play store'/>
					</div>
				</div>
			</div>
		)
}

export default Form
