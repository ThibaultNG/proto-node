import { Router } from "express";
import * as gameController from "@/controllers/games/gameController";

const gameRouter = Router();

gameRouter.get("/shops", gameController.getShops);

gameRouter.get("/games", gameController.getGames);

gameRouter.get("/deals/:gameId", gameController.getDeals);

export default gameRouter;
