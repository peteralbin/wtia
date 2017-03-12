ServiceConfiguration.configurations.update(
    {service: "facebook"},
    {
        $set: JSON.parse(Assets.getText('service-config/facebook.json'))
    },
    {upsert: true}
);