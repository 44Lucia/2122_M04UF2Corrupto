//import PiesitoClass from './PiesitoClass';

import './Piesito.css';
import React from 'react';

class Piesito extends React.Component
{
	constructor(props){
		super(props);

		this.state = {
			date: new Date()
		};

		setInterval ( () => {
			this.setState ({
				date: new Date()
			});
		}, 1000);
	}
	render(){
		return (
			<footer>
				<p>Copy(c)2022 La Mamá de Piesito</p>
				<p>Actualmente son las: {this.state.date.toLocaleTimeString()}</p>
			</footer>
		);
	}
}

export default Piesito;
