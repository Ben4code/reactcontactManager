import React, { Component } from 'react'

export default class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }

    onChange = (e)=>{
        return this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) =>{
        e.preventDefault();
          
    }

    render() {
        const {name, email, phone} = this.state;
        return (
            <div className="card card-primary mb-3">
                <div className="card-header bg-danger text-white">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control form-control-lg" name="name" placeholder="Enter Name..." value={name} onChange={this.onChange}/>
                        </div><hr/>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control form-control-lg" name="email" placeholder="Enter Email..." value={email} onChange={this.onChange}/>
                        </div><hr/>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" className="form-control form-control-lg" name="phone" placeholder="Enter Phone..." value={phone} onChange={this.onChange}/>
                        </div><hr/>
                        <input type="submit" value="Add Contact" className="btn btn-block btn-danger"/>
                    </form>
                </div>
            </div>
        )
    }
}
