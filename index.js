const express =require('express');
const cors =require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port =process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


// user : admin
// pass : admin



const uri = "mongodb+srv://admin:admin@cluster0.07lgbsy.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try{
        const userCollection =client.db('nodeMongoCruds').collection('users');
        const user={
            name: 'testing test',
            email: 'testingtest@gmail.com'
        }
        const result =await userCollection.insertOne(user);
        console.log(result);
    }
    finally{

    }
}


run().catch(err =>console.log(err));




app.get('/',(req, res)=>{
    res.send('Hello from node mongo');
});

app.listen(port, () =>{
    console.log(`listening to port ${port}`);
})






