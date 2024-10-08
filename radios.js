const subjectTypes = document.getElementsByName('subjectType');
for (let subjectRadio of subjectTypes) {
    subjectRadio.addEventListener('click', event => {
        const pronoun = document.getElementById('subject-pronoun');
        const addition = document.getElementById('subject-addition');
        const adjective = document.getElementById('subject-adjective');
        const noun = document.getElementById('subject-noun');

        const value = event.currentTarget.getAttribute('value')
        if (value == 'pronoun') {
            if (pronoun.classList.contains('disabled')) pronoun.classList.remove('disabled');
            if (!addition.classList.contains('disabled')) addition.classList.add('disabled');
            if (!adjective.classList.contains('disabled')) adjective.classList.add('disabled')
            if (!noun.classList.contains('disabled')) noun.classList.add('disabled')
        } else if (value == 'noun') {
            if (!pronoun.classList.contains('disabled')) pronoun.classList.add('disabled');
            if (addition.classList.contains('disabled')) addition.classList.remove('disabled');
            if (!adjective.classList.contains('disabled')) adjective.classList.add('disabled')
            if (noun.classList.contains('disabled')) noun.classList.remove('disabled')
        } else if (value == 'nounAdjective') {
            if (!pronoun.classList.contains('disabled')) pronoun.classList.add('disabled');
            if (addition.classList.contains('disabled')) addition.classList.remove('disabled');
            if (adjective.classList.contains('disabled')) adjective.classList.remove('disabled')
            if (noun.classList.contains('disabled')) noun.classList.remove('disabled')
        }
    });
}

const objectTypes = document.getElementsByName('objectType');
for (let objectRadio of objectTypes) {
    objectRadio.addEventListener('click', event => {
        const pronoun = document.getElementById('object-pronoun');
        const addition = document.getElementById('object-addition');
        const adjective = document.getElementById('object-adjective');
        const noun = document.getElementById('object-noun');

        const value = event.currentTarget.getAttribute('value')
        if (value == 'pronoun') {
            if (pronoun.classList.contains('disabled')) pronoun.classList.remove('disabled');
            if (!addition.classList.contains('disabled')) addition.classList.add('disabled');
            if (!adjective.classList.contains('disabled')) adjective.classList.add('disabled')
            if (!noun.classList.contains('disabled')) noun.classList.add('disabled')
        } else if (value == 'noun') {
            if (!pronoun.classList.contains('disabled')) pronoun.classList.add('disabled');
            if (addition.classList.contains('disabled')) addition.classList.remove('disabled');
            if (!adjective.classList.contains('disabled')) adjective.classList.add('disabled')
            if (noun.classList.contains('disabled')) noun.classList.remove('disabled')
        } else if (value == 'nounAdjective') {
            if (!pronoun.classList.contains('disabled')) pronoun.classList.add('disabled');
            if (addition.classList.contains('disabled')) addition.classList.remove('disabled');
            if (adjective.classList.contains('disabled')) adjective.classList.remove('disabled')
            if (noun.classList.contains('disabled')) noun.classList.remove('disabled')
        }
    });
}
