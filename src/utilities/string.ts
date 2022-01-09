const separateSlash = (routeString:string)=>{
    const [slash,result]= routeString.split("/");
    return result
}

export {separateSlash};