import React,{Component} from 'react';
import {  BackTop, Layout, Menu  } from 'antd';
import {  UserOutlined  } from '@ant-design/icons';
import Article from './Content'
import FirstLevelMenu from './FirstMenu'
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            firstLevelMenu:[],
            content:null,
        }
        this.linkToArticle=this.linkToArticle.bind(this)
    }
    componentDidMount(){
        this.setState({firstLevelMenu:[{
            title:"原生学习",
            index:1,
            items:[
            {title:"flex布局",index:'sub1'},
            {title:"Promise和Async函数",index:'sub2'},
            {title:"手写api",index:'sub3'}]
        },{
            title:"React框架学习",
            index:2,
            items:[
            {title:"个人站搭建小记",index:'sub4'},
            {title:"useEffect的源码研究",index:'sub5'}]
        },{
            title:"Vue框架学习",
            index:3,
            items:[
            {title:"双向绑定",index:'sub6'},]
        }],
        content:"个人站搭建小记"
    })
    }
    linkToArticle(title){
        this.setState({content:title})
    }
    render(){
        // const testState=[{
        //     title:"原生学习",
        //     index:1,
        //     items:["flex布局","Promise研究","new了一个对象后发生了什么"]
        // },{
        //     title:"React框架学习",
        //     index:2,
        //     items:["个人站搭建小记","useEffect的源码研究"]
        // },{
        //     title:"Vue框架学习",
        //     index:3,
        //     items:["还没开始学呢"]
        // }]
        const firstLevelMenu=this.state.firstLevelMenu.map((ele)=>{
            //return <FirstLevelMenu title={ele} index={index} />
            return(<SubMenu key={ele.index} icon={<UserOutlined />} title={ele.title}>
                {ele.items.map((menu)=>
                    <Menu.Item key={menu.index} onClick={this.linkToArticle.bind(this,menu.title)}>{menu.title}</Menu.Item>
                )}
            </SubMenu>)
        })
        return(
            <Layout>
                <Layout style={{height:'100%'}}>
                    <Sider width={200} className="site-layout-background" style={{
                        position:'fixed',
                        top:'50px',
                        bottom:0,
                        }}>
                        <Menu
                        mode="inline"
                        defaultSelectedKeys={["sub4"]}
                        defaultOpenKeys={["2"]}
                        style={{ height: '100%', borderRight: 0 }}
                        >
                        {firstLevelMenu}
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 580,
                            position:'fixed',
                            top:'50px',
                            left:'200px',
                            right:0,
                            overflow:'scroll',
                            height:'100%',
                            backgroundColor:'white'
                            
                        }}
                        >
                        <Article title={this.state.content}/>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
            
        )
    }
}


export default Home