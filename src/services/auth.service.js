const jwt = require(jsonwebtoken)
const User = require('../models/user')
const bcrypt = require('bcrypt')
const msg = required('../helpers/messages')

const authService = {
    signToken: async (id)=>{
        return jwt.sign({id}, process.env.JWT_SECRET, {       //para traer el .dev la constante JWT_SECRET y ya no queda expuesta la llave de seguridad de jwt
            expiresIn: 60 * 60 * 24
        })
    },
    login: async ()=>{
        try {
            const {email, password} = data
            let userExists = await User.findOne({email:email}, 'name email password').exec()
            if(await bcrypt.compare(password, userExists.password).then(res=>res)){
                const token = await this.signToken(userExists.id)
                return{
                    code: 200,
                    token
                }
            }else{
                return msg.authFailed
            }
        } catch (error) {
            return error
        }
    },
    register: async ()=>{
        try {
            let hash = await bcrypt.hash(userData.password, 10).then(res => res)
            userData.password = hash
            await userData.save()
            let token = await this.signToken(userData.id)
            return {
                code: 200,
                token
            }
        } catch (error) {
            return error
        }
    }
}
module.exports = authService