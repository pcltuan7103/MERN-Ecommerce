const userService = require('../service/UserService')

const createUser = async (req, res) => {
    try{
        console.log(req.body)
        const res = await userService.createUser()
        return res.status(200).json()
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createUser
}