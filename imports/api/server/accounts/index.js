Accounts.onCreateUser((options, user ) => {
    let facebookService = user.services.facebook;

    if (facebookService) {
        user.profile = {
            "firstName": facebookService['first_name'] || '',
            "lastName": facebookService['last_name'] || '',
            "email": facebookService['email'] || '',
            "phone": '',
            "birthday": facebookService['user_birthday'] || '',
            "startedSkatingYear": '',
            "zipCode":''
        };
    }

    return user;
});

