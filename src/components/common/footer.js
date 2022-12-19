import React from 'react'
import { FloatButton } from 'antd';

export default function AppFooter() {
  return (
    <div className='container'>
        <div className='footer'>
            <div className='logo'>
                <i className='fas fa-bolt'></i>
                <a href='https://ant.design/'>Footer</a>
            </div>
            <ul className='socials'>
                <li><a href='https://www.facebook.com/'><i className='fab fa-facebook-f'></i></a></li>
                <li><a href='https://twitter.com/'><i className='fab fa-twitter'></i></a></li>
                <li><a href='https://www.linkedin.com/'><i className='fab fa-linkedin-in'></i></a></li>
                <li><a href='https://www.pinterest.com/'><i className='fab fa-pinterest-p'></i></a></li>
                <li><a href='https://www.instagram.com/'><i className='fab fa-instagram'></i></a></li>
            </ul>
            <div className='copyright'>Copyright &copy; 2022 Barbara</div>
            <FloatButton.BackTop />
        </div>
    </div>
  )
}
