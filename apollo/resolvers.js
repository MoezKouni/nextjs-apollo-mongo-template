import {
  createUser,
  findUserByEmail,
  getUser,
  getUsers,
  getChallenges,
  findChallengeByTitle,
  createChallenge,
} from "./api";

const usersResolver = () => getUsers();

const userResolver = async (root, args) => getUser(args.id);

//   const tokenResolver = (user) => generateToken(user);

//   const signInResolver = async (root, args) => {
//     const user = await findUserByEmail(args.input.email);
//     if (user && Bcrypt.compareSync(args.input.password, user.passwordHash))
//       return user;
//     throw new AuthenticationError("Invalid user credentials");
//   };

const createUserResolver = async (root, args) => {
  const user = await findUserByEmail(args.input.email);
  if (user) throw new UserInputError("Duplicated email");
  return createUser({
    email: args.input.email,
    name: args.input.name,
    phone: args.input.phone,
  });
};

//   const signUpResolver = async (root, args) => {
//     if (args.input.password.length < 8)
//       throw new UserInputError("Password too short");
//     const user = await findUserByEmail(args.input.email);
//     if (user) throw new UserInputError("Duplicated email");

//     return createUser({
//       email: args.input.email,
//       isBusiness: args.input.isBusiness || false,
//       name: args.input.name,
//       passwordHash: Bcrypt.hashSync(args.input.password, 10),
//       phone: args.input.phone,
//       picture: `https://www.tinygraphs.com/squares/${args.input.email}?theme=suga
//       rsweets&numcolors=4&size=220`,
//       surname: args.input.surname,
//     });
//   };

const challengesResolver = () => getChallenges();

const createChallengeResolver = async (root, args) => {
  const oneChallenge = await findChallengeByTitle(args.input.title);
  if (oneChallenge) throw new Error("Title already in use!");
  return createChallenge({
    title: args.input.title,
    short_description: args.input.short_description,
    type: args.input.type,
    domaine: args.input.domaine,
    technologies: args.input.technologies,
    difficulty: args.input.difficulty,
    brief: args.input.brief,
    getting_started: args.input.getting_started,
    ideas: args.input.ideas,
    taken: 0,
    done: 0,
  });
};

const resolvers = {
  Mutation: {
    //   signIn: signInResolver,
    //   signUp: signUpResolver,
    create: createUserResolver,
    createChallenge: createChallengeResolver,
  },
  Query: {
    user: userResolver,
    users: usersResolver,
    challenges: challengesResolver,
  },
  // User: {
  //   token: tokenResolver,
  // },
};

export default resolvers;
