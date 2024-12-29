async function generateComic() {
    const prompt = document.getElementById('prompt').value;
    if (!prompt) {
        alert('Please enter a story idea!');
        return;
    }

    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_API_KEY`
        },
        body: JSON.stringify({
            prompt: `Create a comic based on this idea: ${prompt}`,
            max_tokens: 100,
            model: "text-davinci-003"
        })
    });

    const data = await response.json();
    const comic = data.choices[0].text;

    document.getElementById('output').innerText = comic;
}
