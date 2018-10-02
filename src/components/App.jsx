import Search from './Search.js';
import VideoList from './VideoList.js';

import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedVideo : exampleVideoData[0],
      videos : exampleVideoData
    };
    this.onClickTitle = this.onClickTitle.bind(this);
  }
  onClickTitle(video){
    this.setState({
      selectedVideo : video
    });
  }

  render() {
      return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.selectedVideo}/>
          </div>
           <div className="col-md-5">
            <VideoList 
             videos={this.state.videos}
             onClickTitle={this.onClickTitle} />
          </div>
        </div>
      </div>
    );
  };
};

//ReactDOM.render(React.createElement(VideoList), getElementById('.0.1.1.0.0.0'));

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

//ReactDOM.render(<App />, document.getElementById('app'));
