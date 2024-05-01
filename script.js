async function getImage(){
    let a = await fetch("/img/")
    let responce = await a.text()
    let div = document.createElement("div")
    div.innerHTML = responce;
    let as = div.getElementsByTagName("a")
    console.log(as)
    images = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".jpeg")){
            images.push(element.href.split("/img/")[1])
        }
    }
    console.log(images)

    let imgSlide = document.querySelector(".container")
    console.log(imgSlide)
    imgSlide.innerHTML = ""
    for (const img of images) {
        imgSlide.innerHTML = imgSlide.innerHTML + `<img src="img/${img}" alt="">`
    }
}
getImage()