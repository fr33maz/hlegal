// add only file name into array "templateList". the file name equals id
// excluded: 'b-header_template', 'w-header_template',
let templateList = [
    'footer_template', 'publications_template', 'main_grid-of-sponsors',
    'publications_list_template', 'team_slider_template', 'main_grid_of_services'
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