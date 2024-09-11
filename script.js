document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            handleChoice(choice.dataset.option);
        });
    });

    const audio = document.getElementById('background-music');
    audio.volume = 0.2;
    audio.play();
});

function handleChoice(choice) {
    const storySection = document.getElementById('story');
    const choicesSection = document.getElementById('choices');

    if (choice === 'forest') {
        storySection.innerHTML = '<p>As you walk down the shadowy path, the whispers grow louder, speaking in an ancient language. The trees shift around you, and you find yourself in front of a mystical spirit, asking for your help to break a curse.</p>';
        choicesSection.innerHTML = `
            <div class="choice" data-option="help-spirit">
                <img src="assets/help-the-spirit.png" alt="Help the Spirit">
                <p>Help the Spirit</p>
            </div>
            <div class="choice" data-option="run-away">
                <img src="assets/run-away.png" alt="Run Away">
                <p>Run Away</p>
            </div>
        `;
    } else if (choice === 'cave') {
        storySection.innerHTML = '<p>Inside the glowing cave, you find a beautiful underground lake. At the center of the lake, a floating crystal emits the glow. As you approach it, a voice in your head tells you that the crystal holds immense power.</p>';
        choicesSection.innerHTML = `
            <div class="choice" data-option="take-crystal">
                <img src="assets/take-crystal.png" alt="Take the Crystal">
                <p>Take the Crystal</p>
            </div>
            <div class="choice" data-option="leave-crystal">
                <img src="assets/leave-crystal.png" alt="Leave the Crystal">
                <p>Leave the Crystal</p>
            </div>
        `;
    } else if (choice === 'help-spirit') {
        storySection.innerHTML = '<p>The spirit smiles and leads you deeper into the forest, where you discover an ancient temple. Inside, you must solve a puzzle to break the curse.</p>';
        choicesSection.innerHTML = `
            <div class="choice" data-option="solve-puzzle">
                <img src="assets/puzzle.png" alt="Solve the Puzzle">
                <p>Solve the Puzzle</p>
            </div>
            <div class="choice" data-option="leave-temple">
                <img src="assets/leave-temple.png" alt="Leave the Temple">
                <p>Leave the Temple</p>
            </div>
        `;
    } else if (choice === 'run-away') {
        storySection.innerHTML = '<p>You run through the forest, but the whispers follow you. As you escape, you stumble upon a hidden portal leading to another world.</p>';
        choicesSection.innerHTML = `
            <div class="choice" data-option="enter-portal">
                <img src="assets/portal.png" alt="Enter the Portal">
                <p>Enter the Portal</p>
            </div>
            <div class="choice" data-option="avoid-portal">
                <img src="assets/avoid-portal.png" alt="Avoid the Portal">
                <p>Avoid the Portal</p>
            </div>
        `;
    } else if (choice === 'take-crystal') {
        storySection.innerHTML = '<p>You take the crystal, and its power surges through you. But with power comes responsibility – you must now use it to restore balance to the land or risk being consumed by its energy.</p>';
        choicesSection.innerHTML = `
            <div class="choice" data-option="restore-balance">
                <img src="assets/restore-balance.png" alt="Restore Balance">
                <p>Restore Balance</p>
            </div>
            <div class="choice" data-option="keep-power">
                <img src="assets/keep-power.png" alt="Keep the Power">
                <p>Keep the Power</p>
            </div>
        `;
    } else if (choice === 'leave-crystal') {
        storySection.innerHTML = '<p>You decide to leave the crystal and walk away. However, as you exit the cave, you notice a faint light following you. The crystal has chosen you, whether you want it or not.</p>';
        choicesSection.innerHTML = `
            <div class="choice" data-option="accept-fate">
                <img src="assets/accept-fate.png" alt="Accept Fate">
                <p>Accept Fate</p>
            </div>
            <div class="choice" data-option="reject-fate">
                <img src="assets/reject-fate.png" alt="Reject Fate">
                <p>Reject Fate</p>
            </div>
        `;
    }

    const newChoices = document.querySelectorAll('.choice');
    newChoices.forEach(choice => {
        choice.addEventListener('click', () => {
            handleChoice(choice.dataset.option);
        });
    });
}
