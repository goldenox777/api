const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const entry = require("./routes/entry.routes");
const run = require("./routes/run.routes")

const app = express();
const port = process.env.PORT || 5000;

require("dotenv").config();

mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4yexc.mongodb.net/api?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log('MongoDB Connected')
    }
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/entries", entry);
app.use("/runs", run);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

app.get('/', (req, res) => {
    res.send("Hello World!")
})