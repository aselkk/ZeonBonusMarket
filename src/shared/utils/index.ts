const disableScrolling = () => {
    document.body.style.overflow = "hidden";
}
const enableScrolling = () => {
    document.body.style.overflow = "auto";
}


export const Utils = {
    DOM: {
        disableScrolling,
        enableScrolling
    }
}