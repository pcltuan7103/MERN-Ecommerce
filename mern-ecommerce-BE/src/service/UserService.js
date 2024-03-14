const Account = require('../model/AccountModel')

const createUser = () => {
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
            const createUser = await Account.create({
                name, 
                email, 
                password, 
                confirmPassword, 
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

module.exports = {
    createUser
}