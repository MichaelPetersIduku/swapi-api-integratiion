import { NextFunction, Request, Response } from "express";
import { UniversalsController } from "../../@core/common/universals.controller";
import logger from "../../util/logger/logger";
import { MoviesService } from "./movies.service";
import requestIp from "request-ip";

export class MoviesController extends UniversalsController {
  public fetchMoviesController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { ip, method, originalUrl, body } = req;
    var clientIp = requestIp.getClientIp(req);
    logger.info(clientIp);
    try {
      const response = await new MoviesService().fetchMoviesService(
        { ip, method, originalUrl },
        body
      );
      this.controllerResponseHandler(response, res);
    } catch (error) {
      this.controllerErrorHandler(req, res, error);
    }
  };
}
