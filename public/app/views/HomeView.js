var HomeView = Backbone.View.extend({
  el: $('.content'),

  initialize: function(){
    this.$el.html('');
    this.render();
  },

  render: function(){
    var $welcome = $('<div class="homepage">' +
        '<div class="well">' +
        '<h1>Welcome, Language Enthusiast!</h1>' +
        '<br>' +
        '<h4>Language Tracker allows you ' +
        'to <em>document your progress</em> ' +
        'while learning a language and <em>keep you motivated</em> along the ' +
        'way! This site is under construction,' +
        ' so stay tuned for additional features.</h4>' +
        '<br>' +
        '<h2>Features to come:</h2>' +
        '<ul>' +
          '<li>View notes by day</li>' +
          '<li>Organize notes</li>' +
          '<li>Track studying by: </li>' +
            '<ul>' +
              '<li>Reading</li>' +
              '<li>Writing</li>' +
              '<li>Listening</li>' +
              '<li>Speaking</li>' +
            '</ul>' +
        '</ul>' +
        '</div>' +
      '</div>'
    );
    this.$el.append($welcome);
  }
});