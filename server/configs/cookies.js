const configs = {
    secret: "My cookies signing secret",
    options: {
        httpOnly: true,
        secure: false
    },
    tokenCookieName:"authCookie"
}

function getConfigs() {
    if (process.env.NODE_ENV === "production") {
        configs.secret = process.env.COOKIES_SECRET;
        configs.options.secure = true; // Omit this line when NOT SERVED OVER HTTPS!
    }

    return configs;
}

module.exports = getConfigs();
