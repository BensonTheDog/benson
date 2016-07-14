//  meteor publishes 'recipes' and the author(which is current user) to respective author
//  meteor publishes 'single recipe' when requested 
//  ^^ checks id and makes sure it is string
//      if it is string, find the id and publish the id of that recipe 
Meteor.publish('recipes', function(){
    return recipes.find({author: this.userId});
});

Meteor.publish('singlerecipe', function(id){
    check(id, String);
    
    return recipes.find({_id: id});
});
