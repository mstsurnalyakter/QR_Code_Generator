let qrCode = document.getElementById("qr_code");
let qrImage = document.getElementById("qr_image");
let qrText = document.getElementById("qr_text");

const generateQRCode = () => {
    if (qrText.value.length > 0) {
          qrImage.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
          qrCode.classList.add("show_image");
    }else{
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");
        },1000)
    }

};
