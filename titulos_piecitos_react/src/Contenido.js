import './Contenido.css'

function Contenido () {

	return(
		<div>
			<h2 className="Titulito">Que he estudiado</h2>
				<p className="Contenido">He hecho dos años de grado medio de
				informatica en el centro <b> 
				Escola Pia </b> de Mataro.</p>
			<h2 className="Titulito2">Mis aficiones</h2>
				<ul className="Contenido2">
					<li>Jugar a videojuegos</li>
					<li>Ver anime</li>
					<li>Jugar a Padel</li>
				</ul>
			<h2 className="Titulito3">Videojuegos favoritos</h2>
				<ul className="Contenido2">
					<li>Dark Souls</li>
					<li>Skyrim</li>
					<li>Rocket League</li>
					<li>Counter Strike</li>
					<li>League of Legends</li>
				</ul>
		</div>
	);
}

export default Contenido;
