let petName = '';
let energy = 0;
let happiness = 0;
let actionCount = 0;

function promptUser() {
    if (actionCount === 0) {
        nameYourPet();
    } else if (actionCount < 7) {
        processAction(window.prompt('feed, pet, or walk?'));
    } else {
        console.log(petName + ' has ' + happiness + ' happiness and ' + energy + ' energy.')
    }
}

function nameYourPet() {
    petName = window.prompt('Name your pet.');

    if (!petName) {
        window.alert('Please enter a name for your pet.')
        nameYourPet();
    } else {
        nextAction();
    }
}

function nextAction() {
    actionCount++;
    promptUser();
}

function processAction(action) {
    switch(action) {
        case('feed'):
            energy += 2;
            nextAction();
            break;
        case('pet'):
            happiness++;
            nextAction();
            break;
        case('walk'):
            if (energy === 0) {
                window.alert('Not enough energy to enjoy a walk.')
                promptUser();
            } else {
                energy--;
                happiness += 2;
                nextAction();
            }
            break;
        default:
            window.alert('Invalid action entered. Please enter "feed", "walk", or "pet".')
            promptUser();
    }
}

promptUser();