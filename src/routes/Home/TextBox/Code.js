import React from 'react'

function Code(props){
    return(
        <div style={{background:"#ccc", marginLeft:"10%",marginRight:"10%",marginTop:"40px",paddingLeft: "5%",textAlign:"left",overflowX:"scroll"}}>
            {props.text.map((ele)=>
                <div>{ele}</div>
            )}
        </div>
    )
}

export default Code