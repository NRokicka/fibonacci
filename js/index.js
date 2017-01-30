$(function() {
    $('#btn').click(function(e) {
        e.preventDefault();
        var num = $('#number').val();

        function fib(num) {
            if (num <= 1) {
                return num;
            }
            else {
                return fib(num - 1) + fib(num - 2);
            }
        }
        var res = fib(num);
        $('#result').html(res);

    })
})