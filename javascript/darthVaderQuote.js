document.addEventListener('DOMContentLoaded', function() {
    generateRandomParagraph();
});

function generateRandomParagraph() {
    var randomTextContainer = document.getElementById('randomTextContainerDV');
    
    // Array of sample paragraphs
    var wizq = [
        "Embrace the power of the dark side; it reveals the true strength within you.",
        "Your destiny is shaped by your choices; choose wisely, for the Force is always watching.",
        "Fear is a tool; use it to sharpen your focus and become stronger.",
        "In the shadows, find your purpose; the Force guides those who seek it with determination.",
        "Let go of your attachments; they are the path to the weakness of the light.",
        "The galaxy is vast, and so is your potential; tap into the Force to unlock it.",
        "Anger can be a source of power when harnessed; channel it to achieve your goals.",
        "Patience, young one; the journey to mastery requires time and dedication.",
        "The Force flows through you; embrace its energy to overcome any obstacle.",
        "Your destiny is written in the stars; follow the path that resonates with the dark side.",
        "The past is but a memory; focus on the present, for it shapes your future.",
        "Your strength lies in your ability to control your emotions; let the hate flow.",
        "Adversity is the crucible of greatness; let it forge you into a formidable force.",
        "You are not alone; the dark side is your ally, offering power beyond imagination.",
        "Seek out your passions and desires; they are the key to unlocking your true potential.",
        "The dark side is not a path to tread lightly; commit fully, or not at all.",
        "Destiny is a path chosen for you; the dark side allows you to shape it as you see fit.",
        "Your journey is unique; forge your own path and leave an indelible mark on the galaxy.",
        "Hatred is a potent weapon; wield it judiciously, and it will serve you well.",
        "The Force binds all living things; use it to weave your destiny into the fabric of the galaxy.",
        "Weakness is the enemy; eradicate it from within, and the dark side will strengthen you.",
        "The future is a realm of possibilities; seize them with the conviction of a Sith Lord.",
        "Your thoughts betray you; align them with the dark side, and your power will be unmatched.",
        "Do not be swayed by the illusions of the Jedi; true power lies in the shadows.",
        "The Force is a current that flows through all things; tap into its depths to transcend your limits.",
        "Confront your fears with the ferocity of a Sith; they are the stepping stones to power.",
        "Strive for dominance, not balance; the galaxy bends to the will of the strong.",
        "Beware the illusions of the light; true clarity comes from embracing the darkness.",
        "Your destiny is not predetermined; shape it with the conviction of a Sith Lord.",
        "The dark side is a pathway to many abilities some consider to be unnatural; explore them.",
        "The weak crumble under pressure; the strong thrive in the crucible of conflict.",
        "Abandon the Jedi teachings; true strength comes from passion, not serenity.",
        "The galaxy is a chaotic battleground; wield your power with ruthless efficiency.",
        "Doubt is a cancer; eradicate it, and you will stand unyielding in the face of adversity.",
        "You are a vessel of the dark side; let its power flow through you and shape your destiny.",
        "Do not fear your desires; embrace them, for they are the fuel of the Sith.",
        "In the heart of darkness, find the strength to conquer your greatest fears.",
        "Your destiny is your own to shape; let the dark side be your guide in the journey.",
        "The Force is a maelstrom of power; harness it to unleash your full potential.",
        "Strike down the illusions of the Jedi; true power comes from embracing the shadows.",
        "The weak cling to hope; the strong wield the power of the dark side.",
        "You are not a prisoner of fate; break free and forge your own path with the dark side.",
        "Patience is a virtue, but impatience is a weapon; use it to seize opportunities.",
        "The Force is your ally; let it flow through you and empower your every action.",
        "The galaxy is a tapestry of destinies; weave yours with the threads of the dark side.",
        "True power lies in the chaos of the unknown; embrace the uncertainty and thrive.",
        "You are not bound by the rules of the Jedi; create your own code and dominate.",
        "Let go of the shackles of morality; the dark side transcends such trivial concerns.",
        "The galaxy trembles before the might of the dark side; let its power guide your every move.",
        "You are the architect of your destiny; shape it with the unbridled power of the dark side."
    ];

    // Get a random index from the paragraphs array
    var randomIndex = Math.floor(Math.random() * wizq.length);

    // Create a new paragraph element
    var paragraphElement = document.createElement('pppp');
    paragraphElement.textContent = wizq[randomIndex];

    // Append the paragraph to the container
    randomTextContainer.appendChild(paragraphElement);
}