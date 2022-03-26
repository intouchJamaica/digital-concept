//Header start
const imageParent = document.querySelector('.header-products');
const end_Image = document.querySelector('#image1')

var lastPos = 0;
window.addEventListener('scroll', (e)=>{
    var pos = window.scrollY;
    headTextControl(pos);
    lastPos = pos
})
var mainImgscale = 1
const headTextControl = (current)=>{
    var headText = document.getElementById('headText');
    var narrator = document.querySelector('.narrator');
    var narrDisp = document.querySelector('.narrator-display');
    var mainImg = document.getElementById('main-image');
    if(current < 220){
        headText.style.opacity=1;
        headText.textContent = 'Our Work Speaks For Itself';
        narrator.style.top="130px";
        narrDisp.classList.remove('animation-one');
        narrDisp.style.visibility = "hidden"
    }else if(current >= 220 && current <= 740){
        narrDisp.style.visibility = "visible"
        headText.style.opacity=1;
        headText.textContent = 'Social Media Projects';
        narrator.style.zIndex = "0";
        narrDisp.classList.add('animation-one');
        if(window.innerWidth > 1020){
            mainImg.style.width="15em"
            mainImg.style.height="15em"    
        }else{
            mainImg.style.width="10em"
            mainImg.style.height="10em"    
        }
    }else if(current> 741 && current < 2100){
        narrator.style.top="100px"
        headText.style.opacity=0;
        narrDisp.classList.remove('animation-one');
        mainImg.style.width = "20em"
        mainImg.style.height = "20em"
        headText.style.color = "#fff";
        headText.classList.remove('web-dev-intro');
        headText.style.transform = `scale(1)`
    }else if(current > 2150 && current < 3400 ){
        narrator.style.top="250px";
        headText.style.opacity=1;
        headText.textContent = ""
        if(current > lastPos){
            narrDisp.style.visibility = "hidden"
        }else if(current < lastPos && current < 2700){
            narrDisp.style.visibility = "visible"
        }
        headText.style.color = "#1C5985";
        headText.classList.add('web-dev-intro');
        mainImgscale = 1
    }else if(current >= 3500 && current <= 4000){
        if(current > lastPos){
            mainImgscale += 0.6
            headText.style.transform = `scale(${mainImgscale})`
        }else{
            if(mainImgscale > 1){
                mainImgscale -= 1.4
                headText.style.transform = `scale(${mainImgscale})`        
            }else{
                mainImgscale = 1
                headText.style.transform = `scale(${mainImgscale})`        
            }
        }
    }else if(current > 4000 && current < 4400){
        narrator.style.display="block"
        if(window.innerWidth >1080){
            mainImgscale = 19.2 
        }else{
            mainImgscale = 13.8 
        }
        headText.style.transform = `scale(${mainImgscale})`        
    }else if(current > 4400 && current >4900 ){
        narrator.style.display="none"
    }
}