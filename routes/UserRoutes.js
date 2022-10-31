import { addToLikedMovies,getLikedMovies } from "../controllers/UserController.js";
import express from 'express';

const router = express.Router()
router.get("/movies/:email", getLikedMovies);
router.post("/add", addToLikedMovies)
export default router