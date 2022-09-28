import React, { Component } from 'react'

export default class UserForm extends Component {

    constructor(props) {

        super();

        this.handleFormSubmit = this.handleFormSubmit.bind(this);

        this.state = {
            user: {
                id: 0,
                name: '',
                email: '',
                address: '',
                pincode: '',
                city: ''
            }
        }
    }

     // after update in component
    componentDidUpdate(prevProps) {
        // console.log(this.props.product);
        if(this.props.user !== null && this.props.user !== prevProps.user){
            this.setState({ user : this.props.user });
        }        
    }


    // handle form submit
    handleFormSubmit(event) {
        event.preventDefault();
        // console.log("This : ", this);
        this.props.onHandleProduct(this.state.user);
        //after submit form make form empty fields
        this.setState({ user : {id: 0, name: '', email: '', address: '', pincode: '', city: ''}})
    }

    handleNameChange = (e) => {
        const user = this.state.user;
        this.setState({ user: { ...user, name: e.target.value } });
    }

    handleEmailChange = (e) => {
        const user = this.state.user;
        this.setState({ user: { ...user, email: e.target.value } });
    }


    handleAddressChange = (e) => {
        const user = this.state.user;
        this.setState({ user: { ...user, address: e.target.value } });
    }

    handleCityChange = (e) => {
        const user = this.state.user;
        this.setState({ user: { ...user, city: e.target.value } });
    }

    
    render() {
        return (
            <div className="col-sm-4">
                <h3>Create Customer Form</h3>
                <div className="card bg-light">
                    <div className="card-body">
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" name="Enter Name"
                                    placeholder="Enter Name" value={this.state.user.name} onChange={this.handleNameChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <textarea className="form-control" id="email" name="email" placeholder="Enter email"
                                    rows="3" cols="30" value={this.state.user.email}  onChange={this.handleEmailChange} ></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input type="text" className="form-control" id="address" name="address" placeholder="Enter address"
                                 value={this.state.user.address} onChange={this.handleAddressChange} />
                            </div>
                            
                            <button type="submit" className="btn btn-primary btn-block">{(this.state.user.id > 0 )?'Update' :'Save'}</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}