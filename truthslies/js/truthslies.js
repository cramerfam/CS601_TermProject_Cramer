//API URL as constant
const statementsApi   = 'https://cramerfam.github.io/CS601_TermProject_Cramer/truthslies/models/truthslies.json';
//DOM elements as constants
const loadButton      = document.getElementById('loadButton');
const canvasContainer = document.getElementById('canvasContainer');
const dropZones       = ['trueDropZone', 'falseDropZone'];
const infoZone        = document.getElementById('explanationText');
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
    infoZone.innerText = 'Is it true or a lie? Drag the statement tile to the proper column.'

    //Get data
    statementsData = await fetchData();

    //Create a canvas for each statement in each category
    statementsData.forEach(item => {
        const statement   = item.statement;
        const explanation = item.explanation;
        const type        = item.type;
        const id          = item.id;

        const canvas = document.createElement('canvas');
        canvas.width = 320;
        canvas.height = 40;
        canvas.draggable = true;
        canvas.dataset.type = type;
        canvas.dataset.explanation = explanation;
        canvas.id = id;

        const context = canvas.getContext("2d");
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.font = "15px Zilla Slab";
        context.fillText(statement, (canvas.width / 2), (canvas.height / 2));

        //Set canvas data when drag begins
        canvas.addEventListener(DRAG_START, (e) => {
            e.dataTransfer.setData('text', canvas.id);
        })

        //Add the canvas to the container
        canvasContainer.appendChild(canvas);
    })
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

        const canvasId    = e.dataTransfer.getData('text');
        const canvas      = document.getElementById(canvasId);
        const dropZone    = document.getElementById(id);
        const type        = canvas.dataset.type;
        const explanation = canvas.dataset.explanation;

        //If actually true
        if (id === 'trueDropZone' && type === 'true') {
            dropZone.appendChild(canvas);
            infoZone.innerText = explanation;
        //If actually false
        } else if (id === 'falseDropZone' && type === 'lie') {
            dropZone.appendChild(canvas);
            infoZone.innerText = explanation;
        } else {
            infoZone.innerText = "Sorry! Please try again."
        }

        //If the canvas container is empty, hide it and show a final message
        if (canvasContainer.children?.length === 0) {
            canvasContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';
            canvasContainer.style.fontSize = '20px';
            canvasContainer.innerText = 'Great job! You guessed them all!'
        }
    })
});