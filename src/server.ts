import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";

import { InversifyExpressServer } from "inversify-express-utils";
import { container as ioc } from "./config/ioc/ioc";
import { Container } from "inversify";
import DefineUserMiddleware from "./middlewares/DefineUserMiddleware";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware";

class Server {
  private server: InversifyExpressServer;

  constructor(container: Container) {
    this.loadEnvironments();
    this.server = new InversifyExpressServer(container);
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
    return this.server.build();
  }
}

export default new Server(ioc).build();
