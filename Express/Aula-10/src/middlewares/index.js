exports.middlewareGlobal = (req, res, next) => {
    console.log();
    if(req.body.cliente){ 
        console.log(`Vi que voce postou algo sr ${req.body.cliente}`);
    }
    next();
}