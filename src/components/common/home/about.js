import React from 'react'
import { Row, Col } from 'antd'

export default function AppAbout() {
    const items=[
        {
            key:1,
            icon: <i className='fas fa-chart-pie'></i>,
            title: 'Title1',
            content: 'More text should go here.  More text should go here.  More text should go here.  More text should go here.  More text should go here.  More text should go here.  More text should go here.  More text should go here.'
          },
          {
            key:2,
            icon: <i className='fas fa-desktop'></i>,
            title: 'Title2',
            content: 'More text should go here.  More text should go here.  More text should go here.  More text should go here.  More text should go here.  More text should go here.  More text should go here.  More text should go here.'
          },
          {
            key:3,
            icon: <i className='fas fa-database'></i>,
            title: 'Title3',
            content: 'More text should go here.  More text should go here.  More text should go here.  More text should go here.  More text should go here.  More text should go here.  More text should go here.  More text should go here.'
          }
    ];
  return (
    <div id='about' className='block aboutBlock'>
        <div className='container'>
            <div className='titleHolder'>
                <h2>About us</h2>
                <p>about us text</p>
            </div>
            <div className='contentHolder'>
                <p> There are 3 columns bellow. More text should go here. More text should go here.  More text should go here.  More text should go here.  More text should go here.  More text should go here.  More text should go here.  More text should go here.  More text should go here.  More text should go here.  More text should go here.  More text should go here.  More text should go here.  More text should go here.  More text should go here.  More text should go here.  More text should go here.   </p>
            </div>
            <Row gutter={[16, 16]}>
                {items.map(item=>{
                    return(
                        <Col 
                          md={{ span: 8 }}
                          key={item.key}>
                            <div className='content'>
                                <div className='icon'>
                                    {item.icon}
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        </Col>
                    )
                })}

                {/* <Col span={8}>Column</Col>
                <Col span={8}>Column</Col>
                <Col span={8}>Column</Col> */}
            </Row>
        </div>
    </div>
  )
}
