import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LogoPng from "./../assets/logo.png"


const Home = () => {
    const navigate=useNavigate()

    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then((resp)=>{
        setData(resp?.data?.results)
        }).catch(error=>console.error(error))
    },[])

    const handlerClick=(name)=>{
        navigate(`${name}`)
    }

  return (
   <>
    <div className="w-100 bg-primary px-2 mb-3 d-flex justify-content-between">
    <img width={200} src={LogoPng} alt="" />
    <button className='btn text-light' onClick={()=>navigate("/")}><i className="bi bi-house"></i></button>
  </div>
    <div className="container ">
       
        <table className='table table-striped w-100'>
            <thead>

<th>Nombre</th>
<th></th>
            </thead>
            <tbody>
                {
                    data?.map((element,index)=>(
                        <tr key={index}>
                            <td>{element.name}</td>
                            <td><img src={element.url} alt="" /></td>
                            <td><button onClick={()=>handlerClick(element?.name)}  className='btn btn-primary'>Ver</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
   </>
  )
}

export default Home