var NotesCollectionView = Backbone.View.extend({
  initialize: function(){
    this.render();
  },

  render: function(){
    _.each(this.collection.models, function(model){
      new NotesModelView({model: model});
    });
  }
});