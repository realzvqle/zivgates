document.addEventListener("DOMContentLoaded", function() {
    var templates = document.querySelectorAll("template[id^='markdown-template']");

    if (templates.length > 0) {
        var converter = new showdown.Converter();
        var outputDiv = document.getElementById("markdown-output");
        var htmlContent = "";

        templates.forEach(function(template) {
            var markdownContent = template.innerHTML.trim();
            var html = converter.makeHtml(markdownContent);
            htmlContent += html + "";
        });

        outputDiv.innerHTML = htmlContent;
    } else {
        console.log("Markdown template elements not found.");
    }
});
