$(function() {
    $.ajax({
        url: "http://127.0.0.1:3000/index",
        type: 'get',
        dataType: "json",
        success: function(result) {
            console.log(result[0].img);
            var html = `<div class="carousel-item active dx">
            <a href="#">
                <img  src="${result[0].img}" alt=""/>
            </a>
        </div>
        <div class="carousel-item dx">
            <a href="#">
                <img  src="${result[1].img}" alt=""/>
            </a>
        </div>
        <div class="carousel-item dx">
            <a href="#">
                <img  src="${result[2].img}" alt=""/>
            </a>
        </div>
        <div class="carousel-item dx">
            <a href="#">
                <img  src="${result[3].img}" alt=""/>
            </a>
        </div>
        <div class="carousel-item dx">
            <a href="#">
                <img  src="${result[4].img}" alt=""/>
            </a>
        </div>
        <div class="carousel-item dx">
            <a href="#">
                <img  src="${result[5].img}" alt=""/>
            </a>
        </div>`;
            $('#lun1').html(html);
        }
    })
})