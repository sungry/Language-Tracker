var NotesModelView = Backbone.View.extend({
  el: $('.content'),

  model: NotesModel,

  initialize: function(){
    this.render();
  },

  template: _.template('<h3><%= type %>:<h3><p><%= body %></p><br>'),

  render: function(){
    this.$el.append(this.template(this.model.attributes));
  }
});