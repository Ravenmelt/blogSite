import React from 'react'
import Text from './TextBox/Text'
import Code from './TextBox/Code'
import Image from './TextBox/Image'
import 手写api from'./Article/手写api.json'
import 个人站搭建小记 from'./Article/个人站搭建小记.json'
import flex布局 from'./Article/flex布局.json'
import Promise和Async函数 from'./Article/Promise和Async函数.json'
import useEffect的源码研究 from'./Article/useEffect的源码研究.json'
function Article(props){
    var content
    console.log(props.title);
    switch (props.title) {
        case "个人站搭建小记":
            content=个人站搭建小记.content
            break;
        case "手写api":
            content=手写api.content
            break;
        case "flex布局":
            content=flex布局.content
            break;
        case "Promise和Async函数":
            content=Promise和Async函数.content
            break;        
        case "useEffect的源码研究":
            content=useEffect的源码研究.content
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
                        case 2:
                            return <Image src={ele.text} />
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