// creaitng variables

const slider = document.getElementById('views');//input slider variable

slider.addEventListener('change', getViews, false);

let track = document.querySelector('-webkit-slider-runnable-track');

const toggle = document.getElementById('toggle');

toggle.addEventListener('click', moveRight, false);
toggle.addEventListener('change', getViews, false);

function  moveRight(){
    toggle.classList.toggle('active');
}





function getViews(){
    
    let sliderValue = Number(slider.value);
    let price = document.getElementById('price');
    if(toggle.classList.contains('active')){
        if(sliderValue === 1 ){
            document.getElementById('kviews').innerText = `10K`;
            document.getElementById('price').innerText = `$6.00`;
            slider.style.backgroundSize = `${sliderValue}%`;

            }else if(sliderValue === 2){
                document.getElementById('kviews').innerText = `50K`;
                document.getElementById('price').innerText = `$9.00`;
                slider.style.backgroundSize = `${sliderValue}5%`;

            }else if(sliderValue === 3){
                document.getElementById('kviews').innerText = `100K`;
                document.getElementById('price').innerText = `$12.00`;
                slider.style.backgroundSize = `50%`;

            }else if(sliderValue ===4){
                document.getElementById('kviews').innerText = `500K`;
                document.getElementById('price').innerText = `$18.00`;
                slider.style.backgroundSize = `75%`;

            }else if(sliderValue === 5){
                document.getElementById('kviews').innerText = `1M`;
                document.getElementById('price').innerText = `$27.00`;
                slider.style.backgroundSize = `100%`;
            
        }else{
            alert('error');
        }

    }else{

        if(sliderValue === 1 ){
            document.getElementById('kviews').innerText = `10K`;
            document.getElementById('price').innerText = `$8.00`;
            slider.style.backgroundSize = `${sliderValue}%`;

            }else if(sliderValue === 2){
                document.getElementById('kviews').innerText = `50K`;
                document.getElementById('price').innerText = `$12.00`;
                slider.style.backgroundSize = `${sliderValue}5%`;

            }else if(sliderValue === 3){
                document.getElementById('kviews').innerText = `100K`;
                document.getElementById('price').innerText = `$16.00`;
                slider.style.backgroundSize = `50%`;

            }else if(sliderValue ===4){
                document.getElementById('kviews').innerText = `500K`;
                document.getElementById('price').innerText = `$24.00`;
                slider.style.backgroundSize = `75%`;

            }else if(sliderValue === 5){
                document.getElementById('kviews').innerText = `1M`;
                document.getElementById('price').innerText = `$36.00`;
                slider.style.backgroundSize = `100%`;
            
        }else{
            alert('error');
        }
    }
}
getViews();
