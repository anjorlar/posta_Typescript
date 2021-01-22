import { pid } from "process"
import { IPosts } from "../model/IPost"
import { posts } from "../model/post"

class PostServices {
    get(id: string): any {
        return posts.findOne({ _id: id }).exec()
    }

    getIdOfPost(id: number): any {
        return posts.findOne({ pid: id }).exec()
    }

    createPostData(data) {
        posts.create(data)
    }
}

export default new PostServices()