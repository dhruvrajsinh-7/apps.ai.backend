import express from "express";
import { openai } from "../lib/openaisdk";
import { Request, Response } from "express";
import { logger } from "./logger";

const router = express.Router();

router.post("/image", async (req: Request, res: Response) => {
  try {
    const { prompt, n, size } = req.body;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    logger.info({ prompt, n, size });
    const response = await openai.createImage({
      prompt,
      n,
      size,
    });
    res.status(200).send(response.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

export { router as image };