import React,{Component} from "react";
import { Spin, Alert } from 'antd';
class Loading extends Component{
    render(){
        return(
           
            <Spin tip="Loading..." size="large" style={{height:"100%",width:"100%"}} >
            <Alert
              message=""
              description=""
              type="info"
            />
          </Spin>
          
        )
    }
}
export default Loading