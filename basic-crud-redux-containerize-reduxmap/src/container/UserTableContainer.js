//snippet : redux
import { connect } from 'react-redux';
import UsersTableForm from '../components/UsersTableForm';
import { bindActionCreators } from 'redux';
import { deleteUser } from '../redux/action';


//snippet : reduxmap
const mapStateToProps = (state) => {
    return {
        //dont for get to include that it goes thru rootReducer (index.js)
        //so .userReducer is needed, otherwise error below will occur
        //  TypeError: props.userList.map is not a function   
        //this took many fucking hours!!!!!!!!!!!!!!
        userList : state.userReducer
    }
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            userDelete : deleteUser,
        },
        //this is important!!!!!!!
        //also take note of the place 
        //where it was put!!!!!!!
        dispatch
    )
}


const UserContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersTableForm);


export default UserContainer;






