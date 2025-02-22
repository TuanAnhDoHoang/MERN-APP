const apiRouter = require('./api.route')
const blogApi = {
    blogs: [
        { id: 1, heartColor: false, NumberOfHeart: 0 },
        { id: 2, heartColor: false, NumberOfHeart: 0 },
        { id: 3, heartColor: false, NumberOfHeart: 0 },
        { id: 4, heartColor: false, NumberOfHeart: 0 },
        { id: 5, heartColor: false, NumberOfHeart: 0 },
    ]
};
function router(app) {
    app.use('/', apiRouter);
}
module.exports = router