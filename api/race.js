
class Racer {
  constructor (name, speedModifier, badLuckChance) {
    this.name = name
    this.speedModifier = speedModifier
    this.badLuckChance = badLuckChance
    this.completionPercentage = 0.0
  }

  get lapsCompleted () {
    return Math.floor(this.completionPercentage)
  }

  shell () {
    this.completionPercentage -= this.completionPercentage * 0.1
  }

  hitByItem () {
    return Boolean(Math.random() > (1 - this.badLuckChance))
  }

  progress () {
    if (this.hitByItem()) {
      return
    }

    const raceDurationModifer = 0.05
    const raceProgress = Math.random() * raceDurationModifer
    const racerProgress = raceProgress * this.speedModifier
    this.completionPercentage += racerProgress
  }
}

class Race {
  constructor (racers) {
    this.racers = racers
    this.timer = setInterval(() => {
      this.race()
    }, 200)
  }

  stop () {
    clearInterval(this.timer)
  }
  race () {
    this.racers.forEach(racer => {
      racer.progress()
    })
  }

  leaderboard () {
    const sortByProgressDesc = (a, b) => {
      if (a.completionPercentage >= b.completionPercentage) {
        return -1
      }

      return 1
    }
    const leaderboard = [...this.racers]
    leaderboard.sort(sortByProgressDesc)
    return leaderboard
  }
}

module.exports = {
  Race,
  Racer
}
