import React from 'react';
import video from '../video/video.mp4'
import {Link} from 'react-router-dom'
import icon from '../image/left-icon.png.png'

const VideoLink = () => {
    return (
       <div>
       <div className='video_home'>
            <video poster ='https://npointseo.com/wp-content/uploads/2021/01/what-is-seo-search-engine-optimization.jpg' className='home_video'src={video} controls/>
        </div>
        <Link className='sol_back' to='/'>
           <img src={icon} alt="" className='left_btn' />
           Back to main page</Link>
        </div>
    );
};

export default VideoLink;