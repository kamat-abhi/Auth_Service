const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const UserRepository = require('../repository/user-repository');
const { JWT_KEY } = require('../config/serverConfig');

class UserService{
    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("something went wrong in service layer ");
            throw error;
        }

    }

    async signIn(email, plainPassword){
        try {
            const user = await this.userRepository.getByEmail(email);
            const passwordMatch = this.checkPassword(plainPassword, user.password);
            if(!passwordMatch){
                console.log("password does not match");
                throw { error: "incorrect password"};
            }

            const newJWT = this.createToken({email: user.email, id: user.id});
            return newJWT;
        } catch (error) {
            console.log("something went wrong in the sign in process");
            throw error;
        }
    }

    async destroy(userId){
        try {
            const user = await UserRepository.destroy(userId);
            return user;
        } catch (error) {
            console.log("something went in service layer");
            throw error;
        }
    }

    async isAuthenticated(token){
        try {
            const response = this.verifyToken(token);
            if(!response){
                throw { error: 'invalid token'}
            }
            const user = this.userRepository.getById(response.id);
            if(!user){
                throw { error: 'no user with the corresponding token exists'};
            }
            return user.id;
        } catch (error) {
            console.log("something went wrong in auth process");
            throw error;
        }
    }

    createToken(user){
        try {
            const result = jwt.sign(user, JWT_KEY, { expiresIn: '1h'});
            return result;
        } catch (error) {
            console.log("something went wrong in token creation");
            throw error;
        }
    }

    verifyToken(token){
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            console.log("something went wrong in token verification");
            throw error;
        }
    }

    checkPassword(userInputPlainPassword, encryptedPassword){
        try {
            return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
        } catch (error) {
            console.log("something went wrong in password comparison");
            throw error;
        }
    }

    isAdmin(userID) {
        try {
            return this.userRepository.isAdmin(userID);
        } catch (error) {
            console.log("something went wrong in service layer");
            throw error;
        }
    }
}

module.exports = UserService;