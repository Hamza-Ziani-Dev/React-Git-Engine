import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class User extends Component {
    render() {
        return (
            <div>
                 <div className="card">
                <img className="card-img-top" src={this.props.user.avatar_url} alt=""/>
                <div className="card-body">
                  <h4 className="card-title">{this.props.user.login}</h4>
                  <p className="card-text">
                  <Link to={'/users/'+this.props.user.login} className='btn btn-success'> Show more </Link>
                  <Link to={this.props.user.repos_url} className='btn btn-warning'>Propostries </Link>
                  </p>
                </div>
              </div>
            </div>
        )
    }
}

export default User
