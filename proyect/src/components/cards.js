import * as React from "react";
import "../styles/Home.module.css";



export default function Card({data}) {
    return (
       
        <div class="tarjeta">
           
            <div class="imagen">
            <img src={data.imagen}/>
            </div>

            <div class="titulo">
            {data.titulo}
            </div>

            <div class="texto">
            {data.text}
            </div>
            <br></br>

            <div class="button">
            <button type="button" class="btn btn-primary btn-lg">Large</button>
            </div>



        </div>

         
     
        )
    
}
