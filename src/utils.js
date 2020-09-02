export function row(content, styles= '') {
    const style = `margin-bottom: 0; ${styles}`
    return `<div class='row' style="${style}">${content}</div>`
}

export function col(content) {
    return `<div class='col-sm'>${content}</div>`
}