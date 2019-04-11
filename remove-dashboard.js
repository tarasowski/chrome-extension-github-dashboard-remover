const compose = (...fns) => x =>
    fns.reduceRight((v, f) => f(v), x)

const removeElementByClassName = className =>
    Array.from(document.getElementsByClassName(className))
         .forEach(element => element.remove())

const redirect = () =>
    window.location.href === 'https://github.com/'
        ? window.location.href = 'https://github.com/tarasowski'
        : null

const remove = compose(redirect, removeElementByClassName)

remove("application-main")
