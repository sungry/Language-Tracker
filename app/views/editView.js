var EditView = Backbone.View.extend({

  el: $('.content'),

  initialize: function() {
    this.render();
  },

  events: {
    'click button.save': 'save',
    'click button.submit': 'submit'
  },

  save: function(){
    var type = $('.noteType option:selected').val();
    var input = $('textarea').val();
    // Reset text field
    $('textarea').val('');
    // Only save data if text was entered
    if (input.length) {
      this.collection.add({type: type, body: input});
    }
  },

  submit: function(){
    console.log('submitting focus')
  },

  template: _.template( $("#edit").html(), {date: (new Date()).toDateString()} ),

  render: function() {
    this.$el.html(this.template);
  }
});
