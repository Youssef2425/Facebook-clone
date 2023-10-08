import React from 'react'
import './menuLink.scss';

function MenuLink({Icon, text, Img}) {
  return (
    <>
      <div className='menuLink'>
        {Icon}
        {Img}
        <span className='menuLinkText'> {text} </span>
        <span className='menuLinkTextName'> {text === "Logout" && "(Youssef)" } </span>
      </div>
    </>
  )
}

export default MenuLink