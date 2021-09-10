module.exports.routers = {
    require : {
        index : require('./routes/index'),
        save : require('./routes/save')
    },
    use : {
        index : "/",
        save : "/save"
    }
}

