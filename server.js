import express from 'express';
import helloController from "./controllers/hello-controller.js";
import tuitsController from './controllers/tuits-controller.js';
import userController   from "./controllers/user-controller.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
helloController(app);
userController(app);
tuitsController(app);
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(process.env.PORT || 4000);