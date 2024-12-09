function close_parent(button) {
    const parent_element = button.parentElement;
    parent_element.remove();
}

function add_new_video() {
    const video_div = document.createElement('div');
    video_div.className = 'polaroid';
    //section_div.appendChild(image_div);

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