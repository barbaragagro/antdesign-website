import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
const { TextArea } = Input;

export default function AppContact() {

const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };

  return (
    <div className='block contactBlock' id='contact'>
        <div className='container'>
            <div className='titleHolder'>
                <h2>Get in Touch</h2>
                <p>Send us an email</p>
            </div>
            <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            >
            <Form.Item
                name="fullname"
                rules={[
                {
                    required: true,
                    message: 'Please input your full name!',
                },
                ]}
            >
                <Input placeholder="Full Name" />
            </Form.Item>
            <Form.Item
                name="email"
                rules={[
                {
                    required: true,
                    message: 'Please input your email!',
                },
                ]}
            >
                <Input
                type="email"
                placeholder="Email Address"
                />
            </Form.Item>
            <Form.Item
                name="telephone"
                rules={[
                {
                    required: true,
                    message: 'Please input your phone number!',
                },
                ]}
            >
                <Input placeholder="Telephone" />
            </Form.Item>
            <Form.Item
                name="subject"
            >
                <Input placeholder="Subject" />
            </Form.Item>
            <Form.Item
                name="message"
            >

                    <TextArea rows={4} placeholder="Message" />
                
            </Form.Item>
            
            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                {
                    validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                },
                ]}
                
            >
                <Checkbox>
                I agree with terms and conditions.
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                Submit
                </Button>
                
            </Form.Item>
            </Form>
        </div>
    </div>
  )
}
