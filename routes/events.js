import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as eventsCtrl from '../controllers/events.js'

const router = Router()

router.get('/', eventsCtrl.index)
router.get('/new', isLoggedIn, eventsCtrl.new)
router.post('/', isLoggedIn, eventsCtrl.create)



export {
  router
}