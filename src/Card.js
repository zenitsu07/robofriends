	import React from 'react';
	
  	const Card = ({id,email,name}) => {
	
	return(
		
			<div className ="tc bg-light-green dib br4 pa3 ma4 grow bw2 shadow-5" > 
				<img src={`https://robohash.org/${id}?200x300`} alt="robot"/> 
				<h3>{name}</h3>
				<p> {email}</p>
			
			</div>

	)
}
  export default Card;
  // Once u defined different ids and name for each card u can now enter
  // const {name, email} = props;
  //Its JSX
 