const authCheck = () => {
    if (!Meteor.userId()) {
        Router.go('/')
    }
};

Router.route('/', {
    template: 'SignIn',
    onBeforeAction: function () {
        Meteor.logout();
        this.next();
    }
});

Router.route('/sign-up', {
        template: 'SignUp',
        waitOn: function () {
            return Meteor.subscribe('userInfo');
        },
        data:  function () { return Meteor.users.findOne({_id: Meteor.userId()})}
    }
);

Router.route('/sign-up-review', {
        template: 'SignUpReview',
        waitOn: function () {
            return Meteor.subscribe('userInfo');
        },
        onBeforeAction: function () {
            authCheck();
            this.next();
        },
        data:  function () { return Meteor.users.findOne({_id: Meteor.userId()})}
    }
);
