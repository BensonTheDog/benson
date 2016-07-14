Template.recipes.onCreated(function() {
    var self = this;
    self.autorun(function() {
// ^unsubscribes us from any old subscriptions^
       self.subscribe('recipes'); 
// ^subscribes to recipes^
    });
});


Template.recipes.helpers({
    recipes: ()=> {
        return recipes.find({});
    }
});
