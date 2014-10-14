var ViewView = Backbone.View.extend({

  initialize: function() {
    $('.content').html('');
    // Populate Notes Collection with Notes Models from Firebase
    new NotesCollectionView({collection: this.collection});
  }
});