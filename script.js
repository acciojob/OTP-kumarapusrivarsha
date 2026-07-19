//your JS code here. If required.
const codes = document.querySelectorAll(".code");


// Focus first input automatically

codes[0].focus();



codes.forEach((code, index) => {


    code.addEventListener("input", (e) => {


        // Allow only numbers

        code.value = code.value.replace(/[^0-9]/g, "");



        if(code.value !== ""){


            // Move to next input

            if(index < codes.length - 1){

                codes[index + 1].focus();

            }

        }


    });





    code.addEventListener("keydown", (e) => {


        if(e.key === "Backspace"){


            if(code.value === ""){


                // Move to previous input

                if(index > 0){

                    codes[index - 1].focus();

                }


            }

            else{


                // Clear current input

                code.value = "";

            }


        }


    });



});