Template.SignUp.events({
    'submit #signUpForm': function (e) {
        e.preventDefault();
        let target = e.target;

        let data = {
            firstName: target.firstName.value,
            lastName: target.lastName.value,
            email: target.email.value,
            phone: target.phone.value || '',
            birthday: target.birthday.value || '',
            startedSkatingYear: target.startedSkatingYear.value || '',
            zipCode: target.zipCode.value || ''
        }

        if (data.firstName || data.lastName || data.email) {
            Meteor.call('saveUserInfo', data, (err, res) => {
                if (err) {
                    throw new Meteor.Error(err.message);
                }
                else {
                    Router.go('/sign-up-review')
                }
            });
        }
        else {
            alert('firstName,lastName, email are required');
        }
    }
})