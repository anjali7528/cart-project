import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {

  constructor(){
    super();
    this.state={
        products: [
     {
        price: 999,
        title: 'Mobile',
        qty: 1,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-mini-blue-select-2020?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604343706000',
        id:1
    },
    {
        price: 99,
        title: 'Watch',
        qty: 10,
        img: 'https://cdn.shopify.com/s/files/1/0027/2357/7914/articles/A22A1281_1200x.jpg?v=1597178612',
        id:2
    },
    {
      price: 9999,
      title: 'Laptop',
      qty: 1,
      img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80',
      id:3
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

getCartCount = () => {
  const {products} = this.state;

  let count =0;

  products.forEach((product) =>{
    count += product.qty;
  })

  return count;
}

getCartTotal = () =>{
  const {products} = this.state;

  let cartTotal = 0;

  products.map((product) =>{
    cartTotal = cartTotal + product.qty * product.price
  })

  return cartTotal;
}

  render(){

    const {products} = this.state;

  return (
    <div className="App">
      <Navbar count={this.getCartCount ()}/>
     <Cart
      products = {products}
      onIncreaseQuantity ={this.handleIncreaseQuantity}
      ondecreaseQuantity ={this. handledecreaseQuantity}
      onDeleteProduct ={this.handleDeleteProduct}
     />
     <div style={ {fontSize: 20, padding: 10} }>TOTAL: {this.getCartTotal()}</div>
    </div>
  );
}
}

export default App;  
