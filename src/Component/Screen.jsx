import React, { useContext } from 'react'
import { MainContext} from '../Context/Context'
import { useNavigate } from 'react-router-dom';

const Screen = () => {
    const{data,setSingleData}=useContext(MainContext)
    // console.log(data,setsingleData);
    const nav= useNavigate()
  return (
    <div className='home'>
        {data.map((prod)=>{
            return <div key={prod.id} className='productContainer'>

                <img src={prod?.show?.image?.medium} alt="" />
                <h3><span>Name</span> : {prod?.show?.name}</h3>
                <h3><span>Language</span>:{prod?.show?.language}</h3>
                <h3><span>Released Date</span>:{prod?.show?.premiered}</h3>
                <button onClick={()=>{
                    nav("/show")
                 setSingleData(prod)
                 }}>Show</button>
            </div>
        })}
    </div>
  )
}

export default Screen