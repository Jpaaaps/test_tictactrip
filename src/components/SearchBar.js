import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Select from 'react-select'

import './SearchBar.css'
import DateTime from './DateTime'
import ModalAdult from './ModalAdult'
import ModalInput from './ModalInput'

const SearchBar = () => {
	const [cities, setCities] = useState([])
	const [automat, setAutomat] = useState('')
	const [isOpen, setIsOpen] = useState(false)
	const [isShowing, setIsShowing] = useState(false)

	const inputQuery = 'https://api.comparatrip.eu/cities/autocomplete/?q='
	const topFiveCities = 'https://api.comparatrip.eu/cities/popular/5'

	const fetchData = () => {

		const getListCities = axios.get(topFiveCities)
		getListCities.then((res) => {

			const array = res.data
			var i = 0
			let cityList = []
			for (i = 0; i < array.length; i++)
				cityList.push(array[i].unique_name)
				
			setCities(cityList)
		}
		)
	}

	const handleInput = (e) => {
		let value = e.target.value;
		if (value.length >= 2) {
			
		let query = inputQuery + value
			const getCitiesComplete = axios.get(query)

			getCitiesComplete.then((res) => {
			console.log(res.data)
				 setAutomat()
			}
			)
		}
	}
	
	const handleClick = () => {
		setIsShowing(true)
	}


	useEffect(() => {
		fetchData()
	}, [])

	const options = [
		{ value: 'Jeune (0-25ans)', label: 'Jeune (0-25ans)' },
  	{ value: 'Adulte (26-59ans)', label: 'Adulte (26-59ans)' },
  	{ value: 'Sénior (60+)', label: 'Sénior (60+)' }
	]

  return (

    <div className='container-input'>
			<div className='input-cities'>
				<div className='train-from'>
					<label>Départ</label>
					<input className='input-from' name="from" placeholder='Gare ou ville' onClick={()=> handleClick()} onChange={(e)=> handleInput(e)} />
					<ModalInput className='modal-input' open={isShowing} onClose={() => setIsShowing(false)} listCities={cities}/>
				</div>

				<hr/>

				<div className='train-to'>
					<label>Arrivée</label>
					<input className='input-to' name="to" placeholder='Gare ou ville' onClick={()=> handleClick()} onChange={(e)=> handleInput(e)} />
					<ModalInput className='modal-input' open={isShowing} onClose={() => setIsShowing(false)} listCities={cities}/>
				</div>
			</div>

			<div className='input-days'>
				<DateTime />
				<input name="arrival" placeholder='Ajouter un retour' />
			</div>
			<button className='btn-modal-adult' onClick={() => setIsOpen(true)}>1 Adulte (26-59ans)</button>
			<ModalAdult className='modal-adult' open={isOpen} onClose={() => setIsOpen(false)}>
				<Select options={options} />
				<p>Ajouter un autre passager</p>
				<div className='modal-choice'>
					<button className='btn-modal-choice'>Jeune<span className='span-modal-choice'>(0-25ans)</span></button>
					<button className='btn-modal-choice'>Adulte<span className='span-modal-choice'>(26-59ans)</span></button>
					<button className='btn-modal-choice'>Sénior<span className='span-modal-choice'>(60+)</span></button>
				</div>
			</ModalAdult>
			<button className='search-button' name='search'>Rechercher</button>
    </div>
  );
}

export default SearchBar
