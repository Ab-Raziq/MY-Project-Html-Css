const generateBtn= document .querySelector('form button');
const qrCodeBox= document .querySelector('.qr-code');
const qrInput= document .querySelector('form input');
const qrImage= document .querySelector('.qr-code img');

generateBtn.addEventListener('click' ,() =>{
    let qrValue = qrInput.value;
    if(!qrValue){
        return alert('لطفا یه متن یا آدرس وارد بکن');
    }
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    generateBtn.innerText='در حال دریافتQR Code';
    qrImage.addEventListener('load' , () =>{
        qrCodeBox.classList.remove('hidden');
        
        console.log( qrCodeBox);
        generateBtn.innerText='تولید QR Code';
    })
})
qrInput.addEventListener('keyup' , () =>{S
    if(!qrInput.value){
        qrCodeBox.classList.add('hidden');
    }
})
