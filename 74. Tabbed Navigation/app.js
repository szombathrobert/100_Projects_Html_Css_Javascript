let menu_list = document.querySelectorAll('.menu_Links ul li')

menu_list.forEach((li) => {
    li.addEventListener('click', (e) => {
        document.querySelectorAll('.menu_Links ul li.active').forEach((activeEl) => {
            activeEl.classList.remove('active');
        });

        e.target.classList.add('active');

        document.querySelectorAll('.sections > section').forEach((section) => {
            if (e.target.textContent === section.dataset.section) {
                document.querySelectorAll('.sections .visible').forEach((el) => {
                    el.classList.remove('visible')
                })
                section.classList.add('visible')
            }
        })
    });
});