import express from "express"
import {ticket} from "../controllers/ticket"
const router=express.Router()

router.post("/ticket",ticket)

export default router;