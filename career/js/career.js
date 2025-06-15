const col1     = document.getElementById('bookTextCol1');
const col2     = document.getElementById('bookTextCol2');
const pen      = document.getElementById('penImg');
const chapters = [
    'Chapter 1: College (Media Studies)',
    'Chapter 2: Ad Broadcast Production',
    'Chapter 3: Preschool Teacher',
    'Chapter 4: Corporate Events',
    'Chapter 5: Coding Bootcamp',
    'Chapter 6: Software Engineer',
    'Chapter 7: Master\'s Degree',
    'Chapter 8: ???'
];

//Starting index of chapters array
let index = 0;

//Click listener for the pen image
penImg.addEventListener('click', typeText);

function typeText(e) {

    //Create an element to append to the page
    let chapter = document.createElement('p');

    //I don't like the default column behavior, so I am forcing them into specific columns
    //First four in the first column
    if (index < 4) {
        col1.appendChild(chapter);
        chapter.textContent = chapters[index];
    //Second four in second column
    } else {
        col2.appendChild(chapter);
        chapter.textContent = chapters[index];
    }

    //Increment the index
    index++;
}
