import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            products: [
         {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: '',
            id:1
        },
        {
            price: 99,
            title: 'Watch',
            qty: 10,
            img: '',
            id:2
        }
    ]
        //this.increaseQuantity = this.increaseQuantity.bind(this);
        //this.testing();
}
    }
   
    render() {
        const {products} =this.state;
        return(
           <div className="cart" >
          
          {products.map((product) =>{
          return (
          <CartItem 
          product={product} 
          key={product.id}
          func = {() => console.log('ssd')}
          isloggedin={false}
          jsx={<h1> test</h1>}
          />
          )
          })}
           {/* {
               arr.map((item) => {
                   return item+5
               })
           } */}
           </div>
        );
    }

}



export default Cart;