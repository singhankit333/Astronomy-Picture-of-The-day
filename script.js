var nasaImage = $("#NASA-image");
var input = $("#datepicker").datepicker({ dateFormat: 'yy-mm-dd' });

$("#imageInput button").click(function (e) {
    e.preventDefault();
    
    var date = input.val();
    
    if( date === "") {
        alert("Please choose a date");
        return;
    }

    let url = "https://api.nasa.gov/planetary/apod?api_key=5ENcRkhtyDDXx2K5XNPlXESf6jjfQD5TQbp8MlJN" + "&date=" + date;
    
    $.get(url, function (data) {
        
        $("#NASA-image img").remove();
        nasaImage.append('<img src="' + data.hdurl + '" alt="">');
        
        $("#imageTitle").html(data.title); 

        $("#imageDetail").html(data.explanation);   


    });

});