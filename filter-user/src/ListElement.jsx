import React from 'react'


function ListElement({user}) {
     // yeniden oluşturma (deconstruct)
                    //obje içerisindeki verilere erişme
                    const {name,phone,email,address} = user;
  return (
    <li style={{marginBottom:"20px"}}>
    {name}
    <br/>
    {phone}
    <br/>
    {email}
    <br/>
    {/* zipcodeu olmayanı ekrana basma olanı bas */}
    {address?.zipcode}
    </li>
  )
}

export default ListElement