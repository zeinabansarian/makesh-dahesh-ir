gsap.registerPlugin(ScrollTrigger) 
let boxes = document.querySelectorAll('.Gallery')
boxes.forEach(p=>{
    gsap.to(p,{
        y:0,
        opacity:1,
        scale:1,
        scrollTrigger:{
            trigger:p,
            start:"top 60%",
            end:"bottom bottom"
        }
    })
})
let sideBarLi = document.querySelectorAll(".sidebar li")

sideBarLi[0].classList.add("activeList")
//  POPUP
let gallerys
sideBarLi.forEach(element => {
    element.addEventListener("click" , function(params) {
        console.log(params.currentTarget.getAttribute('id'));
        if(params.currentTarget.getAttribute('id')=='img')
        {
     
            tabs[1].classList.remove('show') 
            tabs[0].classList.add('show') 
            console.log('imggg');
            popupIMG()
        }
        else
            {

                tabs[0].classList.remove('show')
                tabs[1].classList.add('show') 
                popupVideo()
            }
        $(".sidebar li").removeClass("active")
        element.classList.add("active")
    })
});
let tabs = document.querySelectorAll('.tab')
tabs[0].classList.add('show')


function popupIMG(){

    gallerys = document.querySelectorAll('.Gallery')
    let h =0
let Is = true
gallerys.forEach(g=>{
    g.setAttribute(`data`,h)
    h++
    let clickedIMG =''
    g.addEventListener('click',(e)=>{
         document.querySelector('img.Main').style.display='flex'
document.querySelector('.VideoMain .Video ').style.display='none'
         clickedIMG =Number(e.currentTarget.getAttribute('data'))
         console.log('clicked',clickedIMG);
        let popup = document.querySelector('.Gallerypopup')
        popup.classList.add('showPOPUP')
        let MimgSCR = e.currentTarget.querySelector('img').getAttribute('src')
        console.log(MimgSCR);
        let mainIMG = document.querySelector('img.Main')
        mainIMG.setAttribute('src',MimgSCR)
        mainIMG.classList.add('active')
        let  Others=[]
        for(let i = 0 ; i< gallerys.length; i++){
         if(gallerys[i].getAttribute('data') != clickedIMG ){
            clickActive = gallerys[i]
         }       
         Others.push(gallerys[i])
        }
        let previewIMG = document.querySelector(' img.Main')
        let newIndex = clickedIMG 
        function preview(){
            let i = clickedIMG
            let selectedIMGurl = gallerys[newIndex].querySelector('img') //get user clicked img url
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
         Is = false
        let close = document.querySelector('.Gallerypopup .close')
        close.addEventListener('click',()=>{
        let popup = document.querySelector('.Gallerypopup')
        popup.classList.remove('showPOPUP')
        })
    })
})
}
popupIMG()

function popupVideo(){
    console.log('videoo');
    gallerys = document.querySelectorAll('.VideoBox')
    let h =0
let Is = true
gallerys.forEach(g=>{
    g.setAttribute(`data`,h)
    h++
    let clickedIMG =''
    g.addEventListener('click',(e)=>{
        document.querySelector('.VideoMain .Video ').style.display='flex'
          document.querySelector('img.Main').style.display='none'
         clickedIMG =Number(e.currentTarget.getAttribute('data'))
         console.log('clicked',clickedIMG);
        let popup = document.querySelector('.Gallerypopup')
        popup.classList.add('showPOPUP')
        let MimgSCR = e.currentTarget.querySelector('video').getAttribute('src')
        console.log(MimgSCR);
        let Mposter = e.currentTarget.querySelector('video').getAttribute('poster')
        let mainIMG = document.querySelector('video.Main')
        console.log(Mposter);
        mainIMG.setAttribute('src',MimgSCR)
        mainIMG.setAttribute('poster',Mposter)
        mainIMG.classList.add('active')
        let  Others=[]
        let secs = document.querySelectorAll('.VideoMain .Video')
        let videos = document.querySelectorAll(' video.Main')
        console.log(videos);
        videos.forEach(s=>{
        s.setAttribute('data-IS',false)
      })
      videos.forEach(v=>{
        v.addEventListener('click',function (event) {
          let Is = event.currentTarget.getAttribute('data-IS')
          console.log(Is);
          if(Is==='false'){
              $(event.currentTarget.parentElement).toggleClass('toggle');
              
              event.currentTarget.play()
              event.currentTarget.setAttribute('data-IS',true)
          }
          else{
            console.log('umm');
              $(event.currentTarget.parentElement).toggleClass('toggle');
              event.currentTarget.pause()
              event.currentTarget.setAttribute('data-IS',false)
          }
      });
      })
        for(let i = 0 ; i< gallerys.length; i++){
         if(gallerys[i].getAttribute('data') != clickedIMG ){
            clickActive = gallerys[i]
         }       
         Others.push(gallerys[i])
        }
        let previewIMG = document.querySelector(' video.Main')
        let newIndex = clickedIMG 
        function preview(){
            let i = clickedIMG
            let selectedIMGurl = gallerys[newIndex].querySelector('video') //get user clicked img url
            console.log('sel',gallerys[i],i);
            console.log('indec',newIndex);
            let selectedMposter = gallerys[newIndex].querySelector('video').getAttribute('poster')
            console.log(selectedMposter);
            previewIMG.setAttribute('poster',selectedMposter)
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
         Is = false
        let close = document.querySelector('.Gallerypopup .close')
        close.addEventListener('click',()=>{
        let popup = document.querySelector('.Gallerypopup')
        popup.classList.remove('showPOPUP')
        })
    })
})
}