// JSON and AJAX with jQuery
$.getJSON("data.json", function(jData) {
    // console.log(jData);
    var output = '<div class="articles-wrap">';
    $.each(jData, function(key, val) {
        output += '<article class="card-container" >';
        output += '<div class="cover">';
        output += '<img src="assets/img/' + val.cover + '_tbn.jpg" alt = " ' + val.name + '" />';
        output += '</div>';
        output += '<div class="card--content">';
        output += '<h2>' + val.name + '</h2>';
        output += '<span>' + val.stone + '</span>';
        output += '<span>' + ' ' + val.material + '</span>';
        output += '</div>'; // card content
        output += '</article>'; // card-container
    });
    output += '</div>';
    $('#update').html(output);
});