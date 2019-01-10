// (1). Import React/Components
import React, {Component} from'react'; 

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
        default: 
            return state;
    }
};

// (3). Setup state and Context.Provider
export class Provider extends Component{

    state = {

        contacts : [
          {id: 1, name: 'Ben Obi', email: 'benobi@email.com', phone: '123-456-789'},
          {id: 2, name: 'Jane Doe', email: 'marydoe@email.com', phone: '098-456-789'},
          {id: 3, name: 'Terry Smith', email: 'terrysmith@email.com', phone: '123-103-789'}
        ],

        dispatch: (action)=>{
            return this.setState( (state)=>{
              return reducer(state, action)
            })
        }
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

