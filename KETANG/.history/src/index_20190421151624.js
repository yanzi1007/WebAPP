import React from 'react';
import ReactDOM from 'react-dom';
import './static/less/index.less';
import qs from 'qs'
import boostrap from './static/css/bootstrap.min.css'
//测试  ，要测试less则不要引入boostrap，因为boostrap自带样式
console.log(qs.parse('name=sfpa&age=19&lx=teacter'));
ReactDOM.render(<div>
    <button type='button' className='btn btn-success btn-default'>登录</button>
</div>,document.getElementById('root'))



