import { useEffect, useState } from "react";



const products = [
    {
      name: "Product 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      image:
        "https://thumbs.dreamstime.com/b/football-soccer-ball-kickoff-game-sunset-38302251.jpg",
    },
    {
      name: "Product 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      image:
        "https://thumbs.dreamstime.com/b/football-soccer-ball-kickoff-game-sunset-38302251.jpg",
    },
    {
      name: "Product 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      image:
        "https://thumbs.dreamstime.com/b/football-soccer-ball-kickoff-game-sunset-38302251.jpg",
    },
    {
      name: "Product 4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      image:
        "https://thumbs.dreamstime.com/b/football-soccer-ball-kickoff-game-sunset-38302251.jpg",
    },
    {
      name: "Product 5",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      image:
        "https://thumbs.dreamstime.com/b/football-soccer-ball-kickoff-game-sunset-38302251.jpg",
    },
    {
      name: "Product 6",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      image:
        "https://thumbs.dreamstime.com/b/football-soccer-ball-kickoff-game-sunset-38302251.jpg",
    },
    {
      name: "Product 7",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      image:
        "https://thumbs.dreamstime.com/b/football-soccer-ball-kickoff-game-sunset-38302251.jpg",
    },
    {
      name: "Product 8",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      image:
        "https://thumbs.dreamstime.com/b/football-soccer-ball-kickoff-game-sunset-38302251.jpg",
    },
    {
      name: "Product 9",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      image:
        "https://thumbs.dreamstime.com/b/football-soccer-ball-kickoff-game-sunset-38302251.jpg",
    },
    {
      name: "Product 10",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      image:
        "https://thumbs.dreamstime.com/b/football-soccer-ball-kickoff-game-sunset-38302251.jpg",
    },
  ];

const Carousel=()=>{

    const [item,setItem]=useState(0)


    function prevButton(){
        if(item === 0){
            setItem(products.length-1)
        }else{
            setItem(item-1)
        }
    }

    function nextButton(){
        if(item === products.length-1){
            setItem(0)
        }else{
            setItem(item => item+1)
        }
    }

    useEffect(()=>{
        const timer=setInterval(()=>{
            nextButton();
        },2*1000)

        return()=>{
            clearInterval(timer);
        }
    },[item])


    return(
        <div className="container">
            <button onClick={prevButton}>Prev Carousel</button>
<div class="card" style={{width: "18rem"}}>
  <img src={products[item].image} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{products[item].name}</h5>
    <p class="card-text">{products[item].description}</p>
  </div>
 
</div>
<button onClick={nextButton}>Next Carousel</button>
        </div>
    )
}

export default Carousel