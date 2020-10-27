const configs = {
    secret: "My cookies signing secret",
    options: {
        httpOnly: true,
        secure: false
    }
}

function getConfigs(env) {
    if (env === "production") {
        configs.secret = process.env.COOKIES_SECRET;
        configs.options.secure = true; // Omit this line when NOT SERVED OVER HTTPS!
    }

    return configs;
}
