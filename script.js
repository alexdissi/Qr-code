function generateQR() {
    let QRtext = document.querySelector("#text").value;

    if (QRtext.trim().length == 0) {
        document.querySelector("#img").style.visibility = "hidden";

    } else {

        document.querySelector('#img').style.visibility = "visible";
        document.querySelector('#img').src = "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=" + QRtext;

    };
}
