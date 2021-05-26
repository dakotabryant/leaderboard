const racerSerializer = ({ name, lapsCompleted, completionPercentage }) => ({
  name,
  laps: lapsCompleted,
  completion_percentage: Math.round((completionPercentage + Number.EPSILON) * 100) / 100

})

const leaderboardSerializer = racers => racers.map((racer, index) => ({
  position: index + 1,
  racer: racerSerializer(racer)
}))

module.exports = {
  racerSerializer,
  leaderboardSerializer
}
