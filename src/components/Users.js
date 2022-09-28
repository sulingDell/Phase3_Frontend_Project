import React, { Component } from 'react'
import { UserDetails } from './UserDetails';
import UserForm from './UserForm';
import { addUser, deleteUser, updateUser, getUsers } from '../services/UserService';


export default class Users extends Component {

    constructor() {
        super();
        this.state = {
            users: [],
            user: { id: 0, name: '', email:'', address: '',  pincode: '', city: '' }
        }
    }

    // component lifecycle method
    componentDidMount() {
        getUsers().then((data) =>{
            // console.log(data);
            this.setState({users : data })
        }).catch((error)=>{
            console.error("Get all users is failed");
        });

        }

    handleUser =(user) =>{
        if(user.id !== undefined && user.id!=="", user.id>0) {
            this.handleUpdateUser(user);
        } else {
            this.handleAddUser(user);
        }
    }

    // handle add user
    handleAddUser = (user) => {
        addUser(user).then((newUser) =>{
            // console.log(data);
            this.setState((prevState)=>{
                return { users : [  newUser, ...prevState.users]}
            })
        }).catch((error)=>{
            console.error("Add users is failed", error);
        }); 
    }

     // handle update product
     handleUpdateUser = (user) => {
        updateUser(user).then((updatedUser) =>{
            // console.log(updatedProduct);
            this.setState((prevState)=>{
                let updatedList = prevState.users.map( prd =>{
                    if(prd.id === updatedUser.id){
                        return updatedUser;
                    }else{
                        return prd;
                    }
                })
                return { users :[...updatedList] }
            })
        }).catch((error)=>{
            console.error("Update users is failed", error);
        }); 
    }

    // handle delete product
    handleDeleteUser= (id) =>{
        deleteUser(id).then((data) =>{
            // console.log(data);
            this.setState((prevState)=>{
                const filterUser = prevState.users.filter((user)=>{
                    return user.id != id;
                })
                return { users : filterUser }
            });
        }).catch((error)=>{
            console.error("Delete users is failed", error);
        }); 
    }

    // handle update product
    handleUpdateAction = (data) =>{
        this.setState({ user : data })
    };

    renderUsers() {
        return (
            <div className="col-sm-8">
                <h2>Customer List</h2>
                {
                    this.state.users.map((user) => {
                       return (
                            <UserDetails key={user.id} user={user} onDelete={this.handleDeleteUser}
                            onUpdate={this.handleUpdateAction} />
                       );
                    })
                }

            </div>
        );
    }

    renderUserForm() {
        return (
            <UserForm user={this.state.user} categories={this.state.categories} onHandleUser={this.handleUser}/>
        )
    }

    render() {
        return (
            <div className="row">
                {this.renderUserForm()}
                {this.renderUsers()}
            </div>
        )
    }
}