import React,{Component} from "react"
import "../../../assets/css/forget/forgetConnect.css"
import {Random} from  "../../../components/config/mUtils.js"
class ForgetConnect extends Component{
    constructor(props){
        super(props)
        this.state={
            num:'1213'
        }
    }
    change = ()=>{
        this.setState({
            num:Random()
        })
    }
    render(){
        return(
            <div className="passWord">
                <input type="text" placeholder="账号"/>
                <input type="text" placeholder="旧密码"/>
                <input type="text" placeholder="请输入新密码"/>
                <input type="text" placeholder="请确认密码"/>
                <div className="bottomInput" style={{borderBottom:"1px solid #bbb"}}>
                    <input className="BInput" type="text" placeholder="验证码"/>
                    <aside>
                        <em>{this.state.num}</em>
                        <span onClick={this.change}>
                            看不清<br/>
                            换一张
                        </span>
                       
                    </aside>
                </div>
                <button>确认修改</button>
            </div>
        )
    }
}

export default ForgetConnect;