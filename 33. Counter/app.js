// countEl
let countEl = document.getElementById('count');
// saveEl
let saveEl = document.getElementById('save');
// incrementBtn
const incrementBtn = document.querySelector('.increment-btn');
// saveBtn
const saveBtn = document.querySelector('.save-btn');


let count = 0;

incrementBtn.addEventListener('click', () => {
    count += 1
    countEl.innerHTML = count;
});

saveBtn.addEventListener('click', () => {
    let countStr = count + " , "
    saveEl.innerHTML += countStr;
    countEl.innerHTML = 0;
    count = 0;
})