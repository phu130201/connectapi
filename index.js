import mongoose from 'mongoose';
import fetch from 'node-fetch';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

mongoose.connect("mongodb+srv://phu130201:mn55y8kv@cluster0.a13tkuy.mongodb.net/connect?retryWrites=true&w=majority")
mongoose.set('strictQuery', false)
const postSchema = new mongoose.Schema({

    _id: {
        type:  String,
        require: true
    },
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    },
});
const Post = mongoose.model('Players', postSchema);

async function getPost(){
    // var ObjectId = require('mongodb').ObjectId;
    var mongodb = require('mongodb');
    const myPost = await fetch("https://jsonplaceholder.typicode.com/users/1/todos");
    const response = await myPost.json();

    for( let i = 0;i < response.length; i++){
    const post = new Post({
        _id:  ('1e19d0ce-ad09-4225-9ad8-b562fa8ebce1'),
        title: response[i]['title'],
        completed: response[i]['completed'],
    });
    post.save();
    
    
        }
    }   
getPost();