import { HttpError } from '../errors'

const MODE = 'cors'
const HEADERS = {
  'Content-Type': 'application/json'
}
const BASE_URL = process.env.REACT_APP_API_URL

export const getLeaderboard = async () => {
  const url = `${BASE_URL}/leaderboards/racers`
  try {
    const res = await fetch(url, { HEADERS, MODE })

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

export const shellRacer = async (racerName) => {
  // We have to split/join the text due to the slugify expectation on the server side for names with spaces like "Shy Guy". encodeURIComponent() will not suffice here
  const url = `${BASE_URL}/racers/${racerName.split(' ').join('-')}/shell`
  try {
    const res = await fetch(url, { HEADERS, MODE, method: 'POST' })
    if (!res.ok) {
      throw new HttpError(res)
    }
  } catch (e) {
    console.error(e)
    return []
  }
}

export const getItems = async () => {
  const url = `${BASE_URL}/leaderboards/items`
  try {
    const res = await fetch(url, { HEADERS, MODE })

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
