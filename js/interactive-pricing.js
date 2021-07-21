'use strict'
var selectValue = document.getElementById("price");
var slider = document.getElementById("price-range");
var progressBar = document.getElementById("progressBar");
var checkbox = document.getElementById("checkbox");
var timeInterval = document.getElementById("time-interval");
var pageViews = document.getElementById('pageviews-counter');

function calculatePrice() {
    if (checkbox.checked == true) {
        var sliderYear = (slider.value) * 12 * 0.75;
        sliderYear = (sliderYear).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        selectValue.innerHTML = sliderYear;
    } else {
        var sliderMonth = Number(slider.value);
        sliderMonth = (sliderMonth).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        selectValue.innerHTML = sliderMonth;
    }
    progressBarUpdate();
    pageViewUpdate();
}
function pageViewUpdate(){
    if (slider.value == 5){
        pageViews.innerHTML = "10K Pageviews";
    }else if(slider.value == 10){
        pageViews.innerHTML = "20K Pageviews";
    }else if(slider.value == 15){
        pageViews.innerHTML ="100K Pageviews";
    }else if(slider.value==20){
        pageViews.innerHTML = "200K pageviews";
    }

}
function progressBarUpdate() {
    var min = slider.min;
    var max = slider.max;
    var actualValue = slider.value;

    var actualPercentage = (actualValue * 100) / (max);
    if (slider.value == 5){
        actualPercentage = 0;
    }else if(slider.value == 10){
        actualPercentage = 33.33;
    }else if(slider.value == 15){
        actualPercentage = 66.66;
    }else if (actualPercentage > 100) {
        actualPercentage = 100;
    }
    progressBar.style.width = actualPercentage + "%";
    console.log(actualPercentage);
}

function checkBoxChange() {
    if (checkbox.checked == true) {
        timeInterval.innerHTML = "/ year";
        calculatePrice();
    } else {
        timeInterval.innerHTML = "/ month";
        calculatePrice();
    }
}

checkbox.addEventListener('change', checkBoxChange);
