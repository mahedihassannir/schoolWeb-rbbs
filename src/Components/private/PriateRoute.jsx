import React, { useContext } from 'react';
import { contexM } from '../authProvider/Contex';
import { Navigate, useLocation } from 'react-router-dom';

const PriateRoute = ({ children }) => {

    let { user } = useContext(contexM)

    let Location = useLocation()




    if (user) {
        return children
    }

    return <Navigate state={{ form: Location }} to='/Login'></Navigate>

};

export default PriateRoute;