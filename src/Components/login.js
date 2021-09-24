import { is } from '@babel/types';
import React , {useState } from 'react';
import '../Styles/login.css';
import axios from 'axios';


export default function LoginForm(props) {
 
    const [showMessage , setShowMessage] = useState(false);
    const [message , setMessage] = useState(" ");
    const [passwordVisible , setPasswordVisible] = useState(false);
    
    const [userName , setUserName]=useState();
    const [password , setPassword]=useState();
    var changeToRegister=()=>{
     
      props.history.push('/register');
    }
   
    var loginClicked=()=>{
      if( userName==undefined || password==undefined ){
        setShowMessage(true); 
        setMessage("Enter Fields");

      }
      else{
      axios.get('http://localhost:5000/user/'+userName).then((response)=>{
        console.log(response.data)
        if(response.data.password){
                  if(password==response.data.password){
                          sessionStorage.setItem('userName', userName);
                          sessionStorage.setItem('name',response.data.name);
                          props.history.push('/home');
                  }
                  else{   setShowMessage(true); 
                          setMessage("Wrong Password")
                  }
           }
           else{ 
                setShowMessage(true);
                setMessage("Not Registered")
           }
      }).catch(function (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          setShowMessage(true); 
          setMessage("Server is Not Responding. Please start server");
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
    
      });
    }
    }

    
    var clickOnOpenEye=()=>{
      setPasswordVisible(false);
    }
    var clickOnClosedEye=()=>{
      setPasswordVisible(true);
    }
    var getUserName=(e)=>{
      // console.log(e.target.value);
      setUserName(e.target.value);
    }
    var getPassword=(e)=>{
      setPassword(e.target.value);
    }
    
    
    return(
        <div class="modal-content">
        <div class="modal-header" >
          
               <h4><span class="glyphicon glyphicon-lock"></span> Login</h4> 


        </div>
        <div class="modal-body" >
          <form role="form">
              

            <div class="form-group">
              <label for="usrname"><span class="glyphicon glyphicon-user"></span> Username</label>
              <input type="text" class="form-control" id="usrname" onChange={getUserName}  value={userName} placeholder="Enter email"/>
            </div>
            <div class="form-group">
             { passwordVisible && <>
              <label for="psw"><span class="glyphicon glyphicon-eye-open" onClick={clickOnOpenEye}></span> Password</label>
              <input type="text" class="form-control" id="psw" value={password} onChange={getPassword} placeholder="Enter password"/>
              </>}
              { !passwordVisible && <>
              <label for="psw"><span class="glyphicon glyphicon-eye-close" onClick={clickOnClosedEye}></span> Password</label>
              <input type="password" class="form-control" id="psw" value={password} onChange={getPassword} placeholder="Enter password"/>
              </>}
            </div>
                {showMessage && <p> {message} </p>}
                 <button type="button" class="btn btn-success btn-block submitbtn" onClick={loginClicked}><span class="glyphicon glyphicon-off"></span> Login</button>
                         </form>
        </div>
        
        <div >
          <p>Not a member? <a href="#" onClick={changeToRegister}>Sign Up</a></p>
          
        </div>
      
        
      </div>
      

    )
}