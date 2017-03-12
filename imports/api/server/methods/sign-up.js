import {Meteor} from 'meteor/meteor';

Meteor.methods({
    saveUserInfo(val) {
        check(val, {
            firstName: String,
            lastName: String,
            email: String,
            phone: String,
            birthday: String,
            startedSkatingYear: String,
            zipCode: String
        });

        Meteor.users.update({_id: this.userId},
            {
                $set: {
                    "profile.firstName": val.firstName.trim(),
                    "profile.lastName": val.lastName.trim(),
                    "profile.email": val.email.trim(),
                    "profile.phone": val.phone.trim(),
                    "profile.birthday": val.birthday.trim(),
                    "profile.startedSkatingYear": val.startedSkatingYear.trim(),
                    "profile.zipCode": val.zipCode.trim()
                }
            }, (err, result) => {
                if (err) {
                    throw new Meteor.Error(err.message);
                }
            }
        );
    }
});
