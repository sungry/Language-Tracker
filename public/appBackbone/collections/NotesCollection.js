var NotesCollection = Backbone.Firebase.Collection.extend({
  model: NotesModel,
  firebase: new Firebase('https://language-tracker.firebaseio.com/')
});