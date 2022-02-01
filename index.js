const reviews = [
    {
        id: 1,
        author: "Nabeel Khan",
        job: 'UX designer',
        pics: 'pics/nabeel.jpg',
        info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nulla eveniet consequatur possimus architecto hic, facere corrupti aspernatur officiis voluptatibus nostrum repellendus quisquam voluptas est dolore illo eum iste perferendis."
    },
    {
        id: 2,
        author: "Bhallu biryani",
        job: 'Backend developer',
        pics: 'pics/nabeel.jpg',
        info: "Ipsam nulla eveniet consequatur possimus architecto hic, Lorem ipsum dolor sit, amet consectetur adipisicing elit. facere corrupti aspernatur officiis voluptatibus nostrum repellendus quisquam voluptas est dolore illo eum iste perferendis."
    },
    {
        id: 3,
        author: "Sarah james",
        job: 'Graphics designer',
        pics: 'pics/nabeel.jpg',
        info: "voluptatibus nostrum repellendus quisquam voluptas est dolore illo eum iste perferendis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nulla eveniet consequatur possimus architecto hic, facere corrupti aspernatur officiis "
    },
    {
        id: 4,
        author: "Waseem bhai",
        job: 'Android developer',
        pics: 'pics/nabeel.jpg',
        info: "facere corrupti aspernatur officiis voluptatibus nostrum repellendusLorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nulla eveniet consequatur possimus architecto hic,  quisquam voluptas est dolore illo eum iste perferendis."
    }
]

let img = document.getElementById('img');
let author = document.getElementById('author');
let job = document.getElementById('job');
let info = document.getElementById('info');

let prevbtn = document.querySelector('.prev-btn');
let nextbtn = document.querySelector('.next-btn');
let citem= 0;
// let random = Math.floor(Math.random()*3);
window.addEventListener('DOMContentLoaded', changeview);

prevbtn.addEventListener('click', ()=>{
    if(citem == 0){
        citem=4;
    }
    citem--;
    changeview();
});
nextbtn.addEventListener('click', ()=>{
    if(citem == 3){
        citem=-1;
    }
    citem++;
    changeview();
});

function changeview(){
    let item = reviews[citem];
    job.innerHTML = item.job;
    info.innerHTML = item.info;
    author.innerHTML = item.author;
}