### **Prerequisites**
1. **Data Structures**: Familiarity with basic data structures such as lists, dictionaries, trees, etc.
2. **Finite Automata**: Understanding of automata theory and regular expressions.
3. **Probability Theory**: Knowledge of probability distributions, Bayes' theorem, and statistical methods.

---

### **Course Objectives**
- To develop an understanding of the challenges and solutions in NLP.
- To explore linguistic phenomena and model them using formal grammars.
- To implement NLP algorithms and tools using Python and NLTK.

---

### **Course Outcomes**
Upon completion of this course, students will be able to:
4. **Linguistic Sensitivity**: Demonstrate sensitivity to linguistic phenomena and model them using formal grammars.
5. **NLTK Proficiency**: Gain hands-on experience with the NLTK library for NLP tasks.
6. **String and Tree Manipulation**: Work on strings and tree structures for text analysis.
7. **Parameter Estimation**: Estimate parameters using supervised and unsupervised training methods.

---

### **List of Experiments**

#### **1. Text Preprocessing**
Write a Python program to perform the following tasks on text:
- **a) Tokenization**: Split text into individual words or tokens.
- **b) Stop Word Removal**: Remove common words (e.g., "the", "is") that do not contribute to meaning.

**Example Code Snippet**:
```python
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

text = "Natural Language Processing is fascinating."
tokens = word_tokenize(text)
stop_words = set(stopwords.words('english'))
filtered_tokens = [word for word in tokens if word.lower() not in stop_words]
print(filtered_tokens)
```

---

#### **2. Porter Stemmer Algorithm**
Write a Python program to implement the **Porter Stemmer algorithm** for stemming (reducing words to their root form).

**Example Code Snippet**:
```python
from nltk.stem import PorterStemmer

stemmer = PorterStemmer()
words = ["running", "runner", "runs"]
stemmed_words = [stemmer.stem(word) for word in words]
print(stemmed_words)
```

---

#### **3. Word Analysis and Generation**
Write a Python program for:
- **a) Word Analysis**: Analyze words using morphological features.
- **b) Word Generation**: Generate variations of a given word.

**Example Code Snippet**:
```python
from nltk.corpus import wordnet

# Word Analysis
synonyms = []
for syn in wordnet.synsets("happy"):
    for lemma in syn.lemmas():
        synonyms.append(lemma.name())
print(synonyms)

# Word Generation
from nltk.corpus import words
valid_words = [w for w in words.words() if w.startswith("run")]
print(valid_words)
```

---

#### **4. Word Sense Disambiguation (WSD)**
Create a sample list of at least 5 words with ambiguous senses (e.g., "bank") and write a Python program to implement WSD.

**Example Code Snippet**:
```python
from nltk.wsd import lesk
from nltk.tokenize import word_tokenize

sentence = "I went to the bank to deposit money."
ambiguous_word = "bank"
context = word_tokenize(sentence)
sense = lesk(context, ambiguous_word)
print(f"Sense: {sense}, Definition: {sense.definition()}")
```

---

#### **5. NLTK Toolkit - Stemming**
Install the NLTK toolkit and perform stemming using different stemmers (Porter, Snowball, Lancaster).

**Example Code Snippet**:
```python
from nltk.stem import PorterStemmer, SnowballStemmer, LancasterStemmer

stemmers = {
    "Porter": PorterStemmer(),
    "Snowball": SnowballStemmer("english"),
    "Lancaster": LancasterStemmer()
}

word = "happiness"
for name, stemmer in stemmers.items():
    print(f"{name}: {stemmer.stem(word)}")
```

---

#### **6. Part-of-Speech (POS) Tagging**
Create a sample list of at least 10 words and perform POS tagging. Find the POS for any given word.

**Example Code Snippet**:
```python
from nltk import pos_tag
from nltk.tokenize import word_tokenize

words = ["run", "jump", "happy", "bank", "deposit"]
tagged_words = pos_tag(words)
print(tagged_words)
```

---

#### **7. Morphological Analysis and N-Grams**
Write a Python program to:
- **a) Perform Morphological Analysis**: Analyze word structure using NLTK.
- **b) Generate N-Grams**: Create bigrams, trigrams, etc., from text.
- **c) Implement N-Gram Smoothing**: Handle zero-frequency issues.

**Example Code Snippet**:
```python
from nltk import ngrams
from nltk.lm.preprocessing import padded_everygram_pipeline
from nltk.lm import MLE

# Morphological Analysis
from nltk.corpus import wordnet
synsets = wordnet.synsets("bank")
print([syn.definition() for syn in synsets])

# N-Grams
text = "Natural Language Processing is fun".split()
bigrams = list(ngrams(text, 2))
print(bigrams)

# N-Gram Smoothing
train_data, vocab = padded_everygram_pipeline(2, [text])
model = MLE(2)
model.fit(train_data, vocab)
print(model.score("Language", ["Natural"]))
```

---

#### **8. Audio-Text Conversion**
Using the NLTK package, convert an audio file to text and vice versa.

**Example Code Snippet**:
```python
import speech_recognition as sr
from gtts import gTTS
import os

# Audio to Text
r = sr.Recognizer()
with sr.AudioFile("audio_file.wav") as source:
    audio_data = r.record(source)
    text = r.recognize_google(audio_data)
    print(text)

# Text to Audio
tts = gTTS(text="Hello, this is a test.")
tts.save("output.mp3")
os.system("start output.mp3")
```

---

### **Textbooks**
1. **Multilingual Natural Language Processing Applications** by Daniel M. Bikel and Imed Zitouni.
2. **O'Reilly Practical Natural Language Processing** by Sowmya Vajjala et al.
3. **Speech and Language Processing** by Daniel Jurafsky and James H. Martin.

---

### **Reference Books**
1. **Natural Language Processing with Python** by Steven Bird, Ewan Klein, and Edward Loper.
