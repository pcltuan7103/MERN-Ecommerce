const userService = require('../service/UserService')

const createUser = async (req, res) => {
    try{
        const {name, email, password, confirmPassword, phone} = req.body
        const reg = /^\w+([-+.']\w+)*@w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const isCheckEmail = reg.test(email)
        if(!name || !email || !password || !confirmPassword || !phone){
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }else if(!isCheckEmail){
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is email'
            })
        }else if(password !== confirmPassword){
            return res.status(200).json({
                status: 'ERR',
                message: 'The password is equal confirmPassword'
            })
        }

        const respone = await userService.createUser(req.body)
        return res.status(200).json(respone)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const loginUser = async (req, res) => {
    try{
        const {name, email, password, confirmPassword, phone} = req.body
        const reg = /^\w+([-+.']\w+)*@w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const isCheckEmail = reg.test(email)
        if(!name || !email || !password || !confirmPassword || !phone){
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }else if(!isCheckEmail){
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is email'
            })
        }else if(password !== confirmPassword){
            return res.status(200).json({
                status: 'ERR',
                message: 'The password is equal confirmPassword'
            })
        }

        const respone = await userService.loginUser(req.body)
        return res.status(200).json(respone)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateUser = async (req, res) => {
    try{
        const userId = req.params.id
        const data = req.body
        if(!userId){
            return res.status(200).json({
                status: 'ERR',
                message: 'The user is requied'
            })
        }
        const respone = await userService.updateUser(userId, data)
        return res.status(200).json(respone)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createUser, 
    loginUser,
    updateUser
}