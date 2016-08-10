import React from "react";
import DSpace from "components/dspace";
import Dash from "components/dash";

export default {
  "1": {
    Title: () => (<span>Word Sounds</span>),
    Text: () => (
      <span>Lessons 1<Dash/>3 teach children that words are made up of different sounds by teaching them to identify beginning and ending sounds in words.&nbsp;Not all letter sounds will be covered in these lessons, but they will be covered in later lessons.<DSpace/>Lessons 4 and 5 teach children to identify words that rhyme.<DSpace/>Lessons 6 and 7 provide children with all the sounds in a word and then ask them to identify the word from its parts.</span>
    ),
    levelRange: [1, 7]
  },
  "2": {
    Title: () => (<span>Short Vowel Sounds</span>),
    Text: () => (
      <span>Lessons 8<Dash/>14 teach children to identify the short vowel sounds.<DSpace/>Lessons 15<Dash/>20 teach children which letter makes each short vowel sound.</span>
    ),
    levelRange: [8, 20]
  },
  "3": {
    Title: () => (<span style={{fontSize: "0.6em"}}>Consonant-Vowel Coarticulation</span>),
    Text: () => (
      <span>These lessons teach children the influence that the short vowel sound has on the consonants b<Dash/>f.<DSpace/>Children also learn that these consonant<Dash/>vowel coarticulations are the beginning sounds used to form words.</span>
    ),
    levelRange: [21, 43]
  }
};
