import React from 'react'

function Image(props) {
    return(
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",maxHeight:"300px"}}>
            <img src={props.src} />
        </div>
    )
}

export default Image