document.addEventListener('DOMContentLoaded', function() {
    generateRandomParagraph();
});

function generateRandomParagraph() {
    var randomTextContainer = document.getElementById('randomTextContainerMA');
    
    // Array of sample paragraphs
    var wizq = [
        "The measure of a person's life is not the duration but the contribution to the common good.",
        "In the face of adversity, remember, the obstacle is the path to virtue.",
        "Seek not for events to happen as you wish, but rather wish for events to happen as they do, and your days will be serene.",
        "Embrace the transient nature of life; each moment is a fleeting opportunity for virtue.",
        "Your mind is the master of your destiny; let reason guide you on the noble path.",
        "To live a virtuous life is to live in harmony with the order of the universe.",
        "Reflect on the impermanence of all things; in this realization, find the strength to endure.",
        "The only true wealth is the wealth of the soul; cultivate virtues as your eternal treasures.",
        "Adversity is the forge of character; welcome challenges as opportunities for growth.",
        "The happiness of your life depends upon the quality of your thoughts; cultivate a tranquil mind.",
        "Cherish the present moment, for it is the only time that is truly yours.",
        "Strive not to be a success, but rather to be of value to others.",
        "Let go of attachments to external things; true freedom is found within.",
        "Your character is your fate; cultivate virtues that align with the highest good.",
        "The best revenge is to be unlike the one who performed the injustice.",
        "Do not be disturbed, for everything is in accordance with the nature of the universe.",
        "What stands in the way becomes the way; transform obstacles into stepping stones.",
        "In the pursuit of knowledge, seek to understand, not to criticize.",
        "Practice the art of detachment; the wise person is indifferent to external events.",
        "Endure and renounce; in the face of trials, find strength through letting go.",
        "Dwell on the beauty of life; watch the stars, and see yourself running with them.",
        "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
        "It is not death that a man should fear, but he should fear never beginning to live.",
        "The best revenge is to be unlike him who performed the injustice.",
        "Waste no more time arguing about what a good person should be. Be one.",
        "The happiness of your life depends upon the quality of your thoughts.",
        "The best revenge is to be unlike the one who performed the injustice.",
        "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
        "It is not that we have a short time to live, but that we waste much of it.",
        "The soul becomes dyed with the color of its thoughts.",
        "Waste no more time arguing about what a good person should be. Be one.",
        "He who fears death will never do anything worth of a man who is alive.",
        "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
        "It is not that we have a short time to live, but that we waste much of it.",
        "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
        "The best revenge is to be unlike the one who performed the injustice.",
        "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
        "It is not that we have a short time to live, but that we waste much of it.",
        "The soul becomes dyed with the color of its thoughts.",
        "Waste no more time arguing about what a good person should be. Be one.",
        "The best revenge is to be unlike the one who performed the injustice.",
        "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
        "It is not that we have a short time to live, but that we waste much of it.",
        "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
        "The best revenge is to be unlike the one who performed the injustice.",
        "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
        "It is not that we have a short time to live, but that we waste much of it.",
        "The soul becomes dyed with the color of its thoughts.",
        "Waste no more time arguing about what a good person should be. Be one.",
        "The best revenge is to be unlike the one who performed the injustice.",
    ];

    // Get a random index from the paragraphs array
    var randomIndex = Math.floor(Math.random() * wizq.length);

    // Create a new paragraph element
    var paragraphElement = document.createElement('ppp');
    paragraphElement.textContent = wizq[randomIndex];

    // Append the paragraph to the container
    randomTextContainer.appendChild(paragraphElement);
}