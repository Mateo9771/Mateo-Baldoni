let section=document.querySelectorAll('section')
let navLink=document.querySelectorAll('header nav a')

window.onscroll=()=>{
    section.forEach(sec=>{
    let top=window.scrollY;
    let offset=sec.oofsetTop-150;
    let heigth=sec.offsetHeigth;
    let id=sec.getAttribute('id')
    if(top>offset && top<offset + heigth){
        navLink.forEach(links=>{
            links.classList.remove('active')
            document.querySelector('header nav a[href='+id+']').classList.add('active')
        })
    }
})
}