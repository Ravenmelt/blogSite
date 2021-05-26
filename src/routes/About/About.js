import React,{Component} from 'react';

class About extends Component{
    render(){
        return(
            <div>
                <div style={{position:"absolute",left:"50%",top:"40vh",transform:"translate(-20%,-50%)",fontSize:"20px",textAlign:"left",width:"60%"}}>
                    <div style={{display:"flex",flexDirection:"row"}}>
                        <img src="img/portrait.jpg" style={{maxHeight:"150px",minWidth:"150px"}}/>
                        <div style={{flexDirection:"column"}}>
                            <div>陈喵喵，中南大学现役大学生</div>
                            <div>实习前端工程师，目标是站在业务的最前端</div>
                            <div>（左侧为陈喵喵的虚拟形象）</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About