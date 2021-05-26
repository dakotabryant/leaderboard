const itemLeaderboard = require('./item-leaderboard')
const serializers = require('./serializers')
const { Race } = require('./race')
const { racers } = require('./racers')

const race = new Race(racers)

const leaderboards = [
  ['racers', () => serializers.leaderboardSerializer(race.leaderboard())],
  ['items', () => itemLeaderboard]
].reduce((store, [name, getLeaderboard]) => store.set(name, getLeaderboard), new Map())

module.exports = leaderboards