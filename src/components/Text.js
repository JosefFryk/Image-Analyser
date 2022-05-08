


export default function Text(props) {
    
   
    return (
        

            <p>{props.text[0].map(data => {
                return (
                    <>
                {data.text + ' '}
                </>
           )
        })} </p>
    
    )
}