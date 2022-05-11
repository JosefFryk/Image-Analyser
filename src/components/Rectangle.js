import { css } from '@emotion/css'


export default function Rectangle(props) {
  
 

    //css used from @emotion  
    return(
        <div>
        {props.info.map((element, index)=> {
           // console.log(props.text)
            return (
            
           //not best practice using index, change it in future!!
            <div
            key={index}

            className={css({
                padding: 0,
                border: "1px solid red",
                position:'absolute',
                left: `${element.x}px`,
                top: `${element.y}px`,
                height: `${element.h}px`,
                width:`${element.w}px`,
                color:'white'
                
            })}
            ><p>{props.text[index]}</p> </div>
           
             
          )})}
     </div>
    )
}