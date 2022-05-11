

import './Info.css'

export default function Info(props){



  

    const isThereText = props.text.props.text[0].length > 0
    
    return (

       <div className="wrapperInfo">
    {/* // All objects */}
        <div className="objectsBox">
           {props.info.objects.length > 0 ? <h2>Objects</h2> : <h2>No object found</h2>}
         <ul>{props.info.objects.map(data => {
            return (
                
                <li>
                   
                    <div>
                    {data.object}
                    </div>
                </li>
           
            )
        })}  </ul>
        </div>
        {/*Categories  */}
        <div className="categoriesBox">
        <h2>Categories:</h2>
        <p>{props.info.categories.map(data => {
            return (
                
                <div>
                {data.name}
                </div>
            )
        })}</p>
        </div>
        {/* Tags  */}
        <div className="tagsBox">
        
        <h2>Tags:</h2>
         <p>{props.info.tags.map(data => {
            return (
                <div>
                 #{data.name}
                </div>
            )
        })}</p>
        </div>
      
        {/* Description of image */}
        <div className="descriptionBox">
        <h2>Description:</h2>
        
        {props.info.description.captions[0].text}
           
       </div>
        {/* Text from image */}
        <div>
           {isThereText ? <div><h2>Text:</h2> {props.text} </div>: <h2>No text found inside image</h2> }
           
        </div>

        </div>
    )
}