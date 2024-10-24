document.addEventListener('DOMContentLoaded', function() {
    generateRandomParagraph();
});

function generateRandomParagraph() {
    var randomTextContainer = document.getElementById('randomTextContainerJ');
    
    // Array of sample paragraphs
    var joke = [
        "Why don't eggs tell each other secrets? Because they might crack up!",
        "I only know 25 letters of the alphabet. I don't know y.",
        "What do you call fake spaghetti? An impasta.",
        "Did you hear about the cheese factory explosion? There was nothing left but de-brie.",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "I used to play piano by ear, but now I use my hands and fingers.",
        "Why don't scientists trust atoms? Because they make up everything!",
        "I told my wife she should embrace her mistakes. She gave me a hug.",
        "How do you organize a space party? You planet.",
        "I'm reading a book on anti-gravity. It's impossible to put down!",
        "What do you call a fake noodle? An impasta.",
        "Why don't skeletons fight each other? They don't have the guts.",
        "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
        "I told my wife she should embrace her mistakes. She gave me a hug.",
        "What's a skeleton's least favorite room in the house? The living room.",
        "Why don't scientists trust atoms? Because they make up everything!",
        "Parallel lines have so much in common. Its a shame they will never meet.",
        "What did the janitor say when he jumped out of the closet? Supplies!",
        "I'm on a whiskey diet. I've lost three days already.",
        "Why don't some couples go to the gym? Because some relationships don't work out.",
        "I'm reading a book on anti-gravity. It's impossible to put down!",
        "Did you hear about the guy who invented Lifesavers? He made a mint!",
        "How does a penguin build its house? Igloos it together.",
        "What do you call a factory that makes good products? A satisfactory.",
        "Why do seagulls fly over the sea? Because if they flew over the bay, they would be bagels.",
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        "How do you organize a space party? You planet.",
        "I only know 25 letters of the alphabet. I don't know y.",
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why don't skeletons fight each other? They don't have the guts.",
        "I'm afraid for the calendar. Its days are numbered.",
        "What did the grape do when he got stepped on? Nothing, but it let out a little whine.",
        "I used to play piano by ear, but now I use my hands and fingers.",
        "What do you call a can opener that doesn't work? A can't opener.",
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        "Why did the coffee file a police report? It got mugged.",
        "What did the grape say after it was stepped on? Nothing, it just let out a little wine.",
        "How does a penguin build its house? Igloos it together.",
        "I only know 25."

    ];

    // Get a random index from the paragraphs array
    var randomIndex = Math.floor(Math.random() * joke.length);

    // Create a new paragraph element
    var paragraphElement = document.createElement('pp');
    paragraphElement.textContent = joke[randomIndex];

    // Append the paragraph to the container
    randomTextContainer.appendChild(paragraphElement);
}