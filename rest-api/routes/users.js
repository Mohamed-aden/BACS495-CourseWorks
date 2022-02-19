import express from "express";
import { v4 as uuid4 } from "uuid";

const router = express.Router();

let users = [
  {
    firstName: "Mohamed",
    lastName: "Aden",
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

  res.send(
    `A student with the name of ${user.firstName} is added to the database`
  );
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
});

//Delete the user

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`A student with the Id ${id} is deleted from the database.`);
});

//Update

router.put("/:id", (req, res) => {
  const { id } = req.params;

  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = firstName;
  if (age) user.age = firstName;

  res.send(`The student with the Id ${id} has been updated in the database`);
});

export default router;
