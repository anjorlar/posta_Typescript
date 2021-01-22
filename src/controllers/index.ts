import * as mongoose from "mongoose"
import { Request, Response } from "express"
import response from "../libs/response"
import pagination from "../libs/response"
import time from "../utils/getDate"
import PostServices from "../services/index"
import getCurrentTime from "../utils/getDate"
import { IPosts } from "../model/IPost"

class PostControllers {
    /**
     * @description
     * @param req 
     * @param res 
     * @returns
     */
    async createPost(req: Request, res: Response) {
        try {
            let { pid, title, text, country_id, language_id } = req.body
            const date = getCurrentTime()
            if (!pid || !title || !text || !country_id) {
                return res.status(400)
                    .send(response.error(400, `all fields (id, title, text, country_id) is required`))
            }
            const pidExist = await PostServices.getIdOfPost(pid)
            if (pidExist) {
                return res.status(400)
                    .send(response.error(400, 'pid already exist please pass another number as pid'))
            }
            const data = {
                pid, title, text, date, country_id, language_id
            }
            const createdData = await PostServices.createPostData(data)
            return res.status(201)
                .send(response.success(201, `post data created successfully`, createdData))
        } catch (error) {
            console.log('Internal server error', error)
            return res.status(500)
                .send(response.error(500, `Internal server error: ${error}`))
        }
    }
}

export default new PostControllers()