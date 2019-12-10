import React,{Component,Fragment} from "react"
import { Form, Icon, Input, Button, Checkbox } from 'antd';
class Footer extends Component{
    render(){
        return(
            <Fragment>
                <ul className="footer">
                    <li>
                        <i></i>
                        <span>外卖</span>
                    </li>
                </ul>
            </Fragment>
        )
    }
}

export default Footer;