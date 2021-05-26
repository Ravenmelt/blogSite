import React,{Component} from 'react';

class Article extends Component{
    render(){
        return(
            <div style={{position:"absolute",left:"50%",top:"40vh",transform:"translate(-20%,-50%)",fontSize:"20px",textAlign:"left",width:"60%"}}>
                <div id="2">本网站采用React、React-router、antd和axios框架编写</div>
                <div>后端使用了Node.js和MongoDB进行开发</div>
                <div>自主实现了富文本的展示，目前有三种格式，分为文本格式，代码格式，图片模式</div>
            </div>

        )
    }
}
export default Article