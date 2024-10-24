document.addEventListener('DOMContentLoaded', function() {
    generateRandomParagraph();
});

function generateRandomParagraph() {
    var randomTextContainer = document.getElementById('randomTextContainerTS');
    
    // Array of sample paragraphs
    var tayq = [
        "Life is a never-ending love story, and you're the main character. Embrace every plot twist with grace and a little bit of sparkle.",
        "In the book of life, every chapter is a chance to reinvent yourself. Be the author of your own story, darling.",
        "Shake off the negativity, dance in the rain of possibilities, and sing your own melody. Your heart is the most beautiful instrument.",
        "When life hands you lemons, turn them into a song. Your resilience is the chorus that echoes through every challenge.",
        "Love like you're the lead in a romantic movie, and your heart is the soundtrack. You deserve a love story as epic as your favorite song.",
        "Fearless is not the absence of fear but the courage to face it. Stand tall, darling, and let your strength be your anthem.",
        "Life is a stage, and you're the star of the show. Embrace the spotlight, dance through the struggles, and always leave a little sparkle behind.",
        "You're not a backup dancer in someone else's story; you're the headliner of your own concert. Sing your truth with confidence.",
        "Speak now or forever hold your peace—your voice deserves to be heard, and your story deserves to be told.",
        "Love is a kaleidoscope of emotions. Let the colors of joy, passion, and kindness paint your world.",
        "You're not just surviving; you're thriving. Let your life be a love story that inspires others to find their own happily ever after.",
        "Life is a delicate balance of heartache and hope. Keep your head up, and remember, the best is yet to come.",
        "In a world that tries to dim your sparkle, shine even brighter. Your authenticity is your superpower.",
        "You're not a guest star; you're the leading role in your journey. Own your narrative and make it a story worth telling.",
        "Love letters to yourself are the most important. Write one every day, and let self-love be the anthem of your life.",
        "May your heartbreaks be transformed into chart-topping anthems of resilience and self-love.",
        "Embrace the unexpected twists in your story; they make for the most intriguing plotlines.",
        "In a world full of skeptics, be the believer in your own fairy tale ending.",
        "Dress up your life in the boldest colors; you're the artist of your own masterpiece.",
        "Let the rhythm of your dreams drown out the noise of doubt; dance to your own tune.",
        "Your life is a blank page; grab the pen and write a story that leaves them breathless.",
        "Create a harmony of kindness; your actions are the music that echoes in hearts.",
        "Like a hidden track, your talents might surprise even yourself; let them play loud.",
        "Don't be afraid to let the bridges you burn light up the way to your brighter future.",
        "Your journey is a stage; don't just perform, steal the show with your authenticity.",
        "Shake off the dust of doubt from your dreams; it's time to shine like a disco ball.",
        "Love fiercely, forgive freely, and let your heart beat to the rhythm of compassion.",
        "May your life be a garden of serendipity, where every bloom tells a story of growth.",
        "Sing your own love story, and let the world sway to the melody of your heart.",
        "Dress your soul in courage, walk the runway of challenges, and let resilience be your fashion statement.",
        "Navigate life's twists and turns with the grace of a well-choreographed music video; you're the star of your own journey.",
        "Let the echoes of your laughter drown out the whispers of doubt; joy is the sweetest revenge.",
        "In a world full of blank spaces, be the artist who paints their narrative with bold and vibrant strokes.",
        "Write your story in love letters to yourself; you are the main character deserving of endless admiration.",
        "Embrace the blank page of tomorrow with the enthusiasm of releasing a new single; the chorus of possibilities awaits.",
        "May your days be filled with love that feels like your favorite song on repeat, each note more enchanting than the last.",
        "Channel your inner 'Fearless'; take risks, dance in the rain, and let your heart sing without a care in the world.",
        "Your journey is a red carpet; strut confidently, and let your authenticity be the trendsetting style of the day.",
        "Shake off the haters like confetti; your success deserves a celebration worthy of a stadium tour.",
        "May your life be a soundtrack of resilience, with each setback harmonizing into a triumphant chorus of success.",
    ];

    // Get a random index from the paragraphs array
    var randomIndex = Math.floor(Math.random() * tayq.length);

    // Create a new paragraph element
    var paragraphElement = document.createElement('pp');
    paragraphElement.textContent = tayq[randomIndex];

    // Append the paragraph to the container
    randomTextContainer.appendChild(paragraphElement);
}