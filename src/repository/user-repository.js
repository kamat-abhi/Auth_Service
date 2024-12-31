const { User, Role } = require('../models/index');

class UserRepository {
    async create(data){
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw error;
        }
    }

    async destroy(userId){
        try {
            await User.destroy({
                where: {
                    id: userId
                }
            });
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw error;
        }
    }

    async getById(userId) {
        try {
            const user = await User.findByPk(userId, {
                attributes: ['email', 'id']
            });
            return user;
        } catch (error) {
            console.log("Something went on repository layer");
            throw error;
        }
    }

    async getByEmail(useremail) {
        try {
            const user = await User.findOne({
                where: {
                    email: useremail
                }
            });
            return user;
        } catch (error) {
            console.log("Something sent wrong repository layer");
            throw error;
        }
    }

    async isAdmin(userId) {
        try {
            const user = await User.findByPk(userId);
            const adminRole = await Role.findOne({
                where: {
                    name: 'ADMIN'
                }
            });
            return user.hasRole(adminRole);
        } catch (error) {
            console.log("Something sent wrong repository layer");
            throw error;
        }
    }
}

module.exports = UserRepository;