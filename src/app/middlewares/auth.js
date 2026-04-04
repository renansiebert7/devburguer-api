import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth.js';

const authMiddleware = (req, res, next) => {
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const token = authToken.split(' ')[1];
    
    try {
        const decoded = jwt.verify(token, authConfig.secret);

        req.userId = decoded.id;
        req.userName = decoded.name;
        req.userIsAdmin = decoded.admin; 

        return next(); 
    } catch (_err) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
}

export default authMiddleware