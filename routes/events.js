import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as eventsCtrl from '../controllers/events.js'

const router = Router()

router.get('/new', isLoggedIn, eventsCtrl.new)



export {
  router
}