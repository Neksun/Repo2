import {useEffect} from "react";
//esto va en la carpeta components karol 2221343
export cont GifGrid=({category}) =>{
  useEffect(()=>{
    console.log(category);
  },[])
  return(
    <>
    <h3> {category] </h3>
    <p> Hola mundo</p>
    </>
  )
}
