import React, { Component } from 'react';
import axios from 'axios';
import User from './User'
 class UserItems extends Component {
    state ={
       user :{}
    }
     componentWillMount(){
        const login = this.props.match.params.login;
        axios.get(`https://api.github.com/users/${login}`).then((response) => {
           this.setState({
              user: response.data,
           })

        })
     }
  render() {
     const {user } = this.state;
    return <div>
          <User user ={user}/>
           </div>;
  }
}
export default UserItems
