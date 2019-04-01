var numeral, arabic;

document.querySelector('#convert-btn').addEventListener('click', function () {
    var radios = document.getElementsByName('inputType');

    if (checkRadios(radios) && checkInput()) {
        var numeralRadio = radios[0];
        var arabicRadio = radios[1];
        if (numeralRadio.checked) {
            numeral = document.getElementById('inputValue').value;
            // isValidValue();
            arabic = convertNumeral(numeral);
            document.getElementById('outputValue').value = arabic;

        } else if (arabicRadio.checked) {
            arabic = document.getElementById('inputValue').value;
            numeral = convertArabic(arabic);
            document.getElementById('outputValue').value = numeral;
        }
    } else {
        alert("Please select a conversion type.");
    }
})

function convertNumeral(numeral) {
    var arabic = 0;
    numeral = numeral.toUpperCase();

    for (var j = 0; j < numeral.length; j++)
    {
        if (j < numeral.length - 1) {
            if (romanTranslate(numeral.charAt(j)) < romanTranslate(numeral.charAt(j + 1))) {
                arabic = arabic - romanTranslate(numeral.charAt(j));
            }
            else {
                arabic = arabic + romanTranslate(numeral.charAt(j));
            }
        } else {
            arabic = arabic + romanTranslate(numeral.charAt(j));
        }
    }

    return arabic;
}

function convertArabic(arabic) {
    var saveArabic, numeral;
    saveArabic = arabic;
    numeral = "";
    
    do {
        if (arabic < 4000 && arabic > 999)
        {
            numeral = numeral + "M";
            arabic = arabic - 1000;
        }
        else if (arabic < 1000 && arabic > 899)
        {
            numeral = numeral + "CM";
            arabic = arabic - 900;
        }
        else if (arabic < 900 && arabic > 499)
        {
            numeral = numeral + "D";
            arabic = arabic - 500;
        }
        else if (arabic < 500 && arabic > 399)
        {
            numeral = numeral + "CD";
            arabic = arabic - 400;
        }
        else if (arabic < 400 && arabic > 99)
        {
            numeral = numeral + "C";
            arabic = arabic - 100;
        }
        else if (arabic < 100 && arabic > 89)
        {
            numeral = numeral + "XC";
            arabic = arabic - 90;
        }
        else if (arabic < 90 && arabic > 49)
        {
            numeral = numeral + "L";
            arabic = arabic - 50;
        }
        else if (arabic < 50 && arabic > 39)
        {
            numeral = numeral + "XL";
            arabic = arabic - 40;
        }
        else if (arabic < 40 && arabic > 9)
        {
            numeral = numeral + "X";
            arabic = arabic - 10;
        }
        else if (arabic == 9)
        {
            numeral = numeral + "IX";
            arabic = arabic - 9;
        }
        else if (arabic >= 5 && arabic < 9)
        {
            numeral = numeral + "V";
            arabic = arabic - 5;
        }
        else if (arabic == 4)
        {
            numeral = numeral + "IV";
            arabic = arabic - 4;
        }
        else if (arabic > 0 && arabic <= 3)
        {
            numeral = numeral + "I";
            arabic = arabic - 1;
        }
    } while (arabic !== 0);

    return numeral;
}

function romanTranslate(romanChar) {
    switch (romanChar)
    {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return 0;
    }
}

function checkRadios(radios) {
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return true;
        }
    }
    return false;
}

function checkInput() {
    var input = document.getElementById('inputValue').value;
    if (input) {
        return true;
    }
    return false;
}

function isValidValue ( value, type ) {
    if ( type === 'numeral' ) {

    } else if ( type === 'arabic' ) {
        if ( !Number.isNaN(value) ) return false;
        if ( Number.parseInt(value) > 3999 ) return false;
    }
    return true;
}




