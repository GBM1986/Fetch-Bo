/* Opgave 1*/
// din kode her
const myDataFileUrl = "../../opgavefiler/data/story.json";
const myStoryElement = document.getElementById("theStory");

let myLanguageVersion = 'DK';

fetch(myDataFileUrl)
.then((response) => {

    if (response.ok) {
        console.log(response);
        return response.json();

    } else {
        console.warn('det gik noget galt');
    }
})

.then((data) => {   
    console.log(data);

    let myLangData =null;

    switch (myLanguageVersion) {
        case 'DK':
            myLangData = data.DK;
            break;
            
        case 'FI':
            myLangData = data.FI;
            break;
        
        case 'UK':
            myLangData = data.UK;
            break;

        case 'SE':
            myLangData = data.SE;
            break;

        default:
    }

    myStoryElement.innerHTML = ''; // Clear existing content
    createStory(myLangData); // Call createStory with the updated language data

    
    })
    .catch((err) => {
    console.warn(err);
    });




/* Opgave 2 - skriv videre på koden her: */
// const myDataFileUrl = "../../opgavefiler/data/story.json";
// const myStoryElement = document.getElementById("theStory");

function createStory(myStory) {
    myStoryElement.innerHTML = ''
    createButtons();
    
    let myHeadline = document.createElement('h2');
    myHeadline.innerText = myStory.headline;
    let myImage = document.createElement('img');
    myImage.src = '../../opgavefiler/img/felix.jpg';
    let myParagraf = document.createElement('p');
    myParagraf.innerText = myStory.text;
    
    
    myStoryElement.appendChild(myHeadline);
    myStoryElement.appendChild(myImage);
    myStoryElement.appendChild(myParagraf);
    
    }

function createButtons() {
    let myDkbutton = document.createElement('button');
    myDkbutton.innerText = 'Dansk';
    myDkbutton.classList.add('button-hover');
    myDkbutton.addEventListener('click', (e) => {
        setUpStory("DK");
    });

    let mySebutton = document.createElement('button');
    mySebutton.innerText = 'Svenska';
    mySebutton.classList.add('button-hover');
    mySebutton.addEventListener('click', (e) => {
        setUpStory("SE");
    });
        
    let myUkbutton = document.createElement('button');
    myUkbutton.innerText = 'Engelska';
    myUkbutton.classList.add('button-hover');
    myUkbutton.addEventListener('click', (e) => {
        setUpStory("UK");
    });

    let myFibutton = document.createElement('button');
    myFibutton.innerText = 'Suomi';
    myFibutton.classList.add('button-hover');
    myFibutton.addEventListener('click', (e) => {
        setUpStory("FI");
    });
    
    myStoryElement.appendChild(myDkbutton);
    myStoryElement.appendChild(mySebutton);
    myStoryElement.appendChild(myUkbutton);
    myStoryElement.appendChild(myFibutton);
}

function setUpStory(language) {
    myLanguageVersion = language;

    fetch(myDataFileUrl)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.warn('Det gik noget galt');
            }
        })
        .then((data) => {
            let myLangData = null;

            switch (myLanguageVersion) {
                case 'DK':
                    myLangData = data.DK;
                    break;

                case 'FI':
                    myLangData = data.FI;
                    break;

                case 'UK':
                    myLangData = data.UK;
                    break;

                case 'SE':
                    myLangData = data.SE;
                    break;

                default:
            }

            myStoryElement.innerHTML = ''; // Clear existing content
            createStory(myLangData); // Call createStory with the updated language data
        })
        .catch((err) => {
            console.warn(err);
        });
}



/* Opgave 3*/
// din kode her
const userURI = "https://jsonplaceholder.typicode.com/users";
const myUserlistElement = document.getElementById("userList");


/* Opgave 4*/
// din kode her
