import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './SearchBar.css'

const SearchBar = () => {
	const [cities, setCities] = useState([])
	const [automat, setAutomat] = useState([])

	const fetchData = () => {
		const auto = 'https://api.comparatrip.eu/cities/autocomplete/?q=Phttps://api.comparatrip.eu/cities/autocomplete/?q='
		const citie = 'https://api.comparatrip.eu/cities/popular/5'

		const getListCities = axios.get(citie)
		const getCitiesComplete = axios.get(auto)
		axios.all([getListCities, getCitiesComplete]).then(
			axios.spread((...allData) => {
				const allDataCities = allData

				setCities(allDataCities)
				setAutomat()
			})
		)
	}

	useEffect(() => {
		fetchData()
	}, [])

  return (
    <div className='container-input'>
			<div className='input-cities'>
				<input className='from' name={cities} placeholder='Gare ou ville' />
				<hr/>
				<input className='to' name="to" placeholder='Gare ou ville' />
			</div>
			<div className='input-days'>
				<input name="departure" placeholder='date du jour' />
				<hr/>
				<input name="arrival" placeholder='Ajouter un retour' />
			</div>
			<input name="fidelity" placeholder='1 Adulte (26-59ans)' />
			<button className='search-button' name='search'>Rechercher</button>
    </div>
  );
}

export default SearchBar
