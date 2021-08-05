import { Resolvers, User, Project, Goal, WordCount } from "./types";

const store: Project[] = [{
        id: "1",
        user: {id: "1", name: "Aaron Brunet"},
        name: "My First Project",
        active: true,
        created: Date.now(),
        count: 250,
        wordcounts: [{
            id: "1",
            created: Date.now(),
            count: 50
          },
          {
            id: "2",
            created: Date.now(),
            count: 200
          }]
      }
];

const resolvers: Resolvers = {
  Query: {
    allProjects: () => store,
    Project: (_: any, { id }) =>
      store.find((d) => d.id === id),
  },
};

export default resolvers;