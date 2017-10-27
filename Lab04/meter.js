    var myMark = document.getElementById("GradeInput");
    myMark.addEventListener("change", function () {
        var progress = document.getElementById("GradeOutput");
        progress.value = myMark.value;
    });
