import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedVideo : exampleVideoData[0],
      videos : exampleVideoData
    };
    this.onClickTitle = this.onClickTitle.bind(this);
  }

  componentDidMount() {
    this.getYouTubeVideos('react tutorials');
  }

  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };
 
    this.props.searchYouTube(options, (videos) => 
      this.setState ({
        videos: videos,
        selectedVideo: videos[0]
      })
    );
  }

  // getYoutubeReady(query){
  //   _.debounce(() => this.getYouTubeVideos(query),500)();
  // }

  onClickTitle(video) {
    this.setState({
      selectedVideo : video
    });
  }
  //made changes, _.debounce
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleInputChange={_.debounce(this.getYouTubeVideos.bind(this)),500}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.selectedVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onClickTitle={this.onClickTitle} />
          </div>
        </div>
      </div>
    );
  }
}

//ReactDOM.render(React.createElement(VideoList), getElementById('.0.1.1.0.0.0'));

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

//ReactDOM.render(<App />, document.getElementById('app'));
