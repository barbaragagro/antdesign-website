import React from 'react'
import { Collapse, Button } from 'antd';

const { Panel } = Collapse;

const text1 = `
Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. 
`;
const text2 = `
Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. 
`;
const text3 = `
Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. Answer. 
`;

export default function AppFAQ() {
    const onChange = (key) => {
        console.log(key);
      };
      return (
        <div id='faq' className='block faqBlock'>
            <div className='container'>
                <div className='titleHolder'>
                    <h2>FAQ</h2>
                    <p>Frequently Asked Questions</p>
                </div>
                <Collapse defaultActiveKey={['1']} onChange={onChange}>
                <Panel header="Question 1" key="1">
                    <p>{text1}</p>
                </Panel>
                <Panel header="Question 2" key="2">
                    <p>{text2}</p>
                </Panel>
                <Panel header="Question" key="3">
                    <p>{text3}</p>
                </Panel>
                </Collapse>
                <div className='quickSupport'>
                    <h3>Want quick support?</h3>
                    <p>Send us an email</p>
                    <Button type="primary" size='large'>
                        <i className='fas fa-envelope'></i>
                        Email your question
                    </Button>
                </div>
            </div>
        </div>
      );
}

