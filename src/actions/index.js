export const increament = (value) =>{
    return {
        type : 'INCREMENT',
        payload : value
    }
}

export const decrement = (value) =>{
    return {
        type : 'DECREMENT',
        payload : value
    }
}


export const loadProducts = () =>{
    return {
        type : 'LOAD_PRODUCTS'
    }
}

export const loadProfile = () =>{
    return {
        type : 'LOAD_PROFILE'
    }
}

export const isLoggedIn = () =>{
    return {
        type : 'LOGGEDIN'
    }
}
export const loadUsers = () =>{
    return {
        type : 'LOAD_USERS'
    }
}