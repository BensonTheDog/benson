//looking for events within recipe
Template.recipe.events({
//  add to menu event on 
//   click of .toggle-menu 
//    toggles value in toggle value from false to true
    'click .toggle-menu': function() {
// name of method 'toggleMenuItem'
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    } 
});