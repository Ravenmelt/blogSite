import React from 'react'
import {Menu} from 'antd'
import {  UserOutlined  } from '@ant-design/icons';

const {SubMenu} = Menu

class FirstLevelMenu extends React.Component{
    constructor(props){
        super(props)
        this.state={
            secondLevelMenu:[]
        }
    }

    render(){
    return(
        <SubMenu key={this.props.index} icon={<UserOutlined />} title={this.props.title}>
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
        </SubMenu>
    )}
}

export default FirstLevelMenu