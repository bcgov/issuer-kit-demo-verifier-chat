const { Service } = require('feathers-nedb');

exports.Users = class Users extends Service {
    create(data, params) {
        const { id, firstName, lastName, address, city, province, postalCode } = data;
        const userData = {
            _id: id,
            firstName,
            lastName,
            address,
            city,
            province,
            postalCode
        };

        return super.create(userData, params);
    }
};
