import { Event } from "../models/event.js"

  function newEvent(req, res) {
    res.render('events/new', {
      title: 'Add Event'
    })
  }

  function create(req, res) {
    req.body.author = req.user.profile._id
    Event.create(req.body)
    .then(post => {
      res.redirect('/events')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  }

function index(req, res) {
  Event.find({})
  .populate('author')
  .then(events => {
    res.render('events/index', {
      title: 'All Events',
      events: events
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
  }

  function deleteEvent(req, res) {
    Event.findByIdAndDelete(req.params.eventId)
    .then(event => {
      res.redirect('/events')
    })
  }

export {
  newEvent as new,
  create,
  index,
  deleteEvent as delete

}