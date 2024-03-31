// add only file name into array "templateList". the file name equals id
let templateList = [
    'b-header_template', 'w-header_template', 'footer_template', 'publications_template', 'main_grid-of-sponsors'
];

const BASEDIR = 'templates/';

function includeTemplate(fileName) {
    let targetElementId = document.getElementById(fileName);
    if (targetElementId) {
        fetch(`${BASEDIR}${fileName}.html`)
            .then(response => response.text())
            .then(data => {
                targetElementId.innerHTML = data;
            });
    }
}

templateList.map(element => includeTemplate(element));