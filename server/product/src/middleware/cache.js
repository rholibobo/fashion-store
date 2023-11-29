

//Cache to improve request performance
 const setCache = function(req, res, next){
    //keeping cache for 5 minutes(seconds)
    const period = 60 * 5

    //interested in caching just GET requests
    if(req.method == "GET"){
        res.set("Cache-control", `public, max-age=${period}`);
    }else{
        //will be setting strict no caching for other requests that are not GET
        res.set("Cache-control", `no-store`);
    }
    next()
};



module.exports = {cache, setCache}


