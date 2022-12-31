const {startBot} = require("./bot");

class Application {
    constructor() {
        this.configApp()
        startBot().then(() => console.log("bot start executed"));
    }

    configApp() {
        require("dotenv").config();
    }
}

module.exports = Application;
