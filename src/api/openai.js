// Inside ../api/openai.js

const API_ENDPOINT = "https://api.openai.com/v1/engines/text-davinci-002/completions"
const API_KEY = "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"; 

async function fetchCounterArgument(debateInput) {
    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: `The statement given is: "${debateInput}". As a counter debater give a detailed counter debate of at least 500 tokens, I would argue that:`,
                max_tokens: 500,
            })
        });

        const data = await response.json();

        console.log(data);

        if (data && data.choices && data.choices.length > 0) {
            return data.choices[0].text.trim();
        } else {
            console.error("Unexpected API response:", data);
            return "Error generating counterargument. Please try again.";
        }
    } catch (error) {
        console.error("Error fetching counter argument:", error);
        return "Error generating counterargument. Please check your network connection and try again.";
    }
}

export { fetchCounterArgument };
