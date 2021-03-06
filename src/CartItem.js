import React from "react";

const  CartItem = (props) => {
    //javascript basics. 
    // // constructor(){
    // //     super();
    // //     this.state={
    // //         price: 999,
    // //         title: 'Mobile Phone',
    // //         qty: 1,
    // //         img: ''
    // //     }
    // //     //this.increaseQuantity = this.increaseQuantity.bind(this);
    // //     //this.testing();
    // // }

    // // testing(){
    // //     const promise = new Promise((resolve,reject) => {
    // //         setTimeout(() =>{
    // //             resolve('done');
    // //         }, 5000)
    // //     })

    // //     promise.then(()=>{

    // //         // SET ASCTS AS A SYNCHRONOUS CALL 
    // //         this.setState({qty: this.state.qty+10});
    // //         this.setState({qty: this.state.qty+10});
    // //         this.setState({qty: this.state.qty+10});

    // //         console.log('state', this.state);
    // //     })
    // // }

    // increaseQuantity = () =>{
     
    //     //setState form 1
    //     // this.setState({
    //     //     qty: this.state.qty + 1
    //     //  });

    //     //set state form 2 - if previous state required  
    //     this.setState((prevState) =>{
    //            return{
    //                qty: prevState.qty+1
    //            }
    //      }
    //     // , () =>{
    //     // //     console.log('this.state', this.state);
    //     // // }
    //     );
    // }

    // decreaseQuantity= () =>{
    //     this.setState((prevState) =>{
    //        if(prevState.qty !== 0)
    //         return{
    //             qty: prevState.qty-1
    //         }
    //     });
    // }

   
       // console.log('this.props', this.props);
       //props : properties
         const { price, title,qty} = props.product;
         const {
             product, 
             onIncreaseQuantity,
              ondecreaseQuantity, 
              onDeleteProduct
            } = props

        return(
           <div className="cart-item">
               
             <div className="left-block">

                  <img style={styles.image} src={product.img}/>
             </div>

             <div  className="right-block">
                 <div style={{fontSize: 25}} >{title}</div>
                 <div style={{color: '#777'}}  >Rs {price}</div>
                 <div style={{color: '#777'}} >qty: {qty}</div>
                 <div className="cart-item-actions">
                     {/* {buttons} */}
                     
                     <img 
                     alt="increase" 
                     className="action-icons" 
                     src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                     //onClick={this.increaseQuantity/*.bind(this)*/}
                     onClick={() => onIncreaseQuantity(product)}
                     />

                     <img 
                     alt="decrease" 
                     className="action-icons" 
                     src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                     onClick={() => ondecreaseQuantity(product)}
                     />

                     <img 
                     alt="delete" 
                     className="action-icons" 
                     src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                     onClick ={() => onDeleteProduct(product.id)}
                     />

                 </div>
             </div>
           </div>
        );

}

const styles = {
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#CCC'
    }
}

export default CartItem;