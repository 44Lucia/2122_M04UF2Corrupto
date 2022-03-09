import './Piesito.css';
import React from 'react';

class PiesitoClass extends React.Component
{
	constructor(props){
		super(props);
	}

	render(){
	 	return(
			<p>{this.props.text}</p>
		);
	}
}

export default PiesitoClass;
