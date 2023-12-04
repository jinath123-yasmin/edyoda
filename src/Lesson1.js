

const Lesson1=(props)=>{
    // const num=10;

    // const specification={
    //     length:1234,
    //     width:9876,
    //     height:4567
    // }

    // const isLoggedIn=true;
    // console.log(isLoggedIn);

    // const animals=['lion','tiger','monkey']

    function clickBtn(){
        console.log("Button is been clicked")
    }
    return(
        <div>
    {/* <h1>{num}</h1> */}
    {/* <h1>{specification.length}</h1> */}

    {/* {
        isLoggedIn ? (<p>Welcome User!</p>) : (<p>Please login to continue</p>)
    } */}
   {/* <ul>
        {
            animals.map((animal)=>(
              <li>{animal}</li>
            ))
        }
</ul> */}

  <button onClick={clickBtn}>Click me</button>
  <h1>My name is {props.name}</h1>
  <h1>My name is {props.designation}</h1>
        </div>
    )
}

export default Lesson1