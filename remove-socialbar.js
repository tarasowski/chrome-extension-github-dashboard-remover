const compose = (...fns) => x =>
    fns.reduceRight((v, f) => f(v), x)

const removeElementByClassName = className =>
    Array.from(document.getElementsByClassName(className))
         .forEach(element => element.remove())


const remove = compose(removeElementByClassName)

remove("UnderlineNav-body")
