console.log("hello world");

//TODO: I need to store my images data

const images = [
  {
    url: "https://images.unsplash.com/photo-1549586073-f4c3b7ff044a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //relative path for local images OR link to the image
    altText:
      "Grey pigeon flying over a lake, with blurred hills in the background.",
  },
  {
    url: "https://cdn.pixabay.com/photo/2022/03/25/05/54/bird-7090328_960_720.jpg",
    altText:
      "A red and white fantail pigeon standing on a rock, with more fantails in the background.",
  },
  {
    url: "https://cdn.pixabay.com/photo/2018/09/02/10/23/pigeon-3648481_1280.jpg",
    altText:
      "A black chequered pigeon drinking from a water fountain of a white stone dog statue.",
  },
];

//TODO: I need to create my thumbnail images

function createThumbnails() {
  const thumbnailBox = document.querySelector("#thumbnail-box");
  for (image of images) {
    const imgTag = document.createElement("img");
    imgTag.src = image.url;
    imgTag.alt = image.altText;
    imgTag.className = "thumbnail-image";
    imgTag.addEventListener("click", createLargeImageHandler);
    thumbnailBox.appendChild(imgTag);
  }
}

//TODO: I need to create my large images

function createLargeImageHandler() {
  const largeImageBox = document.querySelector("#large-image-box");
  largeImageBox.innerHTML = null;
  const largeImg = document.createElement("img");
  largeImg.src = image.url;
  largeImg.alt = image.alt;
  largeImg.className = "large-image";
  largeImageBox.appendChild(largeImg);
}

createThumbnails();

//
// select the DOM element (thumbnail-container) to contain our thumbnails
//this is a repetitive task --> loop through our array (using the length property)
//Inside our loop we need to do this:
// - create img element
// - update the src and alt attributes of the img element to match those in the array (parameters)
// - give each img a className (img.className)
// - add an event listener to each image --> the event handler of this listener is the function you write to create large images
// - append the created images to the thumbnail-container
//
//
//select the large-image-container
//delete the current image in the large-image-container
// largeImageContainer.innerHTML = null OR ""
// create an image
// update the src and alt values
// add a className for styling
//append the img to the container
// }

//add this event handler to the thumbanil event
//you call the createThumbanils function
