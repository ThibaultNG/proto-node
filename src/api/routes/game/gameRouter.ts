import { Router } from "express";
import * as gameMiddleware from "@/middlewares/gameMiddleware";

const gameRouter = Router();

gameRouter.get("/shops", gameMiddleware.getShops);

gameRouter.get("/games", gameMiddleware.getGamesByTitle);

gameRouter.get("/deals/:gameId", gameMiddleware.getDeals);

export default gameRouter;
