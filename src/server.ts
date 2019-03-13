import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";

import { InversifyExpressServer } from "inversify-express-utils";
import { container as ioc } from "./config/ioc/ioc";
import { Container } from "inversify";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware";
import AuthProvider from "./auth/AuthProvider";

class Server {
  private server: InversifyExpressServer;

  constructor(container: Container) {
    this.loadEnvironments();
    this.server = new InversifyExpressServer(
      container,
      undefined,
      undefined,
      undefined,
      AuthProvider
    );
  }

  private loadEnvironments(): void {
    dotenv.config();
  }

  private loadConfigExpress = (app: express.Application): void => {
    this.loadMiddlewares(app);
  };

  private loadMiddlewares = (app: express.Application): void => {
    app.use(CheckUserMiddleware);
  };

  build(): express.Application {
    this.server.setConfig(this.loadConfigExpress);
    this.server.setErrorConfig(app => {
      app.use((err, req, res, next) => {
        console.log("Error Handler Express");
        res.status(500).send("Something broke!");
      });
    });
    return this.server.build();
  }
}

export default new Server(ioc).build();
