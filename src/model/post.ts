import { Document, Model, model, Schema } from "mongoose"
import { IPosts } from "./IPost"

export interface IPostModel extends IPosts, Document { }
const postSchema = new Schema({
    pid: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        minlength: 3,
        required: true,
        trim: true
    },
    text: {
        type: String,
        minlength: 3,
        required: true,
    },
    date: {
        type: String,
    },
    country_id: {
        type: String,
        required: true,
    },
    language_id: {
        type: Number,
    },
    updatedStatus: {
        type: Boolean,
        default: false
    },
    updatedTime: {
        type: [Date]
    }
}, { timestamps: true })

postSchema.index({ title: 'text', pid: 'number', text: 'text', updatedTime: 'number' })
export const posts: Model<IPostModel> = model<IPostModel>('posts', postSchema) 
