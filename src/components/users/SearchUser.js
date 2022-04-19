import React, { Component } from 'react'

class searchUser extends Component {
    state={
        search : ''
    }
    handelForm = (e) =>{
        this.setState({
            search :e.target.value
        })
    }
    searchUser = (e) =>{
        e.preventDefault();
        this.props.getsearchUser(this.state.search)
    }
    render() {
        return (
                <form onSubmit={this.searchUser} >
                    <div className="form-group">
                        <input onChange={this.handelForm} value={this.state.search} type="text" className="form-control" id="search" placeholder='Search User ...'/></div>
                        <button className='btn btn-warning btn-block'> Search</button>
                </form>
        )
    }
}

export default searchUser

