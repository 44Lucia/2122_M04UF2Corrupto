import MenuItem from './MenuItem';

function Menu ()
{
	return(
		<nav>
			<ul>
				<MenuItem text="HomePage"  url="/" />
				<MenuItem text="Curriculum" url="/cv" />
				<MenuItem text="Contact " url="/contacto" />
				<MenuItem text="Juego" url="/game" />
			</ul>
		</nav>
	);

}

export default Menu;
