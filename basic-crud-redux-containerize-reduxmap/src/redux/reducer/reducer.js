import {ADD_USER, DELETE_USER, EDIT_USER} from '../action'


//snippet : rxreducer
const initialState =  [
    {
        id:1,
        name:"name1",
        username:"username1"
    },
    {
        id:2,
        name:"name2",
        username:"username2"
    },
    {
        id:3,
        name:"name3",
        username:"username3"
    },
]

//the type and payload parameter below corresponds 
//to the type and payload from the action.js                                                                           


export const UserReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case ADD_USER:
        console.log("add reducer");
        //set auto-increment id
        payload.id = state.length+1;
        console.log(payload.id);
        //payload corresponds to the user input param in action.js
        //adding the payload to existing state content
        state.push(payload)
        //return array of state with addition already
        return [...state]
   

    case DELETE_USER:
        console.log("delete reducer");
        return state.filter(user=>user.id!==payload)
       

    case EDIT_USER:
        console.log("fuck");
        return state.map(user => user.id===payload.id ? payload : user)
     

    default:
        return state
    }
}

export default UserReducer;
