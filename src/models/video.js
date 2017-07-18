var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    //console.log(video);
    this.set('id', video.id.videoId);
    this.set('description', video.snippet.description);
    this.set('title', video.snippet.channelTitle);


  },

  select: function() {
    this.trigger('select', this);
  }

});
