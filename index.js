const {app} = require("./bin/Routes");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("server on ", PORT);
});