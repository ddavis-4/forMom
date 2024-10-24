document.addEventListener('DOMContentLoaded', function() {
    generateRandomParagraph();
});

function generateRandomParagraph() {
    var randomTextContainer = document.getElementById('randomTextContainerG');
    
    // Array of sample paragraphs
    var wizq = [
        "A wizard's wisdom is forged in the fires of countless adventures.",
        "Not all who wander are lost, but sometimes a good map wouldn't hurt.",
        "Fly, you fools, but watch out for low door frames.",
        "In the darkest tunnels, even the smallest glow can banish shadows.",
        "Do not meddle in the affairs of wizards, for they are subtle and quick to anger, especially before their morning coffee.",
        "You shall not pass... without offering a cup of tea first.",
        "The road goes ever on, but sometimes it's okay to take a shortcut.",
        "Speak friend and enter, or just knock loudly. Either works.",
        "A wizard arrives precisely when he means to, and fashionably late is still precisely.",
        "True courage is not knowing when to take a stand but when to sit and have a second breakfast.",
        "I'm not late; I'm just on Gandalf time.",
        "Even the smallest act of kindness can cast a mighty light in the darkest places.",
        "There are far, far better things ahead than any we leave behind.",
        "In the chaos of life, find a quiet corner to enjoy a good pipe and ponder.",
        "The wise speak only of what they know, and a good tale deserves a second telling.",
        "May your path be as smooth as a hobbit's second breakfast.",
        "A wizard's hat is not just for show; it's where they store their best-kept secrets.",
        "It's not the size of the staff that matters; it's the magic it wields.",
        "Even the longest journey begins with a single step, or a teleportation spell if you're a wizard.",
        "When in doubt, consult a map, ask a ranger, or simply follow your instincts.",
        "A good wizard never reveals all his tricks, except during fireworks displays.",
        "The wise do not fear change; they fear the lack of snacks on the journey.",
        "Sometimes the greatest magic is simply the courage to try.",
        "A wizard is never too old for a bit of mischief or a good prank.",
        "A well-timed 'You shall not pass!' can solve many problems.",
        "Not all treasure is silver and gold; sometimes, it's a cozy hobbit hole and a warm fire.",
        "Beware of wizards bearing gifts, especially if it's a new enchanted staff.",
        "Life is like a quest; the best parts are the unexpected side quests.",
        "Speak softly and carry a big staff, or a sword if you prefer.",
        "It's not the destination that matters, but the company you keep along the way.",
        "Even the mightiest wizards need a good nap and a cup of hot tea.",
        "To find wisdom, one must first misplace it and then embark on a grand adventure to retrieve it.",
        "The true magic lies in the friendships forged on the journey, and perhaps a well-timed fireworks display.",
        "Fear not the darkness, for a wizard always carries a spare staff and a bag of glowing mushrooms.",
        "A wizard's beard is a roadmap of the paths he has traveled and the snacks he has enjoyed along the way.",
        "In the language of wizards, 'soon' can mean anything from tomorrow to next century.",
        "To those who can't see the magic, a good staff might look like a walking stick.",
        "When in doubt, consult the stars, a trusted eagle, or a wise old tree.",
        "A wizard's hat is the perfect accessory for any occasion, especially a wizardly one.",
        "The best spells are the ones that bring joy and laughter to the world.",
        "It's not the power of the spell but the intention behind it that truly matters.",
        "A wizard is never too busy to stop and admire the beauty of a well-crafted map.",
        "To defeat the darkness, one must first find the light switch or cast a Lumos spell.",
        "Sometimes the greatest adventures begin with a wrong turn and a detour through the Shire.",
        "Wisdom is not found in the echoes of the past but in the footsteps of the present.",
        "Speak softly and carry a staff made of the finest wood, for a well-crafted staff is a wizard's best friend.",
        "The most powerful magic is the ability to turn a mundane day into an extraordinary one.",
        "A true wizard never reveals all the ingredients in his favorite potion.",
        "The road may be long, but the journey is made lighter with good company and a sturdy pair of shoes.",
        "A wizard's robe is not just for style; it's where they hide their most essential snacks.",
        "Do not be hasty in judgment, especially when dealing with hobbits and their second breakfasts.",
        "The best advice often comes from unexpected sources, like a talking tree or a wise old fox.",
        "A wizard's staff is like a good pun; it may not impress everyone, but those who appreciate it, truly appreciate it.",
        "Never underestimate the power of a well-timed Gandalf quote.",
        "The most magical moments are the ones shared with friends around a crackling fire.",
        "A good wizard always has a contingency plan and a backup staff, just in case.",
        "To find the answers, one must first ask the right questions, preferably in Elvish.",
        "In the quest for wisdom, a wizard must be prepared for unexpected detours, dragon encounters, and tea breaks.",
        "A wizard's hat is a crown of knowledge, earned through years of study, exploration, and the occasional dance with Balrogs.",
        "Even the smallest spark of curiosity can ignite the most magnificent fireworks in the mind of a wizard.",
        "A wizard's greatest spell is the one that turns a frown into a smile.",
        "The real magic happens when you believe in the extraordinary within the ordinary.",
        "In the world of wizards, every book is a portal to another realm of knowledge.",
        "A wise wizard knows that every journey begins with a single step and a well-packed spellbook.",
        "To unlock the secrets of the universe, a wizard must first master the art of untangling headphone wires.",
        "The most potent potions are brewed with equal parts courage, wisdom, and a dash of whimsy.",
        "A wizard's laughter is the secret ingredient in the elixir of eternal joy.",
        "Wise is the wizard who knows that true power lies not in spells but in the bonds of friendship.",
        "To defeat a dragon, one must first learn to appreciate the beauty of its scales.",
        "A wizard's wand is not just a tool; it's an extension of their magical essence and occasional back scratcher.",
        "The best spells are the ones that create a symphony of colors in the night sky.",
        "A wizard's robe is the armor of the mind, protecting against the skeptics and naysayers.",
        "In the realm of magic, every day is a chance for a fresh start and a new enchantment.",
        "To become a true master of magic, one must first conquer the ancient art of parallel parking.",
        "A wizard's hat is the crown of dreams, worn proudly atop a head filled with endless possibilities."
    ];

    // Get a random index from the paragraphs array
    var randomIndex = Math.floor(Math.random() * wizq.length);

    // Create a new paragraph element
    var paragraphElement = document.createElement('p');
    paragraphElement.textContent = wizq[randomIndex];

    // Append the paragraph to the container
    randomTextContainer.appendChild(paragraphElement);
}