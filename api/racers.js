const { Racer } = require('./race')
const slugify = require('slugify')

const racers = [
  new Racer('Toad', 0.5, 0.7),
  new Racer('Shy Guy', 0.5, 0.7),
  new Racer('King Boo', 0.5, 0.7),
  new Racer('Mario', 0.2, 0.2),
  new Racer('Luigi', 0.2, 0.2),
  new Racer('Peach', 0.2, 0.2),
  new Racer('Yoshi', 0.2, 0.2),
  new Racer('Link', 0.2, 0.2),
  new Racer('Wario', 0.2, 0.2),
  new Racer('Bowser', 0.15, 0.0),
  new Racer('Dakota', 1, 0.8),
]

const racersStore = racers.reduce(
  (store, racer) => store.set(slugify(racer.name), racer),
  new Map()
)

module.exports = {
  racers,
  racersStore,
}
