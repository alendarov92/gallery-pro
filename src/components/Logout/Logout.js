import React, { useContext, useEffect } from 'react'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';

export const Logout =() => {

  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext)

 useEffect(() => {

    signOut(auth).then(() => {
      dispatch({type:"LOGOUT", payload:null})
    navigate('/')
    })
 })

  return null
};
