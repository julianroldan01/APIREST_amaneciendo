const admin = require('../config/firebase-config');
class FirebaseValidate {
    async decodeToken(req, res, next) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decodeValue = await admin.auth().verifyIdToken(token);
            if (decodeValue) {
                console.log(decodeValue);
                return next();
            }
            return res.json({ message: 'Unauthorized' });
        } catch (e) {
            console.log(e);
            return res.json({ message: 'Internal Error' });
        }
    }
}
module.exports = new FirebaseValidate();