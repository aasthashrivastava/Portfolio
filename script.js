function slide(){
document.querySelector("#scroll")
.addEventListener("scroll", function(){
   var dem= document.querySelector(".slide").getBoundingClientRect()
   var prev= dem.left


document.querySelector("#scroll")
.addEventListener("scroll", function(){
   var dem2 = document.querySelector(".slide").getBoundingClientRect()
   var dem3 = prev-dem2.left;
    prev = dem2.left
   
    document.querySelectorAll(".slide").forEach(function(every){
      every.style.transform = `skewY(${dem3*0.1}deg)`
    })
  })
 })
}
function effect(){
    document.querySelectorAll(".slide").forEach(function(elem){
      var dim = elem.getBoundingClientRect();

    elem.addEventListener("mousemove", function(dets){
       this.children[1].style.clipPath = `circle(10% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`
       console.log(dets)
    })
    elem.addEventListener("mouseleave", function(dets){
       this.children[1].style.clipPath = `circle(0% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`
    console.log(dets)
    })
})
}
effect()
slide()