function rgbhex(red,green,blue) { 

    function stop(color) { 
        return Math.min(Math.max(color, 0), 255)
    }

    let rgb = [stop(red), stop(green), stop(blue)]
    let hex = [rgb[0].toString(16), rgb[1].toString(16), rgb[2].toString(16)]

    hex = hex.map(item => {
        if (item.length == 1) return "0" + item
        return item
    })

    return ("#" + hex.join('').toUpperCase())
}

function hexrgb(hex) {
    let hexc = hex.replace("#","").split("")
    if (hexc.length < 6) return

    let red = ""
    let green = ""
    let blue = ""
    
    hexc.forEach(element => {
        if (red.length == 0 || red.length < 2) return red += element
        if (green.length == 0 || green.length < 2) return green += element
        if (blue.length == 0 || blue.length < 2) return blue += element
    });

    let colores = [red, green, blue];
    
    colores = colores.map(item => { 
        return parseInt(item, 16)
    })
    
    if (isNaN(colores[0]) || isNaN(colores[1]) || isNaN(colores[2])) return 
    return colores
}

const color = document.querySelector('#color')
const resultado = document.querySelector("#resultado").querySelectorAll("div")

function generador() { 
    let rgb_base = hexrgb(color.value)
    color.value = ""
    if (rgb_base == undefined) return

    resultado.forEach(div => {
        
        let r = Math.floor(rgb_base[0] * Math.random())
        let g = Math.floor(rgb_base[1] * Math.random())
        let b = Math.floor(rgb_base[2] * Math.random())
        
        let res = rgbhex(r, g, b)
        if (res != undefined) {
            div.innerHTML = `<div>${[r,g,b].join(", ")}<br>${res}</div>`
            div.style.backgroundColor = res
        }
    })
}