import "src/component/hand-drawn-button.ts"
import "src/component/hand-drawn-icon.ts"
import "src/component/hand-drawn-pad.ts"
// import "src/component/hand-drawn-input.ts"
// import "src/component/hand-drawn-textarea.ts"
// import "src/component/hand-drawn-checkbox.ts"
// import "src/component/hand-drawn-checkbox-group.ts"
// import "src/component/hand-drawn-radio.ts"
// import "src/component/hand-drawn-radio-group.ts"
import "src/component/hand-drawn-dialog.ts"
// import "src/component/hand-drawn-switch.ts"
import "src/component/hand-drawn-anchor.ts"
// import "src/component/hand-drawn-progress.ts"
// import "src/component/hand-drawn-slider.ts"


import * as FontTool from "src/util/font.ts"

// 加载一个字体后显示
window.onload = function () {
    const loading = document.getElementById('loading')
    const loadingText = document.getElementById('loadingText')
    const main = document.getElementById('main')
    main.style.transition = 'opacity 1.2s ease-out'
    main.style.opacity = '0'
    loadingText.style.transformOrigin = '50% 50%'
    loadingText.style.transition = 'all 1s ease-out'
    Promise.all([
        new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 500)
        }),
        new Promise((resolve) => {
            FontTool.setFont([
                {
                    fontFamily: 'comic', fontSrc: './assets/font/comic.woff2', loaded: () => {
                        resolve()
                    }
                },
                {fontFamily: 'FZMWFont', fontSrc: './assets/font/FZMWFont.woff2'},
            ])
        }),
    ]).then(() => {
        loadingText.innerText = 'Done'
        loadingText.style.opacity = '0'
        loadingText.style.transform = 'scale(2)'
        setTimeout(() => {
            main.style.opacity = '1'
            setTimeout(() => {
                loading.style.display = 'none'
            }, 1000)
        }, 1000)
    })
}

// 加载所有字体后显示
// window.onload = function () {
//     const loading = document.getElementById('loading')
//     const loadingText = document.getElementById('loadingText')
//     const main = document.getElementById('main')
//     main.style.transition = 'opacity 1.2s ease-out'
//     main.style.opacity = '0'
//     loadingText.style.transformOrigin = '50% 50%'
//     loadingText.style.transition = 'all 1s ease-out'
//     Promise.all([
//         new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve()
//             }, 500)
//         }),
//         document.fonts.ready
//     ]).then(() => {
//         loadingText.innerText = 'Done'
//         loadingText.style.opacity = '0'
//         loadingText.style.transform = 'scale(2)'
//         setTimeout(() => {
//             main.style.opacity = '1'
//             setTimeout(() => {
//                 loading.style.display = 'none'
//             }, 1000)
//         }, 1000)
//     })
// }