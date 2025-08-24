console.log("hello world");

//TODO: I need to store my images data

const images = [
  {
    url: "https://images.unsplash.com/photo-1549586073-f4c3b7ff044a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText:
      "Grey pigeon flying over a lake, with blurred hills in the background.",
    tabIndex: "1",
  },
  {
    url: "https://cdn.pixabay.com/photo/2022/03/25/05/54/bird-7090328_960_720.jpg",
    altText:
      "A red and white fantail pigeon standing on a rock, with more fantails in the background.",
    tabIndex: "1",
  },
  {
    url: "https://cdn.pixabay.com/photo/2018/09/02/10/23/pigeon-3648481_1280.jpg",
    altText:
      "A black chequered pigeon drinking from a water fountain of a white stone dog statue.",
    tabIndex: "1",
  },
  {
    url: "https://cdn.pixabay.com/photo/2018/05/11/15/55/city-pigeon-3390891_1280.jpg",
    altText: "Two pigeons standing near each other on a fence bar.",
    tabIndex: "1",
  },
  {
    url: "https://cdn.pixabay.com/photo/2020/10/28/16/55/pigeon-5694010_1280.jpg",
    altText: "A black pigeon lying on the grass, resting.",
    tabIndex: "1",
  },
  {
    url: "https://cdn.pixabay.com/photo/2025/06/20/13/52/pigeons-9670910_1280.jpg",
    altText: "Two pigeon fighting on a cobbled pavement.",
    tabIndex: "1",
  },
  {
    url: "https://cdn.pixabay.com/photo/2017/06/13/20/52/bird-2400116_1280.jpg",
    altText: "A pigeon standing on the edge of a hole in an old stone wall.",
    tabIndex: "1",
  },
];

//===============================================================================
//TODO: I need to create my thumbnail images

function createThumbnails() {
  const thumbnailBox = document.querySelector("#thumbnail-box");
  for (const image of images) {
    const imgTag = document.createElement("img");
    imgTag.src = image.url;
    imgTag.alt = image.altText;
    imgTag.className = "thumbnail-image";
    imgTag.tabIndex = image.tabIndex;
    imgTag.addEventListener("click", (e) => createLargeImageHandler(image));
    thumbnailBox.appendChild(imgTag);
  }
}

//===============================================================================
//TODO: large image of first picture in the arrays shows when first visiting the site

function largeImageOnVisit() {
  const largeImageBox = document.querySelector("#large-image-box");
  const largeImg = document.createElement("img");
  largeImg.src = images[0].url;
  largeImg.alt = images[0].altText;
  largeImg.className = "large-image";
  largeImageBox.appendChild(largeImg);
}

largeImageOnVisit();

//===============================================================================
//TODO: I need to create my large images when clicking the respective thumbnail

function createLargeImageHandler(image) {
  const largeImageBox = document.querySelector("#large-image-box");
  largeImageBox.innerHTML = null;
  const largeImg = document.createElement("img");
  largeImg.src = image.url;
  largeImg.alt = image.altText;
  largeImg.className = "large-image";
  largeImageBox.appendChild(largeImg);
}

createThumbnails();

//===============================================================================
//TODO: add buttons to cycle through the images (next and previous buttons)

let currentImageIndex = 0;

document.querySelector("#next-image").addEventListener("click", () => {
  const largeImageBox = document.querySelector("#large-image-box");
  largeImageBox.innerHTML = null;
  const largeImg = document.createElement("img");
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  largeImg.src = images[currentImageIndex].url;
  largeImg.alt = images[currentImageIndex].altText;
  largeImg.className = "large-image";
  largeImageBox.appendChild(largeImg);
});

document.querySelector("#previous-image").addEventListener("click", () => {
  const largeImageBox = document.querySelector("#large-image-box");
  largeImageBox.innerHTML = null;
  const largeImg = document.createElement("img");
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  largeImg.src = images[currentImageIndex].url;
  largeImg.alt = images[currentImageIndex].altText;
  largeImg.className = "large-image";
  largeImageBox.appendChild(largeImg);
});
