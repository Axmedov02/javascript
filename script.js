do{
    num = +prompt('Son kiriting')
    if(isNaN(num)){
            alert('Siz son kiritmadingiz')
        }else if (num > 100){
            alert('100 dan katta')
        }else if (num < 0) {
            alert('0 dan kichik')
        } else if (num == 0){
            alert('0 son emas')
        }else if (num < 30){
            alert("qo'shing")
        }else if (num > 30){
            alert('kamaytiring')
        }
    
}while(num !== 30){
    alert('Ureeee')
}
