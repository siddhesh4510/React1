import React from 'react';
import { is } from '@babel/types';
import { useHistory } from 'react-router-dom';



export default function Navbar(props) {
    var userName=sessionStorage.getItem('name');
    const history = useHistory();
    var logOut=()=>{
      sessionStorage.removeItem('userName');
      sessionStorage.removeItem('name');
    
      history.push('/');


    }

    return (
        <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">TechArticles</a>
    </div>
   
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span> {userName}</a></li>
      <li><a href="#" onClick={logOut}><span class="glyphicon glyphicon-log-out"></span> LogOut</a></li>
    </ul>
  </div>
</nav>
    )
}
