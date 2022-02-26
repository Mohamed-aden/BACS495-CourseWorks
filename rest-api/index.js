import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";

import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://moaden:0o31Zzjio89IRH0b@cluster0.uld1m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Database not Connected" + err);
  });

const app = express();

const PORT = 5000;

//MEDIA WARE
app.use(bodyParser.json());
app.use("/users", usersRoutes);

// Get Route
app.get("/", (req, res) => res.send("Hello from homepage"));

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);
