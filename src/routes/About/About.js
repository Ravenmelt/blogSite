import React,{Component} from 'react';

class About extends Component{
    render(){
        return(
            <div>
                <div style={{position:"absolute",left:"50%",top:"40vh",transform:"translate(-20%,-50%)",fontSize:"20px",textAlign:"left",width:"60%"}}>
                    {/* <div style={{display:"flex",flexDirection:"row"}}> */}
                        <img src={process.env.PUBLIC_URL+"/img/portrait2.png"} style={{maxHeight:"400px",minWidth:"320px"}} alt="本喵的虚拟形象"/>
                        <div style={{flexDirection:"column",color:'#EEE'}}>
                            <div>陈喵喵，中南大学现役大学生</div>
                            <div>实习前端工程师</div>
                            <div>联系方式：1411307268@qq.com</div>
                            {/* <div>左侧为陈喵喵的虚拟形象</div> */}
                        </div>
                    {/* </div> */}
                </div>
            </div>
        )
    }
}
export default About