import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            product: [
         {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: '',
            id:2 
        },
        {
            price: 99,
            title: 'Watch',
            qty: 10,
            img: '',
            id:3
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
          return <CartItem product={product} key={product.id}/>
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