document.addEventListener("DOMContentLoaded", function() {
    $.jStorage.set('triple_stimulus_voucher', '行政院振興三倍券')
    console.log($.jStorage.get('triple_stimulus_voucher'));
    $.jStorage.deleteKey('triple_stimulus_voucher');
    console.log($.jStorage.get('triple_stimulus_voucher'));
});