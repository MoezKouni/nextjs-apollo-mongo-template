import { User, Challenge } from "./models";

export const createUser = (user) => User.create(user);
export const getUser = (id) => User.findOne({ _id: id });
export const findUserByEmail = (email) => User.findOne({ email: email });
export const getUsers = () => User.find();

export const getChallenges = () => Challenge.find();
export const createChallenge = (challenge) => Challenge.create(challenge);
export const findChallengeByTitle = (title) =>
  Challenge.findOne({ title: title });
