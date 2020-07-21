//snippet : redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditUserForm from '../components/EditUserForm';
import { editUser } from '../redux/action';


//snippet : reduxmap

// const mapStateToProps = () => ({
 
// })



const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            userEdit : editUser,
       
        },
        dispatch
    )
}


const EditUserContainer = connect(
    //null must be declared here
    null,
    mapDispatchToProps
    //invoking the component below
)(EditUserForm)

//snippet : exp + tab
export default EditUserContainer;