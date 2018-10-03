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
    
    success: function (resp) {
      callback(resp.items);
    },
    error: function (err) {
      console.log(err);
    }
  });
  
};
  
export default searchYouTube;
