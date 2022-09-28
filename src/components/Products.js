import React, { Component } from 'react'
import { ProductDetails } from './ProductDetails';
import ProductForm from './ProductForm';
import { getProducts, addProduct, deleteProduct, updateProduct } from '../services/ProductService';
import { getCategories } from '../services/CategoriesService';


export default class Products extends Component {

    constructor() {
        super();
        this.state = {
            categories: [],
            products: [],
            product: { id: 0, title: '', brand:'', body: '',  price: '', category: '' }
        }
    }

    // component lifecycle method
    componentDidMount() {
        getProducts().then((data) =>{
            // console.log(data);
            this.setState({products : data })
        }).catch((error)=>{
            console.error("Get all products is failed");
        });

        getCategories().then((data) =>{
            // console.log(data);
            this.setState({categories : data })
        }).catch((error)=>{
            console.error("Get all categories is failed");
        }); 
    }

    handleProduct =(product) =>{
        if(product.id != undefined && product.id!="", product.id>0) {
            this.handleUpdateProduct(product);
        } else {
            this.handleAddProduct(product);
        }
    }

    // handle add product
    handleAddProduct = (product) => {
        addProduct(product).then((newProduct) =>{
            // console.log(data);
            this.setState((prevState)=>{
                return { products : [  newProduct, ...prevState.products]}
            })
        }).catch((error)=>{
            console.error("Add products is failed", error);
        }); 
    }

     // handle update product
     handleUpdateProduct = (product) => {
        updateProduct(product).then((updatedProduct) =>{
            // console.log(updatedProduct);
            this.setState((prevState)=>{
                let updatedList = prevState.products.map( prd =>{
                    if(prd.id === updatedProduct.id){
                        return updatedProduct;
                    }else{
                        return prd;
                    }
                })
                return { products :[...updatedList] }
            })
        }).catch((error)=>{
            console.error("Update products is failed", error);
        }); 
    }

    // handle delete product
    handleDeleteProduct= (id) =>{
        deleteProduct(id).then((data) =>{
            // console.log(data);
            this.setState((prevState)=>{
                const filterProduct = prevState.products.filter((product)=>{
                    return product.id != id;
                })
                return { products : filterProduct }
            });
        }).catch((error)=>{
            console.error("Delete products is failed", error);
        }); 
    }

    // handle update product
    handleUpdateAction = (data) =>{
        this.setState({ product : data })
    };

    renderProducts() {
        return (
            <div className="col-sm-8">
                <h2>Product Lits</h2>
                {
                    this.state.products.map((product) => {
                       return (
                            <ProductDetails key={product.id} product={product} onDelete={this.handleDeleteProduct}
                            onUpdate={this.handleUpdateAction} />
                       );
                    })
                }

            </div>
        );
    }

    renderProductForm() {
        return (
            <ProductForm product={this.state.product} categories={this.state.categories} onHandleProduct={this.handleProduct}/>
        )
    }

    render() {
        return (
            <div className="row">
                {this.renderProductForm()}
                {this.renderProducts()}
            </div>
        )
    }
}