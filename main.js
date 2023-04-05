const cross = document.querySelector(".cross")
const left = document.querySelector("#left")
const right = document.querySelector("#right")

const img1 = document.querySelector("#tap-1")
const img2 = document.querySelector("#tap-2")
const img3 = document.querySelector("#tap-3")
const img4 = document.querySelector("#tap-4")

const images = document.querySelector("#images")
const imgShow1 = document.querySelector("#show-1")
const imgShow2 = document.querySelector("#show-2")
const imgShow3 = document.querySelector("#show-3")
const imgShow4 = document.querySelector("#show-4")
const imgShowItems = Array.from(images.children)

let imgShowCurrent;


img1.addEventListener('click', e =>{
    console.log('Первая картинка')
    deleteHidden(img1, imgShow1)
    imgShowCurrent = imgShowItems[0]
    imgShowItems[imgShowCurrent.dataset.index].setAttribute('data-active', '')
})
img2.addEventListener('click', e =>{
    console.log('Вторая картинка')
    deleteHidden(img2, imgShow2)
    imgShowCurrent = imgShowItems[1]
    imgShowItems[imgShowCurrent.dataset.index].setAttribute('data-active', '')
})
img3.addEventListener('click', e =>{
    console.log('Третья картинка')
    deleteHidden(img3, imgShow3)
    imgShowCurrent = imgShowItems[2]
    imgShowItems[imgShowCurrent.dataset.index].setAttribute('data-active', '')
})
img4.addEventListener('click', e =>{
    console.log('Четвертая картинка')
    deleteHidden(img4, imgShow4)
    imgShowCurrent = imgShowItems[3]
    imgShowItems[imgShowCurrent.dataset.index].setAttribute('data-active', '')
})

cross.addEventListener('click', e=>{
    imgShow4.classList.add('hidden')
    imgShow3.classList.add('hidden')
    imgShow2.classList.add('hidden')
    imgShow1.classList.add('hidden')
    cross.classList.add('hidden')
    left.classList.add('hidden')
    right.classList.add('hidden')
})


function deleteHidden(tap, img){
    tap.classList.remove('hidden')
    img.classList.remove('hidden')
    cross.classList.remove('hidden')
    left.classList.remove('hidden')
    right.classList.remove('hidden')
}

right.onclick = function(){
    
    showNextSlide('next')
}
left.onclick = function(){
    showNextSlide('prev')
}


function showNextSlide(direction){
    const currentSlide = images.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index
    currentSlide.classList.add('hidden')
    currentSlide.removeAttribute('data-active')

    let nextSlideIndex
    if(direction === 'next'){
        if(currentSlideIndex + 1 ===  imgShowItems.length){
            nextSlideIndex = 0
        }
        else{
            nextSlideIndex = currentSlideIndex + 1
        }
    }
    else if(direction === 'prev'){
        if(currentSlideIndex === 0){
            nextSlideIndex =  imgShowItems.length - 1
        }
        else{
            nextSlideIndex = currentSlideIndex - 1
        }
    }

    const nextSlide = images.querySelector(`[data-index="${nextSlideIndex}"]`)
    nextSlide.classList.remove('hidden')
    nextSlide.setAttribute('data-active', '')
}