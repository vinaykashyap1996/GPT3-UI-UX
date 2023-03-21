import React from 'react'
import { Google,Slack,Shofipy,Atlassian,Dropbox } from './imports'
import './Brand.css'
const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={Google} alt='Google' />
      </div>
      <div>
        <img src={Slack} alt='Slack' />
      </div>
      <div>
        <img src={Atlassian} alt='Atlassian' />
      </div>
      <div>
        <img src={Dropbox} alt='Dropbox' />
      </div>
      <div>
        <img src={Shofipy} alt='Shofipy' />
      </div>
      </div>
  )
}

export default Brand