const compose = (...fns) => x =>
    fns.reduceRight((v, f) => f(v), x)

const removeElement = element =>
    element.parentNode.removeChild(element)

const getElementId = id =>
    document.getElementById(id)

const redirect = () =>
    window.location.href === 'https://github.com/'
        ? window.location.href = 'https://github.com/tarasowski'
        : null

const remove = compose(redirect, removeElement, getElementId)

remove('dashboard')