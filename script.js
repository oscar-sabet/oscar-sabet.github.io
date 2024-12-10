function close_parent(button) {
    const parent_element = button.parentElement;
    parent_element.remove();
}

function add_new_web() {
    const web_div = document.createElement('div');
    web_div.className = 'wrap-div'
    web_div.style.width = '100%'
    web_div.style.height = '700px'

    const close_button = document.createElement('button');
    close_button.className = "close-button";
    close_button.onclick = function () { close_parent(this) };
    close_button.type = "button";
    close_button.value = "x";
    close_button.name = "x";
    close_button.textContent = "x";
    web_div.appendChild(close_button);

    const web_iframe = document.createElement('iframe');
    web_iframe.src = 'https://oscar-sabet.github.io/';
    web_iframe.width = '100%';
    web_iframe.height = '100%'
    web_div.appendChild(web_iframe);
    
    const container = document.getElementById('container');
    container.prepend(web_div);
}
function add_new_map() {
    const map_div = document.createElement('div');
    map_div.className = 'wrap-div'
    map_div.style.width = '100%'

    const close_button = document.createElement('button');
    close_button.className = "close-button";
    close_button.onclick = function() {close_parent(this)};
    close_button.type = "button";
    close_button.value = "x";
    close_button.name = "x";
    close_button.textContent = "x";
    map_div.appendChild(close_button);

    const map_iframe = document.createElement('iframe');
    map_iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40701.22046947628!2d-4.153854912499758!3d50.38843689411045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486c8d530e95ea3d%3A0x3b282cb5cef58593!2sPlymouth!5e0!3m2!1sen!2suk!4v1733790711020!5m2!1sen!2suk';
    map_iframe.width = '100%';
    map_iframe.height = '350px'
    map_div.appendChild(map_iframe);
    
    const container = document.getElementById('container');
    container.prepend(map_div);
    // width = "600" height = "450" style = "border:0;" allowfullscreen = "" loading = "lazy" referrerpolicy = "no-referrer-when-downgrade" ></iframe > '
}
function add_new_video() {
    const video_div = document.createElement('div');
    video_div.className = 'polaroid';
    //section_div.appendChild(image_div);

    const close_button = document.createElement('button');
    close_button.className = "close-button";
    close_button.onclick = function() {close_parent(this)};
    close_button.type = "button";
    close_button.value = "x";
    close_button.name = "x";
    close_button.textContent = "x";
    video_div.appendChild(close_button);

    const image_container = document.createElement('div');
    image_container.className = 'image-container';
    video_div.appendChild(image_container);

    const new_vid = document.createElement('iframe');
    new_vid.className = 'Your Image'
    new_vid.src = 'https://www.youtube.com/embed/7PIji8OubXU?si=IuYU1rGCph-cqe18';
    new_vid.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    image_container.appendChild(new_vid);

    const caption = document.createElement('div');
    caption.className = 'caption';
    caption.textContent = 'Best of Dolby Vision 12K HDR 120fps'
    video_div.appendChild(caption);

    const container = document.getElementById('container');
    container.prepend(video_div);
}

function add_new_image() {

    const image_div = document.createElement('div');
    image_div.className = 'polaroid';
    //section_div.appendChild(image_div);

    const close_button = document.createElement('button');
    close_button.className = "close-button";
    close_button.onclick = function() {close_parent(this)};
    close_button.type = "button";
    close_button.value = "x";
    close_button.name = "x";
    close_button.textContent = "x";
    image_div.appendChild(close_button)            

    const image_container = document.createElement('div');
    image_container.className = 'image-container';
    image_div.appendChild(image_container)

    const new_img = document.createElement('img');
    new_img.className = 'Your Image'
    new_img.src = 'https://pixabay.com/get/random'
    image_container.appendChild(new_img)

    const caption = document.createElement('div');
    caption.className = 'caption';
    caption.textContent = 'perferendis quia aut repellendus minima'
    image_div.appendChild(caption)

    const container = document.getElementById('container');
    container.prepend(image_div);
}

function add_new() {
    
    const section_div = document.createElement('div');
    section_div.className = 'page-section';

    const close_button = document.createElement('button');
    close_button.className = "close-button";
    close_button.onclick = function() {close_parent(this)};
    close_button.type = "button";
    close_button.value = "x";
    close_button.name = "x";
    close_button.textContent = "x";
    section_div.appendChild(close_button)


    const heading = document.createElement('h2');
    heading.textContent = 'Section heading';
    section_div.appendChild(heading);

    const image_div = document.createElement('div');
    image_div.className = 'polaroid';
    section_div.appendChild(image_div);


    const image_container = document.createElement('div');
    image_container.className = 'image-container';
    image_div.appendChild(image_container)


    const new_img = document.createElement('img');
    new_img.className = 'Your Image'
    new_img.src = 'image/1000_F_554026892_UsZG4Tm3GPUV6fxzlpvV0qOOe9KKYvCj.jpg'
    image_container.appendChild(new_img)

    const caption = document.createElement('div');
    caption.className = 'caption';
    caption.textContent = 'perferendis quia aut repellendus minima'
    image_div.appendChild(caption)

    const close_button_2 = document.createElement('button');
    close_button_2.className = "close-button";
    close_button_2.onclick = function() {close_parent(this)};
    close_button_2.type = "button";
    close_button_2.value = "x";
    close_button_2.name = "x2";
    close_button_2.textContent = "x";
    image_div.appendChild(close_button_2)


    const sub_heading = document.createElement('h2');
    sub_heading.textContent = 'Section subheading Lorem ipsum dolor sit amet, consectetur adipiscing elit';
    section_div.appendChild(sub_heading);

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
    section_div.appendChild(paragraph);

    const paragraph_2 = document.createElement('p');
    paragraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    section_div.appendChild(paragraph_2);

    

    

    const container = document.getElementById('container');
    container.prepend(section_div);
}
