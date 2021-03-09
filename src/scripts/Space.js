export const Space = (spaceObj, type) => {
    if (type === "video"){
       console.log(type)
        return`
        <section>
        ${spaceObj.title}
        ${spaceObj.explanation}
        <a href="${spaceObj.url}">click to see video</a>
    </section>`
    
}else{
    console.log(type)
    return `
    <section>
        ${spaceObj.title}
        <img src=${spaceObj.url}>
        ${spaceObj.explanation}
    </section>`
}
}