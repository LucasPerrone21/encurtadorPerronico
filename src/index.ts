import express  from "express";
import {env} from "./enviroment/env";
import encurtedLinkRouter from "./routes/EncurtedLinkRoute";

const app = express();

app.use(express.json());



app.get("/", (req, res) => {
  res.send("Hello World");
});


app.use("/encurted", encurtedLinkRouter);



app.listen(env.NODE_PORT, () => {
    console.log(`Server is running on port ${env.NODE_PORT}🚀`);
})