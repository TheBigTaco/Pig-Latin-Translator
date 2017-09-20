# Adam & Michael's Pig Latinizer


### Overview

This project takes an inputted word, sentence, or phrase and outputs the same statement in Pig Latin. For instance, if the user entered _Hello world_, the Pig Latinizer would return _elloHay orldway_. The grammatical rules for Pig Latin are observed as described by Epicodus' lesson plan, but might vary slightly from other rulesets found online (or at elementary schools across the United States.)


### Installation Instructions
To install, download from  https://github.com/arringtonm/piglatinizer or open up your shell program of choice and type in the following instructions:

``git clone http://github.com/arringtonm/piglatinizer``

Please note that this project requires JQuery and Bootstrap libraries which are externally linked and **proper funcationality of Pig Latinizer requires an active internet connection.** Upon successful installation, source codes can be viewed and modified with the text editor of your choice.

### Code Description

In accordance with the grammatical rules of Pig Latin, this translating tool finds the first cluster of consonants and shifts them to the end of the word, appending an _ay_ sound. In the case of words starting with vowels, it appends _way_ to the otherwise unchanged word (it also treats the _u_ in word starting with _qu_ as part of the consonant cluster.)

The translator is able to parse out digits, but chooses to avoid them and instead instructs the user to try another input.

### Specs

| Behavior       | Input           | Output  |
| ------------- |-------------| -----|
| Ignores non-alphabetical characters | 3 | Orrysay, Iway on'tday orkway ithway umbersnay! |
| Adds "way" to words starting with vowels   | Adam      |   Adamway |
| Moves first cluster of consonants to end and add "ay" | Michael  |  ichaelMay |
| Treats "qu" as a consonant cluster | Quack | ackQuay |


### Known Bugs

* Punctuation is not accounted for specially; it is treated like any other non-vowel character. For instance:
_Hello, user!_ will return as _ello,Hay user!way_.
* As noted in the code description, Pig Latinizer references external libraries and requires and internet connection (this is not strictly a bug, but can prevent the expected results from displaying properly.)


### Copyright

This project is licensed under the MIT License. If you can think of a way to monetize this, please let the authors know.
