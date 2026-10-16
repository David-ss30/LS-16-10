function layout(title, content){
    return /* html */ `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
    </head>
    <body>
    <nav>
    <a href="/">Home</a>
    <a href="/about">about</a>
    <a href="/produto">produtos</a>
    </nav>
        ${content}
    </body>
    </html>
    `
}

export function homePage(){
    return layout("home", "<h1>Welcome</h1>")
}
export function aboutPage(){
    return layout("about", "<h1>about us</h1>")
}
export function produtosPage(){
    const rows = products.map((products) => {
        return /* html */ `
        <tr>
            <td>${products.name}</td>
            <td>R$ ${products.price}</td>
        </tr>
        `
    })
    return layout("produto", /* html */ `
        <h1>products!</h1>
        <table>
        <tr>
        <th>products</th>
        <th>price</th>
        </tr>
        ${rows}
        </table>
        `)
}
export function notFoundPage(){
    return layout("not found", "<h1>404 - arquivo não encontrado</h1>")
}

const products = [
    { name: "mouse", price: 80},
    { name: "teclado", price: 220},
    { name: "cpu", price: 100}
]