import React,{Component} from 'react';
import './DefaultLayout.less'
import HeadNav from '../../common/HeadNav'
import {Route} from 'react-router-dom';
import About from '../../routes/About/About'
import Article from '../../routes/Article/Article'
import Home from '../../routes/Home/Home'
import Resource from '../../routes/Resource/Resource'
class DeafultLayout extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        return(
            <div id="DefaultLayout">
            <HeadNav match={this.props.match} location={this.props.location} history={this.props.history} />
            <div className="content-wrap" style={{top:'50px',position:'relative'}}>
                <Route  path={"/"} component={Article}  exact/>
                <Route  path={"/about"} component={About}  />
                <Route  path={"/article"} component={Home}  />
                <Route  path={"/resource"} component={Resource}  />
            </div>
        </div>
        )
    }
}
export default DeafultLayout