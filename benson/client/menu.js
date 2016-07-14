// use the template menu when it is created 
Template.menu.onCreated(function() {
    var self = this;
    self.autorun(function() {
// ^unsubscribes us from any old subscriptions^
       self.subscribe('recipes'); 
// ^subscribes to recipes^
    });
});


Template.menu.helpers({
    //if recipe is in menu, find it, and put it in th template menu
    
    recipes: ()=> {
        //
        return recipes.find({inMenu: true});
    }
});
