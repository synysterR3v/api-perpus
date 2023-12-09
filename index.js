import express from "express";
import db from "./config/Database.js";
import router from "./routes/index.js";
import dotenv from "dotenv";
import Users from "./models/UserModel.js";
import Biodata from "./models/ProfileModel.js";
import Absen from "./models/AbsenModel.js";
import Perpus from "./models/PerpusModel.js";
import Buku from "./models/BukuModel.js";
// import bodyParser from "body-parser";

dotenv.config();
const app = express();

(async () => {
  try {
    await db.authenticate();
    // console.log('Database Connected...');
    await Users.sync();
    await Biodata.sync();
    await Perpus.sync();
    await Absen.sync();
    await Buku.sync();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  app.use(express.json())
  // app.use(bodyParser.urlencoded({extended: true}));
  app.use(router);
})();


app.listen(5000, () => console.log('Server running at port 5000'));
