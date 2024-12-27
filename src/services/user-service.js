const UserRepository = require('../repository/user-repository');

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

    async destroy(userId){
        try {
            const user = await UserRepository.destroy(userId);
            return user;
        } catch (error) {
            console.log("something went in service layer");
            throw error;
        }
    }
}

module.exports = UserService;