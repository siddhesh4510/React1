import React , {useState } from 'react';
import axios from 'axios';


export default function RegisterComponent(props) {
    const [userName , setUserName]=useState();
    const [password , setPassword]=useState();
    const [name , setName]=useState();
    const [alreadyRegistered , setAlreadyRegistered]=useState(false);
    const [showMessage , setShowMessage] = useState(false);
    const [message , setMessage] = useState(" ");
    const [passwordVisible , setPasswordVisible] = useState(false);
    var getUserName=(e)=>{
        // console.log(e.target.value);
        setUserName(e.target.value);
      }
      var getPassword=(e)=>{
        setPassword(e.target.value);
      }

      var getName=(e)=>{
          setName(e.target.value);
      }

      var changeToLogin=()=>{
        props.history.push('/');
      }

      var registerClicked=()=>{
        if(name==undefined || password==undefined || userName==undefined){
          setShowMessage(true); 
          setMessage("Enter Fields");
        }
        else{
              console.log('registerClicked')
              axios.post('http://localhost:5000/user/puut' ,{
                name:name,
                userName:userName,
                password:password
              
                }
              ).then((response)=>{
                console.log(response.data);
                if(response.data['message']=="already present"){
                    setAlreadyRegistered(true);
                    setUserName("");
                    setPassword("");
                    setName("");
                    
                }
                if(response.data['message']=='Registered'){
                    console.log('re');
                      sessionStorage.setItem('userName', userName);
                      sessionStorage.setItem('name',name);
                      props.history.push('/home');
                }
              })
        }
            
      }
    return(
        <div class="modal-content">
        <div class="modal-header" >
          

                <h4><span class="glyphicon glyphicon-register"></span> Register</h4> 

        </div>
        <div class="modal-body" >
          <form role="form">
              
             <div class="form-group">
                <label for="usrname"><span class="glyphicon "></span> Name</label>
                <input type="text" class="form-control" id="name" onChange={getName} placeholder="Enter Name"/>
                </div>
                

            <div class="form-group">
              <label for="usrname"><span class="glyphicon glyphicon-user"></span> Username</label>
              <input type="text" class="form-control" id="usrname" onChange={getUserName}  value={userName} placeholder="Enter email"/>
            </div>
            <div class="form-group">
            { passwordVisible && <>
              <label for="psw"><span class="glyphicon glyphicon-eye-open" onClick={()=>setPasswordVisible(false)}></span> Password</label>
              <input type="text" class="form-control" id="psw" value={password} onChange={getPassword} placeholder="Enter password"/>
              </>}
              { !passwordVisible && <>
              <label for="psw"><span class="glyphicon glyphicon-eye-close" onClick={()=>setPasswordVisible(true)}></span> Password</label>
              <input type="password" class="form-control" id="psw" value={password} onChange={getPassword} placeholder="Enter password"/>
              </>}
              </div>
             { alreadyRegistered && <p> This email Already Registered</p>}
             {showMessage && <p> {message} </p>}
              <button type="button" class="btn btn-success btn-block submitbtn" onClick={registerClicked}><span class="glyphicon glyphicon-"></span> Register</button>
          </form>
        </div>
        
        
        
        
        <div >
          <p>Go to <a href="#" onClick={changeToLogin}>Log in</a></p>
          
        </div>
        
      </div>
      

    )
}