import React,{Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import LoginUser from './layouts/LoginUser/LoginUser';
import About from './routes/About/About'
import Article from './routes/Article/Article'
import Home from './routes/Home/Home'
import Resource from './routes/Resource/Resource'

export default class RouterWrap extends Component{
    render(){
        return (
            <div id="router">
                <HashRouter>
                    <Switch>
                        <Route path="/" component={DefaultLayout}  />
                        <Route path="/login" component={LoginUser} />
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}