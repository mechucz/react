import Video from "../components/Video"
import {useState, useEffect} from "react"
import {data}from "../utils/data"
import {customFetch}from "../utils/customFetch"



const Videos=()=>{

        //Funcion Delete Video
        const deleteVideo=(id)=>{
                //por cada item solo quedate con los items que su itm id sea diferente al id que me estan pasando
                let nuevosDatos = datos.filter(item =>item.id!=id)
                setDatos(nuevosDatos)
        }

        const [datos, setDatos]= useState([])
        //Component didMount
        useEffect(()=>{
                customFetch(2000, data)
                .then(response=>setDatos(response))
                .catch(err=>console.log(err))
        }, [])
    return(
        <>
        {
                datos.map(item=>( //usamos map porque por cada ele¡mento del array se dibuja un componente
        
        <Video  
          key={item.id}
          thumbnails={item.thumbnail}
          title={item.title}
          date={item.dateAdded}
          channel={item.channel}
          description={item.description}
          deleteVideo={()=>deleteVideo(item.id)}
          ></Video>

                        ))
                
        }
  
   </>
    )
}

export default Videos;