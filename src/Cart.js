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

    handleIncreaseQuantity = (product) =>{
        console.log('increase qty of ', product);
        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState({
            products
        })
    }

    handledecreaseQuantity =(product) =>{
      console.log('decrease product qty ' + product);
      const {products} = this.state;
      const index = products.indexOf(product);

      if(products[index].qty > 0)
         products[index].qty -= 1;
      this.setState({
          products
      })
    }

    handleDeleteProduct= (id) =>{
        const {products} = this.state;

        const items = products.filter((item) =>  item.id !== id);

        this.setState({
          products: items
        })
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
        //   func = {() => console.log('ssd')}
        //   isloggedin={false}
        //   jsx={<h1> test</h1>}
        onIncreaseQuantity ={this.handleIncreaseQuantity}
        ondecreaseQuantity ={this. handledecreaseQuantity}
        onDeleteProduct ={this.handleDeleteProduct}
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