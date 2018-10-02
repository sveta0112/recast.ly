import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    contentType: 'application/json',
    data: {
      part: 'snippet',
      key: options.key,
      q: options.query,
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: 'true'
    },
    timeout: 1000,
    success: function (resp) {
      callback(resp.items);
    },
    error: function (err) {
      console.log(err);
    }
  })
};
  // $.get('http://www.googleapis.com/youtube/v3/search', {
  //   console.log(options);
  //   key: options.key,
  //   q: options.query,
  //   part: 'snippet',
  //   max: options.max,
  //   type: 'video'
  // }).done(function(options) {
  //   console.log(options);
  //   callback(options);
  // })

 


export default searchYouTube;
