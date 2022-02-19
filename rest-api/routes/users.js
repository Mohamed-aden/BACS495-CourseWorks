import express from "express";
import { v4 as uuid4 } from "uuid";

const router = express.Router();

const users = [
  {
    firstName: "Mohamed",
    lastName: "Aden",
    age: 26,
  },
  {
    firstName: "John",
    lastName: "Doe",
    age: 26,
  },
];

// all routes from here are starting with /users
router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  const userWithId = { ...user, id: uuid4() };

  users.push(userWithId);

  res.send(`User with the name of ${user.firstName} was added to the database`);
});

export default router;
