import React from 'react';



const Card =({name, email, id}) =>{
	return(
		<div id="card" className="bg light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="avatar" width="200" height="200" src={require(`${id}`)}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card