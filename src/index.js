const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
// const { typeDefs, resolvers } = require("./modules/index");
const { typeDefs, resolvers } = require("./modules/index");
// const { authenticate } = require("./middleware/middleware");
require("dotenv").config();
const { graphqlUploadExpress } = require("graphql-upload");
const cors = require("cors");

async function startServer() {
  const app = express();

  const corsOptions = {
    origin: ["http://localhost:3000", "https://healthbridge-beta.vercel.app"],
    credentials: true,
  };

  app.use(cors(corsOptions));

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;

  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDB connected");
      app.listen(PORT, () => {
        console.log(
          `Server running at http://localhost:${PORT}${server.graphqlPath}`
        );
      });
    })
    .catch((err) => {
      console.log("MongoDB connection error:", err);
    });
}

startServer();
