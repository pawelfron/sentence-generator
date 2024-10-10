const handleNouns = type => event => {
    const pronoun = document.getElementById(type + '-pronoun');
    const addition = document.getElementById(type + '-addition');
    const adjective = document.getElementById(type + '-adjective');
    const noun = document.getElementById(type + '-noun');
    const number = document.getElementById(type + '-number');

    const value = event.currentTarget.getAttribute('value')
    if (value == 'pronoun') {
        pronoun.classList.remove('disabled');
        addition.classList.add('disabled');
        adjective.classList.add('disabled');
        noun.classList.add('disabled');
        number.classList.add('disabled');
    } else if (value == 'noun') {
        pronoun.classList.add('disabled');
        addition.classList.remove('disabled');
        adjective.classList.add('disabled');
        noun.classList.remove('disabled');
        number.classList.remove('disabled');
    } else if (value == 'nounAdjective') {
        pronoun.classList.add('disabled');
        addition.classList.remove('disabled');
        adjective.classList.remove('disabled');
        noun.classList.remove('disabled');
        number.classList.remove('disabled');
    }
};

document.getElementsByName('subjectType').forEach(x => x.addEventListener('click', handleNouns('subject')));

document.getElementsByName('objectType').forEach(x => x.addEventListener('click', handleNouns('object')));
