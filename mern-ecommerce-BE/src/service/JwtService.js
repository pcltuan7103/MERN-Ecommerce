const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const genneralAccessToken = async (payload) => {
    const access_Token = jwt.sign({
        payload
    }, process.dotenv.ACCESS_TOKEN, {expiresIn: '1h'})

    return access_Token
}

const genneralRefreshToken = async (payload) => {
    const refresh_Token = jwt.sign({
        payload
    }, process.dotenv.REFRESH_TOKEN, {expiresIn: '365d'})

    return refresh_Token
}

module.exports = {
    genneralAccessToken,
    genneralRefreshToken
}