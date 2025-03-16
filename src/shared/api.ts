import { z } from "zod";
const baseUrl = "http://localhost:3000";

const userDtoSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
});

export const api = {
  getUsers: () => {
    return fetch(`${baseUrl}/users`)
      .then((response) => response.json())
      .then((res) => {
        return userDtoSchema.array().parse(res);
      });
  },

  getUser: (userId: string) => {
    return fetch(`${baseUrl}/users/${userId}`)
      .then((response) => response.json())
      .then((res) => {
        return userDtoSchema.parse(res);
      });
  },

  deleteUser: (userId: string) => {
    return fetch(`${baseUrl}/users/${userId}`, {
      method: "DELETE",
    }).then((response) => response.json());
  },
};
