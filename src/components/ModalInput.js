import React from 'react'

const MODAL_STYLES = {
	position: 'fixed',
	top:'52%',
	left: '70%',
	transform: 'translate(-50%, -50%)',
	padding: '20px',
	width: '60%',
	height: '60%',
	backgroundColor: '#FFF',
	borderRadius: '4px',
	boxSizing: 'border-box',
	zIndex: 1000,
	boxShadow: '8px 8px 14px rgb(172, 172, 172)'
}

const LIST_STYLES = {
	display: 'flex',
	flexDirection: 'column',
	marginLeft: '1em',
	width:'100%'
}

const LIST_STYLES2 = {
	listStyleType: 'none',
	padding: '10px',
	border: '0.2px solid black',
	marginBottom: '2px'
}

const OVERLAY_STYLES = {
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	zIndex: 1000
}

const ModalInput = ({ open, onClose, listCities}) => {
	if (!open) return null

	return (
		<>
			<div style={OVERLAY_STYLES} />
			<div className style={MODAL_STYLES}>
				<button className='btn-close-modal' onClick={onClose}>X</button>
				<h4>POPULAIRES</h4>
				<div className='modalList'>
					<ul style={LIST_STYLES}>
						<li style={LIST_STYLES2} role='option' aria-selected='false'>{listCities[0]}</li>
						<li style={LIST_STYLES2}>{listCities[1]}</li>
						<li style={LIST_STYLES2}>{listCities[2]}</li>
						<li style={LIST_STYLES2}>{listCities[3]}</li>
						<li style={LIST_STYLES2}>{listCities[4]}</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default ModalInput
