import { adaptRoute } from '@main/adapters'
import { Router } from 'express'
import { SpacexRepository } from '@repositories/spacex';
import api from '@main/config/api'
import { getUpcomingLaunchesController } from '@controllers/get-upcoming-lauches';

export default (router: Router): void => {
  
  let repository = new SpacexRepository(api);
  let upcomingController = new getUpcomingLaunchesController(repository)
  
  router.get('/upcoming', adaptRoute(upcomingController))
}