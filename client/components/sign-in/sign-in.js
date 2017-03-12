Template.SignIn.events({
    'click #facebook-login': function(event) {
        Meteor.loginWithFacebook({
            requestPermissions: ['public_profile', 'user_birthday', 'email']
        }, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
            else {
                Router.go('/sign-up');
            }
        });
    }
});