'use strict';


//VARIABLES
const voicesSelectForm = document.querySelector('.js-select-voices');
const voiceSettings = document.querySelectorAll('.js-settings');
const textArea = document.querySelector('.js-text-area')
const speakBtn = document.querySelector('.js-speak');
const stopBtn = document.querySelector('.js-stop');


let browserVoices = [];

//Obtain object and set text value to what's written in the text area
const message = new SpeechSynthesisUtterance();
message.text = textArea.value;



//FUNCTIONS
function populateVoices() {
    //Loop over all browser voice options and add them to our select form
    browserVoices = this.getVoices();
    const voiceOptions = browserVoices
        .filter(voice => voice.lang.includes('en') || voice.lang.includes('es') || voice.lang.includes('fr') )
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join('');
    voicesSelectForm.innerHTML = voiceOptions;
}

function setVoiceType() {
    message.voice = browserVoices.find(voice => voice.name === this.value);
    toggleVoiceOptions();
}

function handleSettings(ev) {
    message[ev.target.name] = ev.target.value;
    toggleVoiceOptions();
}

function toggleVoiceOptions(startOver) {
    speechSynthesis.cancel();
    if(startOver){
        //The speechSynthesis takes the utterance and talks out whatever we have in the text attribute
        speechSynthesis.speak(message);
    }  
}



//EVENT LISTENERS
speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesSelectForm.addEventListener('change', setVoiceType);
for(let setting of voiceSettings){
    setting.addEventListener('change', handleSettings)
};
speakBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    toggleVoiceOptions(true);
});
stopBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    toggleVoiceOptions(false)
});
//stopBtn.addEventListener('click', toggleVoiceOptions.bind(null, false));

