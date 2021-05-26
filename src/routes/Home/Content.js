import React from 'react'
import Text from './TextBox/Text'
import 手写api from'./Article/手写api.json'
import 个人站搭建小记 from'./Article/个人站搭建小记.json'
function Article(props){
    var content
    switch (props.title) {
        case "个人站搭建小记":
            content=个人站搭建小记.content
            break;
    
        default:
            content=null
            break;
    }
    return(
        <div>
            <div style={{fontSize:"44",fontWeight:"bold"}}>
                {props.title}
            </div>
            <div style={{textAlign:'left'}}>
                {content && content.map((ele)=>{
                    if(ele.type==0){
                        return <Text text={ele.text} />
                    }
                })}
            </div>
            
        </div>
    )
}

export default Article;