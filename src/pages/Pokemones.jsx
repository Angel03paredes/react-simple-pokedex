import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import LogoPng from "./../assets/logo.png"

const Pokemones = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [pokemon,setPokemon] = useState({})
  const [loading,setLoading] =useState(false)

  useEffect(()=>{
    const getData = async()=>{
      setLoading(true)
     await  axios.get("https://pokeapi.co/api/v2/pokemon/"+params?.pokemon)
      .then(resp=>{setPokemon(resp.data);
      setLoading(false)})
      .catch(error=>console.error(error))
    }
    setLoading(false)
     getData()
  },[])

  return (
    <>
      <div className="w-100 bg-primary d-flex justify-content-between">
    <img width={200} src={LogoPng} alt="" />
    <button className='btn text-light' onClick={()=>navigate("/")}><i className="bi bi-house "></i></button>
  </div>
   <div className="container py-2">
    <div className="w-100 d-flex justify-content-center">
     {
      loading? 
      <>
      <div className=' card shadow-lg p-5 d-grid'>
      <div className="placeholder mb-2" style={{width:"100px",height:"20px"}}></div>
      <div className="placeholder mb-2" style={{width:"100px",height:"100px"}}></div>
      <div className="placeholder mb-2" style={{width:"130px",height:"20px"}}></div>
      <div className="placeholder mb-2" style={{width:"130px",height:"20px"}}></div>
      </div>
      </>
      :
      <div className="card shadow-lg p-5">
      <p className='fs-3'>{pokemon?.species?.name}</p>
      <img src={pokemon?.sprites?.front_default} alt="" />
      <p>Altura: {pokemon.height } metros</p>
      <p>Peso: {pokemon.weight } Kg</p>
    </div>
     }
      
    </div>
    <button onClick={()=>navigate("/")} className='btn btn-primary'><i className="bi bi-arrow-left mx-2"></i>Regresar</button>
   </div>
  
    </>
  )
}

export default Pokemones