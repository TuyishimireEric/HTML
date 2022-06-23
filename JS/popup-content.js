/*eslint linebreak-style: ["error", "windows"]*/
const allContent = [
    {
        name: 'Tonic',
        work: ['CANOPY', 'Back End Dev', '2015'],
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    At eos qui possimus nisi ducimus delectus enim beatae natus 
    ab? Natus minima minus similique nisi eos, deleniti laudantium 
    nihil impedit assumenda! ducimus delectus enim beatae natus 
    ab? Natus minima minus`,
        languages: ['HTML', 'css', 'javaScript'],

    },
    {
        name: 'Multi-Post Stories',
        work: ['CANOPY', 'Back End Dev', '2015'],
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    At eos qui possimus nisi ducimus delectus enim beatae natus 
    ab? Natus minima minus similique nisi eos, deleniti laudantium 
    nihil impedit assumenda! ducimus delectus enim beatae natus 
    ab? Natus minima minus`,
        languages: ['HTML', 'css', 'javaScript'],
    },
    {
        name: 'Tonic',
        work: ['CANOPY', 'Back End Dev', '2015'],
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    At eos qui possimus nisi ducimus delectus enim beatae natus 
    ab? Natus minima minus similique nisi eos, deleniti laudantium 
    nihil impedit assumenda! ducimus delectus enim beatae natus 
    ab? Natus minima minus`,
        languages: ['HTML', 'css', 'javaScript'],

    },
    {
        name: 'Multi-Post Stories',
        work: ['CANOPY', 'Back End Dev', '2015'],
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    At eos qui possimus nisi ducimus delectus enim beatae natus 
    ab? Natus minima minus similique nisi eos, deleniti laudantium 
    nihil impedit assumenda! ducimus delectus enim beatae natus 
    ab? Natus minima minus`,
        languages: ['HTML', 'css', 'javaScript'],
    },

];

const modal0 = document.querySelector(".modal");

modal0.insertAdjacentHTML("afterbegin", `
    <div class="modal-header">
        <h2 class="title">${allContent[0].name}</h2>
        <button data-close-button type="button" class="close-button">&times;</button>
    </div>
    <ul class="sub-title">
        <li>${allContent[0].work[0]}</li>
        <li>${allContent[0].work[1]}</li>
        <li>${allContent[0].work[2]}</li>
    </ul>
    <div class="modal-photo" id="photoP">
    </div>
    <section class="modal-body">
        <p class="modal-body1">${allContent[0].content}</p>
        <div class="modal-body2">
            <ul class="category">
                <li><a href="index.html">${allContent[0].languages[0]}</a></li>
                <li><a href="index.html">${allContent[0].languages[1]}</a></li>
                <li><a href="index.html">${allContent[0].languages[2]}</a></li>
            </ul>
            <div class="extra-buttons">  
            <div class="project"><p>See Live</p><img src="image/sm1.png"></div>
            <div class="project"><p>See Source</p><img src="image/sm2.png"></div>
            </div>
        </div>
    </section> 

`);

const modal1 = document.querySelector("#");

modal1.insertAdjacentHTML("afterbegin", `
    <div class="modal-header">
        <h2 class="title">${allContent[0].name}</h2>
        <button data-close-button type="button" class="close-button">&times;</button>
    </div>
    <ul class="sub-title">
        <li>${allContent[0].work[0]}</li>
        <li>${allContent[0].work[1]}</li>
        <li>${allContent[0].work[2]}</li>
    </ul>
    <div class="modal-photo" id="photoP">
    </div>
    <section class="modal-body">
        <p class="modal-body1">${allContent[0].content}</p>
        <div class="modal-body2">
            <ul class="category">
                <li><a href="index.html">${allContent[0].languages[0]}</a></li>
                <li><a href="index.html">${allContent[0].languages[1]}</a></li>
                <li><a href="index.html">${allContent[0].languages[2]}</a></li>
            </ul>
            <div class="extra-buttons">  
            <div class="project"><p>See Live</p><img src="image/sm1.png"></div>
            <div class="project"><p>See Source</p><img src="image/sm2.png"></div>
            </div>
        </div>
    </section> 

`);

const modal2 = document.querySelector("#");

modal2.insertAdjacentHTML("afterbegin", `
    <div class="modal-header">
        <h2 class="title">${allContent[0].name}</h2>
        <button data-close-button type="button" class="close-button">&times;</button>
    </div>
    <ul class="sub-title">
        <li>${allContent[1].work[0]}</li>
        <li>${allContent[1].work[1]}</li>
        <li>${allContent[1].work[2]}</li>
    </ul>
    <div class="modal-photo" id="photoP">
    </div>
    <section class="modal-body">
        <p class="modal-body1">${allContent[0].content}</p>
        <div class="modal-body2">
            <ul class="category">
                <li><a href="index.html">${allContent[2].languages[0]}</a></li>
                <li><a href="index.html">${allContent[2].languages[1]}</a></li>
                <li><a href="index.html">${allContent[2].languages[2]}</a></li>
            </ul>
            <div class="extra-buttons">  
            <div class="project"><p>See Live</p><img src="image/sm1.png"></div>
            <div class="project"><p>See Source</p><img src="image/sm2.png"></div>
            </div>
        </div>
    </section> 

`);

const modal3 = document.querySelector("#");

modal3.insertAdjacentHTML("afterbegin", `
    <div class="modal-header">
        <h2 class="title">${allContent[0].name}</h2>
        <button data-close-button type="button" class="close-button">&times;</button>
    </div>
    <ul class="sub-title">
        <li>${allContent[3].work[0]}</li>
        <li>${allContent[3].work[1]}</li>
        <li>${allContent[3].work[2]}</li>
    </ul>
    <div class="modal-photo" id="photoP">
    </div>
    <section class="modal-body">
        <p class="modal-body1">${allContent[3].content}</p>
        <div class="modal-body2">
            <ul class="category">
                <li><a href="index.html">${allContent[3].languages[0]}</a></li>
                <li><a href="index.html">${allContent[3].languages[1]}</a></li>
                <li><a href="index.html">${allContent[3].languages[2]}</a></li>
            </ul>
            <div class="extra-buttons">  
            <div class="project"><p>See Live</p><img src="image/sm1.png"></div>
            <div class="project"><p>See Source</p><img src="image/sm2.png"></div>
            </div>
        </div>
    </section> 

`);