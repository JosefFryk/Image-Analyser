
export default function Info(props){

    return (

       <div>

        {/*Categories  */}
        <p>{props.info.categories.map(data => {
            return (
                <div>
                {data.name}
                </div>
            )
        })}</p>

        {/* Tags  */}
        <h2>Tags finder</h2>
         <p>{props.info.tags.map(data => {
            return (
                <div>
                 #{data.name}
                </div>
            )
        })}</p>
        {/* Description of image */}
        <h2>Description</h2>
        <p>{props.info.description.captions[0].text}</p>
        </div>


    )
}