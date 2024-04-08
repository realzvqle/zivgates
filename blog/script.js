document.addEventListener("DOMContentLoaded", function() {
    var template = document.getElementById("markdown-template");
    if (template) {
        var markdownContent = template.innerHTML.trim();

        var converter = new showdown.Converter();
        var htmlContent = converter.makeHtml(markdownContent);

        var outputDiv = document.getElementById("markdown-output");
        outputDiv.innerHTML = htmlContent;
    } else {
        console.log("Markdown template element not found.");
    }
});