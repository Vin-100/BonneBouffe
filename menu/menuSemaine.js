import Jour from './jour'

const MenuSemaine = () => {
	const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 
				'Vendredi', 'Samedi', 'Dimanche'];
	
	return(
	<>
		<h1> Menu de la semaine </h1>
		<p>au Bien mangé</p>
		
		<div className="listjour">
		{
			days.map (day=>(
				<Jour name={day} />
			))
		}
		</div>
	</>
	)	
}

export default MenuSemaine