// Javascript goes here
function ProcessOption(optionData, index, checked) {
    var template = document.getElementById("subs-option-template").innerHTML;
    var checkedValue = checked ? "checked='checked'" : "";
    if (optionData !== null) {
        template = template.replaceAll("NAME", optionData.name);
        template = template.replaceAll("PRICEMONTHLY", optionData.monthlyPrice);
        template = template.replaceAll("PRICEYEARLY", optionData.yearlyPrice);
        template = template.replaceAll("VALUE", optionData.url);
        template = template.replaceAll("INDEX", index);
        template = template.replaceAll("LENGTH", optionData.length);
        template = template.replaceAll("RECOMMENDED", optionData.recommended ? "recommended" : "");
        template = template.replaceAll("SELECTEDCLASS", checkedValue ? "selected" : "");
        template = template.replaceAll("checked=\"\"", checkedValue);
    }
    
    var dataToAppend = document.createElement('div');
    dataToAppend.innerHTML = template.trim();
   
    document.getElementById("subs-options-data").appendChild(dataToAppend.firstChild);
}

function selectOption(index) {
    var option = document.getElementById("option-" + index);

    if (option != null) {
        document.querySelectorAll('.option').forEach(function(opt) {
            opt.classList.remove("selected");
        });

        option.classList.add("selected");
        
        var radioButton = document.getElementById("subs-length-" + index);
        radioButton.checked = true;
    }
}

function buy() {
    var selectedValueUrl = document.querySelector('input[name="subs-length"]:checked').value;
    
    window.open(selectedValueUrl);
}

function LoadData() {
    if (__DATA__ !== null && __DATA__.planSelector !== null && __DATA__.planSelector.length > 0) {
        var index = 1;
        __DATA__.planSelector.forEach(function(option) {
            ProcessOption(option, index, index === 1);

            index++;
        } );
    }
}

LoadData();