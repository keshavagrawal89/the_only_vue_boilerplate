export default {
    apiURL: "https://a-happy-url.com/",
    commonMessage: "This message is read from Config file",
    appSettings: {
        secret: process.env.VUE_APP_TOP_SECRET,
        someVar: process.env.VUE_APP_FANCY_VARIABLE
    }
}