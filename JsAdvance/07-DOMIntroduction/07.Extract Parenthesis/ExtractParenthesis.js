function extract(content) {
    let text = document.getElementById(content).textContent;
    let pattern = /\((?<city>[\w\s]+)\)/g;
    let match = text.matchAll(pattern)
    let result = []
    for (const element of match) {
        result.push(element.groups.city)
    }


    return result.join(`; `)

}