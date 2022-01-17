function GenerateReport(ev) {

    $("#main_container").css({
        display: 'block',
        bottom: '-80%'
    }).animate({

        bottom: "2%",
    }, 3000, function() {
    
    });;

    html_header = "<div id=\"section_header\">";
    html_header += "<div id=\"header_title\">" + 'ANALIZED BLOOD' + "</div>";
    html_header += "<div id=\"header_seal\"></div>";
    html_header += "<div id=\"header_details\"><h2>" + 'Offical police forensics team report for the evidence given!' + "</h2>";


    $("#main_container").append(html_header);


    $("#main_container").append("<div id=\"section_input\"></div>");

    html_middle = '';

    html_middle += "<div id=\"section_footer_block\">" + 'Case Id #' + ' (' + ev.caseid + ')' + "</div>";

    for (const [key, value] of Object.entries(ev)) {
        html_middle += "<div class=\"header_information_subblock\">";
        html_middle += "<h3>" + key.charAt(0).toUpperCase() + key.slice(1) + "</h3>";
        html_middle += "<h4>" + value + "</h4>";
        html_middle += "</div>";
    }

    $("#main_container").append(html_middle);

}



window.addEventListener('message', function(event) {

    var edata = event.data;

    if (edata.type == "showReport") {
        var ev = JSON.parse(edata.evidence);
        GenerateReport(ev);
    } else if (edata.type == "close") {
        $("#main_container").html("");
        $("#main_container").css({
            display: 'none'
        });
    }
});