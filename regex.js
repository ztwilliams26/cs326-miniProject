//document.addEventListener("load", function(){
    document.getElementById("parseButton").addEventListener("click", highlight);
//});

function highlight(){
    let inputText = document.getElementById("inputText").value;
    let regXText = document.getElementById("regXText").value;
    let regX = RegExp(regXText, 'g');
    console.log(inputText + " " + regXText + " " + regX);

    function replacer(match){
        return "<span class=\"highlight\">"+match+"</span>";
    }
    let output = inputText.replace(regX, replacer);

    $("#output").html(output);


}