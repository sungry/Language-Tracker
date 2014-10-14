var ViewView = Backbone.View.extend({

  initialize: function() {
    $('.content').html('');
    // Populate Notes Collection with Notes Models from Firebase
    var types = [];
    console.log(this.collection, 'view collection, same?');
    new NotesCollectionView({collection: this.collection});
  }
});