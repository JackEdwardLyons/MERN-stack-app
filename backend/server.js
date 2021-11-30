import express from "express";
import cors from "cors";
import restaurants from "./api/restaurants.route.js";

const app = express();
const apiEndpoint = "/api/v1/restaurants";

app.use(cors());
// No longer need to use bodyParser as it's built into express.
app.use(express.json());

// Main API url
app.use(apiEndpoint, restaurants);
// Wildcard route defaulting to 404
app.use("*", (req, res) => res.status(404).json({ error: "Not found" }));

export default app;
