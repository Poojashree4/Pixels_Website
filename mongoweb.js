
const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost:27017";

//connect 
async function connect() {
  const client = new MongoClient(uri);
  await client.connect();
  return client;
}


app.post("/login", async (req, res) => {
  try {
    const client = await connect();
    const userCol = client.db("Logindetails").collection("details");
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await userCol.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.log("Login error:", error);
    res.status(500).json({ error: "Server Error" });
  }
});


app.post("/register", async (req, res) => {
  try {
    const client = await connect();
    const userCol = client.db("Logindetails").collection("details");
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Check
 const existingUser = await userCol.findOne({ email });
  if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

 // Insert
  const result = await userCol.insertOne({ email, password });
    if (result.insertedId) {
      return res.status(201).json({ message: "User registered successfully", user: { email } });
    } else {
      return res.status(500).json({ error: "Failed to register user" });
    }
  } 
  catch (error) {
    console.log("Registration error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.get("/api/movies", async (req, res) => {
  try {
    const client = await connect();
    const moviesCol = client.db("Logindetails").collection("maindata"); 
    const movies = await moviesCol.find({}).toArray();
    res.status(200).json(movies);
  } catch (error) {
    console.log("Error fetching movies:", error);
    res.status(500).json({ error: "Server Error" });
  }
});


app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
