import React from "react";
import DSpace from "components/dspace";
import Dash from "components/dash";

const smallTitleStyle = {fontSize: "0.7em"};

export default {
  "1": {
    id: 1,
    Title: () => (<span>Word Sounds</span>),
    Text: () => (
      <span>Lessons 1<Dash/>3 teach children that words are made up of different sounds by teaching them to identify beginning and ending sounds in words.&nbsp;Not all letter sounds will be covered in these lessons, but they will be covered in later lessons.<DSpace/>Lessons 4 and 5 teach children to identify words that rhyme.<DSpace/>Lessons 6 and 7 provide children with all the sounds in a word and then ask them to identify the word from its parts.</span>
    ),
    levelRange: [1, 7]
  },
  "2": {
    id: 2,
    Title: () => (<span>Short Vowel Sounds</span>),
    Text: () => (
      <span>Lessons 8<Dash/>14 teach children to identify the short vowel sounds.<DSpace/>Lessons 15<Dash/>20 teach children which letter makes each short vowel sound.</span>
    ),
    levelRange: [8, 20]
  },
  "3": {
    id: 3,
    Title: () => (<span style={smallTitleStyle}>Consonant-Vowel Coarticulation</span>),
    Text: () => (
      <span>These lessons teach children the influence that the short vowel sound has on the consonants b<Dash/>f.<DSpace/>Children also learn that these consonant<Dash/>vowel coarticulations are the beginning sounds used to form words.</span>
    ),
    levelRange: [21, 43]
  },
  "4": {
    id: 4,
    Title: () => (<span style={smallTitleStyle}>Consonant-Vowel Coarticulation</span>),
    Text: () => (
      <span>These lessons teach children the influence that the short vowel sound has on the consonants g<Dash/>k.<DSpace/>Children also learn that these consonant-vowel coarticulations are the beginning sounds used to form words.</span>
    ),
    levelRange: [44, 63]
  },
  "5": {
    id: 5,
    Title: () => (<span style={smallTitleStyle}>Consonant-Vowel Coarticulation</span>),
    Text: () => (
      <span>These lessons teach children the influence that the short vowel sound has on the consonants l<Dash/>p.<DSpace/>Children also learn that these consonant-vowel coarticulations are the beginning sounds used to form words.</span>
    ),
    levelRange: [64, 88]
  },
  "6": {
    id: 6,
    Title: () => (<span style={smallTitleStyle}>Consonant-Vowel Coarticulation</span>),
    Text: () => (
      <span>These lessons teach children the influence that the short vowel sound has on the consonants q<Dash/>t.<DSpace/>Children also learn that these consonant-vowel coarticulations are the beginning sounds used to form words.</span>
    ),
    levelRange: [89, 108]
  },
  "7": {
    id: 7,
    Title: () => (<span style={smallTitleStyle}>Consonant-Vowel Coarticulation</span>),
    Text: () => (
      <span>These lessons teach children the influence that the short vowel sound has on the consonants v<Dash/>z.<DSpace/>Children also learn that these consonant-vowel coarticulations are the beginning sounds used to form words.</span>
    ),
    levelRange: [109, 122]
  },
  "8": {
    id: 8,
    Title: () => (<span>Reading First Words</span>),
    Text: () => (
      <span>Lesson 123 reviews ending consonant sounds, and lesson 124 reviews middle vowel sounds.<DSpace/>In lesson 125 children apply consonant<Dash/>vowel coarticulation with an ending sound to read their first words.<DSpace/>Lesson 126 has children read two words to identify the picture described by the words.</span>
    ),
    levelRange: [123, 126]
  }
};
