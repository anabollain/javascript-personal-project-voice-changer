# JS The Voice Changer

## Description

This exercise consists on using the `SpeechSynthesis` interface of the **Web Speech API**, the controller interface for the speech service according to the **MDN**. 

It can be used to retrieve information about the synthesis voices available on the user's device, to start and pause speech, and other commands besides. 

In this particular case, the application allows the user to choose a series of inputs and settings:

* Voice type (available in Spanish, English and French)
* Voice rate
* Voice pitch
* A text area to introduce the message we want to hear
* Speak button, to start reproducing the message
* Stop button, allowing the user to stop the reproduction

These values are used to update the attributes of the speech service. 

## Javascript Used

* SpeechSynthesis
* document.querySelector()
* array methods such as filter(), map(), join() or find()
* element.innerHTML
* event listeners such as voiceschanged, change or click

## Credits

* [30 Day Vanilla JS Coding Challenge](https://javascript30.com/)

