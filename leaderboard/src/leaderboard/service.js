import { HttpError } from '../errors'

export const getLeaderboard = async () => {
  const url = `${process.env.REACT_APP_API_URL}/leaderboards/racers`
  const mode = 'cors'
  const headers = {
    'Content-Type': 'application/json'
  }
  try {
    const res = await fetch(url, { headers, mode })

    if (!res.ok) {
      throw new HttpError(res)
    }

    const leaderboard = await res.json()
    return leaderboard
  } catch (e) {
    console.error(e)
    return []
  }
}
