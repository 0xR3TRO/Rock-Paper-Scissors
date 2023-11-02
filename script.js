// Scripts and functions on this page are the creation of 0xR3TR0. All rights reserved.
// Get DOM elements
const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const cpuResult = document.querySelector(".cpu_result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image");

// Iterate through each option image element
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        // Add the "active" class to the clicked image
        image.classList.add("active");

        // Set user and CPU result images to "rock"
        userResult.src = cpuResult.src = "images/rock.png";
        result.textContent = "Please wait...";

        // Iterate through the option images again
        optionImages.forEach((image2, index2) => {
            // If the current index doesn't match the clicked index
            // Remove the "active" class from the other option images
            if (index !== index2) {
            image2.classList.remove("active");
        }
    });

    // Add the "start" class to the game container
    gameContainer.classList.add("start");

    // Set a delay before calculating the result
    let time = setTimeout(() => {
        // Remove the "start" class from the game container
        gameContainer.classList.remove("start");

        // Get the source of the clicked option image
        let imageSrc = e.target.querySelector("img").src;
        // Set the user image to the clicked option image
        userResult.src = imageSrc;

        // Generate a random number between 0 and 2
        let randomNumber = Math.floor(Math.random() * 3);
        // Create an array of CPU image options
        let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
        // Set the CPU image to a random option from the array
        cpuResult.src = cpuImages[randomNumber];

        // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
        let cpuValue = ["R", "P", "S"][randomNumber];
        // Assign a letter value to the clicked option (based on index)
        let userValue = ["R", "P", "S"][index];

        // Create an object with all possible outcomes
        let outcomes = {
            RR: "Draw",
            RP: "CPU",
            RS: "User",
            PP: "Draw",
            PR: "User",
            PS: "CPU",
            SS: "Draw",
            SR: "CPU",
            SP: "User",
        };

        // Look up the outcome value based on user and CPU options
        let outComeValue = outcomes[userValue + cpuValue];

        // Display the result
        result.textContent = userValue === cpuValue ? "Draw" : `${outComeValue} wins!!`;
    }, 2500);
  });
});
