import React, { Component } from 'react'
import { Consumer } from '../../context';
import TextInputGroup from '../Layout/TextInputGroup'
import axios from 'axios'


export default class EditContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    componentDidMount(){
        //Destruct id from the props.
        const {id} = this.props.match.params;
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=> this.setState({
                            name: res.data.name,
                            email: res.data.email,
                            phone: res.data.phone
                        }))
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

        //Get values from state
        const updateContact = {
            name: name,
            email: email,
            phone: phone
        }

        //Get id from URL
        const {id} = this.props.match.params;

        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact)
        .then(res => dispatch({type: 'UPDATE_CONTACT', payload: res.data}));
        
        //Clear fields
        this.setState({
            name : '',        
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
                            <div className="card-header bg-success text-white">Edit Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup label="Name" name="name" placeholder="Enter Name..." value={name} onChange={this.onChange} error={errors.name}/>
                                    <hr/>
                                    <TextInputGroup label="Email" name="email" type="email" placeholder="Enter Email..." value={email} onChange={this.onChange} error={errors.email}/>
                                    <hr/>
                                    <TextInputGroup label="Phone" name="phone" type="text" placeholder="Enter Phone..." value={phone} onChange={this.onChange} error={errors.phone}/>
                                    <hr/>
                                    <input type="submit" value="Update Contact" className="btn btn-block btn-success" />
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}
