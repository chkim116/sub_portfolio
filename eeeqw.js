const listBtn = document.querySelectorAll(".navbar__list");
const listSite = document.querySelector("#article");



function clickList () {
    for (i=0; i < listBtn.length; i++) {
        listBtn[i].addEventListener("click", function(e) {
            let filter = e.target.dataset.filter;

            listSite.forEach((sites) => {
                if (filter === "*" || filter === sites.dataset.type) {
                    sites.classList.remove('invisible');
                } else {
                    sites.classList.add('invisible');
                }
            });
        
        });
    
    }
}

function init () {
    clickList();
}

init();
