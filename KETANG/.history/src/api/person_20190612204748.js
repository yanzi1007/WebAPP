import axios from './index';//因为index.js中导出来经过二次处理的axios，我们就是要用二次处理的axios
//验证是否登录
export function checkLogin(){
    return axios.get('/personal/login');//axios.get返回结果是一个promise实例
}

//退出登录数据请求
export function exitLogin(){
    return axios.get('/personal/out');
}

//获取个人信息
export function queryInfo (){
    return axios.get('/personal/info');
}

//登录
export function login(payload){
    return axios.post('/personal/login',payload);
}