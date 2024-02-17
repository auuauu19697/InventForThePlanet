const express = require('express');
const cors = require('cors')
const { MongoClient, BSON } = require('mongodb');
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const port = 7777;
const uri = "mongodb+srv://aupisit33:645Q1Q7wSLmoeQC3@cluster0.y9x1ckt.mongodb.net/?retryWrites=true&w=majority";

app.use(cors({
  origin: '*'
}));


let client, db;

async function connectToDatabase() {
  try {
    client = new MongoClient(uri);

    await client.connect();
    db = client.db("INVFP");
    console.log("Connected to MongoDB Atlas!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if unable to connect
  }
}

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get("/test", async (req, res) => {
  try {
    // Ensure the database connection is established
    if (!client) {
      await connectToDatabase();
    }

    const collection = db.collection("Priority");
    const results = await collection.find({}).toArray();
    res.json(results[0]);
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

// Close MongoDB connection when the Node.js process is terminated
process.on('SIGINT', async () => {
  try {
    if (client) {
      await client.close();
      console.log("MongoDB connection closed.");
    }
  } finally {
    process.exit(0);
  }
});

app.post("/updatePriority", async (req, res) => {
  try {
    if (!client) {
      await connectToDatabase();
    }

    const collection = db.collection("Priority");
    const updatedPriorityData = {
      soc1: req.body.soc1,
      soc2: req.body.soc2,
      soc3: req.body.soc3,
      soc4: req.body.soc4,
      soc5: req.body.soc5,
      soc6: req.body.soc6,
    }; 

    // Update the existing priority based on the provided identifier
    const result = await collection.updateOne({ _id: new BSON.ObjectId("65cfb9b73467bcd54b165ec5") }, { $set: updatedPriorityData });
    
    if (result.matchedCount > 0) {
      res.json({ message: "Priority updated successfully", modifiedCount: result.modifiedCount });
    } else {
      res.status(404).json({ error: "Priority not found" });
    }
  } catch (error) {
    console.error("Error updating priority in MongoDB:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//soc1
app.post("/updatePriority/1", async (req, res) => {
  try {
    if (!client) {
      await connectToDatabase();
    }

    const collection = db.collection("Priority");
    const updatedPriorityData = {
      soc1: req.body.soc,
    }; 

    // Update the existing priority based on the provided identifier
    const result = await collection.updateOne({ _id: new BSON.ObjectId("65cfb9b73467bcd54b165ec5") }, { $set: updatedPriorityData });
    
    if (result.matchedCount > 0) {
      res.json({ message: "Priority updated successfully", modifiedCount: result.modifiedCount });
    } else {
      res.status(404).json({ error: "Priority not found" });
    }
  } catch (error) {
    console.error("Error updating priority in MongoDB:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//soc2
app.post("/updatePriority/2", async (req, res) => {
  try {
    if (!client) {
      await connectToDatabase();
    }

    const collection = db.collection("Priority");
    const updatedPriorityData = {
      soc2: req.body.soc,
    }; 

    // Update the existing priority based on the provided identifier
    const result = await collection.updateOne({ _id: new BSON.ObjectId("65cfb9b73467bcd54b165ec5") }, { $set: updatedPriorityData });
    
    if (result.matchedCount > 0) {
      res.json({ message: "Priority updated successfully", modifiedCount: result.modifiedCount });
    } else {
      res.status(404).json({ error: "Priority not found" });
    }
  } catch (error) {
    console.error("Error updating priority in MongoDB:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//soc3
app.post("/updatePriority/3", async (req, res) => {
  try {
    if (!client) {
      await connectToDatabase();
    }

    const collection = db.collection("Priority");
    const updatedPriorityData = {
      soc3: req.body.soc,
    }; 

    // Update the existing priority based on the provided identifier
    const result = await collection.updateOne({ _id: new BSON.ObjectId("65cfb9b73467bcd54b165ec5") }, { $set: updatedPriorityData });
    
    if (result.matchedCount > 0) {
      res.json({ message: "Priority updated successfully", modifiedCount: result.modifiedCount });
    } else {
      res.status(404).json({ error: "Priority not found" });
    }
  } catch (error) {
    console.error("Error updating priority in MongoDB:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//soc4
app.post("/updatePriority/4", async (req, res) => {
  try {
    if (!client) {
      await connectToDatabase();
    }

    const collection = db.collection("Priority");
    const updatedPriorityData = {
      soc4: req.body.soc,
    }; 

    // Update the existing priority based on the provided identifier
    const result = await collection.updateOne({ _id: new BSON.ObjectId("65cfb9b73467bcd54b165ec5") }, { $set: updatedPriorityData });
    
    if (result.matchedCount > 0) {
      res.json({ message: "Priority updated successfully", modifiedCount: result.modifiedCount });
    } else {
      res.status(404).json({ error: "Priority not found" });
    }
  } catch (error) {
    console.error("Error updating priority in MongoDB:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//soc5
app.post("/updatePriority/5", async (req, res) => {
  try {
    if (!client) {
      await connectToDatabase();
    }

    const collection = db.collection("Priority");
    const updatedPriorityData = {
      soc5: req.body.soc,
    }; 

    // Update the existing priority based on the provided identifier
    const result = await collection.updateOne({ _id: new BSON.ObjectId("65cfb9b73467bcd54b165ec5") }, { $set: updatedPriorityData });
    
    if (result.matchedCount > 0) {
      res.json({ message: "Priority updated successfully", modifiedCount: result.modifiedCount });
    } else {
      res.status(404).json({ error: "Priority not found" });
    }
  } catch (error) {
    console.error("Error updating priority in MongoDB:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//soc6
app.post("/updatePriority/6", async (req, res) => {
  try {
    if (!client) {
      await connectToDatabase();
    }

    const collection = db.collection("Priority");
    const updatedPriorityData = {
      soc6: req.body.soc,
    }; 

    // Update the existing priority based on the provided identifier
    const result = await collection.updateOne({ _id: new BSON.ObjectId("65cfb9b73467bcd54b165ec5") }, { $set: updatedPriorityData });
    
    if (result.matchedCount > 0) {
      res.json({ message: "Priority updated successfully", modifiedCount: result.modifiedCount });
    } else {
      res.status(404).json({ error: "Priority not found" });
    }
  } catch (error) {
    console.error("Error updating priority in MongoDB:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});