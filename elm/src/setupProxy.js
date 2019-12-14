var proxy = require('http-proxy-middleware')

module.exports = (app) =>{

    //https://elm.cangdu.org/v2/index_entry?geohash=39.99061,116.31484&group_type=1&flags[]=F
    app.use("/v2",proxy({
        target : "https://elm.cangdu.org" ,
        pathRewrite: {
            '^/api' : ''
        },
        changeOrigin : true
    }))

    app.use("/shopping",proxy({
        target : "https://elm.cangdu.org" ,
        changeOrigin : true
    }))

    app.use("/ugc",proxy({
        target : "https://elm.cangdu.org" ,
        changeOrigin : true
    }))
}