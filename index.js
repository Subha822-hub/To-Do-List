function submit() 
{
    var txt= document.getElementById("text_name").value;
    var x = document.createElement('li');
    var t = document.createTextNode(txt);
    x.appendChild(t);
    document.getElementById("class_name").appendChild(x);
    for(let i=0;i<10;i++)
    {
        var a = document.getElementsByTagName('li')[i].onclick=function (){
            var a = document.getElementsByTagName('li')[i];

            a.style.textDecoration = "line-through";

        };
        var a = document.getElementsByTagName('li')[i].ondblclick=function (){
            var a = document.getElementsByTagName('li')[i];

            a.style.display = "none";

        };
    }
}
console.log(document);

// var a = document.getElementsByTagName('li')[0];
// a.style.textDecoration = "line-through";

// var a = document.getElementsByTagName('li')[0];
// a.style.display = "none";


