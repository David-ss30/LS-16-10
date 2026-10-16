import { homePage, aboutPage, produtosPage, notFoundPage } from "../views/view.js"

export function route(req, res){

    if(req.url === "/" && req.method === "GET"){
    res.writeHead(200, {"Content-Type": "text/html"})
    res.end(homePage())
    return
    }
    if(req.url === "/about" && req.method === "GET"){
    res.writeHead(200, {"Content-Type": "text/html"})
    res.end(aboutPage())
    return
    }
    if(req.url === "/produto" && req.method === "GET"){
    res.writeHead(200, {"Content-Type": "text/html"})
    res.end(produtosPage())
    return
    }
    
    res.writeHead(404, {"content-type": "text/html"})
    res.end(notFoundPage())
}