// (1). Import React/Components
import React, {Component} from'react'; 
import axios from 'axios';

// (2). Create and export the Context constant.
const Context = React.createContext();


const reducer = (state, action)=>{
    switch(action.type){
        case 'DELETE_CONTACT':
        return {
            ...state,
            
            contacts: state.contacts.filter((contact)=>{
                return contact.id !== action.payload
            }),
        }
        
        case "ADD_CONTACT":
        return{
            ...state,
            contacts: [action.payload, ...state.contacts]
        }; 

        default: 
            return state;
    }
};

// (3). Setup state and Context.Provider
export class Provider extends Component{

    state = {

        contacts : [],

        dispatch: (action)=>{
            return this.setState( (state)=>{
              return reducer(state, action)
            })
        }
     }
     
     componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => this.setState({contacts: response.data}))
     }

     render(){
         return (
             <Context.Provider value={this.state}>
                {this.props.children}
             </Context.Provider>
         )
     }

}

// (4). Setup Context.Consumer
export const Consumer = Context.Consumer;

