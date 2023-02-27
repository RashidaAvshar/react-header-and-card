import React from "react";

 const Card = ({img, title, description, price})=>{
  
    return(
        <div className="card-box">
            <div className="card">
                <img src={img} alt="product" />                
                <p className="title">{title.slice(0,10)}</p>
                <p className="description">{description.slice(0,20)}</p>
                <span className="price">{price}</span>
                <span>$</span>                
            </div>
        </div>
    );
    
}

export default Card;