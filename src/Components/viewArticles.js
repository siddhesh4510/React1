import React, {useState } from 'react';
import axios from 'axios';

export default function ViewArticle(props){
    const [showArticle , setShowArticle]=useState(true);
    var changeSHow=()=>{
        console.log('change')
        axios.delete("http://localhost:5000/article/"+props.id).then((response)=>{
            console.log('delete')
        });
        setShowArticle(false);
    }
    if(showArticle){
    return(
        
        <div class="bs-example col-md-4 col-sm-6 " id={props.key}>
            <div class="card" style={{width: "300px", height: "500px"}}>
            
                <div class="card-body text-center">
                    <h3 class="card-title">{ props.title }</h3>
                    {!props.ofUser && <p> By: { props.author }</p>}
                    {props.ofUser && <p>Your Article</p>}
                    <p class="card-text">{ props.text }</p>
                    {props.ofUser && <a href="#" class="btn btn-primary stretched-link" onClick={changeSHow}>Delete</a>}
                </div>
            </div>
        </div>

    
        
    )
    }
    else{
        return ( <div></div>)
    }
}