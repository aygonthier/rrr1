import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Post from './models/post'


const app = express();
const router = express.Router();

//Middleware for CORS
app.use(cors())

//Middleware for bodyparsing using both json and urlencoding
//app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/remens');

const connection = mongoose.connection;

connection.once('open', () =>{
  console.log('mongodb database connection established succesfully')
});

router.route('/posts').get((req, res)=>{
  Post.find((err, posts) => {
    if (err)
      console.log(err);
    else
      res.json(posts);
    });
});

router.route('/page/:prenom/:nom/:id').get((req, res)=>{
  Post.find({peopleId : req.params.id} ,(err, posts) => {
    if (err)
      console.log(err);
    else
      res.json(posts);
    });
});

app.use('/', router)
app.use('/posts', router)
app.use('/page/:prenom/:nom/:id', router)

// Listen to port 4000
app.listen(4000, () => console.log("express server is running on port 4000"))

module.exports = router;
