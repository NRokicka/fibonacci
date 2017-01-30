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

/*
$(function() {
    $('#btn').click(function(e) {
        e.preventDefault();
        var num = $('#number').val();

        function fib(num) {
            var a = 1,
                b = 1;
            for (var i = 3; i <= num; i++) {
                var c = a + b;
                a = b;
                b = c;
            }
            return b;
        }
        var res = fib(num);
        $('#result').html(res);

    })
})
*/