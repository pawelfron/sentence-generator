const searchHandler = (input, list, wordList) => event => {
    event.preventDefault();

    list.innerHTML = '';

    const phrase = event.target.value;
    if (phrase == '')
        return;

    let resultsCount = 0;
    for (const [key, value] of wordList) {
        if (resultsCount >= 10) break;

        if (key.startsWith(phrase)) {
            const newItem = document.createElement('li');
            newItem.innerHTML += `${key} <span class="translation">- ${value}</span>`;
            newItem.addEventListener('mousedown', () => input.value = key);

            list.appendChild(newItem);
            resultsCount++;
        }
    }

    if (resultsCount == 0) {
        const newItem = document.createElement('li');
        newItem.innerHTML = '<span class="translation">nothing found</span>';
        list.appendChild(newItem);
    } 
}

const focusHandler = list => () => {
    list.classList.remove('disabled');
}

const blurHandler = list => () => {
    list.classList.add('disabled');
}

const subjectAdjectiveList = document.getElementById('subject-adjective-list');
const subjectAdjectiveInput = document.getElementById('subject-adjective');
subjectAdjectiveInput.addEventListener('input', searchHandler(subjectAdjectiveInput, subjectAdjectiveList, adjectives));
subjectAdjectiveInput.addEventListener('focus', focusHandler(subjectAdjectiveList));
subjectAdjectiveInput.addEventListener('blur', blurHandler(subjectAdjectiveList));

const subjectNounList = document.getElementById('subject-noun-list');
const subjectNounInput = document.getElementById('subject-noun');
subjectNounInput.addEventListener('input', searchHandler(subjectNounInput, subjectNounList, nouns));
subjectNounInput.addEventListener('focus', focusHandler(subjectNounList));
subjectNounInput.addEventListener('blur', blurHandler(subjectNounList));

const verbList = document.getElementById('verb-list');
const verbInput = document.getElementById('verb');
verbInput.addEventListener('input', searchHandler(verbInput, verbList, verbs));
verbInput.addEventListener('focus', focusHandler(verbList));
verbInput.addEventListener('blur', blurHandler(verbList));

const objectAdjectiveList = document.getElementById('object-adjective-list');
const objectAdjectiveInput = document.getElementById('object-adjective');
objectAdjectiveInput.addEventListener('input', searchHandler(objectAdjectiveInput, objectAdjectiveList, adjectives));
objectAdjectiveInput.addEventListener('focus', focusHandler(objectAdjectiveList));
objectAdjectiveInput.addEventListener('blur', blurHandler(objectAdjectiveList));

const objectNounList = document.getElementById('object-noun-list');
const objectNounInput = document.getElementById('object-noun');
objectNounInput.addEventListener('input', searchHandler(objectNounInput, objectNounList, nouns));
objectNounInput.addEventListener('focus', focusHandler(objectNounList));
objectNounInput.addEventListener('blur', blurHandler(objectNounList));

