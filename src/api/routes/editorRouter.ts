import { Router } from "express";
import * as editorMiddleware from "@/middlewares/editorMiddleware";

const editorRouter: Router = Router();

editorRouter.get("/config", editorMiddleware.getFile);

export default editorRouter;
