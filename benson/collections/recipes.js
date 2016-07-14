//THIS IS A JAVASCRIPT CODE COMMENT W/ //
//Recipes is a new Mongo collection from 'recepies.js'
//Mongo.collection is a grouping of mongodb documents
recipes = new Mongo.Collection('recipes');

//Adding a new allow statment for a logged in user to make/insert a recipe
recipes.allow({
   insert: function(userId, doc) {
        return !!userId;
   },
//Adding new allow statement for a logged in user to update a recipe    
    update: function(userId, doc) {
        return !!userId;
   },
})

//ingredient is a subdocument of the recipe schema 
//Name and Amount must be strings
ingredient = new SimpleSchema({
    name: {
        type: String
    },
    amount: {
        type: String 
    }
});

//  Name of new simple schema "Recipe Schema"
//  Type: all have to be strings
//  Label: pulls design element of "" from styles.styl
//  Autoform: type: 'hidden' available on clientside but hidden
RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    desc: {
        type: String,
        label: "Description"
    },
    ingredients: {
        type: [ingredient], 
    },
// Boolean is a true/false thingy 
    inMenu: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: "hidden",
        }
        
    },
    
// Automatically returns the current user's ID (only allowed to see own recipes)
    
    author: {
        type: String,
        label: "Author",
        autoValue: function() {
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },
//  CreatedAt is an autoform package that automatically returns date/time of when recipe was 
//  created
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {

        },    
        autoform: {
            type: "hidden"
        }        
    }
});

//  Declaring a mehtod from meteor 
//  [!< means opposite] inMenu value opposite of what it currently is
Meteor.methods({
//this method accepts id and current state
    toggleMenuItem: function(id, currentState){
        recipes.update(id, {
// $set replace false to opposite of current state
            $set: {
                inMenu: !currentState
            }
        })
    }
});


recipes.attachSchema ( RecipeSchema );