import React, { PropTypes } from 'react';
import VideoListItem from './video_list_item.js';

const VideoList = ({videos,onVideoSelect}) => {
  const videoarr = videos.map((video) => (<VideoListItem key={video.etag} onVideoSelect={onVideoSelect} video={video} />) );
  return (
    <ul className="col-md-4 list-group">
      {videoarr}
    </ul>
  );
}
VideoList.defaultProps = {
};

VideoList.propTypes = {
};

export default VideoList;
