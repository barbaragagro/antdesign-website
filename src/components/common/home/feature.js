import React from 'react'
import image1 from '../../../assets/images/image1.jpg'
import image2 from '../../../assets/images/image2.jpg'
import image3 from '../../../assets/images/image3.jpg'
import image4 from '../../../assets/images/image4.jpg'
import image5 from '../../../assets/images/image5.jpg'
import image6 from '../../../assets/images/image6.jpg'
import { Row, Col, Card } from 'antd'
const { Meta } = Card;



export default function AppFeature() {
  return (
    <div id='feature' className='blok featureBlock bgGray'>
        <div className='container'>
        <div className='titleHolder paddingClass'>
                <h2>Key Features & Benefits</h2>
                <p>some text</p>
            </div>
        <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }}  sm={{ span: 12 }}  md={{ span: 8 }}>
                <Card
                    hoverable
                    cover={<img alt="example" src={image1} />}
                >
                    <Meta title="Title content1"  />
                </Card>
            </Col>
            <Col  xs={{ span: 24 }} sm={{ span: 12 }}  md={{ span: 8 }}>
                <Card
                    hoverable
                    cover={<img alt="example" src={image2} />}
                >
                    <Meta title="Title content2"  />
                </Card>
            </Col>
            <Col  xs={{ span: 24 }} sm={{ span: 12 }}  md={{ span: 8 }}>
                <Card
                    hoverable
                    cover={<img alt="example" src={image3} />}
                >
                    <Meta title="Title content3"  />
                </Card>
            </Col>
            <Col  xs={{ span: 24 }} sm={{ span: 12 }}  md={{ span: 8 }}>
                <Card
                    hoverable
                    cover={<img alt="example" src={image4} />}
                >
                    <Meta title="Title content4"  />
                </Card>
            </Col>
            <Col  xs={{ span: 24 }} sm={{ span: 12 }}  md={{ span: 8 }}>
                <Card
                    hoverable
                    cover={<img alt="example" src={image5} />}
                >
                    <Meta title="Title content5"  />
                </Card>
            </Col>
            <Col  xs={{ span: 24 }} sm={{ span: 12 }}  md={{ span: 8 }}>
                <Card
                    hoverable
                    cover={<img alt="example" src={image6} />}
                >
                    <Meta title="Title content6"  />
                </Card>
            </Col>
        </Row>
        </div>
    </div>
  )
}
