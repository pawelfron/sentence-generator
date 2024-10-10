const form = document.getElementById('generatorForm');
const result = document.getElementById('result');

form.addEventListener('submit', event => {
    event.preventDefault();

    const subjectType = form.elements['subjectType'].value;
    const subjectPronoun = form.elements['subjectPronoun'].value;
    const subjectAddition = form.elements['subjectAddition'].value;
    const subjectAdjective = form.elements['subjectAdjective'].value.toLowerCase();
    const subjectNoun = form.elements['subjectNoun'].value.toLowerCase();
    const isSubjectPlural = form.elements['subjectNumber'].value == 'plural';
    const tense = form.elements['tense'].value;
    const negation = form.elements['negation'].value;
    const verb = form.elements['verb'].value.toLowerCase();
    const objectType = form.elements['objectType'].value;
    const objectPronoun = form.elements['objectPronoun'].value;
    const objectAddition = form.elements['objectAddition'].value;
    const objectAdjective = form.elements['objectAdjective'].value.toLowerCase();
    const objectNoun = form.elements['objectNoun'].value.toLowerCase();
    const isObjectPlural = form.elements['objectNumber'].value == 'plural';

    
    if (subjectType == 'nounAdjective' && subjectAdjective == '') {
        alert('Write an adjective for the subject!');
        return;
    }
    if (subjectType == 'nounAdjective' && !adjectives.has(subjectAdjective)) {
        alert(`There is no such adjective as ${subjectAdjective} in the dictionary!`);
        return;
    }
    if (subjectType != 'pronoun' && subjectNoun == '') {
        alert('Write a noun for the subject!');
        return;
    }
    if (subjectType != 'pronoun' && !nouns.has(subjectNoun)) {
        alert(`There is no such noun as ${subjectNoun} in the dictionary!`);
        return;
    }
    if (verb == '') {
        alert('Write a verb!');
        return;
    }
    if (!verbs.has(verb)) {
        alert(`There is no such verb as ${verb} in the dictionary!`);
        return;
    }
    if (objectType == 'nounAdjective' && (objectAdjective == '')) {
        alert('Write an adjective for the object!');
        return;
    }
    if (objectType == 'nounAdjective' && !adjectives.has(objectAdjective)) {
        alert(`There is no such adjective as ${objectAdjective} in the dictionary!`);
        return;
    }
    if (objectType != 'pronoun' && (objectNoun == '')) {
        alert('Write a noun for the object!');
        return;
    }
    if (objectType != 'pronoun' && !nouns.has(objectNoun)) {
        alert(`There is no such noun as ${objectNoun} in the dictionary!`);
        return;
    }

    let subject = '';
    if (subjectType == 'pronoun') {
        subject = subjectPronoun;
    } else {
        if (subjectAddition != 'none') {
            subject = subjectAddition;
            subject += ' ';
        }
        
        if (subjectType == 'nounAdjective') {
            subject += isSubjectPlural ? subjectAdjective + 'j' : subjectAdjective;
            subject += ' ';
        }

        subject += isSubjectPlural ? subjectNoun + 'j' : subjectNoun;
    }
    subject = subject[0].toUpperCase() + subject.slice(1);

    let conjugatedVerb = '';
    if (negation == 'negative')
        conjugatedVerb = 'ne ';

    conjugatedVerb += verb.slice(0, -1)
    if (tense == 'present')
        conjugatedVerb += 'as';
    else if (tense == 'past')
        conjugatedVerb += 'is';
    else if (tense == 'future')
        conjugatedVerb += 'os';
    else if (tense == 'conditional')
        conjugatedVerb += 'us';
    else if (tense == 'volitive')
        conjugatedVerb += 'u';

    let object = '';
    if (objectType == 'pronoun') {
        object = objectPronoun + 'n';
    } else {
        if (objectAddition == 'la') {
            object = objectAddition;
            object += ' ';
        } else if (objectAddition != 'none') {
            object = objectAddition + 'n';
            object += ' ';
        }
        
        if (objectType == 'nounAdjective') {
            object += (isObjectPlural ? objectAdjective + 'j' : objectAdjective) + 'n';
            object += ' ';
        }

        object += (isObjectPlural ? objectNoun + 'j' : objectNoun) + 'n';
    }

    result.innerHTML = `${subject} ${conjugatedVerb} ${object}.`;
});