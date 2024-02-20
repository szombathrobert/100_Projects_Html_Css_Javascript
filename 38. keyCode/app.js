const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class="key">
        ${event.key === " " ? "Space" : event.key}
        <small>event.key</small>
    </div>
    <div class="key">
        ${event.code === " " ? "Space" : event.code}
        <small>event.code</small>
    </div>
    <div class="key">
        ${event.keyCode === " " ? "Space" : event.keyCode}
        <small>event.keyCode</small>
    </div>
    `
})