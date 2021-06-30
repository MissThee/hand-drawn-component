export interface FontInfo {
    fontFamily: string
    fontSrc: string
    loaded?: Function
}

const loadFonts = async (fontFamily: string, fontSrc: string) => {
    // @ts-ignore
    const font = new FontFace(fontFamily, `url(${fontSrc})`);
    const loadFontFace: any = await font.load();
    // @ts-ignore
    document.fonts.add(loadFontFace);
    return loadFontFace
};

export const setFont = (fontInfoArray: FontInfo[]) => {
    let fontFamilyStr = '';
    for (let fontInfo of fontInfoArray) {
        fontFamilyStr += "'" + fontInfo.fontFamily + "',";
        if (fontInfo.fontFamily && fontInfo.fontSrc) {
            loadFonts(fontInfo.fontFamily, fontInfo.fontSrc).then(() => {
                fontInfo.loaded?.call(undefined)
            });
        }
    }
    if (fontFamilyStr) {
        document.body.style.fontFamily = fontFamilyStr.substr(0, fontFamilyStr.length - 1);
    }
}
export const setFontSync = async (fontInfoArray: FontInfo[]) => {
    let fontFamilyStr = '';
    for (let fontInfo of fontInfoArray) {
        fontFamilyStr += "'" + fontInfo.fontFamily + "',";
        if (fontInfo.fontFamily && fontInfo.fontSrc) {
            await loadFonts(fontInfo.fontFamily, fontInfo.fontSrc)
            fontInfo.loaded?.call(undefined);
        }
    }
    if (fontFamilyStr) {
        document.body.style.fontFamily = fontFamilyStr.substr(0, fontFamilyStr.length - 1);
    }
}
