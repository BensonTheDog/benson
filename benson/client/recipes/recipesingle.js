Template.recipesingle.onCreated(function() {
    var self = this;
    self.autorun(function() {
        var id = FlowRouter.getParam('id');
       self.subscribe('singlerecipe', id); 
    });
});


Template.recipesingle.helpers({
    recipe: ()=> {
        var id = FlowRouter.getParam('id');
        return recipes.findOne({_id: id});
    }
});
