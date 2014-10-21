var NotesModelView = Backbone.View.extend({
  el: $('.content'),

  model: NotesModel,

  initialize: function(){
    this.render();
  },

  template: _.template(''+
    '<div class="panel panel-info">' +
      '<div class="panel-heading">' +
        '<h3 class="panel-title"><%= type %>:</h3>' +
      '</div>' +
      '<div class="panel-body">' +
        '<p><%= body %></p><br>' +
      '</div>' +
    '</div>'
  ),

  render: function(){
    this.$el.append(this.template(this.model.attributes));
  }
});