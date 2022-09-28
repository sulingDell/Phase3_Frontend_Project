const APIURL = "http://localhost:4040/categories";

// Get all categories
export const getCategories = () => {
    // consume get all categories
    return fetch(`${APIURL}`).then((response)=>{
        return response.json();
    });
}

// Get one categories
export const getCategory = (categoryId) => {
    // consume get aoncell categories
    return fetch(`${APIURL}/${categoryId}`).then((response)=>{
        return response.json();
    });
}

// Add Category
export const addCategory = (category) => {
    const headers = {'Content-Type':'application/json'  };
    const body = JSON.stringify(category);
    const request = { method : 'POST', headers: headers, body: body};
     // fetch with post method to create Category
    return fetch(`${APIURL}`, request).then((response)=>{
        return response.json();
    })
}

// Update Category
export const updateCategory = (category) => {
    const headers = {'Content-Type':'application/json'  };
    const body = JSON.stringify(category);
    const request = { method : 'PUT', headers: headers, body: body};
     // fetch with post method to create Category
    return fetch(`${APIURL}`, request).then((response)=>{
        return response.json();
    })
}

// Delete Category
export const deleteCategory = (categoryId) => {
    const headers = {'Content-Type':'application/json'  };
    const request = { method : 'PUT', headers: headers};
     // fetch with post method to create Category
    return fetch(`${APIURL}/${categoryId}`, request).then((response)=>{
        return response.json();
    })
}

// Get one categories by code
export const searchCategoryByCode = (code) => {
    return fetch(`${APIURL}?code=${code}`).then((response)=>{
        return response.json();
    });
}