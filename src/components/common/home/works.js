import React, { useState } from 'react';
import { Button, Modal } from 'antd';

export default function AppWorks() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  return (
    <div id='works' className='block worksBlock'>
        <div className='container'>
            <div className='titleHolder '>
                <h2>How it works</h2>
                <p>Explanation text</p>
            </div>
            <div className='contentHolder'>
                <Button  onClick={showModal}>
                    <i className='fas fa-play'></i>
                </Button>
            </div>
            <Modal title="Video from nike's youtube channel" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
            footer={null}
            >
            <iframe width="100%" height="360" src="https://www.youtube.com/embed/ODadUkT9dHA" title="Cosmic Unity 2 | Behind The Design | Nike" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                
            </Modal>
        </div>
    </div>
  )
}
