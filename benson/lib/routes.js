//Only available on gwyendolyn package
//During Login, go to recipe-book 
//Only in client code
if (Meteor.isClient) {
    Accounts.onLogin(function() {
        FlowRouter.go('/recipe-book');
    });
//Only available on gwyendolyn package
//During logout, redirecting to home
    Accounts.onLogout(function() {
        FlowRouter.go('home');
    });
}

//if there flowrouter is triggered, do the fucntion from context
FlowRouter.triggers.enter([function(context, redirect){
    // if this Meteor user id doesn't exist, go home
    if(!Meteor.userId()){
        FlowRouter.go('home');
    }
}]);
 

FlowRouter.route('/',{
    name: 'home',
    action() {
        if(Meteor.userId()){
            FlowRouter.go('/recipe-book');
        }
        GAnalytics.pageview();
        BlazeLayout.render('homelayout');
    }
});

FlowRouter.route('/recipe-book',{
    name: 'recipe-book',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('mainlayout', {main: 'recipes'});
    }
});

FlowRouter.route('/recipe/:id',{
    name: 'recipe-book',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('mainlayout', {main: 'recipesingle'});
    }
});

FlowRouter.route('/menu',{
    name: 'menu',
    action() {
        BlazeLayout.render('mainlayout', {main: 'menu'});
    }
});


FlowRouter.route('/cripple',{
    name: 'cripple',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('cripplelayout');
    }
});