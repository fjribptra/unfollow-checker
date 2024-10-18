import { readFileSync } from 'fs'

//LISTING FOLLOWERS
const followersJSON = readFileSync('') // your followers.json file path

const parsedFollowers = JSON.parse(followersJSON)

const followersData = []

parsedFollowers.forEach(follower => {
    followersData.push(follower.string_list_data[0].value)
})

//LISTING FOLLOWING
const followingJSON = readFileSync('') // your following.json file path
const parsedFollowing = JSON.parse(followingJSON)
const followingData = []

parsedFollowing.relationships_following.forEach(following => {
    followingData.push(following.string_list_data[0].value)
})

//LISTING UNFOLLOWERS
followingData.forEach(f => {
    !followersData.includes(f) ? console.log('https://instagram.com/' + f) : null
})