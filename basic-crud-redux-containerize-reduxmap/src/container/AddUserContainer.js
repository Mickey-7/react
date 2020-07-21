//snippet : redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addUser} from '../redux/action'
import AddUserForm from '../components/AddUserForm';




//snippet : reduxmap
const mapDispatchToProps = dispatch => {
    console.log("add cont");
    return bindActionCreators(
        {
            userAdd : addUser
        },
        //this is important!!!!!!!
        //also take note of the place 
        //where it was put!!!!!!!
        dispatch
    )
}


const AddUserContainer = connect(
    null,
    mapDispatchToProps
)(AddUserForm);

export default AddUserContainer;





