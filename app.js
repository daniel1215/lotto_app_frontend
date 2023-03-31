document.getElementById('user-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;
  const apiUrl = 'https://yourusername.pythonanywhere.com/generate';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, dob }),
    });

    if (response.ok) {
      const data = await response.json();
      const numbersList = document.getElementById('numbers-list');
      const explanationsList = document.getElementById('explanations-list');

      numbersList.innerHTML = '';
      explanationsList.innerHTML = '';

      data.numbers.forEach((number) => {
        const listItem = document.createElement('li');
        listItem.textContent = number;
        numbersList.appendChild(listItem);
      });

      data.explanations.forEach((explanation) => {
  const listItem = document.createElement('li');
  listItem.textContent = explanation;
  explanationsList.appendChild(listItem);
});

document.getElementById('results').hidden = false;
} else {
  throw new Error('Error fetching data');
}
} catch (error) {
  console.error('Error:', error);
  alert('An error occurred while generating the numbers. Please try again later.');
}
});