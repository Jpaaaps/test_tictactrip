import React from 'react'
import axios from 'axios'

import './Form.css'

const Form = () => {
	
		return (
			<div className='container-form'>
				<div className='form'></div>
				<div className='form'>
					<div className='form-fidel'>
						<i class="fas fa-tag"></i>
						<p>Trouvez le meilleur prix pour votre trajet</p>
						<p>Comparez et réservez vos billets pour voyager avec SNCF, OUIGO, Eurostar et plus de 200 autres transporteurs.</p>
					</div>
					<div className='form-fidel'>
						<p>Obtenez vos points de fidélité et vos réductions</p>
						<p>Nous acceptons les cartes de réduction et abonnements SNCF et bien d'autres encore.</p>
					</div>
					<div className='form-fidel'>
						<p>Payez en toute sécurité</p>
						<p>Nous acceptons PayPal, Apple Pay, Visa, Amex et toutes les cartes bancaires internationales.</p>
					</div>
					<hr/>
					<div></div>
				</div>
			</div>
		)
}

export default Form
