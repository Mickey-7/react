import { ADD_USER,DELETE_USER, EDIT_USER } from "../action"

const initialState = [
    {id:1,name:"name1",username:"username1"},
    {id:2,name:"name2",username:"username2"},
    {id:3,name:"name3",username:"username3"},
]



export const UserReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case ADD_USER:
        console.log("add reducer");
        window.alert("Do you want to add user?");
        payload.id = state.length+1;
        return [...state,payload]
      
        
    case DELETE_USER:
        window.alert("Do you want to delete user?");
        return state.filter(user=>user.id!==payload);

    case EDIT_USER:
        window.alert("Do you want to edit user?")
        return state.map(user => user.id===payload.id ? payload: user)

    default:
        return state
    }
}


export default UserReducer