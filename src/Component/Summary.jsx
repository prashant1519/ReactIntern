import React, { useContext } from 'react'
import { MainContext } from '../Context/Context';
import { useNavigate } from 'react-router-dom';

const Summary= () => {
    const navigate=useNavigate()
    const{singleData:Data}=useContext(MainContext)
    // console.log(Data);
  return (
    <div>
      {[Data]?.map((product)=>{
        return <div key={product.id}>
          <img src={product?.show?.image?.medium} alt="" />
          <h1>{product?.show?.summary}</h1>
          <button onClick={()=>navigate("/form")}>Book Ticket</button>


        </div>
      })}
    </div>
  )
}

export default Summary