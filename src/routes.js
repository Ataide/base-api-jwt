import Router from "express";
import User from "./app/models/User";

const routes = Router();

routes.get("/", async (request, response) => {
  const user = await User.create({
    name: "Davi Basstos",
    email: "davi.basstos@gmail.com",
    password: "123456",
  });

  return response.json(user);
});

export default routes;
