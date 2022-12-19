import React from 'react'
import { Card, List, Button} from 'antd';

const data = [
    {
      title: 'Basic',
      content: [
        {
          price: '$99.99',
          space: 'some text',
          user: 'some text',
          support: 'some text',
          backup: 'some text',
          access: 'some text'
        }
      ]
    },
    {
      title: 'Premium',
      content: [
        {
          price: '$199.99',
          space: 'some text',
          user: 'some text',
          support: 'some text',
          backup: 'some text',
          access: 'some text'
        }
      ]
    },
    {
      title: 'Enterprise',
      content: [
        {
          price: '$299.99',
          space: 'some text',
          user: 'some text',
          support: 'some text',
          backup: 'some text',
          access: 'some text'
        }
      ]
    }
  ];
  
  
  export default function AppPricing() {
    return (
        <div id='pricing' className='block pricingBlock bgGray'>
            <div className='container'>
                <div className='titleHolder'>
                        <h2>Chose a plan to fit your needs</h2>
                        <p>pricing</p>
                </div>
                <List
                grid={{
                gutter: 16,
                xs: 1,
                sm: 1,
                md: 3,
                lg: 3,
                xl: 3,
                xxl: 3,
                }}
                dataSource={data}
                renderItem={(item) => (
                <List.Item>
                    <Card title={item.title}>
                        <p className='large'>{item.content[0].price}</p>
                        <p>{item.content[0].space}</p>
                        <p>{item.content[0].user}</p>
                        <p>{item.content[0].support}</p>
                        <p>{item.content[0].backup}</p>
                        <p>{item.content[0].access}</p>
                        <Button type="primary" size='large'>
                            <i className='fab fa-telegram-plane'></i>
                            Get Started
                        </Button>

                    </Card>
                </List.Item>
                     )}
                    />
            </div>
        </div>
    )
  }