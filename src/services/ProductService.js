const APIURL = "http://localhost:4040/products";

// Get all products
export const getProducts = () => {
    // consume get all products
    return fetch(`${APIURL}?_sort=id&_order=desc`).then((response)=>{
        return response.json();
    });
}

// Get one products
export const getProduct = (productId) => {
    // consume get all products
    return fetch(`${APIURL}/${productId}`).then((response)=>{
        return response.json();
    });
}

// Add product
export const addProduct = (product) => {
    const headers = {'Content-Type':'application/json'  };
    const body = JSON.stringify(product);
    const request = { method : 'POST', headers: headers, body: body};
     // fetch with post method to create product
    return fetch(`${APIURL}`, request).then((response)=>{
        return response.json();
    })
}

// Update product
export const updateProduct = (product) => {
    const headers = {'Content-Type':'application/json'  };
    const body = JSON.stringify(product);
    const request = { method : 'PUT', headers: headers, body: body};
     // fetch with post method to create product
    return fetch(`${APIURL}/${product.id}`, request).then((response)=>{
        return response.json();
    })
}

// Delete product
export const deleteProduct = (productId) => {
    const headers = {'Content-Type':'application/json'  };
    const request = { method : 'DELETE', headers: headers};
     // fetch with post method to create product
    return fetch(`${APIURL}/${productId}`, request).then((response)=>{
        return response.json();
    })
}

// Get one products by title
export const searchProductByTitle = (title) => {
    return fetch(`${APIURL}?title=${title}`).then((response)=>{
        return response.json();
    });
}