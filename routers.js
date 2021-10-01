module.exports.routers = {
    require : {
        index : require('./routes/index'),
        save : require('./routes/save'),
        admin : require('./routes/admin')
    },
    use : {
        index : "/",
        save : "/save",
        admin : "/admin"
    }
}

