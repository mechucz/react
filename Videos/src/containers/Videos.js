import Video from "../components/Video"
import { useEffect } from "react"
const Videos=()=>{
        //Component didMount
        useEffect(()=>{
                //consulta a la API=> ARRAY CON LOS DATOS DE LOS VIDEOS
                //Este HOOK tiene 2 argumentos, una funcion y un array
                console.log("Iupi, el componente se ha montado en el DOM")

        }, [])
    return(
        <>
<Video  
          thumbnails="https://i.ytimg.com/vi/zQ41hqlV0Kk/mqdefault.jpg"
          title="Rod Stewart - Young Turks (Official Video)"
          date="2009-10-29T21:26:05Z"
          channel="Rod Stewart"
          description="Official music video for Rod Stewart – Young Turks from 'Tonight I'm Yours' (1981) Listen to more Rod Stewart here: https://rhino.lnk.to/RodStewartStr ..."/>
<Video
        title="Rod Stewart - Baby Jane (Official Video)"
        date="2014-03-01T01:35:21Z"
        channel="Rod Stewart"
        thumbnails="https://i.ytimg.com/vi/dxl2r6GuL2w/mqdefault.jpg"
        description="Official music video for Rod Stewart – “Baby Jane” from 'Body Wishes' (1983) Listen to more Rod Stewart here: https://rhino.lnk.to/RodStewartStr Watch all ..." />
<Video
        title="Bizcocho marmolado de naranja. SUPERESPONJOSO"
        date="2019-09-25T18:16:56Z"
        channel="Anna recetasfaciles"
        thumbnails="https://i.ytimg.com/vi/3GwA45Bcvrs/mqdefault.jpg"
        description="Compra mi libro de recetas COCINA PARA TRIUNFAR en este link https://amzn.to/2UPUhNZ Mi sartén Tefal Aroma 24 cm https://amzn.to/2WSFjLf Batidora de ..." />
<Video
        title="Jarabe De palo - Ying Yang"
        date="2008-12-04T14:37:33Z"
        channel="Warner Music Spain"
        thumbnails="https://i.ytimg.com/vi/JSH321S6tGc/mqdefault.jpg"
        description="" />
 <Video
        title="Jarabe De palo - Ying Yang"
        date="2008-12-04T14:37:33Z"
        channel="Warner Music Spain"
        thumbnails="https://i.ytimg.com/vi/JSH321S6tGc/mqdefault.jpg"
        description="" />
 <Video
        title="La Niña: ¿Podrá Latinoamérica plantarle cara?"
        date="2021-10-23T00:15:00Z"
        channel="DW Español"
        thumbnails="https://i.ytimg.com/vi/AsiUBtAQ4wU/mqdefault.jpg"
        description="Duros inviernos, huracanes más intensos y grandes sequías. Son las consecuencias de La Niña, un fenómeno que se hará notar por segundo año consecutivo." />    
   </>
    )
}

export default Videos;