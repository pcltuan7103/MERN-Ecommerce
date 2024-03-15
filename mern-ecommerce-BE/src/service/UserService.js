const Account = require('../model/AccountModel')
const bcrypt = require("bcrypt")
const { genneralAccessToken, genneralRefreshToken } = require('./JwtService')

const createUser = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const {name, email, password, confirmPassword, phone} = newUser
        try{
            const checkAccount = await Account.findOne({
                email: email
            })
            if(checkAccount !== null){
                resolve({
                    status: 'OK',
                    message: 'The email is already'
                })
            }
            const hash = bcrypt.hashSync(password, 10)
            const createUser = await Account.create({
                name, 
                email, 
                password: hash, 
                phone
            })
            if(createUser){
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    date: createUser
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const loginUser = (userLogin) => {
    return new Promise(async (resolve, reject) => {
        const {name, email, password, confirmPassword, phone} = userLogin
        try{
            const checkAccount = await Account.findOne({
                email: email
            })
            if(checkAccount == null){
                resolve({
                    status: 'OK',
                    message: 'The user is not exists'
                })
            }
            const comparePassword = brcypt.compareSync(password, checkAccount.password)
            
            if(!comparePassword){
                resolve({
                    status: 'OK',
                    message: 'The password or email is incorrect',
                })
            }
            const access_token = await genneralAccessToken({
                id: checkAccount.id,
                isAdmin: checkAccount.isAdmin
            })
            const refresh_token = await genneralRefreshToken({
                id: checkAccount.id,
                isAdmin: checkAccount.isAdmin
            })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                access_token,
                refresh_token
            })
        } catch (e) {
            reject(e)
        }
    })
}

const updateUser = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try{
            const checkAccount = await Account.findOne({
                id: id
            })
            if(checkAccount == null){
                resolve({
                    status: 'OK',
                    message: 'The user is not exists'
                })
            }
            const updateUser = await Account.findByIdAndUpdate(id, data, {new: true})
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                date: updateUser
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createUser,
    loginUser,
    updateUser
}