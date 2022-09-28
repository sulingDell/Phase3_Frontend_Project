import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increament, decrement, isLoggedIn } from '../actions';

export const Likes = () => {
    const likeCount = useSelector(state => state.likeCounter);
    const loggedIn = useSelector(state=> state.isLoggedIn);
    const dispatch = useDispatch();
    return (
        <div className="container text-center">
            <h1 className="text-center">The Total Like Count : {likeCount} </h1>
            <button onClick={ ()=> dispatch(increament())} className="btn btn-info m-3" > Like </button>
            <button onClick={ ()=> dispatch(decrement())} className="btn btn-danger m-3" > Dislike </button>
            <br></br>
            <br></br>
            <h1>The  user {loggedIn ? "LoggedIn" : "Not loggedIn"}</h1>
            <button onClick={ ()=> dispatch(isLoggedIn())} className="btn btn-primary">{loggedIn ? 'Logout' : 'LogIn'}</button>
        </div>
    )
}