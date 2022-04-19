import React, { Component } from 'react';
import User from './User';
import SearchUser from './SearchUser';
import axios from 'axios';

export class Users extends Component {
    state ={
       users: []
    }
    
    // Method get Users
    getUsers = () => {
      axios.get('https://api.github.com/users').then(Response => {
        this.setState({
          users : Response.data
        }
        );
      })
    }

    componentDidMount(){
      this.getUsers();
    }
    // Method de search
    searchUserFormtGit= (data) =>
    {
      if(data !== ''){
        axios.get(`https://api.github.com/search/users?q=${data}`)
        .then(response => {
          this.setState({
            users: response.data.items
          })
        })
      }
    }
    render() {
        return ( 
          <div>
            <div className="row my-4">
              <div className="col-md-12">
               <SearchUser getsearchUser = {this.searchUserFormtGit}/>
              </div>
            </div>
            <div className='row'>
            {this.state.users.map(user => (
              <div className="col-md-4" key={user.id}>
               <User user={user}  />
              </div>
            ))}
            </div>
          </div>
        )
    }
}

export default Users