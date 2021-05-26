const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { racersStore } = require('./racers')
const leaderboards = require('./leaderboards')
const racerProfiles = require('./racer-profiles.json')
const apiRoutes = express.Router()
const app = express()
app.use(express.json())
app.use(morgan('combined'))
app.use(cors())
app.use('/api/v1', apiRoutes)

apiRoutes.get('/leaderboards/:name', (req, res) => {
  const { params: { name } } = req
  const getResults = leaderboards.get(name)
  
  if (getResults === undefined) {
    res.sendStatus(404)
    return
  }
  
  res.json(getResults())
})

apiRoutes.get('/racers/:name', (req, res) => {
  const { params: { name } } = req
  const racer = racerProfiles?.[name]

  if (!racer) {
    res.sendStatus(404)
    return
  }

  res.json(racer)
})

apiRoutes.post('/racers/:name/shell', (req, res) => {
  const { params: { name } } = req
  const racer = racersStore.get(name)

  if (!racer) {
    res.sendStatus(404)
    return
  }

  racer.shell()
  res.sendStatus(200)
})

module.exports = {
  app
}
