let gallerys = document.querySelectorAll('.Galerys img')
let h =0
let Is = true
let popBTN = document.querySelector('.OpenPopUP')
popBTN.addEventListener('click',(e)=>{
  gallerys.forEach(g=>{
    g.setAttribute(`data`,h)
    let clickedIMG
    if(h==0){
      clickedIMG =Number(g.getAttribute('data'))
    }
    h++
  })
    let popup = document.querySelector('.Gallerypopup')
    popup.classList.add('showPOPUP')
    let MimgSCR = gallerys[0].getAttribute('src')
   let clickedIMG =0
    console.log(MimgSCR);
    let mainIMG = document.querySelector('img.Main')
    mainIMG.setAttribute('src',MimgSCR)
    mainIMG.classList.add('active')
    let previewIMG = document.querySelector(' img.Main')
    let newIndex = clickedIMG 
     function preview(){
         let i = clickedIMG
         let selectedIMGurl = gallerys[newIndex] //get user clicked img url
         console.log('clickk',selectedIMGurl);
         console.log('sel',gallerys[i],i);
         console.log('indec',newIndex);
         previewIMG.classList.remove('active')
         setTimeout(()=>{
             previewIMG.setAttribute('src',selectedIMGurl.getAttribute('src'))
             previewIMG.classList.add('active')
         },200)
         }
       // previos next btn
      let nextBtn = document.querySelector('.Gnext')
      let prevBtn =document.querySelector('.Gprev')
      nextBtn.onclick=()=>{
      newIndex++
      console.log('glen',gallerys.length);
      console.log('in',newIndex);
      if(newIndex == gallerys.length){
      newIndex = 0
      preview()
      }
      else{
      preview() //call aboce function to update image
      }
      }
      prevBtn.onclick=()=>{
        console.log('in',newIndex);
      newIndex--
      if(newIndex < 0){
        newIndex = gallerys.length-1
        preview()
      }
      else{
      preview() //call aboce function to update image
      }
      }
  })
let close = document.querySelector('.close')
close.addEventListener('click',()=>{
    let popup = document.querySelector('.Gallerypopup')
popup.classList.remove('showPOPUP')
})

