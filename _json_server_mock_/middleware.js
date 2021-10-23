module.exports = (req, res, next) => {
    console.log(req);
    if(req.method === 'POST' && req.path === '/login') {
        if(req.body.username === 'fanfan' && req.body.password === 'qweasd123') {
            return res.status(200).json({
                user: {
                    token: 123
                }
            })
        }else {
            return res.status(400).json({
                msg: '用户名或者密码错误'
            })
        }
    }
    next()
}