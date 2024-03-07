function errHandling(err,req, res, next){
    if(err || res.status.Code >=400){
        res.json({
            status:err.status || res.
            statusCode || 500,
            msg: 'An error occured,check your connection and try again.'
        })
    }else {
        next()
    }
}
export{
    errHandling
}