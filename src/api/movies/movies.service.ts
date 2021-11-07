import { IResponse } from "../../@core/common/response";
import { UniversalsService } from "../../@core/common/universals.service";
import logger from "../../util/logger/logger";

export class MoviesService extends UniversalsService {

    public fetchMoviesService = (meta, body): Promise<IResponse> => {
        logger.info(JSON.stringify(meta), body);
        try {
          return this.successResponse("Welcome to Movies API", meta);
        } catch (error) {
          return this.serviceErrorHandler(meta, error);
        }
      };
}