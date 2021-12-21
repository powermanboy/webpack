import React from 'react';
const App =React.createClass({
    getDefaultProps:function(){
        //初始化this.props
        alert("App getDefaultProps 1")
        return{//函数返回值给this.props赋值
               //相当于this.props={name:"tom"}
            name:"tom"
        }
    },
    getInitialState:function(){
        //初始化this.state
        alert("App getInitialState 2" )
        return{//相当于this.state={msg:"好好学习"}
            msg:"好好学习"
        }
    },
    //将要挂载
    componentWillMount:function(){
        alert("App componentWillMount 3")
    },
    // 挂载-渲染
    render:function(){
        //jsx-babel-loader-虚拟DOM
        alert("App renser 4")
        return(
            <div>
                <h3 id="h3">App组件</h3>
                <p>属性值 this.props.name:{this.props.name}</p>
                <p>状态值 this.state.msg:{this.state.msg}</p>
                {console.log("render",document.getElementById("h3"))}
            </div>
        ) 
        //虚拟DOM转换为真实DOM
    }, 
    componentDidMount:function(){
        alert("App componentDidMount 5")
        console.log("render",document.getElementById("h3"))
        //可以操作真实DOM
        //可以运行ajax
        // 图形库、绘图
    }
})
export default App