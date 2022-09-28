import React from 'react'

function Navbar() {
  return (
    <div style={{width:"100%",display:"flex",justifyContent:"space-evenly"}}>
        <div>
            <ul>Logo</ul>
        </div>
        <div 
        style={{display:"flex",justifyContent:"space-around"}}
        >
            <ul>Home</ul>
            <ul>Products</ul>
            <ul>Cart</ul>
        </div>
    </div>
  )
}

export default Navbar