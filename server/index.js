const express = require("express");
const path = require("path");
const app = express();

const port = 5000;

const { MongoClient, ServerApiVersion } = require("mongodb");

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("mongoldb right");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log("listening at", port);
});
