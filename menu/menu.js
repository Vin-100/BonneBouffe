import React from 'react'
import Jour from './jour'

const Menu = (props) => {
	const title = props.title
	const startCount = props.startCount
	
	return(
	<>
		<h1>Menu</h1>
		<ul>
				<Jour title="Lundi" />
				<Jour title="Mardi" />
				<Jour title="Mercredi" />
				<Jour title="Jeudi" />
				<Jour title="vendredi" />
				<Jour title="samedi" />
				<Jour title="Dimanche" />
		</ul>
	</>
)}

export default Menu