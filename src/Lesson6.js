import React from "react"

const MyPureComponent=React.memo(({prop1,prop2})=>{
    return(
        <div>
  <p>PROP1:{prop1}</p>
  <p>PROP2:{prop2}</p>
        </div>
    )
})

export default MyPureComponent