module.exports={
    devServer:{
        host:"localhost",
        port:8080,
    },
    publicPath: './',
    // publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    outputDir:"dist",
    assetsDir:"assets",
    indexPath:"index.html",
    filenameHashing:true,
    pages:undefined,
    lintOnSave:true,
    runtimeCompiler:false,
    transpileDependencies:[],
    productionSourceMap:false,
    crossorigin:undefined,
    integrity:false,
  


}