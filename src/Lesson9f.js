import { useEffect, useState } from "react";

const products = [
    {
      id: 1,
      name: "Product 1",
      image: "https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg",
      price: 19.99,
    },
    {
      id: 2,
      name: "Product 2",
      image: "https://media.istockphoto.com/id/1349560792/photo/variety-of-pizza-slices-top-view-on-dark-background.jpg?s=612x612&w=0&k=20&c=hpme0Ev7xScoYQumu5tJ6YEu5-dtzv7GdFBkPk3Jb7Y=",
      price: 29.99,
    },
    {
      id: 3,
      name: "Product 3",
      image: "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg",
      price: 39.99,
    },
  ];


const ProductCard=()=>{
    const[productList,setProductList]=useState([])

    useEffect(()=>{
        setTimeout(()=>{
            setProductList(products)
        },4000)
    },[])
    return(
<div>
   <h1>Ecommerce App</h1>
   {
    productList.map((product)=>(
        <div class="product-card">
<img src={product.image} alt={product.name} />
<h3>{product.name}</h3>
<p>${product.price}</p>
            </div>
    ))
   }
</div>
    )
}

export default ProductCard