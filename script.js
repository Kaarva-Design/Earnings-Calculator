let salaryPerDay,
    salaryRelative,
    salary,
    earnings,
    kaarvaEarnings,
    sliderValue,
    dDay;

// slider logic
var valueBubble = '<output class="rangeslider__value-bubble" />';

function updateValueBubble(pos, value, context) {
    pos = pos || context.position;
    value = value || context.value;
    var $valueBubble = $('.rangeslider__value-bubble', context.$range);
    var tempPosition = pos + context.grabPos;
    var position = (tempPosition <= context.handleDimension) ? context.handleDimension : (tempPosition >= context.maxHandlePos) ? context.maxHandlePos : tempPosition;

    if ($valueBubble.length) {
        $valueBubble[0].style.left = Math.ceil(position) + 'px';
        $valueBubble[0].innerHTML = "Day " + value + " ";
    }
}

$('input[type="range"]').rangeslider({
    polyfill: false,
    onInit: function() {
        this.$range.append($(valueBubble));
        updateValueBubble(null, null, this);
    },
    onSlide: function(pos, value) {
        updateValueBubble(pos, value, this);

        salary = $("#salary").val();
        earnings = $("#earnings");
        kaarvaEarnings = $("#kaarvaearnings");
        sliderValue = $("#slider").val();
        dDay = $("#dday");

        let cap = Math.round(25 * salaryRelative / 100);

        kaarvaEarnings.html(cap < 10000 ? cap : "10000");

        earnings.html( Math.round(salaryPerDay * sliderValue) )
        salaryPerDay = salary / 30;
        salaryRelative = salaryPerDay * sliderValue;
        dDay.html(sliderValue);
      }
});