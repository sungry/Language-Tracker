var ViewView = Backbone.View.extend({

  initialize: function() {
    $('.content').html('');
    // Populate Notes Collection with Notes Models from database
    var types = [];
    _.each(db, function(bodies, type) {
      _.each(bodies, function(body) {
        types.push({
          type: type.slice(0,1).toUpperCase() + type.slice(1),
          body: body
        });
      });
    });
    
    // Add models [{type: 'question', body: '?'}, {type: 'research', body: 'stuff'}]
    var myCollection = new NotesCollection();
    myCollection.add(types);

    // Create new Collection View causing rendering of models to page
    new NotesCollectionView({collection: myCollection});
  }
});