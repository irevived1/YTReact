import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';

const API_KEY = 'AIzaSyAjhiHOy2d76BanN4V0RU7SH-hq3LzfWZc';


//Create a new Component.  This component should create some HTML
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {videos:[],selectedVideo:null};
    this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({key:API_KEY, term: term},videos => {
      this.setState({videos:videos,selectedVideo:videos[0]});
    });
  }

  render() {
    const videoSearch = _.debounce( term => this.videoSearch(term),300);
    return ( <div>
      <SearchBar onSearchTermChange={videoSearch} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList onVideoSelect={video => this.setState({selectedVideo:video}) } videos={this.state.videos} />
    </div>);
  }
}


//Take this component's generated HTML and put it on the page ( in the DOM )

// ReactDOM.render(<App/>,document.querySelector('.container'));
ReactDOM.render( <App/>,document.querySelector('.container'));
