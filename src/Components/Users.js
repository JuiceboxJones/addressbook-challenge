import React, { Component } from 'react';
import API_Service from '../Services/ApiService'
import UserContext from '../Contexts/UserContext'

class User extends Component {
  state = { 
    loaded : false
   }
  static contextType = UserContext

  componentDidMount(){
    API_Service.getUsers(1, this.context.nats)
    .then(data => this.context.setUsers(data.results))
    .then(this.setState({loaded:true}))
  }

  //handle users in a child component so the context will be loaded and ready to use by the child

  handleDisplayUsers(){
    if(this.context.users){
    return this.context.users.map((user, index) => {
     return( 
      <li key={index}>
        <img src={user.picture.thumbnail} alt='user-thumb'/>
        <p className='user-first'>{user.name.first}</p>
        <p className='user-last'>{user.name.last}</p>
        <p className='user-usr-name'>{user.login.username}</p>
        <p className='user-mail'>{user.email}</p>
      </li>)
    })} else{
      return 'Loading...'
    }
  }

  render() { 
    console.log(this.context)
    return ( 
      <div>
        {this.handleDisplayUsers()}
      </div>
     );
  }
}
 
export default User;