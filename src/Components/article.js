import React ,{useState , useEffect } from 'react';
import { Card } from 'antd';
import '../Styles/article.css';
import ViewArticle from './viewArticles';
import axios from 'axios';



export default function ViewArticles() {
    
   const [articles , setArticles]=useState([])
   useEffect( ()=>{ axios.get('http://localhost:5000/article/4').then(
        (response)=>{
            console.log(response.data);
            setArticles(response.data.article);
        }
        
    )
   },[]);


    return (
        <div class="container">
        <div class="row">
        {
                articles.map((value , key) =>{
                   return( 
                //     <div class="bs-example col-md-4 col-sm-6 " id={key}>
                //     <div class="card" style={{width: "300px"}}>
                    
                //         <div class="card-body text-center">
                //             <h3 class="card-title">{value["title"] }</h3>
                //             <p> By: {value["author"]}</p>
                //             <p class="card-text">Alice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance webAlice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p>
                //             <a href="#" class="btn btn-primary stretched-link">View Profile</a>
                //         </div>
                //     </div>
                // </div>
                <ViewArticle title={value["title"]} author={value["author"]} text={value["text"]} key={key} ofUser={sessionStorage.getItem('userName')==value["author"] } id={value["id"]}></ViewArticle>
                   )

                })
        }
        </div>
        </div>
    )
}