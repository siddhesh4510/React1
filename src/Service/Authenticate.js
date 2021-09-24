import React from 'react'
import { BrowserRouter as Router , Route , Redirect} from 'react-router-dom';
import Home from '../Components/home'

export default function AuthenticateRoute(props){
    var user=sessionStorage.getItem('userName');
    if(user){
        return(
            <>  
            <Redirect to="/home"></Redirect>
            </>
        )
    }
    else{
        return(
            <Redirect to="/"></Redirect>
        )
    }
}