const configs = {
    secret: "My JWT signing secret.",
    issuer: "localhost:5000",
    audience: "localhost:5000",
    expiry: "24h"
}

function getConfigs() {
    if (process.env.NODE_ENV === "production") {
        configs.secret = process.env.JWT_SECRET;
        configs.issuer = process.env.BASE_URL;
        configs.audience = process.env.BASE_URL;
        configs.expiry = process.env.JWT_EXPIRY;
    }

    return configs;
}

module.exports = getConfigs();
