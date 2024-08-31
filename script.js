//array obj[JSON] of stories:
var arr = [
    {
        dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1465145782865-09532f760e6b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1462804993656-fac4ff489837?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1571513800374-df1bbe650e56?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1514315384763-ba401779410f?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1515202913167-d9a698095ebf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

];

//....................Add Story's Dp..........................

//storing the img tag:
var clutter = '';

//loop on each array index:
arr.forEach((elem, index) => {
    clutter += `<div class="story">
    <img  id="${index}" src="${elem.dp}" alt="no-story">
            </div>`
})

var stories = document.querySelector('.stories')
//add stories:
stories.innerHTML = clutter;

//....................show Story..........................
var fullscreen = document.querySelector(".full-screen");

stories.addEventListener("click", (dets) => {
    fullscreen.style.display = "block";
    fullscreen.style.backgroundImage = `url(${arr[dets.target.id].story})`
    setTimeout(() => {
        fullscreen.style.display = "none";
    }, 3000);
}
)
fullscreen.addEventListener("dblclick", () => {
    fullscreen.style.display = "none";
});

//.....................dedicated Functions....................

// stories.addEventListener("click", showStory);
// fullscreen.addEventListener("dblclick", removeStory);

// const showStory = (dets) => {
//     fullscreen.style.display = "block";
//     fullscreen.style.backgroundImage = `url(${arr[dets.target.id].story})`
//     setTimeout(() => {
//         fullscreen.style.display = "none";
//     }, 3000)
// }

// const removeStory = () => {
//     fullscreen.style.display = "none";
// }