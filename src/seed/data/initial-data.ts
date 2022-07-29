import { SeedData } from "../interfaces/seed-data.interface";
import * as bcrypt from "bcrypt";

export const initialData: SeedData = {
  users: [
    {
      email: "johndoe@gmail.com",
      firstName: "John",
      lastName: "Doe",
      password: bcrypt.hashSync("Abc12345", 10),
      roles: ["user", "admin"]
    }
  ]
};