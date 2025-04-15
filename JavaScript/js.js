function handelclick(idname){
    let button = document.getElementById(idname);

    if (!button.hasOwnProperty('flag')) {
        button.flag = true;
    }

    if (button.flag) {
        button.style.backgroundColor = "rgb(192, 134, 71)";
        button.style.boxShadow = "3px 3px 4px -1px inset rgb(0 , 0, 0)";
        button.style.color = "black";
        button.flag = false;   
    }
    else{
        button.style.backgroundColor = "#542f05";
        button.style.boxShadow = "3px 3px 4px -1px rgb(0, 0, 0)";
        button.style.color = "wheat";

        button.flag = true;
    }
}
let ids = [ ];

ids.forEach(id => {
    let element = document.getElementById(id);
    if (element) {
        element.style.backgroundColor = "rgb(76, 70, 70)";
        element.style.color = "rgb(36, 32, 32)";
        element.style.boxShadow = "3px 3px 4px -1px inset rgb(0 , 0, 0)";
    }
});