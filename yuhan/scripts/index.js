document.addEventListener("DOMContentLoaded", function () {
    const lineBnr = document.querySelector('.line_bnr');
    const gnb = document.querySelector('.gnb');
    const menu = document.querySelector('.menu');

    let isMenuFixed = false;

    window.addEventListener('scroll', function () {
        const scrollTop = window.scrollY;

        // 스크롤이 (line_bnr + gnb) 높이 이상 내려가면 menu를 고정하고 배경을 흰색으로 변경
        if (scrollTop > (lineBnr.offsetHeight + gnb.offsetHeight)) {
            if (!isMenuFixed) {
                menu.style.position = 'fixed';
                menu.style.top = '0';
                menu.style.width = '100%';
                menu.style.zIndex = '1000';  // 다른 요소 위로 오도록 z-index 설정
                menu.style.backgroundColor = '#fff';  // 배경색을 흰색으로 설정
                isMenuFixed = true;
            }
        } else {
            if (isMenuFixed) {
                menu.style.position = 'relative'; // 원래 상태로 돌아감
                menu.style.top = 'auto';
                menu.style.backgroundColor = 'transparent';  // 배경색을 원래대로 복구
                isMenuFixed = false;
            }
        }
    });
});
