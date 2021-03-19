# Getting Started with Postcards from Mars

This project is a simple React application to retrieve and display recent photos from the NASA Mars Rover Photos API. It was built to fulfill the requirements of a take home assignment for a potential employer. I'm also completely fascinated by all of NASA's recent Mars missions and sat holding my breath the entire time waiting to hear if Perseverance had landed safely.

A deployed version of the project is available at https://postcard-from-mars.vercel.app.

More information about all of NASA's APIs is available at https://api.nasa.gov.

## Installation Instructions

1. Clone the repository
2. Setup your .env file. You can use the .env.sample included with the project by removing .sample from the end. 
> NOTE: If you have your own NASA API key (available [here](https://api.nasa.gov)), replace DEMO_KEY with your API key.
3. Install the project by running `npm install` from the root directory of the project.
4. Launch the project in development mode by running `npm start`.

## Project Structure and Notes

Most of the core application logic and functionality is contained in landing.js. 

The select rover dropdown has been extracted as its own component (under common > SelectRover.js). 

StyledComponents.js controls the display of each application component.

An example of the data being retrieved from the NASA API is available in sample-data.

Styled Components was selected as the UI framework so that I could randomly select an image from the API and render it as the background image of a div using CSS.

## Lessons Learned

1. Friendly reminder, save an offline copy of the data right away in case API goes down

Almost immediately after I started building the application, the NASA API went down and I had forgotten to save an offline copy of the data. While these issues are generally temporary, it's always frustrating to be halfway through writing an Axios call and the associated logic to set the data into state, and all of a sudden have no data to work with.

2. Double check for required dependency arrays in useEffect()

Once the core functionality of the application was working, I noticed a frustrating bug where the images would rotate randomly (as expected) immediately after initial page load, but then randomly stop, or stop rotating completely if the page was refreshed. After much consternation I discovered I neglected to include backgroundImgUrl as a dependency in the useEffect triggering the background image replacement.  

4. It's a feature, not a bug!

The bug I wasn't able to fix was the slight flicker that sometimes appears between images, or when a different rover is selected. After much trial and error, I can only assume this must be due to the transfer time retrieving each image from the API coupled with the component re-rendering. Needless to say, without pre-loading all the images locally (which would defeat the purpose of retrieving everything from the API), I wasn't going to fix the problem.

It was then a friend told me they liked the slight flicker of the image. It reminded them of an old time TV show, being broadcast from 154 million miles away.

## Next Steps

There is a ton of additional search capability and data available from the NASA API, including: search by date, search for images from a specific camera, and mission manifest data, which is a list of the total photos available for each Mars day (a sol) by rover, along with the cameras that took the photos.

The following are some of the ideas I would add to continue adding features to this basic application.

* Add advanced search / filtering capabilities (e.g. search for images by specific earth date and/or camera)
* Search for images from multiple rovers at the same time
* Display the name of the rover and which camera took the currently displayed photo
* Display the sol and earth date when the photo was taken
* Show all available images for a search in a grid and allow users to select which images are displayed
* Refactor the random image function to eliminate the possibility of duplicate image choices until all images have been shown
* Reframe the entire application to look as though the images are being displayed in an old style black and white TV (suggestion from a friend)