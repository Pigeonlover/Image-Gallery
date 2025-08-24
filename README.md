# Image Gallery

---

## What did I achieve?

1) The site is responsive and the large image resizes depending on the screen. I used a @media query so that on smaller screens (specifically for mine I made it for screens below width 500px), the thumbnails container moves to the bottom of the page, as it would be easier for those using thumbs on mobile devices.
2) For accessibility needs, I added alt texts for images. I also added aria-labels and an aria-live, which (as far as I understood, and if I implemented it correctly?) should notify the user in changes of the large image container (e.g., when a new large image appears).
3) I added buttons for the user to switch between the next and previous pictures in the gallery.
4) The JavaScript was very tricky in the beginning, and I especially had lots of issues making the handler to create the large image work. It took lots of thinking and discussion with the other students to come to a solution.
5) I also added a function so that on first visiting the site, the first picture in the gallery already appears as the large image.
6) As you suggested to me in the previous assignment feedback, I tried incorporating clamp, and I used the z-index to 'layer' elements on top of each other.

---

## What wasn't I happy with?

1) Positioning the elements with CSS was again tricky. Using margin:auto or justify-content: center didn't seem to be working this time. Neither was grid helpful. After lots of tries and tribulations, I had to seek the pearls of wisdom of a friend that is already in the industry, and they introduced me to the transform css attribute as an alternative to horizontal alignment. That again took some tries (I had to try many combinations of using it with display and position), but eventually I got it to a satisfactory result.
2) I wish I had more time, as I wanted to implement another element in the site. Basically, a button to 'hide' the thumbnail box, because I don't quite like how it covers a part of the large image on top in desktop view.
3) I added tabIndex: "1" to the images in the thumbnail container, so they go in focus when the user runs through them using the tab key. However, the images cannot be 'clicked' using the enter key, so that was disappointing. There was no more time left, so I had to leave that unfinished.

---

## Conclusion
This assignment was a very big jump in both difficulty and level of thinking from the previous week's one. I've had to spend more time researching solutions, thinking about why the code wasn't working, and discussing code with fellow students. Honestly speaking, there was a big element of frustration in this assignment from what I felt was left unfinished, but also proud moments when the JavaScript I wrote worked after lots of tries.
