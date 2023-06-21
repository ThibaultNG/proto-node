import { Router } from "express";
import * as gameController from "@/controllers/games/gameController";

const gameRouter = Router();

gameRouter.get("/shops", gameController.getShops);

export default gameRouter;
