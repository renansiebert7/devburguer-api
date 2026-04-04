const adminMiddleware = (req, res, next) => {
    const isUserAdmin = req.userIsAdmin;

    if (!isUserAdmin) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    return next();
}

export default adminMiddleware