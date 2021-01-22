import { Router } from "express"
import PostControllers from "../controllers/index"

const router = Router()

router.post('/create-post', PostControllers.createPost)


export default router