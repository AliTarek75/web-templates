document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX; 
    const mouseY = e.clientY; 
    let c = document.getElementById("c");
    for (let item of c.children) {
        item.style["background-position"] = `${mouseX - window.innerWidth*0.5}px ${mouseY - window.innerHeight*0.5}px`;
        item.style.setProperty("--_border-postition-x", mouseX - window.innerWidth*0.5 + "px")
        item.style.setProperty("--_border-postition-y", mouseY - window.innerHeight*0.5 + "px")
    }
});