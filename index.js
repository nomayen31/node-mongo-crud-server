const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// name :dbuser2
// password: oQcL0s6KU6IAlVOx




const uri = "mongodb+srv://dbuser2:oQcL0s6KU6IAlVOx@cluster0.07lgbsy.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const userCollection = client.db('nodeMongoCrud').collection('users');

        const user = {
            name:'testing test',
            email:'testing@gmail.com'
        }
        const result =await userCollection.insertOne(user);
        console.log(result);
    }
    finally {
//              11-50-----------------------------
    }
}

run().catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello from nodemongo crud server')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})