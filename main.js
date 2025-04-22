import express from 'express';
import moviesRoute from './routes/movies.routes.js';
import connectDB from './lib/db.js';

const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended : true}))

connectDB();

app.get('/', (req,res) =>{
    res.json({msg: "Hello Vipusa"});
})


app.use('/movies', moviesRoute);

app.listen(port, ()=>{
    console.log(`The server is running at http://localhost:${port}`);
} )