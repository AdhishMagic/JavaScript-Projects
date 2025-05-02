document.getElementById('countBtn').addEventListener('click', function() {
    const text = document.getElementById('inputText').value;
    const vowelCount = countVowels(text);
    document.getElementById('result').innerText = `Number of vowels: ${vowelCount}`;
});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('inputText').value = '';
    document.getElementById('result').innerText = '';
});

document.getElementById('copyBtn').addEventListener('click', function() {
    const resultText = document.getElementById('result').innerText;
    navigator.clipboard.writeText(resultText).then(() => {
        alert('Result copied to clipboard!');
    });
});

function countVowels(text) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of text) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}