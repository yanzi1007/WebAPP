import React from 'react';
import { connect } from 'react-redux';
/*上导航没有放在routes里面，所以它不受路由管控，但在上导航中有个返回按钮，这里要用到history.goback所以只能用react-rouetr-dom中的WithRouter
把该组件变为受路由管控的组件，受路由管控的组件有两个优点：1、路由匹配上了，会自动渲染组件2、受路由管控的组件会在其props上增加三个属性history 
localtion match，因此，想要用history必须要将其转换为受路由管控组件
*/
import {withRouter} from 'react-router-dom';
//导入antd
import {Icon} from 'antd';
class NavBottom extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <footer className='footerNavBox'>
            <a href="javascript:;"><Icon type='home'></Icon>首页</a>
            <a href="javascript:;"><Icon type='solution'></Icon>我的课程</a>
            <a href="javascript:;"><Icon type='user'></Icon>个人中心</a>
        </footer>;
    }
}
export default withRouter(connect()(NavBottom));