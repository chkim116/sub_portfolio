const listBtn = document.querySelectorAll(".navbar__list");
const listSite = document.querySelectorAll(".site__list");
const listContainer = document.querySelector("#article");

const navbar = document.querySelector(".navbar");
const SELECT = "selected"


function clickDel () {
    for (i=0; i < listBtn.length; i++){
        listBtn[i].addEventListener("click", function (e) {
            const hasClass = document.querySelector(".navbar__list.selected")
            const target = e.target;
                hasClass.classList.remove(SELECT);
                target.classList.add(SELECT);
        });
}
}

function clickList () {
    for (i=0; i < listBtn.length; i++) {
        listBtn[i].addEventListener("click", function(e) {
            let filter = e.target.dataset.filter;
            
            listContainer.classList.add('anim-out');
            setTimeout(() => {
                
                listSite.forEach((sites) => {
                    if (filter === "*" || filter === sites.dataset.type) {
                        sites.classList.remove('invisible');
                    } else {
                        sites.classList.add('invisible');
                    }
                });
                listContainer.classList.remove('anim-out');
            }, 350)
            
        });
        
    }
}


function init () {
    clickDel();
    clickList();
}

init();

// listBtn을 누를 때마다 const filter에 클릭한.타겟의.데이터셋의.필터를 저장하라
// filter가 *이거나 filter가 선택한 인자의 데이터셋의 타입이 클릭한 데이터를 저장한 filter와 같다면 invisible을 감추라.
// 그게 아니면 invisible을 넣어 보여라.


// 그리고 listSite를 반복해서 작업해라.
//  fortEach는 for반복문이다.

    //  만약 필터에 *가 들어있을 때 혹은 필터에 타입이 들어있을 때
    // invisible을 지우고 없으면 추가하라.
    // addEventListner는 querySelectorAll일때는 구현이 안된다.
// document.getElementById는 단일 DOM 객체를 가져오지만, document.querySelectorAll은 NodeCollection을 가져오기 때문입니다.
// 또한 NodeCollection은 숫자 인덱스를 가지고 있고 length property를 가지고 있지만, 배열은 아니므로 forEach등의 Iterator Function을 호출할 수 없습니다.
// for(var i = 0; i<selectall.length; i++) {selectall[i].addEventListener(…)


// 새로운 사실. 쿼리셀렉올은 classlist도, add이벤트리스너도 안된다.. 제길//./
// 그리고 특정 함수에 필요한 const는 가급적 함수 안에서 정의하자.. 오늘 hasClass때문에 몇시간을 잡아먹혔다