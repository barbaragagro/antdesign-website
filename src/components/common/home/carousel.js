import React from 'react';
import { Carousel } from 'antd';
import { Button } from 'antd';


export default function AppCarousel() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const items=[
    {
      key:1,
      title: 'Website',
      content: 'This website is made for practice purposes only.'
    },
    {
      key:2,
      title: 'Made with AntDesign',
      content: 'Practicing making frontend part of the website using React.js and AntDesign.'
    },
    {
      key:3,
      title: 'Carousel component',
      content: 'This is the carousel component.'
    },
    {
      key:4,
      title: 'Title text',
      content: 'Put some text here'
    }
];
  
  return (
    <div className='carouselBlock' id='carousel'>
          <Carousel afterChange={onChange}>
              {items.map(item=>{
                return(
                  <div className='container' key={item.key}>
                    <div className='content' >
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                        <div className='btnHolder'>
                          <Button type="primary" size='large'>Blue Button</Button>
                          <Button size='large'> White Button</Button>
                        </div>
                    </div>
                  </div>
                )
              })}
          </Carousel>
    </div>
  )
}
