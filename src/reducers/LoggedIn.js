const loggedInReducer = (state=false, action) =>{
    switch (action.type) {
        case 'LOGGEDIN' :
            return !state;
        default:
            return state;
    }
}
export default loggedInReducer;