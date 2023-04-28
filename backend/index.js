const express = require("express");
const app = express();
var cookieParser = require('cookie-parser');
const cors = require("cors");
const helmet = require("helmet");

const personalData = require("./routes/personalData");

app.use(cors(
    { credentials: true, origin: "http://localhost:8080"}
));
//app.enable('trust proxy');

app.use(helmet());
app.use(cookieParser());


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/personaldata", personalData);

const PORT = 2000;
app.listen(PORT, () => {
    console.log("Listening on ", PORT);
});
