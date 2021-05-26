import React from 'react'

function Text(props){
    return(
        <div style={{marginBottom:"10px",marginTop:"10px"}}>
            {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"+props.text}
        </div>
    )
}

export default Text