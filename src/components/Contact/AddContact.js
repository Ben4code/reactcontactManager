import React, { Component } from 'react'
import { Consumer } from '../../context';
import TextInputGroup from '../Layout/TextInputGroup'
import uuid from 'uuid';

export default class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    onChange = (e) => {
        return this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const {name, email, phone} = this.state;

        //Check for errors
        if(name === ''){
            this.setState({errors: {name: "Name is required."}})
            return;
        }
        if(email === ''){
            this.setState({errors: {email: "Email is required."}})
            return;
        }
        if(phone === ''){
            this.setState({errors: {phone: "Phone is required."}})
            return;
        }

        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        }
        console.log(newContact); 
        dispatch({type: 'ADD_CONTACT', payload: newContact});
        //Clear fields
        this.setState({
            name : "",        
            email : '',
            phone : '',
            errors: {}
        })
        //Redirect to home
        this.props.history.push('/');
    }

    render() {
        const { name, email, phone, errors } = this.state;

        return (
            <Consumer>
                {(value) => {
                    const { dispatch } = value;
                    return (
                        <div className="card  mb-3">
                            <div className="card-header bg-success text-white">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup label="Name" name="name" placeholder="Enter Name..." value={name} onChange={this.onChange} error={errors.name}/>
                                    <hr/>
                                    <TextInputGroup label="Email" name="email" type="email" placeholder="Enter Email..." value={email} onChange={this.onChange} error={errors.email}/>
                                    <hr/>
                                    <TextInputGroup label="Phone" name="phone" type="number" placeholder="Enter Phone..." value={phone} onChange={this.onChange} error={errors.phone}/>
                                    <hr/>
                                    <input type="submit" value="Add Contact" className="btn btn-block btn-success" />
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}
