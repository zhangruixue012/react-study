import React from 'react';
import { Form, Input, Field, Button } from 'cloud-react';
import 'cloud-react/cloud-react.css';

export default class FormBasicDemo extends React.Component {
    field = new Field(this);

    onReset() {
        this.field.reset();
    }

    onSubmit(evt) {
        evt.preventDefault();

        this.field.validate((errs, values) => {
            debugger;
            if (errs) {
                return;
            }

            console.log(values);
        })
    }

    render() {
        const { init } = this.field;

        return (
            <Form field={this.field} onSubmit={this.onSubmit.bind(this)} labelCol={{ offset: 6 }} wrapperCol={{ offset: 6 }}>
                <Form.Item label="用户名" help="额外的提示信息">
                    <Input style={{ width: '70%' }} placeholder="请输入用户名..." {...init('userName', {
                        rules: [{ required: true, message: '用户名不能为空' }]
                    })} />
                </Form.Item>

                <Form.Item label="邮箱">
                    <Input style={{ width: '70%' }} placeholder="请输入邮箱..." {...init('email', {
                        rules: [
                            { required: true, message: '验证邮箱不允许为空' }
                        ]
                    })} />
                </Form.Item>

                <Form.Item label="密码">
                    <Input style={{ width: '70%' }} type="password" placeholder="请输入密码..." {...init('password', {
                        rules: [
                            { required: true, message: '密码不能为空' }
                        ]
                    })} />
                </Form.Item>

                <Form.Item label="确认密码">
                    <Input style={{ width: '70%' }} type="password" placeholder="请输入密码..." {...init('password1', {
                        rules: [
                            { required: true, message: '请再次输入密码' },
                            { validator: (name, value, callback) => {
                                    const passValue = this.field.getValue('password');

                                    if (value !== passValue) {
                                        callback('两次密码不一致');
                                    } else {
                                        callback();
                                    }
                                } }
                        ]
                    })} />
                </Form.Item>

                <Form.Item label="备注">
                    <Input.Textarea style={{ width: '70%' }} autoSize minRows={2} placeholder="备注信息..." {...init('remarks')} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 6 }}>
                    <Button htmlType="submit" type="primary" style={{ marginRight: 10 }}>提交</Button>
                    <Button onClick={this.onReset.bind(this)}>重置</Button>
                </Form.Item>
            </Form>
        )
    }
}
