let taskCompleteState = false;

const QuestComplete = (checkbox, ExpGain) => {
    let taskCompleted = document.getElementById("TaskColumn");
    taskCompleteState = true;

    // When Checkbox is clicked, style text-decoration to line through and set the color to gray.
        if (checkbox.checked && taskCompleteState) {
            taskCompleted.style.textDecoration = "line-through";
            taskCompleted.style.color = "gray";
            
        } else {
            taskCompleteState = false;
            taskCompleted.style.textDecoration = "none";
            taskCompleted.style.color = "white";
        }

    
    // Add 2 exps to the exp bar in the status page.
    // Task will be reseted to non-check after 24 hours.
}

const LevelUp = () => {
    // Inner bar width starts at 5% (0)
    // % Width gain = current exp / Exp required to level Up * 100
    // Normal level-up = 1 available points, every level % 5 = 0 --> +2 available points, every level % 10 = 0 --> +3 available points
}

const PenaltyZone = () => {
    // Send user into penalty zone for every unchecked task after 12:00 AM.
    // Will only allow the user to return to Quest Info or Status after complete the Penalty.
    // Penalty = Watch Kai Cenat Video for 1 hour.
    // Fatigue Point = 0 - 1 hour penalty; 1 - 2 hours penalty; 2 - 3 hours penalty, etc...
    // After the user completed the penalty, they can continue their quest info.
}

const GoalSetting = () => {
    // Prompt User input in with a question "What is your goal for 2025?"
    // After prompting, set it in the quest info after ther Daily quest
    // Then the user will set 3 other variables for the + Let user have choice to upgrade or degrade the non-negotiable.
    // Inser progression rate: how many hours/minutes/reps will be increased in each variables.
}