import React from 'react'

const MODAL_STYLES = {
	position: 'fixed',
	top:'50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	padding: '20px',
	width: '50%',
	height: '50%',
	backgroundColor: '#FFF',
	borderRadius: '4px',
	boxSizing: 'border-box',
	zIndex: 1000
}

const BTN_STYLES = {
	margin: '5px'
}

const OVERLAY_STYLES = {
	position: 'fixed',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: 'rgba(0, 0, 0, 0.6)',
	zIndex: 1000
}

const ModalAdult = ({ open, children, onClose }) => {
	if (!open) return null

	return (
		<>
			<div style={OVERLAY_STYLES} />
			<div className style={MODAL_STYLES}>
				<button className='btn-close-modal' onClick={onClose} style={BTN_STYLES}>X</button>
				{children}
			</div>
		</>
	)
}

export default ModalAdult
