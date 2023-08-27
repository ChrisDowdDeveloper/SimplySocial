const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function login(req, res, next) {
    try {
        // Fetch user from the database
        const user = await fetchUserFromDatabase(req.body.email);

        if(!user) {
            return res.status(401).json({ message: 'Email or password incorrect' });
        }

        // Validate Password
        const passwordIsValid = await bcrypt.compare(req.body.password, user.password);

        if(!passwordIsValid) {
            return res.status(401).json({ message: 'Email or password incorrect' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user.id }, 'your-secret-key', {
            expiresIn: 86400 // 24 hours
        });
        
        res.status(200).send({ token });
    } catch(err) {
        next(error);
    };
}

module.exports = {
    login,
}