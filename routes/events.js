import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as eventsCtrl from '../controllers/events.js'

const router = Router()

router.get('/', eventsCtrl.index)
router.get('/new', isLoggedIn, eventsCtrl.new)
router.get('/:eventId/edit', isLoggedIn, eventsCtrl.edit)
router.get('/:eventId', isLoggedIn, eventsCtrl.show)
router.post('/', isLoggedIn, eventsCtrl.create)
router.delete('/:eventId', isLoggedIn, eventsCtrl.delete)



export {
  router
}