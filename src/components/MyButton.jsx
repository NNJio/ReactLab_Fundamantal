//  import React from 'react'
 
 function MyButton() {
  function handleClick(){
    alert("You cliked me")
  }
   return (
     <button onClick={handleClick}>MyButton</button>
   )
 }
 
 export default MyButton