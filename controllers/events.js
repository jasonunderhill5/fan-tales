import { Event } from "../models/event.js"

  function newEvent(req, res) {
    res.render('events/new', {
      title: 'Add Event'
    })
    
  }

export {
  newEvent as new
}