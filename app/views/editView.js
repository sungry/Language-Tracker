var EditView = Backbone.View.extend({

  el: $('.content'),



  initialize: function() {
    this.render();
  },

  events: {
    'click button': 'save'
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

  template: _.template( $("#edit").html(), {} ),

  render: function() {
    this.$el.html(this.template);
  }
});
