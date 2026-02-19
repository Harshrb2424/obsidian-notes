#  UNIT I – Structure of Words and Documents

## 1. Structure of Words and Documents

### Definition

The **structure of words and documents** refers to how words are formed and how documents are organized in a hierarchical or logical manner.

### Components

- **Structure of Words**:  
   Involves **morphology**—the study of how words are built from **morphemes** (roots, prefixes, suffixes).  
   Example: _unbelievable_ = _un-_ (prefix) + _believe_ (root) + _-able_ (suffix)
- **Structure of Documents**:  
   Deals with the **layout, sections, and logical flow** of documents (e.g., title, abstract, body, conclusion).  
   It also involves identifying elements like headings, paragraphs, or metadata.

### Purpose

- Improve **information extraction**, **text segmentation**, **summarization**, and **search relevance**.
- Enable machines to **understand and organize** text more efficiently.

### 1. Finding the Structure of Words

Understanding the structure of words is essential for many NLP tasks like tokenization, lemmatization, stemming, spell-checking, machine translation, etc.

---

### a. Words and Their Components

Words can be broken down into **morphemes**, which are the smallest meaning-bearing units in a language.

- **Morphemes**:
  - **Root/Base**: Core meaning (e.g., “walk”)
  - **Affixes**:
    - **Prefixes** (e.g., **re**-write)
    - **Suffixes** (e.g., write-**ing**)
  - **Inflectional Morphemes**: Change tense/number/gender (walk → walked)
  - **Derivational Morphemes**: Create new words or change word class (happy → happiness)

---

### b. Issues and Challenges

- **Ambiguity**: Same word form with multiple meanings (e.g., “bark” – dog vs. tree)
- **Irregular Forms**: Words that don’t follow typical rules (e.g., go → went)
- **Compound Words**: Meaning changes when words combine (e.g., “blackboard” ≠ “black” + “board”)
- **Unknown Words**: New, rare, or domain-specific terms
- **Word Variants**: Handling plural/singular, verb tenses, etc.

---

### c. Morphological Models

Morphological analysis helps break words into morphemes and understand their function.

#### Rule-Based Models

- Use hand-crafted rules and dictionaries
- E.g., Porter Stemmer, Snowball Stemmer

#### Finite-State Morphology

- Uses Finite State Transducers (FSTs) to model word formation
- Efficient for both analysis and generation

#### Statistical Models

- Use corpora to learn morphological patterns
- E.g., Hidden Markov Models (HMMs), Conditional Random Fields (CRFs)

#### Neural Models

- Learn patterns using deep learning (e.g., seq2seq models for lemmatization)
- Better at handling irregularities and unseen data

---

## Finding the Structure of Documents

Understanding the structure of documents is essential for organizing, extracting, and interpreting information accurately in NLP applications like summarization, search engines, question answering, and document classification.

---

### 1. Introduction to Document Structure

A **document** is not just a bag of words—it has **structure** that adds meaning:

- **Hierarchical structure**: title → sections → paragraphs → sentences → tokens.
- **Logical structure**: headings, subheadings, lists, tables, references.
- **Discourse structure**: how ideas are related across sentences (e.g., contrast, cause-effect).
- **Metadata**: date, author, category, etc.

**Example**: A research paper follows a typical structure: Abstract → Introduction → Methods → Results → Conclusion.

---

### 2. Methods for Structure Identification

Several techniques are used to uncover the structure of documents:

#### Rule-Based Approaches

- Use manually defined templates or patterns (e.g., detect headings by font size).
- Useful in structured documents like XML, HTML, PDF.

#### Machine Learning Methods

- Use labeled datasets to learn patterns (e.g., classifying segments as title, body, footer).
- Algorithms: SVM, Random Forest, Decision Trees.

#### Deep Learning Models

- Utilize LSTM, BiLSTM, or Transformers (e.g., BERT) to understand content and context.
- Can model long-range dependencies and handle diverse structures.

#### Layout-Based Techniques

- Used in scanned documents; rely on visual cues like spacing, alignment (e.g., in OCR systems).

---

### Complexity of the Approaches

- **Rule-Based**: Simple but rigid and not adaptable to new formats.
- **ML/DL-Based**: High accuracy, generalizable, but computationally expensive and data-hungry.
- **Hybrid Approaches**: Combine rules + ML for balance in accuracy and flexibility.

---

### 4. Performance of Various Approaches

| Approach   | Accuracy  | Speed  | Flexibility | Requires Training? |
| ---------- | --------- | ------ | ----------- | ------------------ |
| Rule-Based | Medium    | Fast   | Low         | ❌                 |
| ML-Based   | High      | Medium | Medium      | ✅                 |
| DL-Based   | Very High | Slower | High        | ✅✅               |
| Hybrid     | High      | Medium | High        | ✅                 |

Performance varies by domain, document type, and quality of data.

---

### 5. Feature Extraction from Documents

Feature extraction helps convert text into useful data for machine learning or NLP tasks.

#### Basic Features

- Word frequency (TF, TF-IDF)
- Sentence length
- Punctuation, special tokens

#### Structural Features

- Position in the document (e.g., start of paragraph)
- Font size, bold/italic, heading styles (for PDFs/HTML)

#### Semantic Features

- Named entities (e.g., people, organizations)
- Part-of-speech tags
- Word embeddings (Word2Vec, GloVe, BERT)

#### Contextual Features

- Sentence role (title, intro, conclusion)
- Relations between sections

---

# UNIT II – Syntax I

## Syntax

### ➤ Definition:

**Syntax** in NLP refers to the rules and structures that govern the arrangement of words in sentences.

### Components:

- **Syntactic Structure**:  
   How phrases and clauses are formed (e.g., noun phrases, verb phrases).
- **Parsing**:  
   The process of analyzing a sentence to generate a syntactic structure, often represented as a **parse tree** or **dependency graph**.

### Purpose:

- Helps in understanding **grammatical relationships** between words.
- Used in **machine translation**, **speech recognition**, and **question answering**.


---

### 1. Parsing Natural Language

#### Basics of Syntactic Analysis

**Parsing** is the process of analyzing a sentence's grammatical structure based on a set of grammar rules.

- **Goal**: Determine the syntactic structure (often in the form of a tree) that represents how words relate grammatically.

#### Key Concepts

- **Grammar**: Defines valid sentence structures using rules.
  - **Context-Free Grammar (CFG)**: Commonly used formal grammar.
- **Parse Tree**: A tree structure representing the syntactic structure of a sentence.
  - **Constituency Parsing**: Breaks sentence into nested phrases.
  - **Dependency Parsing**: Captures grammatical relationships between words (subject → verb → object).

#### Parsing Algorithms

- **Top-down Parsing**: Starts from the root and tries to match the input.
- **Bottom-up Parsing**: Starts from input and builds up the parse tree.
- **CKY Algorithm**: Dynamic programming approach for CFGs.
- **Transition-based Parsing**: Efficient for dependency parsing (e.g., Arc-Standard).

#### Applications

- Grammar checking, question answering, information extraction, machine translation.

---

### 🔹 **2. Treebanks**

#### 🔸 **Data-Driven Approach to Syntax**

A **Treebank** is a **linguistic database** that contains sentences annotated with their syntactic structure (parse trees).

#### ➤ Types of Treebanks:

- **Constituency Treebanks**: Show hierarchical phrase structure.
- **Dependency Treebanks**: Show binary grammatical relations.

#### 🔸 **Using Annotated Corpora**

Annotated corpora (like Penn Treebank or Universal Dependencies) are used to **train and evaluate parsers**.

#### ➤ Benefits:

- Provide ground-truth syntax trees.
- Enable supervised learning of parsing models.
- Support statistical and neural approaches.

#### ➤ Treebank-Based Parsing:

- **Statistical Parsers**: Learn probabilities from treebanks (e.g., PCFG – Probabilistic CFG).
- **Neural Parsers**: Use RNNs, LSTMs, or Transformers to learn syntax directly from annotated data.

---

### 🔹 **Representation of Syntactic Structure**

Understanding how syntactic information is represented is vital for parsing and grammar-based NLP systems.

#### 🔸 1. **Phrase Structure Trees** (Constituency Trees)

- Also called **constituent-based structures**.
- Represent hierarchical groupings of words into **phrases** (e.g., noun phrase, verb phrase).
- Based on **Context-Free Grammar (CFG)** rules.

**Example:**

```
(S
  (NP She)
  (VP (V saw)
      (NP the cat)))
```

This shows: “She saw the cat” is a sentence (S) made of a noun phrase (NP) and a verb phrase (VP).

#### ➤ Key Points:

- Each node is a phrase or part of speech.
- Captures nested phrase relations.
- Used in constituency parsers.

---

#### 🔸 2. **Dependency Structures**

- Focus on **binary grammatical relationships** between words.
- Represented as a directed graph, not necessarily hierarchical.
- Each word (except the root) **depends** on another word.

**Example (for "She saw the cat"):**

```
saw → She  (nsubj)
saw → cat  (dobj)
cat → the  (det)
```

#### ➤ Key Points:

- More compact and efficient.
- Useful for many modern NLP tasks.
- Widely used in Universal Dependencies (UD) treebanks.

---

### 🔹 **Parsing Algorithms**

Parsing is the process of **generating** syntactic structure from input sentences using grammar.

#### 🔸 1. **Top-down Parsing**

- Starts from the start symbol and tries to **expand** using grammar rules to match the input.
- **Problem**: Can go into infinite loops or produce invalid parses.

#### 🔸 2. **Bottom-up Parsing**

- Starts from the input words and tries to **construct** a valid parse by combining constituents upward.
- More data-driven but can be inefficient without pruning.

---

#### 🔸 3. **Chart Parsing**

- Uses a **dynamic programming** approach to store and reuse intermediate results.
- Avoids redundant work.
- Often used with **CKY** or **Earley’s algorithm**.

---

#### 🔸 4. **Earley’s Algorithm**

- A **general-purpose chart parser** for CFGs.
- Handles **ambiguous** and **left-recursive** grammars.
- Works in three phases:
  1. **Prediction** – Predicts non-terminals to expand.
  2. **Scanning** – Matches input tokens.
  3. **Completion** – Completes predicted rules.

#### ➤ Complexity:

- Best case: **O(n)**
- Worst case: **O(n³)**

---

### ✅ **Summary**

| Concept                    | Representation                | Use                        |
| -------------------------- | ----------------------------- | -------------------------- |
| **Phrase Structure Trees** | Hierarchical phrase groupings | Grammar-based NLP          |
| **Dependency Trees**       | Word-to-word relations        | Modern parsers, efficiency |

| Parsing Algorithm  | Key Feature              | Notes            |
| ------------------ | ------------------------ | ---------------- |
| Top-down           | Starts from start symbol | May loop         |
| Bottom-up          | Starts from input        | More data-driven |
| Chart Parsing      | Dynamic programming      | Efficient        |
| Earley’s Algorithm | Handles complex grammars | Versatile        |

## 🔹 **UNIT III – Syntax II and Semantic Parsing I**

## 🔹 **3. Semantic Parsing**

### ➤ **Definition**:

**Semantic Parsing** is the process of converting natural language into a **structured meaning representation** (e.g., logical forms, knowledge graphs).

### ➤ **Components**:

- **Word Sense Disambiguation**:  
   Choosing the correct meaning of a word in context.
- **Meaning Representation**:  
   Mapping text to concepts, predicates, and arguments.

### ➤ **Purpose**:

- Enable machines to **understand the meaning** of sentences.
- Used in applications like **chatbots**, **semantic search**, and **automated reasoning**.

---

### 🔹 **Syntax II**

---

### 🔸 1. **Models for Ambiguity Resolution in Parsing**

Parsing often faces **ambiguity**, where multiple syntactic structures are possible for the same sentence.

#### 🔹 Types of Ambiguity:

- **Lexical Ambiguity**: One word has multiple meanings (e.g., "bank" – river or money).
- **Syntactic Ambiguity**: Multiple valid parse trees.
  - _Example_: “I saw the man with the telescope.”  
     → Did _I_ use the telescope or did _the man_ have it?

#### 🔹 How to Resolve Ambiguity:

##### ➤ **Probabilistic Context-Free Grammars (PCFGs)**:

- Assign probabilities to grammar rules.
- Choose the most probable parse tree.
- Trained using Treebanks like Penn Treebank.

##### ➤ **Maximum Entropy Models / Conditional Models**:

- Use context and features (POS tags, word pairs) to score parses.

##### ➤ **Neural Models (e.g., BERT-based parsers)**:

- Use deep learning to learn from large data and select the most likely structure.
- Can handle long-range dependencies and complex ambiguities.

##### ➤ **Reranking Approaches**:

- Generate multiple candidate parses, then use a secondary model to rank them.

---

### 🔸 2. **Multilingual Issues in Syntactic Parsing**

Parsing languages other than English brings unique challenges.

#### 🔹 Key Challenges:

- **Word Order Variation**:
  - English: Subject-Verb-Object (SVO)
  - Japanese: Subject-Object-Verb (SOV)
- **Morphologically Rich Languages** (e.g., Hindi, Arabic, Finnish):
  - Words carry more information via prefixes/suffixes.
  - Makes POS tagging and parsing harder.
- **Free Word Order**:
  - Some languages have flexible word order (e.g., Sanskrit).
  - Traditional CFGs struggle with this.

#### 🔹 Solutions:

##### ➤ **Universal Dependencies (UD)**:

- A framework for cross-linguistic dependency parsing.
- Defines a consistent set of tags and relations for many languages.

##### ➤ **Multilingual Treebanks**:

- Resources like UD Treebanks help train multilingual parsers.

##### ➤ **Multilingual and Cross-lingual Models**:

- Models like **mBERT**, **XLM-R**, and **T5** trained on multiple languages.
- Can be fine-tuned for specific syntactic parsing tasks.

##### ➤ **Transfer Learning**:

- Use high-resource languages to help parse low-resource ones.

---

### ✅ **Summary**

| Topic                    | Key Idea                                                                                                                        |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| **Ambiguity Resolution** | Uses statistical, rule-based, or neural models to choose the best parse among multiple possibilities                            |
| **Multilingual Parsing** | Addresses challenges like different word orders, morphology, and data scarcity using frameworks like UD and multilingual models |

---

### 🔹 **1. Introduction to Semantic Parsing**

**Semantic parsing** is the process of mapping **natural language** to a **machine-understandable meaning representation** (e.g., logic forms, database queries).

#### 🔹 Goal:

To extract the **underlying meaning** or **intent** from a sentence beyond syntax.

**Example**:  
_“What is the capital of France?”_  
→ `capital(France)` (logical form)

#### 🔹 Applications:

- Question answering
- Dialogue systems
- Knowledge base querying (e.g., SPARQL, SQL)

---

### 🔹 **2. Semantic Interpretation**

It is the process of assigning **meaning representations** to syntactic structures.

#### Key Concepts:

- **Compositional Semantics**: The meaning of a sentence is built from the meanings of its parts.
- **Lambda Calculus**: Common formalism used for meaning representation.
- **Entities, Predicates, and Quantifiers**:
  - _John loves Mary_ → `love(John, Mary)`

#### Techniques:

- Use of **syntactic parse trees** and **semantic rules**.
- Map syntactic roles (subject, object) to semantic roles (agent, theme).

---

### 🔹 **3. System Paradigms for Semantic Parsing**

Several system designs exist for performing semantic parsing:

#### ➤ **Rule-Based Systems**:

- Use hand-crafted grammar rules and semantic templates.
- Accurate but not scalable or robust to variation.

#### ➤ **Statistical Models**:

- Learn mappings from sentences to logical forms using annotated datasets.
- Use probabilistic grammars or classifiers.

#### ➤ **Neural Semantic Parsers**:

- Use seq2seq, transformer models (e.g., BERT, T5).
- Can learn from raw text or with weak supervision.
- More robust to language variation and domain shifts.

#### ➤ **Hybrid Approaches**:

- Combine rules + learning for better interpretability and accuracy.

---

### 🔹 **4. Word Sense Disambiguation (WSD)**

**WSD** is the process of identifying the correct meaning (sense) of a word based on context.

#### Example:

- _“He sat on the bank.”_ → Riverbank? Financial bank?

#### Techniques:

##### ➤ **Knowledge-Based Methods**:

- Use dictionaries like **WordNet** and similarity metrics.
- Lesk algorithm: Uses dictionary definitions to find overlaps.

##### ➤ **Supervised Learning**:

- Train classifiers using labeled corpora with correct senses.

##### ➤ **Unsupervised/Clustering Methods**:

- Group similar contexts to induce senses.

##### ➤ **Neural Models**:

- Use context-aware embeddings like **ELMo**, **BERT**, which dynamically adjust word meaning based on surrounding words.

---

### ✅ **Summary Table**

| Topic                       | Key Points                                               |
| --------------------------- | -------------------------------------------------------- |
| **Semantic Parsing**        | Mapping language to formal meaning representations       |
| **Semantic Interpretation** | Uses lambda calculus and compositional semantics         |
| **System Paradigms**        | Rule-based, statistical, neural, and hybrid              |
| **WSD**                     | Assigns correct meaning to ambiguous words using context |

---

## 🔹 **UNIT IV – Semantic Parsing II**

This unit goes deeper into how meaning is represented and understood in natural language by focusing on relationships between words—especially verbs—and their participants.

---

### 🔹 **1. Predicate-Argument Structure**

**Predicate-Argument Structure** represents the relationship between a verb (**predicate**) and the entities involved in the action (**arguments**).

#### ➤ Example:

> _"Alice gave Bob a book."_

- **Predicate**: gave
- **Arguments**:
  - **Agent** (who gives): Alice
  - **Recipient** (to whom): Bob
  - **Theme** (what is given): a book

This structure helps answer:

- _Who did what to whom, when, where, why?_

#### ➤ Why It’s Important:

- Forms the basis for **semantic role labeling** (SRL).
- Helps machines understand the roles entities play in events.
- Used in question answering, dialogue systems, machine translation.

#### ➤ Tools:

- **PropBank** and **FrameNet** provide large datasets with predicate-argument annotations.

---

### 🔹 **2. Meaning Representation Systems**

These are formal systems used to represent the **meaning** of sentences in a way that computers can process.

---

#### 🔸 a. **Logical Forms**

- Represent sentences using **formal logic** (e.g., first-order logic).
- Use predicates, constants, variables, and quantifiers.

> Example: _"All dogs bark."_  
> → `∀x (dog(x) → bark(x))`

---

#### 🔸 b. **Frames**

- Conceptual structures describing situations and the participants involved.
- Each **frame** corresponds to a type of event or action.

> Example: **Giving** frame  
> Includes roles like **Donor**, **Recipient**, **Theme**

**FrameNet** is a resource based on frame semantics.

---

#### 🔸 c. **Semantic Roles**

Also called **thematic roles** – define what role an argument plays in the event.

Common roles include:

- **Agent**: doer of the action
- **Patient/Theme**: entity affected
- **Instrument**: means used
- **Location**: where the event happens
- **Experiencer**: feels or perceives something

**Example**:

> "The boy [Agent] kicked the ball [Theme] with a stick [Instrument] in the park [Location]."

Semantic Role Labeling (SRL) tools identify these roles from sentences.

---

### ✅ **Summary Table**

| Concept                          | Description                      | Example                                |
| -------------------------------- | -------------------------------- | -------------------------------------- |
| **Predicate-Argument Structure** | Links verbs with their arguments | gave(Alice, Bob, book)                 |
| **Logical Forms**                | Formal logic representation      | ∃x (book(x) ∧ gave(Alice, Bob, x))     |
| **Frames**                       | Event-based templates            | Giving Frame → Donor, Recipient, Theme |
| **Semantic Roles**               | Participant roles in actions     | Agent, Theme, Location, etc.           |

---

## 🔹 **UNIT V – Language Modeling**

## 🔹 **4. Language Modeling**

### ➤ **Definition**:

A **Language Model (LM)** is a statistical or neural model that assigns probabilities to sequences of words.

### ➤ **Components**:

- **N-Gram Models**:  
   Predict a word based on the previous _n – 1_ words.
- **Neural LMs**:  
   Use deep learning (like RNNs or Transformers) to model language.
- **Evaluation**:  
   Measured by **perplexity** and **cross-entropy**.

### ➤ **Purpose**:

- Predict the **next word** in a sequence.
- Improve tasks like **speech recognition**, **machine translation**, **text generation**, and **autocomplete**.

Language modeling is a foundational concept in NLP used to predict the likelihood of word sequences. It is crucial in applications like speech recognition, machine translation, chatbots, and autocomplete.

---

### 🔹 **1. Introduction to Language Modeling**

#### ➤ What is a Language Model?

A **language model (LM)** assigns a **probability** to a sequence of words:

> P(w₁, w₂, ..., wₙ)

#### ➤ Role in NLP Tasks:

- **Speech Recognition**: Predicting what was likely said.
- **Machine Translation**: Choosing fluent sentence constructions.
- **Text Generation**: Autocomplete, story generation.
- **Spell Checking**: Scoring correct vs. incorrect word sequences.

---

### 🔹 **2. N-Gram Models**

**N-gram models** are statistical language models based on the **Markov assumption** that a word depends only on a few previous words.

#### ➤ Types:

- **Unigram**:  
   P(w₁, w₂, ..., wₙ) ≈ Π P(wᵢ)  
   (Each word is independent)
- **Bigram**:  
   P(w₁, ..., wₙ) ≈ Π P(wᵢ | wᵢ₋₁)
- **Trigram**:  
   P(w₁, ..., wₙ) ≈ Π P(wᵢ | wᵢ₋₂, wᵢ₋₁)

#### ➤ Estimation:

Using **maximum likelihood estimation (MLE)**:

> P(wᵢ | wᵢ₋₁) = Count(wᵢ₋₁ wᵢ) / Count(wᵢ₋₁)

#### ➤ Limitations:

- Data sparsity (some word combinations never occur in training)
- No understanding of semantics

---

### 🔹 **3. Language Model Evaluation**

To measure how well a model predicts language:

#### ➤ **Perplexity (PP)**

- Measures how “surprised” a model is by the test data.
- Lower perplexity = better model.

> PP = 2^Cross-Entropy

#### ➤ **Cross-Entropy**

- Measures the average number of bits needed to encode each word.

> H(p) = − (1/N) ∑ log₂ P(wᵢ)

Used to compare models on the same test set.

---

### 🔹 **4. Bayesian Parameter Estimation**

To handle **sparse data** (zero probabilities), smoothing and Bayesian methods are applied.

#### ➤ **Smoothing Techniques**:

Used to assign small probabilities to unseen n-grams.

- **Add-one (Laplace) Smoothing**  
   Adds 1 to all counts  
   → P(wᵢ | wᵢ₋₁) = (Count(wᵢ₋₁ wᵢ) + 1) / (Count(wᵢ₋₁) + V)
- **Add-k Smoothing**, **Good-Turing**, **Kneser-Ney** (more advanced, realistic smoothing)

#### ➤ **MAP (Maximum A Posteriori Estimation)**:

- Uses prior knowledge + observed data.

> MAP = argmax P(θ | data) = argmax P(data | θ) \* P(θ)

#### ➤ **Bayesian Inference**:

- Models parameters as distributions (not fixed values).
- Computes **posterior probability** of parameters given data.

---

### ✅ **Summary Table**

| Concept           | Description                              | Example                   |
| ----------------- | ---------------------------------------- | ------------------------- |
| **N-Gram Models** | Predict word based on previous n−1 words | bigram: P(wᵢ              |
| **Perplexity**    | Measures prediction confidence           | Lower is better           |
| **Smoothing**     | Handles zero probabilities               | Add-one, Kneser-Ney       |
| **MAP**           | Uses prior + likelihood for estimation   | Combines data and beliefs |

### 🔹 **1. Language Model Adaptation**

**Language model adaptation** refers to adjusting an existing language model to perform better in a **new domain** or **specific context**.

#### 🔸 a. **Domain Adaptation**

- Adapting a general-purpose model to a **specific domain** like medical, legal, or financial.
- Challenge: Domain-specific terms and sentence structures differ from generic data.

#### ➤ Techniques:

- **Fine-tuning** the model on domain-specific data.
- **Interpolation**: Combine general and domain-specific models.
- **Multi-task learning**: Learn from both general and domain data.

#### 🔸 b. **Transfer Learning**

- Reuse a pretrained model on a **new but related task or language**.
- Common in deep learning (e.g., fine-tuning BERT for biomedical texts).

---

### 🔹 **2. Types of Language Models**

Different variations of language models exist to improve performance and flexibility.

---

#### 🔸 a. **Class-Based Models**

- Words are grouped into **classes** (e.g., nouns, verbs, days, cities).
- Model predicts classes instead of individual words:
  - P(word | class) × P(class | previous class)

**Advantages:**

- Reduces model size
- Helps with sparse data

---

#### 🔸 b. **Variable-Length Models**

- Instead of fixed-size n-grams, use **variable context sizes**.
- Based on **probabilistic suffix trees** or **cache models**.
- Common in **neural LMs** like transformers which dynamically attend to varying lengths.

---

#### 🔸 c. **Bayesian Topic-Based Models**

- Combine language modeling with topic modeling.
- Words are generated conditioned on **latent topics**.

**Example:**

- **Latent Dirichlet Allocation (LDA)**: A document is a mixture of topics; each topic is a distribution over words.
- Useful in modeling thematic structure of text.

**Application:**

- Document classification, summarization, content recommendation.

---

### 🔹 **3. Multilingual and Cross-Lingual Language Modeling**

Building language models that work **across multiple languages**.

#### ➤ **Multilingual LMs**:

- Trained on data from multiple languages.
- Examples: **mBERT**, **XLM-R**, **mT5**
- Can perform **zero-shot** or **few-shot** transfer across languages.

#### ➤ **Cross-Lingual LMs**:

- Aim to **transfer** knowledge from high-resource languages (like English) to low-resource ones.
- Use **shared vocabularies** or **aligned embeddings**.

#### ➤ Challenges:

- Differences in syntax, morphology
- Script differences (e.g., Latin vs. Devanagari)
- Data imbalance between languages

#### ➤ Approaches:

- Joint training on multiple languages
- Translation-based transfer
- Aligning multilingual embeddings

---

### ✅ **Summary Table**

| Topic                      | Key Idea                            | Use                     |
| -------------------------- | ----------------------------------- | ----------------------- |
| **Domain Adaptation**      | Tune LM to specific domain          | Biomedical BERT         |
| **Class-based Models**     | Group words into categories         | Reduce sparsity         |
| **Variable-length Models** | Use flexible context windows        | Better context modeling |
| **Bayesian Topic Models**  | Mix of topic and word probabilities | Topic-aware generation  |
| **Multilingual LMs**       | Trained on multiple languages       | mBERT, XLM-R            |
| **Cross-lingual Transfer** | Transfer knowledge across languages | Low-resource NLP        |
