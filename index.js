import express from "express";
import "dotenv/config";
import cors from "cors";
import { creatingGraphqlServer } from "./src/graphql/index.js";
import { expressMiddleware } from "@apollo/server/express4";
import { connectingToDb } from "./Database/mongoose.js";
const app = new express();
await connectingToDb();

const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is up and running" });
});
const server = await creatingGraphqlServer();
app.use("/graphql", expressMiddleware(server));
//conencting to Mongo db
app.listen(PORT, () => {
  console.log(`🚀 App started at port:${PORT}`);
});
