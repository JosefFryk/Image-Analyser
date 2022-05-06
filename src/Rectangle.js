import { css } from '@emotion/css'


export default function Rectangle(props) {
  
     const obj = props
     const keys = Object.keys(obj)
     const values = keys.map(function(key){
         return obj[keys]
     })




    

     
 
    

    
   

     const xValue = values[0][0].x
     const yValue = values[0][0].y
     const hValue = values[0][0].h
     const wValue = values[0][0].w
    console.log(wValue)
  
    //css used from @emotion  
    return(
        <div>
        {props.info.map(()=> {
            
            return (
            

            <div
            className={css({
                padding: 0,
                border: "1px solid red",
                position:'absolute',
                left: `${xValue}px`,
                top: `${yValue}px`,
                height: `${hValue}px`,
                width:`${wValue}px`,
                
            })}
            >
            </div>
          )})}
     </div>
    )
}