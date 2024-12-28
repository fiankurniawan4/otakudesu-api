import express from "express";
import {
  getAnimeBySearchName,
  getAnimeGenreByName,
  getAnimeHome,
  getAnimeOnGoing,
  getGenreList,
  getJadwalAnime,
} from "../controllers/apiControllers.js";

const router = express.Router();

router.get("/anime", getAnimeHome);
router.get("/anime/jadwal", getJadwalAnime);
router.get("/anime/genre", getGenreList);
router.get("/anime/genre/:genre", getAnimeGenreByName);
router.get("/anime/search/:name", getAnimeBySearchName);
router.get("/anime/:page", getAnimeOnGoing);

export default router;
