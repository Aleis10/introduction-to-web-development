var inc_btn = document.querySelector(js-increment-btn);
var dec_btn = document.querySelector(js-decrement-btn);
var counter_text_element = document.querySelector(js-counter-text);

let count = 0;

inc_btn.addEventListener('click', function()
{
    count++;

})

dec_btn.addEventListener('click', function()
{
    count--;
    return count;
})