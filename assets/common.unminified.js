function fnLoadAjaxPage(controler, view, loadDiv, id, varArray) {
    var baseUrl = $("#baseUrl").val();
    var url = baseUrl + "/" + controler + "/" + view;
    $.ajax({
        type: "POST",
        url: url,
        //dataType: 'JSON',
        data: "id=" + id,
        success: function (d) {
            $('#' + loadDiv).html(d);
            for (var i=0; i < varArray.length; i++){
                $("#"+varArray[i]).empty();
            }
        },

        error: function (err) {
            $('#' + loadDiv).html("Error!");

        }
    });
}
