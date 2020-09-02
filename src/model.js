import {ImageBlock, TextColumnsBlock, TextBlock, TitleBlock} from './classes/blocks'

export const model = [
    new TitleBlock( 'Test Title', {
        styles: 'background: #FF00FF; color: #fff;  text-align:center; padding: 3px',
        tag: 'h1',
    }),
    new TextBlock('Test Text', {
        styles: 'background: #48D1CC; padding: 3px',
        tag: 'p'
    }),
    new TextColumnsBlock([
        '1 text',
        '2 text',
        '3 text'
    ], {
        styles: 'padding: 1rem; text-align: center;',
        tag: 'p'
    }),
    new ImageBlock( './asserts/Homer.jpg', {
        alt: 'alt',
        styles: 'text-align: center',
        imageStyles: 'width: 300px; height: auto;'
    })
]
