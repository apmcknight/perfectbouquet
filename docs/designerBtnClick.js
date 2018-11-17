// Allows the size buttons to be 'slected'.

// Still need to fix bug where both selections are highlighted

function buttonClicked1() {
    $('#btn1').addClass('sizeBtnClicked').removeClass('.sizeBtn');
}

function buttonClicked2() {
    $('#btn2').addClass('sizeBtnClicked').removeClass('.sizeBtn');
}

// DIDN'T WORK ! NEED FIXED...
// if($('.sizeBtnClicked') == true){
    //     $('.sizeBtnClicked').removeClass('.sizeBtn')
    // }   else{
    //     $('.sizeBtn').addClass('.sizeBtnClicked')
    // }