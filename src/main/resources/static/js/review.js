let main = {
    init : function () {
        let _this = this;
        $('#btn-save').on('click', function () {
            _this.save();
        });
        $('#btn-update').on('click', function () {
            _this.update();
        });
        $('#btn-delete').on('click', function () {
            _this.delete();
        });
    },
    save : function () {
        let data = {
            userId: $('#selectedUserId').val(),
            cafeId: $('#selectedCafeId').val(),
            totalGrade: $('#totalGrade').val(),
            seat: $('#seatId').val(),
            concentration: $('#concentrationId').val(),
            imageUrl: $('#imageUrl').val(),
            content: $('#content').val(),
        };

        $.ajax({
            type: 'POST',
            url: '/api/v1/review',
            dataType: 'json',
            contentType:'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function() {
            alert('글이 등록되었습니다.');
            location.href = "/cafe/" + data.cafeId;
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    },
    update : function () {
        let data = {
            userId: $('#selectedUserId').val(),
            cafeId: $('#selectedCafeId').val(),
            totalGrade: $('#totalGrade').val(),
            seat: $('#seatId').val(),
            concentration: $('#concentrationId').val(),
            imageUrl: $('#imageUrl').val(),
            content: $('#content').val(),
        };

        let id = $('#id').val();

        $.ajax({
            type: 'PUT',
            url: '/api/v1/review/'+id,
            dataType: 'json',
            contentType:'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function() {
            alert('글이 수정되었습니다.');
            location.href = "/cafe/" + data.cafeId;
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    },
    delete : function () {
        let id = $('#id').text();
        let cafeId = $('#cafeId').text();

        $.ajax({
            type: 'DELETE',
            url: '/api/v1/review/'+ parseInt(id),
            dataType: 'json',
            contentType:'application/json; charset=utf-8'
        }).done(function() {
            alert('글이 삭제되었습니다.');
            location.href = "/cafe/" + cafeId;
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    }
};

main.init();
