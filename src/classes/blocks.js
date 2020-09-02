import {col, row} from "../utils";

class Block {
    constructor(type, value, options) {
        this.type = type;
        this.value = value;
        this.options = options
    }

    toHTML(){
        throw new Error('Метод toHTML должен быть реализован')
    }
}

export class TextBlock extends Block{
    constructor(value, options) {
        super('text', value, options)
    }

    toHTML(){
        const {tag, styles} = this.options
        return row(col(`
        <${tag} style="margin-bottom: 0">${this.value}</${tag}>
    `), styles)
    }
}

export class TitleBlock extends Block{
    constructor(value, options) {
        super('title', value, options)
    }

    toHTML() {
        const {tag, styles} = this.options
        return row(col(`
       <${tag}>${this.value}</${tag}>  
    `),styles)
    }
}

export class ImageBlock extends Block{
    constructor(value, options) {
        super('image', value, options)
    }

    toHTML() {
        const {alt, styles, imageStyles} = this.options
        return  row(col(`<img src="${this.value}" alt="${alt}   "style ="${imageStyles}"></<img>`), styles)
    }
}

export class TextColumnsBlock extends Block{
    constructor(value, options) {
        super('textColumns', value, options)
    }

    toHTML() {
        const {tag, styles} = this.options
        const html = this.value.map(item => col(`<${tag}>${item}</${tag}>`))
        return row(html.join(''), styles)
    }
}
