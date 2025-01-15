let ExpToLevelUp = 10;
let currentExp = 0;
let level = 0;
let FatiguePoint = 0;
const title = ['E-Rank', 'D-Rank', 'C-Rank', 'B-Rank', 'A-Rank', 'S-Rank', 'Nightfang Hunter', 'Apex Predator', 'Mythic Huntsman', 'G.O.D'];

const QuestComplete = () => {
    const [TaskOne, TaskTwo, TaskThree, TaskFour] = document.querySelectorAll("#MainTask p");
    const [RepsOne, RepsTwo, RepsThree, RepsFour] = document.querySelectorAll("#RepsTask p");
    const [Cb1, Cb2, Cb3, Cb4] = document.querySelectorAll('.checkbox-column input[type="checkbox"]');
    const checkboxes = [Cb1, Cb2, Cb3, Cb4];
    const tasks = [TaskOne, TaskTwo, TaskThree, TaskFour];
    const reps = [RepsOne, RepsTwo, RepsThree, RepsFour];

    const repsValue = (i) => {
        const repsData = ['100', '100', '100', '10', '1'];
        return repsData[i];
    }

    checkboxes.forEach((cb, i) => {
        cb.removeEventListener('change', cb.listener);

        cb.listener = () => {
            const task = tasks[i];
            const rep = reps[i];
            
            if (cb.checked) {
                task.style.color = rep.style.color = 'gray';
                task.style.textDecoration = rep.style.textDecoration = 'line-through';
                currentExp += 2;

                if (rep.textContent.includes('[0/')) {
                    rep.textContent = rep.textContent.replace('[0/', `[${repsValue(i)}/`);
                }

            } else {
                task.style.color = rep.style.color = 'white';
                task.style.textDecoration = rep.style.textDecoration = 'none';
                rep.textContent = rep.textContent.replace(`[${repsValue(i)}/`, '[0/');
                if (currentExp == 0) {
                    currentExp = 0;
                } else {
                    currentExp -= 2;
                }
            }

            LevelSystem();
        };

        cb.addEventListener('change', cb.listener);
    });
};

const LevelSystem = () => {
    while (currentExp >= ExpToLevelUp) {
        currentExp -= ExpToLevelUp;  
        level++;
        ExpToLevelUp += 10;  
    }

    const progressBarWidth = (currentExp / ExpToLevelUp) * 100;
    document.getElementById('innerExpBar').style.width = progressBarWidth + "%";
    document.getElementById('ExpInfo').textContent = `${currentExp} / ${ExpToLevelUp} EXP`;
};

const GoalSetting = () => {
    // Prompt User input in with a question "What is your goal for 2025?"   
    window.onload = function() {
       
    }
    // After prompting, set it in the quest info after ther Daily quest
    // Then the user will set 3 other variables for the + Let user have choice to upgrade or degrade the non-negotiable.
    // Inser progression rate: how many hours/minutes/reps will be increased in each variables.
}

const PenaltyZone = () => {
    // Send user into penalty zone for every unchecked task after 12:00 AM.
    // Will only allow the user to return to Quest Info or Status after complete the Penalty.
    // Penalty = Watch Kai Cenat Video for 1 hour.
    // Fatigue Point = 0 - 1 hour penalty; 1 - 2 hours penalty; 2 - 3 hours penalty, etc...
    // After the user completed the penalty, they can continue their quest info.
}
