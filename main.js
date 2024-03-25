const elText =document.querySelector('.text');
const elForm =document.querySelector('.form');
const elInput =document.querySelector('.input');
const elInput1 =document.querySelector('.input1');
const elStatus =document.querySelector('.status');


let cars = ['BMW', 'MERS', 'toyota', 'rols', 'nissan', 'Kia','Matiz', 'Jiguli', 'rolsroys', 'Supra', ]
elForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (!elInput.value) {
        elStatus.innerHTML = 'Bush narsa kiritmang'
        elStatus.style.color = 'red';
    }
    if (!elInput1.value) {
        elStatus.innerHTML = 'Bush narsa kiritmang'
        elStatus.style.color = 'red';
    }

    else{
        cars.unshift(elInput.value );
        elText.innerHTML = cars;
        elInput.value = '';
    }
     if (!elInput.value) {
        cars.push(elInput1.value );
        elText.innerHTML = cars;
        elInput1.value = '';
    }
});
    elForm.addEventListener('reset', function (evt) {
        evt.preventDefault();
         if  (!elInput.value){
            cars.pop(elText.value );
            elText.innerHTML = cars;
            elInput1.value = '';    
        }
        else {
            cars.shift(!elText.value );
            elText.innerHTML = cars;
            elInput1.value = '';
        }
        

});
   

elText.innerHTML = cars;
