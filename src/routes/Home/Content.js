import React from 'react'
import Text from './TextBox/Text'
import Code from './TextBox/Code'
import 手写api from'./Article/手写api.json'
import 个人站搭建小记 from'./Article/个人站搭建小记.json'
function Article(props){
    var content
    switch (props.title) {
        case "个人站搭建小记":
            content=个人站搭建小记.content
            break;
        case "手写api":
            content=手写api.content
            console.log(content);
            break;
        default:
            content=null
            break;
    }
    return(
        <div>
            <div style={{fontSize:"20px",fontWeight:"bold"}}>
                {props.title}
            </div>
            <div style={{textAlign:'left'}}>
                {content && content.map((ele)=>{
                    switch (ele.type) {
                        case 0:
                            return <Text text={ele.text} />
                        case 1:
                            return <Code text={ele.text} />
                        default:
                            break;
                    }
                })}
            </div>
            <div style={{height:"20px"}}></div>
        </div>
    )
}

export default Article;