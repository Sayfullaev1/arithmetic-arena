

function ddd() {
    if (window.innerWidth <= 580) {
        let body = document.querySelector("body")
        body.style.overflow = "hidden";
    }
}


setTimeout( ddd , 1500 )



clickBtn()

function clickBtn() {
    let body = document.querySelector("body")
    let header = document.querySelector(".page-header")
    let card = document.querySelector(".card__info")

    let cardInfoWrapBackground = document.querySelector(".card__info__wrap")

    let btn = document.querySelector(".page-header__photos__btn")

    let btn2 = document.querySelector(".card__info__photos__btn")


    btn.addEventListener( "click", function () {
        header.style.display= "none"
    })


    btn2.addEventListener( "click", function () {
        card.style.display= "none"
        cardInfoWrapBackground.style.display= "none";
        body.style.overflow = "visible";
    })


}




inputValidation()

function inputValidation() {
    let input = document.querySelectorAll(".page-main__card__input")    

    input[0].addEventListener('input', function(e) {
        let input2 = e.target;


        input2.value = input2.value.slice(0, 20);
    })

    input[1].addEventListener('input', function(e) {
        let input2 = e.target;

            input2.value = input2.value.slice(0, 20);
    })

    input[2].addEventListener('input', function(e) {
        let input2 = e.target;

        input2.value = input2.value.replace(/[^0-9]/g, '');

        if (input2.value.startsWith('0')) {
            input2.value = ""; 
        } else {
            input2.value = input2.value.slice(0, 2);
        }
    })

    input[3].addEventListener('input', function(e) {
        let input2 = e.target;

        input2.value = input2.value.replace(/[^0-9]/g, '');

        if (input2.value.startsWith('0')) {
            input2.value = ""; 
        } else  {
            input2.value = input2.value.slice(0, 3);
        }
        
    })
    
    input[4].addEventListener('focus', function(e) {
        let input2 = e.target;


        if (input2.value.length <= 4 ) {
            input2.value = "+998 ";
        } 

        input2.addEventListener('input', function() {
            input2.value = input2.value.replace(/[^0-9+]/g, '');

            if (input2.value.length <= 4 ) {
                input2.value = "+998 ";
            }  else if (input2.value.length > 4 &&  input2.value.length <= 6) {
                input2.value = "+998 " + input2.value.slice(4, 6) ;
            } else if (input2.value.length > 6 &&  input2.value.length <= 9) {
                input2.value = "+998 " + input2.value.slice(4, 6) + " " + input2.value.slice(6, 9) ;
            } else if (input2.value.length >= 10 && input2.value.length < 12) {
                input2.value = "+998 " + input2.value.slice(4, 6) + " " + input2.value.slice(6, 9) + " " + input2.value.slice(9,11) ;
            } else if (input2.value.length >= 12) {
                input2.value = "+998 " + input2.value.slice(4, 6) + " " + input2.value.slice(6, 9) + " " + input2.value.slice(9,11) + " " + input2.value.slice(11,13);
            }
        });

        

    })

}







pushData()

function pushData() {
    const corsProxy = 'http://localhost:8000/';
    let btnPush = document.querySelector(".page-main__card__btn");
    let inputValue = document.querySelectorAll(".page-main__card__input");
    let sentInformation = false;

    btnPush.addEventListener("click", function() {
        let filledFields = 0;
        let data = {};

        inputValue.forEach((item, index) => {
            let input = item.value;
            item.style.cssText = 'border: 1px solid #2C2399; outline: 1px solid #002199;';

            if (input === "" && index != 4) {
                item.style.cssText = 'border: 1px solid red; outline: 1px solid rgb(162, 0, 0);';
            
                if (Number(phoneNumberInput.value.length) !== 17) {
                    // phoneNumberInput.style.cssText = 'border: 1px solid red; outline: 1px solid #002199;';
                }

                
                
            
            } else if ( index ===4  && Number(phoneNumberInput.value.length) !== 17) {
                item.style.cssText = 'border: 1px solid red; outline: 1px solid rgb(162, 0, 0);';
            
            } else {
                switch (index) {
                    case 0:
                        data.first_name = input;
                        break;
                    case 1:
                        data.last_name = input;
                        break;
                    case 2:
                        data.year = new Date().getFullYear() - parseInt(input);
                        break;
                    case 3:
                        data.school_number = parseInt(input);
                        break;
                    case 4:
                        data.phone = input;
                        break;
                }
                filledFields++;
            }
        });

        if (filledFields === 5 && sentInformation === false) {


                let checkMarkImg = document.createElement("img");
                checkMarkImg.src = "./photos/mainImages/Vector (2).svg";
    
                btnPush.style.cssText += 'transition: 0.4s; color: #2C2399; position: relative;';
                btnPush.classList.remove('custom-button');
                checkMarkImg.style.cssText = 'width: 17.34px; position: absolute; z-index: 2; top: calc(50% - 15.34px / 2); left: calc(50% - 17.34px / 2);';
                btnPush.appendChild(checkMarkImg);
    
                sentInformation = true;
    


                const token = ""
                const channelId = '-1002224754796'; // For public channels, use the username prefixed with @
                jsonData = JSON.stringify(data)
                const message = ""
                const encodedMessage = encodeURIComponent(message);

                const url = `""="${encodedMessage}"&chat_id=${channelId}`;

                axios.post(url)
                    .then(response => {
                        // console.log('Message sent:', response.data);
                    })
                    .catch(error => {
                        // console.error('Error sending message:', error);
                    });
           
        }
    });
}