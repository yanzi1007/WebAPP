import React from 'react';
import { connect } from 'react-redux';
import {Menu} from 'antd';
import '../static/css/Mycourse.css';
class Mycourse extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            current:'unpay'
        }
    }
    handleClick=ev=>{
        this.setState({
            current:ev.key
        })
    }
    render(){
        return <div className='MycourseBox'>
            <Menu onClick={this.handleClick} 
            selectedKeys={[this.state.current]} 
            mode="horizontal">
                <Menu.Item key='unpay'>未支付</Menu.Item>
                <Menu.Item key='pay'>已支付</Menu.Item>

            </Menu>
        </div>;
    }
}
export default connect()(Mycourse);