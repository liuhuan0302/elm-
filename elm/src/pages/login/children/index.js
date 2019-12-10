import React, { Component, Fragment } from "react"
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import  "../../../assets/css/login/loginConnect.css"
class LoginConnect extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Fragment>
                <Form onSubmit={this.handleSubmit} className="login-form" style={{padding:"10px 20px"}}>
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>Remember me</Checkbox>)}
                        <a className="login-form-forgot" href="">
                            忘记密码
          </a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
          </Button>
                        Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </Fragment>
        )
    }
}
const LoginConnects = Form.create({ name: 'normal_login' })(LoginConnect);
export default LoginConnects;