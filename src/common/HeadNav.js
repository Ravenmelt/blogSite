import React,{Component} from 'react';
import {Menu} from 'antd'
import {Link} from 'react-router-dom'
import {ManOutlined } from '@ant-design/icons';
import './HeadNav.less'
export default class HeadNav extends Component {
    constructor(props){
        super(props);
        //var location=this.props.location.pathname.split('/');
        //var currentName=location[location.length-1]?location[location.length-1]:'home';
        this.state = {
            current: 'home',
        }
    }


    handleClick=(e)=>{ //点击事件
        this.setState({current:e.key});
    }

    render(){
        return (
            <div id="HeadNav">
                <div className="nav-wrap">
                    <div className="nav-logo-wrap">
                        <ManOutlined  className="nav-logo" />
                    </div>
                    <div className="nav-list-wrap">
                        <Menu
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            onClick={this.handleClick}
                        >
                             <Menu.Item key="home">
                                <Link  to="/">首页</Link>
                            </Menu.Item>
                            <Menu.Item key="aboutme">
                                <Link  to="/about">关于我</Link>
                            </Menu.Item>
                            <Menu.Item key="article">
                                <Link to="/article">文章分享</Link>
                            </Menu.Item>
                            {/* <Menu.Item key="resource" >
                                <Link to="/resource">资源共享</Link>
                            </Menu.Item> */}
                        </Menu>
                    </div>
                </div>
            </div>
        )
    }

}