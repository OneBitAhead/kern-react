export type HeadingTextType = {
    [key: string] : {
        className: string, 
        tagName: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
    }
}

export const HeadingTextSize:HeadingTextType = {
    DISPLAY:        { className: 'display', tagName: 'h1' },
    EXTRA_LARGE:    { className: 'x-large', tagName: 'h2' },
    LARGE:          { className: 'large',   tagName: 'h3' },
    MEDIUM:         { className: 'medium',  tagName: 'h4' },
    SMALL:          { className: 'small',   tagName: 'h5' }
}