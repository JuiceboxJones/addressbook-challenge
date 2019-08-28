import React, { Component } from 'react';
import API_Service from '../Services/ApiService'
import UserContext from '../Contexts/UserContext'

class User extends Component {
  state = { 
    loaded : false,
    users : [],
    page: 1,
    message: ''
   }
  static contextType = UserContext

  componentDidMount(){
    const cx = this.context
    API_Service.getUsers(cx.page, cx.nats)
    .then(data => this.setState({loaded:true, users: data.results}))
    .then(() => cx.setUsers(this.state.users))
    this.doStuff()
  }

  handleIdleLoad(){
    const cx = this.context
    let page = cx.page + 1;
    setInterval( page <= 20 ? 
    API_Service.getUsers(page, cx.nats)
    .then(data => cx.setUsers(data.results))
    .then(cx.setPage(page)) : 
    'No More Results', 30000)
  }

  doStuff = () => {
    const cx = this.context

    if( this.state.page <= 20 ){ 
      API_Service.getUsers(this.state.page, cx.nats)
      .then(data => cx.setUsers(data.results))
      .then(this.setState({page: this.state.page + 1}))} 
    else{ 
      return 'No More Results'}
    setInterval(this.doStuff, 2000)
    console.log(this.state.page)
    this.handleScroll()
  }

  handleScroll = () => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
        alert('at bottom');
    } else {
      this.setState({
        message:'not at bottom'
      });
    }
  }

  handleDisplayUsers = () =>{
    if(this.state.users){
    return this.state.users.map((user, index) => {
     return( 
      <li key={index}>
        <img src={user.picture.thumbnail} alt='user-thumb'/>
        <p className='user-first'>{user.name.first}</p>
        <p className='user-last'>{user.name.last}</p>
        <p className='user-usr-name'>{user.login.username}</p>
        <p className='user-mail'>{user.email}</p>
      </li>)
    })}
      return 'Loading...'
  }

  render() { 
    return ( 
      <div>
        {this.handleDisplayUsers()}
      </div>
     );
  }
}
 
export default User;