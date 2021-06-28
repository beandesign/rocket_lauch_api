import { adaptRoute } from '@main/adapters'
import { Router } from 'express'
import { SpacexRepository } from '@repositories/spacex';
import api from '@main/config/api'
import { getLatestLaunchesController } from '@controllers/get-latest-launches';

export default (router: Router): void => {
  
  let repository = new SpacexRepository(api);
  let latestController = new getLatestLaunchesController(repository)
  
  router.get('/latest', adaptRoute(latestController))
}