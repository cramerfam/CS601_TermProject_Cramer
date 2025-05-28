//API URL as constant
const statementsApi   = 'https://cramerfam.github.io/CS601_TermProject_Cramer/models/truthslies.json';
//DOM elements as constants
const loadButton      = document.getElementById('loadButton');
const canvasContainer = document.getElementById('canvasContainer');
const dropZones       = ['trueDropZone', 'falseDropZone'];
//Set event names as constants
const CLICK      = 'click';
const DRAG_START = 'dragstart';
const DRAG_OVER  = 'dragover';
const DROP       = 'drop';

//Fetch JSON from the API
async function fetchData() {
    const response       = await fetch(statementsApi);
    const statementsJson = await response.json();

    return statementsJson;
}

//Iterate over JSON to create canvases of each topping
loadButton.addEventListener(CLICK, async () => {

    //Disable load button to prevent unlimited loads
    loadButton.disabled = true;
    loadButton.classList.add('loaded');
    loadButton.innerText = 'Loaded';

    //Get data
    statementsData = await fetchData();

    //Iterate over categories in topics object
    for (let type in statementsData) {
        let category = statementsData[type];

        //Create a canvas for each statement in each category
        category.forEach(item => {
            const statement   = item.statement;
            const explanation = item.explanation;

            const canvas = document.createElement('canvas');

            canvas.width = 150;
            canvas.width = 150;
            canvas.draggable = true;
            canvas.dataset.type = type;
            canvas.id = statement;

            //Set canvas data when drag begins
            canvas.addEventListener(DRAG_START, (e) => {
                e.dataTransfer.setData('text', canvas.id);
                infoZone.innerText = '';
            })

            //Add the canvas to the container
            canvasContainer.appendChild(canvas);
        })
    }
})

//Iterate through drop zones
dropZones.forEach(id => {

    //Select the drop zone
    const dropZone = document.getElementById(id);

    //Prevent default behavior on drag over
    dropZone.addEventListener(DRAG_OVER, (e) => {
        e.preventDefault();
    })

    //Determine how to respond based on canvas data and drop zone
    dropZone.addEventListener(DROP, (e) => {
        e.preventDefault();

        const canvasId   = e.dataTransfer.getData('text');
        const canvas     = document.getElementById(canvasId);
        const type       = canvas.dataset.type;

        //If actually true
        if (id === 'trueDropZone' && type === 'true') {
            container.appendChild(canvas);
        //If actually false
        } else if (id === 'falseDropZone' && type === 'lie') {
            container.appendChild(canvas); 
        } else {
            console.log("ERROR")
        }

        //If the canvas container is empty, hide it and show a final message
        if (canvasContainer.children?.length === 0) {
            canvasContainer.style.display = 'none';
            loadButton.style.display = 'none';
        }
    })
});