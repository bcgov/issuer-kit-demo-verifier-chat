const { Service } = require('feathers-nedb');

exports.Users = class Users extends Service {
    create(data, params) {
        const { firstName, lastName, address, city, province, postalCode, email, password } = data;
        const userData = {
            firstName,
            lastName,
            address,
            city,
            province,
            postalCode,
            // These are just a temporary holdover so local authentication doesnt break
            email,
            password
        };

        return super.create(userData, params);
    }
};
