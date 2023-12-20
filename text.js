const text = [
    "The quick brown fox jumps over the lazy dog, and 123 cats are watching! Isn't it fascinating? 456 elephants dance with joyful enthusiasm. Coding is an art; it requires creativity, logic, and the ability to solve complex problems. 789 lines of code await. Sunsets are proof that no matter what happens, every day can end beautifully. 1234 colors paint the sky. Exploration of distant galaxies, strange phenomena, and uncharted territories excites the curious mind. Ready for a cosmic journey? Raindrops fall gently, like whispers of nature, creating ripples in puddles and bringing life to the earth. Let the rain serenade you. The symphony of life includes laughter, tears, melodies, and the occasional 10,000 surprises. Embrace each note! A journey of a thousand miles begins with a single step, but it's the 789th step that tells the story. Keep walking, keep discovering. Lost in a maze of thoughts, dreams, and reflections, finding meaning becomes a perpetual quest. 987 doors await your exploration. Amidst the chaos of words, numbers, and punctuation, a story unfolds, weaving a tapestry of life's intricate patterns. What story will you write today?",
];


export function randomText() {
    return text[Math.floor(Math.random() * text.length)];
}

export function Words() {
    let randomTextResult = randomText();
    return randomTextResult.replace(/[^a-zA-Z\s]/g, '');
}