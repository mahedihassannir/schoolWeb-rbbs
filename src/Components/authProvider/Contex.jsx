import React, { createContext, useEffect, useState } from 'react';


import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from './firebase.config';

let auth = getAuth(app)


export let contexM = createContext(null)



const Contex = ({ children }) => {


    let Gprovider = new GoogleAuthProvider()



    let handleLoginWG = () => {
        return signInWithPopup(Gprovider)
    }


    let loginUserWithEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }



    // here is creating the user

    let HandlecreateUserWithEmailAndPassword = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)

    }


    let [user, SetUser] = useState(null)



    // here is obserbing user starts

    useEffect(() => {

        let off = onAuthStateChanged(auth, observer => {
            console.log(observer);
            SetUser(observer)
        })
        return (() => {
            off()
        })


    })

    // here is obserbing user ends


    // here is logOutSustem 

    let handleLogout = () => {
        return signOut(auth)
    }


    // here is logOutSustem ends



    let userInfo = {
        handleLoginWG,
        loginUserWithEmailPass,
        HandlecreateUserWithEmailAndPassword,
        user,
        handleLogout
    }





    return <contexM.Provider value={userInfo} >
        {children}
    </contexM.Provider>






};

export default Contex;