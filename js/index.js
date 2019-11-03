var oSubmit = document.querySelector('#submit_out');
oSubmit.onclick = function () {
    var y_number = parseFloat(document.querySelector('#year_number').value);
    var omArray = ['', '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    var owArray = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    var odArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (((y_number % 400) == 0) || ((y_number % 100) > 0 || (y_number % 100) < 0) && ((y_number % 4) == 0)) {
        odArray[1] = 29;
    }

    function isLeapYear(y_number) {
        var result;

        if (y_number % 400 == 0) {
            result = true;
        } else if (y_number % 100 == 0) {
            result = false;
        } else if (y_number % 4 == 0) {
            result = true;
        } else {
            result = false;
        }
        return result;
    };
    var n_4 = parseInt(((y_number - 1) / 4));
    var n_100 = parseInt(((y_number - 1) / 100));
    var n_400 = parseInt(((y_number - 1) / 400));
    var ns = n_4 - n_100 + n_400;
    var n_1 = (y_number - 1) - ns;
    var OneOne = (y_number + ns) % 7;
    var oOne;
    if (OneOne == 0) {
        oOne = '0';
    } else {
        oOne = OneOne;
    };
    var aOne = OneOne
    var aforin = document.querySelector('.container_1');
    aforin.style.display = 'none';
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
    var oMonthIn = document.querySelector('.section_m');
    var aInWeek = aforin_2.querySelectorAll('.section_m_ul');
    aInWeek.forEach(aInWeeks => {
        for (let a = 0; a < owArray.length; a++) {
            const owArrays = owArray[a];
            aInWeeks.innerHTML += `<li>${owArrays}</li>`;
        }
    });
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
var clearValue = document.querySelector('#reset_all');
var theValue = document.querySelector('#year_number');
clearValue.onclick = function () {
    theValue.value = '';
}