import PropTypes from 'prop-types';
import { useState } from 'react';

const FirstApp=({value})=>{

    let [counter,setCounter]=useState(value)

    const handleAdd=()=>{
        setCounter(counter+1)
    }
    const handleReset=()=>{
        setCounter(value)

    }
    const handleSubsstract=()=>{
        setCounter(counter-1)
    }
    return(
        <>
        <h1> Counter </h1>
        <span> {counter}</span>
        <br></br>
        <button onClick={()=>handleAdd()}> +1 plus </button>
        <button onClick={()=>handleReset()}> Reset</button>
        <button onClick={()=>handleSubsstract()}>Substract</button>
        </>
    )


}

/*
//hook
const FirstApp=({value})=>{
    const [counter,setCounter]=useState(value)
    const handleAdd=()=>{
        setCounter(counter+1)
    }
    return(
        <>
        <h1> Counter </h1>
        <span> {counter}</span>
        <button onClick={()=>handleAdd()}> +1 </button>
        </>
    )


}
*/
/*const FirstApp=({value})=>{
    const handleAdd=()=>{
        console.log('calling handleAdd')
    }

    return(
        <>
        <h1> Counter </h1>
        <span> {value}</span>
        <button onClick={()=>handleAdd()}> +1 </button>
        </>
    )
    

}

const FirstApp=({title,sum})=>{
    return(
        <>
        <h1>Hello this is {title} </h1>
        <span>{sum}</span>
        </>
    )
}

FirstApp.prototypes={
    title: PropTypes.string.isRequired,
    sum:PropTypes.number.isRequired
}
FirstApp.defaultProps={
    title:'no hay titulo',
    sum:300
}

este es para mandar todos los atributos que se manden en el otro componente
const FirstApp=(props)=>{
    return(
        <>
        <h1>Hello this is {props.title} </h1>
        <span>10</span>
        </>
    )
}

esta forma es para solo mandar el titulo, lo desestructura
const FirstApp=({title})=>{
    return(
        <>
        <h1>Hello this is {title} </h1>
        <span>10</span>
        </>
    )
}

segunda forma
const title= 'mi primera App';
function FirstApp(){
    return(
        <>
        <h1>Hello this is {title} </h1>
        <span>10</span>
        </>
    )
}
primera forma de pasar html 
function FirstApp(){
    return(
        <>
        <h1>Hello im a new tittle</h1>
        <span>10</span>
        </>
    )
}*/
export default FirstApp;