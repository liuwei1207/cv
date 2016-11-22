/**
 * Created by Liuwei on 2016/11/22.
 */

//wordCloud
$(document).ready(function () {
    $('.star').raty({
        path: 'assets/image/stars',
        score: function () {

            return $(this).attr('data-score');

        },
        readOnly: true
    });
});