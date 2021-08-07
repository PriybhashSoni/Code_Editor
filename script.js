const left=document.querySelector(".left"),
right=document.querySelector(".right"),
bar=document.querySelector(".bar");
const drag=(e)=>{
    e.preventDefault();
    document.selection ? document.selection.empty() : window.getSelection().removeAllRanges;
    left.getElementsByClassName.width=(e.pageX - bar.offsetWidth / 3)+ "px";
    
}