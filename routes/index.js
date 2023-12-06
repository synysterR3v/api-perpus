import express  from "express";
import { CreateUser, getUsers, Register } from "../controller/Users.js";

const router = express.Router();

router.get('/users', getUsers);
router.post('/users', Register);
router.post('/users/add', CreateUser);


export default router;