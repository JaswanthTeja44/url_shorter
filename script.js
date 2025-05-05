// Selecting DOM elements
const urlInput = document.getElementById("urlInput");
const shortenBtn = document.getElementById("shortenBtn");
const shortenedUrl = document.getElementById("shortenedUrl");
const copyBtn = document.getElementById("copyBtn");
const historyList = document.getElementById("historyList");

let history = [];

// Shorten URL Function
const shortenURL = (url) => {
    // Simulate shortening URL (use a real API in a real-world scenario)
    const shortened = `https://short.ly/${Math.random().toString(36).substring(7)}`;
    return shortened;
};

// Handle the button click to shorten the URL
shortenBtn.addEventListener("click", () => {
    const url = urlInput.value.trim();

    // Basic validation
    if (!url || !isValidURL(url)) {
        alert("Please enter a valid URL.");
        return;
    }

    // Shorten the URL and display it
    const shortUrl = shortenURL(url);
    shortenedUrl.value = shortUrl;

    // Add to history
    addToHistory(url, shortUrl);
});

// Function to check if URL is valid
const isValidURL = (url) => {
    const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return regex.test(url);
};

// Add shortened URL to history
const addToHistory = (original, short) => {
    // Update the history array
    history.push({ original, short });

    // Update the history display
    updateHistoryDisplay();
};

// Update the history display
const updateHistoryDisplay = () => {
    historyList.innerHTML = "";
    history.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span><strong>${item.original}</strong> → ${item.short}</span>
        `;
        historyList.appendChild(li);
    });
};

// Handle copy button click
copyBtn.addEventListener("click", () => {
    if (!shortenedUrl.value) return;

    // Copy the shortened URL to clipboard
    navigator.clipboard.writeText(shortenedUrl.value).then(() => {
        alert("URL copied to clipboard!");
    }).catch(() => {
        alert("Failed to copy URL.");
    });
});
