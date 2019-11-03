var oSubmit = document.querySelector('#submit_out');


oSubmit.onclick = function () {
    var y_number = parseFloat(document.querySelector('#year_number').value);
    //月
    var omArray = ['', '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    // 星期
    var owArray = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    //日
    var odArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    //二月29號
    if (((y_number % 400) == 0) || ((y_number % 100) > 0 || (y_number % 100) < 0) && ((y_number % 4) == 0)) {
        odArray[1] = 29;
    }

    function isLeapYear(y_number) {
        //400、4的倍數是閏年，但4的倍數又是100的倍數就是平年
        var result;

        if (y_number % 400 == 0) {
            result = true; //閏年
        } else if (y_number % 100 == 0) {
            result = false;
        } else if (y_number % 4 == 0) {
            result = true; //閏年
        } else {
            result = false;
        }
        return result;
    };

    //算閏、平年數
    var n_4 = parseInt(((y_number - 1) / 4));
    var n_100 = parseInt(((y_number - 1) / 100));
    var n_400 = parseInt(((y_number - 1) / 400));
    //計算閏年數
    var ns = n_4 - n_100 + n_400;
    //計算平年數
    var n_1 = (y_number - 1) - ns;
    //算該年元旦
    var OneOne = (y_number + ns) % 7;
    var oOne;
    if (OneOne == 0) {
        oOne = '0';
    } else {
        oOne = OneOne;
    };
    var aOne = OneOne

    // 輸入選項消失
    var aforin = document.querySelector('.container_1');
    aforin.style.display = 'none';
    //////////////////////////////////////////////////////////////////
    //列出
    // 月份
    var aforin_2 = document.querySelector('.container_2');

    for (let m = 1; m < omArray.length; m++) {
        const oMonths = omArray[m];
        aforin_2.innerHTML += `
        <section class="section">
            <div class="section_m">
                <h2>${oMonths}</h2>
                <ul class="section_m_ul"></ul>
            </div>
            <div class="section_d"></div>
        </div>`;
    };
    // 星期
    var oMonthIn = document.querySelector('.section_m');
    var aInWeek = aforin_2.querySelectorAll('.section_m_ul');
    aInWeek.forEach(aInWeeks => {
        for (let a = 0; a < owArray.length; a++) {
            const owArrays = owArray[a];
            aInWeeks.innerHTML += `<li>${owArrays}</li>`;
        }
    });
    // 天數
    for (let a = 0; a <= 11; a++) {
        var aIndateAll = document.querySelectorAll('.section_d');
        for (let b = 1; b <= aOne; b++) {
            aIndateAll[a].innerHTML += `<div class="section_div"></div>`;
        }

        for (let x = 1; x <= odArray[a]; x++) {
            aIndateAll[a].innerHTML += `<div class="section_div">${x}</div>`;
            aOne++;
            if (aOne == 7) {
                aOne = 0;
            }
        }

    }

}