import React, {useState} from 'react'
import { Anchor } from 'antd';
import { Button, Drawer } from 'antd';

const { Link } = Anchor;


export default function AppHeader() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className='container'>
        <div className='header'>
            <div className="logo">
                <i className='fas fa-bolt'></i>
                <a href='https://github.com/barbaragagro/antdesign-website'>Barbara's website</a>
            </div>
            <div className='mobileHidden'>
                <Anchor targetOffset={65}>
                  <Link href="#carousel" title="Home" />
                  <Link href="#about" title="About" />
                  <Link href="#feature" title="Features" />
                  <Link href="#works" title="How it works" />
                  <Link href="#faq" title="FAQ" />
                  <Link href="#pricing" title="Pricing" />
                  <Link href="#contact" title="Contact" />
                </Anchor>
            </div>
            <div className='mobileVisible'>
              <Button type="primary" onClick={showDrawer}>
                <i className='fas fa-bars'></i>
              </Button>
              <Drawer  placement="right" onClose={onClose} open={open}>
                <Anchor targetOffset={65}>
                    <Link href="#carousel" title="Home" />
                    <Link href="#about" title="About" />
                    <Link href="#feature" title="Features" />
                    <Link href="#works" title="How it works" />
                    <Link href="#faq" title="FAQ" />
                    <Link href="#pricing" title="Pricing" />
                    <Link href="#contact" title="Contact" />
                  </Anchor>
              </Drawer>
            </div>
        </div>
    </div>
  )
}
