Recipes = new Mongo.Collection('recipes');

Recipes.allow({
    insert: function(userId, doc){
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    }
});

Ingredient = new SimpleSchema({
    name: {
        type: String
    },
    amount: {
        type: String
}
});

RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    desc: {
        type: String,
        label: "Description"
    },
    ingredients:{
        type:[Ingredient]
    },


});

Meteor.methods({
 
    deleteRecipe: function(id){
        Recipes.remove(id);
    }
});

Recipes.attachSchema(RecipeSchema);