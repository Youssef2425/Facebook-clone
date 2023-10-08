import React from 'react'
import { UsersPosts } from '../../data';
import Posts from '../posts/Posts';
import Share from '../share/Share';
import Stories from '../stories/Stories';
import './timeLine.scss';

function TimeLine() {
  return (
    <>
      <div className="timeLine">
        <div className="container">
          <Stories />
          <Share />
          {
            UsersPosts.map((p) =>(
              <Posts key={p.id} Posts={p} />
            ))
          }
        </div>  
      </div>
    </>
  )
}

export default TimeLine