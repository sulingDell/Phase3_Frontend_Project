const APIURL = "http://localhost:4040/users";


// Get all users
export const getUsers = () => {
    // consume get all user
    return fetch(`${APIURL}`).then((response)=>{
        return response.json();
    });
}


// Get one user
export const getUser = (userId) => {
    // consume get aoncell users
    return fetch(`${APIURL}/${userId}`).then((response)=>{
        return response.json();
    });
}


// Add User
export const addUser = (user) => {
    const headers = {'Content-Type':'application/json'  };
    const body = JSON.stringify(user);
    const request = { method : 'POST', headers: headers, body: body};
     // fetch with post method to create User
     return fetch(`${APIURL}`, request).then((response)=>{
        return response.json();
    })
}

// Update User
export const updateUser = (user) => {
    const headers = {'Content-Type':'application/json'  };
    const body = JSON.stringify(user);
    const request = { method : 'PUT', headers: headers, body: body};
     // fetch with post method to create User
     return fetch(`${APIURL}`, request).then((response)=>{
        return response.json();
})
}

// Delete User
export const deleteUser = (userId) => {
    const headers = {'Content-Type':'application/json'  };
    const request = { method : 'PUT', headers: headers};
     // fetch with post method to create User
    return fetch(`${APIURL}/${userId}`, request).then((response)=>{
        return response.json();
})
}

// Get one user by code
export const searchUserByName = (name) => {
    return fetch(`${APIURL}?name=${name}`).then((response)=>{
        return response.json();
    });
}
