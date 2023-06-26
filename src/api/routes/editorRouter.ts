import { Router } from "express";
import * as editorMiddleware from "@/middlewares/editorMiddleware";
import express from "express";

const editorRouter: Router = Router();

editorRouter.get("/config", editorMiddleware.getFile);
editorRouter.post("/config", express.json(), editorMiddleware.saveFile);

export default editorRouter;
