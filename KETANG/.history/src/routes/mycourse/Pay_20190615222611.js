import React from 'react';
import { connect } from 'react-redux';
import action from '../../store/action/index';
import CourseItem from './CourseItem'

class Pay extends React.Component{
    constructor(props,context){
        super(props,context);
        
    }
    render(){
       
        return <ul className='courseItem'>
        <CourseItem></CourseItem>
        </ul>;
    }
}
export default connect(state=>state.course,action.course)(Pay); 