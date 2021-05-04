const celciusInput = document.getElementById("celcius");
const farhenheitInput = document.getElementById("farhenheit");
const kelvinInput = document.getElementById("kelvin");

const inputs = document.getElementsByClassName("input");

for(let i=0; i<inputs.length; i++)
{
    let input = inputs[i];

    input.addEventListener("input", function (e){
        let value =  parseFloat(e.target.value);
        console.log(e.target.name + ":" +value);

        switch(e.target.name){
            case "celcius":
                farhenheitInput.value = (value * 1.8) + 32;
                kelvinInput.value = value + 273.15;
            break;
            case "farhenheit":
                celciusInput.value = (value-32)/1.8;
                kelvinInput.value = ((value-32)/1.8)+273.15;
            break;
            case "kelvin":
                celciusInput.value = value - 273.15;
                farhenheitInput.value = ((value-273.15)*1.8) +32;
            break;
        }
    });

}

