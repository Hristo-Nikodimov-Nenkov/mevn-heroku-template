const configs = {
    secret: "My JWT signing secret.",
    options: {
        issuer: "localhost:5000",
        audience: "localhost:5000",
        expiresIn: "24h"
    }
}

function getConfigs() {
    if (process.env.NODE_ENV === "production") {
        configs.secret = process.env.JWT_SECRET;
        configs.options.issuer = process.env.BASE_URL;
        configs.options.audience = process.env.BASE_URL;
        configs.options.expiresIn = process.env.JWT_EXPIRY;
    }

    return configs;
}

module.exports = getConfigs();
