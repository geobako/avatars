import React from 'react';
import Card from './Card';

const AvatarList= ({avatars}) =>{
	const avatarArray= avatars.map((user,i)=>{
		return <Card key={i} id={avatars[i].id} name={avatars[i].name} email={avatars[i].email}/>
	})
	return(
		<div>
			{avatarArray}
		</div>
	)
}
export default AvatarList;