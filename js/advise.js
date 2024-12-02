//variable declaration 
const adviceId = document.getElementById('advice-id');
const advice = document.getElementById('advice');
const dice = document.getElementById('dice');

//Function to fetch data
async function fetchAdvice() {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");

        if (!response.ok) throw new Error('Failed to fetch data');
        
        const adviceData = await response.json(); 
        console.log(adviceData);

        adviceId.innerHTML = adviceData.slip.id;

        advice.innerHTML = adviceData.slip.advice;

    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

fetchAdvice();

//Added an onclick events on the dice that fetch advice when clicked 
dice.addEventListener('click', fetchAdvice);
