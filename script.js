// document.addEventListener("DOMContentLoaded", function () {
//     const loginButton = document.getElementById('loginButton');

//     loginButton.addEventListener("click", function () {
//         const usernameInput = document.querySelector("input[name='username']").value;
//         const passwordInput = document.querySelector("input[name='password']").value;

//         if (usernameInput === "ankitkumar" && passwordInput === "admin") {
//             alert("Authentication successful. You are logged in!");
//         } else {
//             alert("Authentication failed. Please check your username and password.");
//         }
//     });
// });

// above works 


// document.addEventListener("DOMContentLoaded", function () {
//     const loginButton = document.getElementById('loginButton');

//     loginButton.addEventListener("click", function () {
//         const usernameInput = document.querySelector("input[name='username']").value;
//         const passwordInput = document.querySelector("input[name='password']").value;

//         if (usernameInput === "ankitkumar" && passwordInput === "admin") {
//             alert("Authentication successful. You are logged in!");
//             window.location.href = "file:///D:/llm-project/index.html";
//         } else {
//             alert("Authentication failed. Please check your username and password.");
//         }
//     });
// });


// document.addEventListener("DOMContentLoaded", function () {
//     const loginButton = document.getElementById('loginButton');

//     loginButton.addEventListener("click", function () {
//         const usernameInput = document.querySelector("input[name='username']").value;
//         const passwordInput = document.querySelector("input[name='password']").value;

//         if (usernameInput === "ankitkumar" && passwordInput === "admin") {
//             alert("Authentication successful. You are logged in!");
//             // Use a relative URL to navigate to the index.html within the same directory
//             document.location.href = "file:///D:/llm-project/index.html";

//         } else {
//             alert("Authentication failed. Please check your username and password.");
//         }
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById('loginButton');
    const inputForm = document.getElementById('input-form');
    const outputElement = document.getElementById('output');
    const authenticationContainer = document.querySelector('.authentication-container');
    const llmContainer = document.querySelector('.glassmorphism-container');

    loginButton.addEventListener("click", function () {
        const usernameInput = document.querySelector("input[name='username']").value;
        const passwordInput = document.querySelector("input[name='password']").value;

        if (usernameInput === "ankitkumar" && passwordInput === "admin") {
            //alert("Authentication successful. You are logged in!");

            // Hide the authentication container and show the LLM-BART container
            authenticationContainer.style.display = 'none';
            llmContainer.style.display = 'block';
        } else {
            alert("Authentication failed. Please check your username and password.");
        }
    });

    inputForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const inputTextElement = document.getElementById("inputText");
        const inputText = inputTextElement.value;

        if (!inputText) {
            alert("Please enter some text.");
            return;
        }

        // Perform the API query with the user's input text
        const response = await query({ "inputs": inputText });

        // Display the result in the output container
        outputElement.textContent = JSON.stringify(response, null, 2);
    });
});

async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
        {
            headers: { Authorization: "Bearer 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" },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}
