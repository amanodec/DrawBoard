let sizebox=document.querySelectorAll(".size-box");
let linesize=5;
let pencilsize=5;
let rectsize=5;
let erasersize=5;
sizebox[0].addEventListener("click",function(e){
    let elems=["size1","size2","size3","size4"];
    let allclasses=e.target.classList;
    let first=allclasses[0];
    let test=elems.includes(first);
    if(elems)
    {
        if(first=="size1")
        {
            pencilsize=5;
        }
        else if(first=="size2")
        {
            pencilsize=10;
        }
        else if(first=="size3")
        {
            pencilsize=15;
        }
        else if(first=="size4")
        {
            pencilsize=20;
        }

    }
    tool.lineWidth=pencilsize;

})

sizebox[1].addEventListener("click",function(e){
    let elems=["size1","size2","size3","size4"];
    let allclasses=e.target.classList;
    let first=allclasses[0];
    let test=elems.includes(first);
    if(elems)
    {
        if(first=="size1")
        {
            erasersize=5;
        }
        else if(first=="size2")
        {
            erasersize=10;
        }
        else if(first=="size3")
        {
            erasersize=15;
        }
        else if(first=="size4")
        {
            erasersize=20;
        }
    }
    tool.lineWidth=erasersize;
})

sizebox[2].addEventListener("click",function(e){
    let elems=["size1","size2","size3","size4"];
    let allclasses=e.target.classList;
    let first=allclasses[0];
    let test=elems.includes(first);
    if(elems)
    {
        if(first=="size1")
        {
            rectsize=5;
        }
        else if(first=="size2")
        {
            rectsize=10;
        }
        else if(first=="size3")
        {
            rectsize=15;
        }
        else if(first=="size4")
        {
            rectsize=20;
        }
    }
    tool.lineWidth=rectsize;

})

sizebox[3].addEventListener("click",function(e){
    let elems=["size1","size2","size3","size4"];
    let allclasses=e.target.classList;
    let first=allclasses[0];
    let test=elems.includes(first);
    if(elems)
    {
        if(first=="size1")
        {
            linesize=5;
        }
        else if(first=="size2")
        {
            linesize=10;
        }
        else if(first=="size3")
        {
            linesize=15;
        }
        else if(first=="size4")
        {
            linesize=20;
        }
    }

    tool.lineWidth=linesize;

})