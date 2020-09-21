fetch('data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        appendData(data);
    })
    .catch(function(err) {
        console.log('error: ' + err);
    });

function appendData(data) {
    var kk = data['data'][0]

    //console.log(kk)


    var keys = Object.keys(kk); // Getting all the keys of the Object
    var targetElement = document.getElementById('data'); // Table element
    var headers = "";
    keys.forEach(e => headers += `<th>${e}</th>`); // Preparing the header for the table
    targetElement.innerHTML += `<tr>${headers}</tr>`; // Adding the header to the table
    // Adding data to the table
    data['data'].forEach(e => {
        var dataa = "";
        for (var i = 0; i < keys.length; i++)
            dataa += `<td>${e[keys[i]]}</td>`;
        targetElement.innerHTML += `<tr>${dataa}</tr>`;
    });


    document.getElementById("intro").innerHTML = data['introduction'];
}




$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
        $(this).removeClass('active');
    })
    $(this).addClass('active');
    var target = this.hash,
        menu = target;
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top + 2
    }, 600, 'swing', function() {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
});