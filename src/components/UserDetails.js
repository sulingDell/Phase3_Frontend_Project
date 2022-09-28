import React from 'react'

export const UserDetails = (props) => {
    // console.log(props);
    return (
        <div className="card bg-light mb-3">
            <h5 className="card-header">{props.user.name}</h5>
            <div className="card-body">
                <p className="card-text">{props.user.email}</p>
                <p className="card-text">{props.user.address}</p>
                <p className="card-text">Address Line1: {props.user.pincode}</p>
                <p className="card-text">Address Line2: {props.user.city}</p>
            </div>
            <div className="card-footer">
                <button className="btn btn-sm btn-outline-info mr-2" type="button"
                onClick={ ()=> { props.onUpdate(props.user)} }>Update</button>

                <button className="btn btn-sm btn-outline-danger" type="button" 
                onClick={ ()=> { props.onDelete(props.user.id)}} >Delete</button>
            </div>
        </div>
    )
}