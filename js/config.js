let OpBtn = document.querySelector('.DesktopHeader .Toggles')
let Menu = document.querySelector('.DesktopHeader .Menu-Container')
let ClBtn = document.querySelector('.Menu-Container .Close-Icon')
OpBtn.addEventListener('click',()=>{
    Menu.classList.add('Open')
    gsap.to('.Menu-Container .Menu-item .menu-link ',{
        x:0,
        opacity:1,
        delay:1.5
    })
})
ClBtn.addEventListener('click',()=>{
    gsap.to('.Menu-Container .Menu-item .menu-link ',{
        x:'100%',
        opacity:0
    })
    setTimeout(() => {
        Menu.classList.remove('Open')
    }, 1000);
 
})

let DropNavs =document.querySelectorAll('.navbtn')
DropNavs.forEach(d=>{
    d.addEventListener('click',(e)=>{
     e.currentTarget.children[1].classList.toggle('openNav')
    })
})
let header = document.querySelector('header')
window.addEventListener('scroll',(s)=>{
    if(scrollY > 0){
        header.classList.add('GoBottom')
    }
    else{
        header.classList.remove('GoBottom')
    }
    
})


var host = {
    debug: false,
    settings:{
              'connection.web.trust_login': 'https://basispanel.ir/apicms', 
          'connection.web.basiscore': 'https://basispanel.ir/apicms', 
          'connection.web.userbehavior': 'https://basispanel.ir/apicms', 
          'connection.web.media': 'https://basispanel.ir/apicms', 
          'default.dbsource.verb': 'post', 
          'default.call.verb': 'get', 
          'default.viewCommand.groupColumn': 'prpid', 
              "default.dmnid":'4086',
              "default.binding.regex":"\\{##([^#]*)##\\}"
          }
  }
 
function onSource(args) { 
    const captcha = document.querySelector("input[name='captcha']").value; 
    const captchaid = document.querySelector("input[name='captchaid']").value; 
    console.log(captcha);
    const stringJson = JSON.stringify(args.source?.rows[0]); 
    $bc.setSource('edit.object', { 
        value: stringJson, 
        captcha: captcha, 
        captchaid: captchaid ,
  
    }) 
    console.log('sourcd',stringJson);
  } 
  
  
  async function OnProcessesEditObjectFn(args) {
    const response = args.response;
  const json = await response.json();
  
  console.log(json);
  if (json.errorid == 6) {
              console.log('با موفقیت ثبت شذ');
              document.querySelector('.main-container').querySelector('span').innerHTML='پیام شما با موفقیت ثبت شد'
              document.querySelector('.main-container').classList.add('SEND')
    setTimeout(()=>{
      document.querySelector('.main-container').classList.remove('SEND')
    },2000)
            
  
  }

  if (json.errorid == 4) {
     console.log(json);
     document.querySelector('.main-container').querySelector('span').innerHTML='  کپچا اشتباه وارد شده  '
     document.querySelector('.main-container').classList.add('SEND')
setTimeout(()=>{
document.querySelector('.main-container').classList.remove('SEND')
},2000)
  }
  
  }


function rendered(){
  setTimeout(()=>{
    let a =document.querySelectorAll('footer [data-bc-schema-column] [data-bc-question]')  
    let email = $('footer [data-bc-schema-column]').children('[data-bc-question]')[0]
    $(email.querySelector('footer input')).attr('placeholder',' ایمیل ');
   let isEmpty=false
   let buttons = document.querySelector('footer .schemaBtn')
  let inputs = document.querySelectorAll('footer input')
  buttons.addEventListener('click',()=>{
    console.log('vkkkk');
    inputs.forEach(input=>{
      console.log(input.value);
        if(input.value == ""){
           isEmpty = true
            console.log('فیلد را پرکنید');
            document.querySelector('.main-container').querySelector('span').innerHTML='  فیلدها را پرکنید '
            document.querySelector('.main-container').classList.add('SEND')
       setTimeout(()=>{
       document.querySelector('.main-container').classList.remove('SEND')
       },2000)
        }
      })
  })

   console.log('rendered');

        
      },100)

}

   // SEARCH
   let sBTN = document.querySelector('.DesktopHeader .searchIcon')
   let sCon = document.querySelector('.searchContainer')
   let sClose  = document.querySelector('.searchContainer .CloseSerch')
   let searchicon = document.querySelector('.searchContainer .sBTN')
   sBTN.addEventListener('click',()=>{
     sCon.classList.add('show')
   })
   sClose.addEventListener('click',()=>{
     sCon.classList.remove('show')
   })
   let input = document.querySelector('.searchContainer input#search')
   let Val = input.value
   
       console.log('value',input.value);
       
     input.addEventListener("keypress", function(event) {
       // If the user presses the "Enter" key on the keyboard
       if (event.key === "Enter") {
         // Cancel the default action, if needed
         if(input.value != ''){
         Val = input.value
      window.location.href =`/search.bc?q=${Val}`
     console.log('clicked');
     console.log('val',Val);
         }
       }
     });
     searchicon.addEventListener("click", function(event) {
       Val = input.value
       if(input.value != ''){
           window.location.href =`/search.bc?q=${Val}`
     console.log('clicked');
     console.log('val',Val);
       }
   console.log(Val);
   
     
     });

// let map1 = document.querySelector('.Map_1')
// let xLat = map1.getAttribute('data-x')
// let yLat = map1.getAttribute('data-y')
// let re1 = yLat.replace('<p>','')
// yLat = re1.replace('</p>','')
// let map_1 = L.map('Map_1',{
//     center:[yLat,xLat]
//     ,zoom:10
// })
// let tiles= new L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
// attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// minZoom:'10'
// }).addTo(map_1);
// var customIcon = L.icon({
//   iconUrl: '../../images/location.png',
//   iconSize: [32, 32],
//   iconAnchor: [16, 32],
//   popupAnchor: [0, -32]
//   });
//   var marker1 = L.marker([yLat,xLat],{ icon: customIcon }).addTo(map_1);

