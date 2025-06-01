import express from "express"
import {subscribe} from "../controllers/subscribecontroller"
const router=express.Router()

router.post("/subscribe",subscribe)

export default router