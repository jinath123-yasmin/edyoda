import { useState } from "react"

const exampleItems=[
  {id:1,
  name: "Item1",
  price: 100
  },
  {id:2,
    name: "Item2",
    price: 56.2
    },
]

const ShoppingCart=()=>{

  const [cart,setCart]=useState([])

  function addToCart(item){

    const existingItem=cart.find((cartItem)=> cartItem.id === item.id)

    if(existingItem){
      setCart((prevCart)=>
        prevCart.map((cartItem)=>
            cartItem.id === item.id ? {...cartItem,quantity:cartItem.quantity+1} : cartItem
        )
      )
    }else{
      setCart((prevCart)=> [...prevCart,{...item,quantity:1}])
    }

  }


  const calculateTotal=()=>{
    return cart.reduce((total,item)=> total+item.price*item.quantity,0).toFixed(2);
  }

    return(
      <div>
        <h2>Shopping Cart</h2>
        {
           cart.map((item)=>(
            <li>{item.name}-${item.price.toFixed(2)}*{item.quantity} = ${(item.price*item.quantity).toFixed(2)} 
            
            </li>
           ))
        }
        <p>TotalCost: ${calculateTotal()}</p>
        <div>
          {
            exampleItems.map((item)=>(
              <button key={item.id} onClick={()=>addToCart(item)}>Add{item.name}to Cart</button>
            ))
          }
        </div>
      </div>
    )
}

export default ShoppingCart