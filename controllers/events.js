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
      res.redirect('/post')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  }

export {
  newEvent as new,
  create

}