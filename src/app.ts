import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import container from "./utils/config/inversify.config";
import express from "express";

const server = new InversifyExpressServer(container);

server.setConfig((app) => {
    app.use(express.json());
});

// Build and start the server
const app = server.build();
app.listen(4005, () => {
    console.log("Server started on http://localhost:4005");
});