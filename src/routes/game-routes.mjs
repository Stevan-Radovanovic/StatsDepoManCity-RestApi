import express from "express";
import * as controller from "../controllers/game-controller.mjs";
const router = express.Router();

router.get("/", controller.getGames);
router.get("/detail", controller.getGamesDetailed);
router.get("/:id", controller.getGameById);
router.post("/", controller.postGame);
router.put("/:id", controller.updateGame);
router.delete("/:id", controller.deleteGame);

export default router;
