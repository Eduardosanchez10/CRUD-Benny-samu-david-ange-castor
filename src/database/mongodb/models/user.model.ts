import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, 'name is required'],
        },
        email:{
            type: String,
            required: [true, 'email is required'],
        },
        password:{
            type:String,
            required: [true, 'password is required'],
        },
        roles:{
            type: Array,
            default: ['USER_ROLE'],
            required: [true, 'role is required'],
        },
        img:{
            type: String,
            required: [true, 'image is required'],
        }
    });

export const UserModel = mongoose.model('User', userSchema);
