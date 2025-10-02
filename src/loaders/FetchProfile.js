import { getUserById } from "../apis/userApi";

export const userLoader = async ({ params }) => {
  const user = await getUserById(params.id);
  return user;
};