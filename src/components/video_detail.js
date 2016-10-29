import React, { PropTypes } from 'react';

const VideoDetail = ({video}) => {   
    if (video){ return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} className="embed-responsive-item"></iframe>
      </div>
      <div className="details">
        <div>
          {video.snippet.title}
        </div>
        <div>
          {video.snippet.description}
        </div>
      </div>
    </div>
    ) } else {
      return (<div>
        Loading . . .
      </div>);
    }
 };

VideoDetail.defaultProps = {
};

VideoDetail.propTypes = {
};

export default VideoDetail;
