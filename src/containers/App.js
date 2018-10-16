import React, {Component} from 'react';
import AvatarList from '../components/AvatarList';
import {avatars} from '../components/avatars';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'


class App extends Component {
	constructor(){
		super()
		this.state={
			avatars:[],
			searchfield:""
		}
	}

	componentDidMount(){
		// fetch('https://jsonplaceholder.typicode.com/users')
		// .then(response=>response.json())
		// .then(users=>this.setState({avatars:users}));
		this.setState({avatars:avatars});
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
		
	}

	render(){
		const filterAvatars=this.state.avatars.filter(avatar=>{
			return avatar.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		return(
		<div  className="tc">
			<h1 className="f1">AVATAR FRIENDS</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<AvatarList avatars={filterAvatars}/>
			</Scroll>
		</div>
);
	}
	
}

export default App