import React from 'react'

function Image(props) {
    return(
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",maxHeight:"30em",marginTop:"5em",marginBottom:"5em"}}>
            <img src={process.env.PUBLIC_URL+"/img/"+props.src} />
        </div>
    )
}

export default Image