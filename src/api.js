import {
  teams,
  players,
  generateArticle,
  generateTeamsArticles
} from './dummy-data'

let cachedPlayers = null
let cachedTeams = {}
let cachedTeamNames = null

export function getPlayers (teamId) {
  return new Promise((res) => {
    if (cachedPlayers === null) {
      cachedPlayers = players
      return setTimeout(() => res(teamId ? teams[teamId].players : cachedPlayers), 800)
    }

    return res(teamId ? teams[teamId].players : cachedPlayers)
  })
}

export function getTeam (teamId) {
  return new Promise((res) => {
    if (typeof cachedTeams[teamId] === 'undefined') {
      cachedTeams[teamId] = teams[teamId]
      return setTimeout(() => res(cachedTeams[teamId]), 800)
    }

    return res(cachedTeams[teamId])
  })
}

export function getTeamNames () {
  return new Promise((res) => {
    if (cachedTeamNames === null) {
      cachedTeamNames = Object.keys(teams)
      return setTimeout(() => res(cachedTeamNames), 400)
    }

    return res(cachedTeamNames)
  })
}

export function getArticle (teamId, id) {
  return new Promise((res) => {
    setTimeout(() => res(generateArticle(teamId, id)), 700)
  })
}

export function getTeamsArticles (teamId) {
  return new Promise((res) => {
    setTimeout(() => res(generateTeamsArticles(teamId)), 700)
  })
}