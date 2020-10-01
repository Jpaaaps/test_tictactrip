import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Form from './Form'

import './Home.css'

const Home = () => {
	
		return (
		 <div className='container-home'>
			 <Navbar />
			 <div className='title'>
				<h2>Récup' Retard</h2>
				<h4>En cas de retard, ne passez plus à côté d’une compensation : nous facilitons votre demande.<span>En savoir plus</span></h4>
			 </div>
			 <Form />
		 </div>
		)
}

export default Home
