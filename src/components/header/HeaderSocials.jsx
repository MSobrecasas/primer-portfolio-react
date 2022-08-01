import React from 'react'
import {RiLinkedinFill} from 'react-icons/ri'
import {RiGithubFill} from 'react-icons/ri'
import {RiDribbbleFill} from 'react-icons/ri'

export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="http://linkedin.com" target="_blank"> <RiLinkedinFill/> </a>
        <a href="http://github.com" target="_blank"> <RiGithubFill/> </a>
    </div>
  )
}

export default HeaderSocials