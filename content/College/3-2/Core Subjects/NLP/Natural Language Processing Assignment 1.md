# NLP Assignment - I  

1. Explain briefly about **Finding the Structure of Words**.  
2. Explain about **Finding the Structure of Documents**.  
3. Explain about **Freebank**.  
4. Explain **Representation of Syntactic Structure in Parsing**.  
5. Explain about **Ambiguity Resolution in Parsing**.  

**Last Date for Submission:** 10th March 2023  

---


### 1. Explain briefly about Finding the Structure of Words.  

Finding the structure of words is a fundamental task in Natural Language Processing (NLP) and linguistics. It involves analyzing the internal composition of words to understand their morphological structure. Morphology is the study of how words are formed from smaller meaningful units called **morphemes**. Morphemes are the smallest linguistic units that carry meaning, such as prefixes, suffixes, roots, and stems.

Finding the Structure of Words:

1. **Morphemes**:
   - Morphemes are the building blocks of words. For example:
     - In the word "unhappiness," there are three morphemes: `un-` (prefix meaning "not"), `happy` (root meaning "joyful"), and `-ness` (suffix indicating a state or quality).
   - Morphemes can be classified into:
     - **Free morphemes**: Standalone words with meaning, e.g., "cat," "run."
     - **Bound morphemes**: Affixes that cannot stand alone, e.g., "un-," "-ing," "-s."

2. **Word Formation Processes**:
   - Words are created through various processes:
     - **Derivation**: Adding affixes to a root word to create a new word with a different meaning or grammatical category. Example: "teach" → "teacher."
     - **Inflection**: Modifying a word to express grammatical features like tense, number, or case. Example: "walk" → "walked" (past tense).
     - **Compounding**: Combining two or more free morphemes to form a new word. Example: "bookshelf" (book + shelf).
     - **Conversion**: Changing the grammatical category of a word without altering its form. Example: "email" (noun) → "to email" (verb).

3. **Applications in NLP**:
   - **Tokenization**: Splitting text into individual words or subwords.
   - **Stemming and Lemmatization**: Reducing words to their base or root forms. For example:
     - Stemming: "running" → "run."
     - Lemmatization: "better" → "good" (using lexical knowledge).
   - **Part-of-Speech Tagging**: Identifying the grammatical role of words based on their structure.
   - **Morphological Analysis**: Parsing words to identify their morphemes and understand their meanings.

4. **Challenges**:
   - Ambiguity: A single word may have multiple interpretations. For example, "unlockable" can mean either "unable to be locked" or "able to be unlocked."
   - Complex Morphology: Some languages (e.g., Turkish, Finnish) have highly complex morphological structures, making analysis challenging.


### 2. Explain about Finding the Structure of Documents.  

Finding the structure of documents is a key task in Natural Language Processing (NLP) and information retrieval. It involves analyzing and organizing the content of a document to identify its hierarchical or logical structure. This process helps in understanding how different parts of the document relate to each other, enabling efficient processing, summarization, and extraction of meaningful information.

#### Aspects of Document Structure:

1. **Document Components**:
   - Documents are typically composed of various structural elements, such as:
     - **Title**: The main heading that summarizes the document's content.
     - **Sections and Subsections**: Divisions of the document into logical parts, often marked by headings.
     - **Paragraphs**: Blocks of text that convey a single idea or topic.
     - **Lists**: Ordered or unordered collections of items.
     - **Tables and Figures**: Visual representations of data or concepts.
     - **Footnotes and References**: Additional information or citations provided at the bottom of the page or end of the document.

2. **Logical Hierarchy**:
   - Documents often follow a hierarchical structure:
     - **High-level Structure**: Titles, chapters, sections, and subsections.
     - **Low-level Structure**: Sentences, phrases, and words within paragraphs.
   - Identifying this hierarchy is crucial for tasks like summarization, topic modeling, and navigation.

3. **Text Segmentation**:
   - Breaking down a document into its constituent parts is called **text segmentation**. For example:
     - Splitting a document into paragraphs, sentences, or tokens.
     - Identifying boundaries between sections or chapters.
   - Tools like **HTML tags** or **Markdown formatting** can help identify structural elements in digital documents.

4. **Applications in NLP**:
   - **Information Retrieval**: Structuring documents helps search engines index and retrieve relevant information efficiently.
   - **Summarization**: Extracting key sentences or sections from structured documents to create concise summaries.
   - **Topic Modeling**: Analyzing the structure to identify themes or topics within sections of the document.
   - **Document Classification**: Using structural features (e.g., headings, keywords) to classify documents into categories.
   - **Question Answering**: Understanding the document's structure aids in locating answers to queries within specific sections.

5. **Techniques for Finding Document Structure**:
   - **Rule-Based Approaches**:
     - Use predefined rules to identify structural elements based on formatting cues (e.g., headings in bold, numbered lists).
   - **Machine Learning Models**:
     - Train models to recognize patterns in document structure using labeled datasets.
   - **Natural Language Understanding (NLU)**:
     - Leverage semantic analysis to infer relationships between different parts of the document.
   - **Document Parsing**:
     - Parse documents in formats like PDF, HTML, or XML to extract structural metadata.

6. **Challenges**:
   - **Variability in Formats**: Documents may come in diverse formats (e.g., plain text, PDF, HTML), making it difficult to extract structure consistently.
   - **Ambiguity**: Some documents lack clear structural markers, requiring deeper linguistic analysis.
   - **Multilingual Documents**: Handling documents in multiple languages with varying conventions for structure.
   - **Noise in Data**: Poorly formatted or scanned documents may contain errors that complicate structure extraction.

### 3. Explain about Freebank.  
### Freebank

The term **Freebank** does not correspond to any widely recognized concept, tool, or framework in Natural Language Processing (NLP) or linguistics. It is possible that the term is either a typographical error, a misnomer, or refers to a niche or proprietary resource. Below, I will explore potential interpretations of the term based on its components ("Free" and "Bank") and common NLP-related concepts.

---

#### 1. **Possible Interpretation: A Free Linguistic Corpus or Dataset**
   - In NLP, a "corpus" (plural: corpora) refers to a large collection of text or speech data used for linguistic analysis, training machine learning models, or developing language tools.
   - If "Freebank" refers to a corpus, it might imply a **freely available dataset** (hence "free") that serves as a "bank" of linguistic resources.
   - Examples of similar free linguistic corpora include:
     - **Penn Treebank**: A widely used corpus annotated with syntactic structures.
     - **Universal Dependencies (UD)**: A multilingual corpus with dependency parsing annotations.
     - **OpenSubtitles**: A free dataset of movie subtitles used for tasks like machine translation.
   - If "Freebank" is a specific corpus, it would likely be designed for tasks such as part-of-speech tagging, syntactic parsing, or semantic analysis.

---

#### 2. **Possible Interpretation: A Free Resource for Financial or Banking Data**
   - The term "bank" could refer to financial institutions or banking data. In this context, "Freebank" might describe a freely accessible dataset or API related to banking transactions, financial statements, or economic indicators.
   - For example:
     - Open-source datasets like **Kaggle's financial datasets** or **World Bank Open Data** provide free access to economic and financial information.
     - APIs like **Open Banking APIs** allow developers to access banking data for building applications.

---

#### 3. **Possible Interpretation: A Typographical Error**
   - The term "Freebank" might be a misspelling or misinterpretation of another term. Some possibilities include:
     - **Treebank**: A treebank is a corpus annotated with syntactic structures (e.g., parse trees). Treebanks are widely used in NLP for training and evaluating parsers.
       - Example: The **Penn Treebank** is one of the most famous treebanks.
     - **WordNet**: A lexical database that organizes words into sets of synonyms (synsets) and provides semantic relationships between them.
     - **FrameNet**: A lexical resource that captures semantic frames (contextual meanings) of words and phrases.

---

#### 4. **Hypothetical Interpretation: A Custom or Proprietary Tool**
   - If "Freebank" refers to a specific tool or resource developed for a particular project or organization, it might not be publicly documented or widely known. In such cases, additional context or clarification would be needed to provide a precise explanation.

---


### 4. Explain Representation of Syntactic Structure in Parsing.

In Natural Language Processing (NLP), **parsing** is the process of analyzing the grammatical structure of a sentence according to a formal grammar. The **representation of syntactic structure** refers to how this grammatical analysis is expressed or visualized. There are several common methods for representing syntactic structures, each with its own advantages and applications. Below, we explore these representations in detail.

---

#### 1. **Parse Trees (Syntax Trees)**
   - Parse trees, also known as **syntax trees**, are hierarchical tree-like structures that represent the syntactic structure of a sentence.
   - Each node in the tree corresponds to a constituent (e.g., noun phrase, verb phrase, or word), and the edges represent relationships between constituents.
   - Example:
     Sentence: "The cat chased the mouse."
     ```
         S
        /|\
       NP VP
       |  /|\
      Det N V NP
       |  |  |  \
      The cat chased Det N
                     |   |
                    the mouse
     ```
     - Here:
       - `S` (Sentence) is the root node.
       - `NP` (Noun Phrase) and `VP` (Verb Phrase) are intermediate nodes.
       - Words like "The," "cat," "chased," etc., are leaf nodes.

   - **Advantages**:
     - Intuitive visualization of sentence structure.
     - Useful for tasks like dependency parsing and constituency parsing.

---

#### 2. **Constituency Parsing**
   - Constituency parsing focuses on identifying **constituents** (subparts of a sentence) and their hierarchical relationships.
   - Constituents are phrases that function as a single unit within a sentence (e.g., noun phrases, verb phrases).
   - The output is typically represented as a **parse tree**.
   - Example:
     Sentence: "John ate an apple."
     ```
         S
        /|\
       NP VP
       |  /|\
      N  V  NP
      |  |  /|\
     John ate Det N
               |  |
              an apple
     ```

   - **Applications**:
     - Grammar checking.
     - Machine translation.
     - Text-to-speech systems.

---

#### 3. **Dependency Parsing**
   - Dependency parsing represents syntactic structure as a set of **binary relationships** between words, where one word governs another.
   - Each relationship is called a **dependency**, and the representation is often visualized as a directed graph.
   - Example:
     Sentence: "The cat chased the mouse."
     ```
     chased
     ├── subject → cat
     │   └── determiner → The
     └── object → mouse
         └── determiner → the
     ```

   - **Advantages**:
     - Compact representation compared to constituency trees.
     - Captures direct relationships between words, making it useful for tasks like information extraction and semantic role labeling.

---

#### 4. **Bracketed Notation**
   - Bracketed notation is a textual representation of syntactic structure, often used in conjunction with parse trees.
   - It uses nested brackets to indicate hierarchical relationships between constituents.
   - Example:
     Sentence: "The cat chased the mouse."
     ```
     [S
       [NP [Det The] [N cat]]
       [VP [V chased]
           [NP [Det the] [N mouse]]]]
     ```

   - **Advantages**:
     - Easy to store and process programmatically.
     - Commonly used in annotated corpora like the Penn Treebank.

---

#### 5. **Grammatical Rules and Productions**
   - Syntactic structure can also be represented using **context-free grammars (CFG)**, which define rules for generating valid sentences.
   - Example:
     CFG Rules:
     ```
     S → NP VP
     NP → Det N
     VP → V NP
     Det → "The" | "the"
     N → "cat" | "mouse"
     V → "chased"
     ```

   - These rules describe how constituents combine to form sentences. Parsing involves applying these rules to derive the structure of a given sentence.

---

#### 6. **Graph-Based Representations**
   - In some cases, syntactic structure is represented as a **graph** rather than a tree. This allows for more complex relationships, such as coordination or shared dependencies.
   - Example:
     Sentence: "John and Mary went to the park."
     - A graph-based representation might show "and" connecting two subjects ("John" and "Mary") to a shared verb ("went").

   - **Advantages**:
     - Handles non-tree-like structures (e.g., coordination, ellipsis).
     - Flexible for advanced linguistic phenomena.

---

#### 7. **Abstract Syntax Trees (ASTs)**
   - Abstract syntax trees are simplified versions of parse trees that omit unnecessary details (e.g., punctuation or redundant nodes).
   - They are commonly used in programming language parsing but can also apply to natural language processing.

---

### 5. Explain about Ambiguity Resolution in Parsing.

Ambiguity is a common challenge in Natural Language Processing (NLP) and parsing. It occurs when a sentence or phrase can be interpreted in multiple ways, leading to multiple possible syntactic structures. **Ambiguity resolution** refers to the process of selecting the most appropriate interpretation based on linguistic rules, context, or statistical models. Resolving ambiguity is crucial for accurate parsing and understanding of natural language.

---

#### Types of Ambiguity in Parsing

1. **Syntactic Ambiguity**:
   - Syntactic ambiguity arises when a sentence has more than one valid parse tree or syntactic structure.
   - Example: "I saw the man with the telescope."
     - Interpretation 1: I used a telescope to see the man.
     - Interpretation 2: The man I saw was holding a telescope.
   - Both interpretations correspond to different parse trees, and resolving this ambiguity requires additional context or semantic information.

2. **Lexical Ambiguity**:
   - Lexical ambiguity occurs when a word has multiple meanings, making it unclear which meaning applies in a given context.
   - Example: "The bank is closed."
     - Interpretation 1: A financial institution is not open.
     - Interpretation 2: The side of a river is inaccessible.
   - Resolving lexical ambiguity often involves analyzing the surrounding words and context.

3. **Structural Ambiguity**:
   - Structural ambiguity arises when the grammatical structure of a sentence allows for multiple interpretations.
   - Example: "Flying planes can be dangerous."
     - Interpretation 1: The act of flying planes is dangerous.
     - Interpretation 2: Planes that are flying can be dangerous.
   - This type of ambiguity is closely related to syntactic ambiguity.

4. **Attachment Ambiguity**:
   - Attachment ambiguity occurs when it is unclear how a phrase or clause should be attached to the rest of the sentence.
   - Example: "She saw the man with the binoculars."
     - Interpretation 1: She used binoculars to see the man.
     - Interpretation 2: The man she saw was holding binoculars.
   - This ambiguity typically arises in prepositional phrases or relative clauses.

---

#### Approaches to Ambiguity Resolution

1. **Rule-Based Methods**:
   - Rule-based approaches rely on predefined linguistic rules to resolve ambiguity.
   - For example, syntactic rules might prioritize certain attachment patterns (e.g., attaching a prepositional phrase to the nearest noun).
   - While effective in some cases, rule-based methods struggle with complex or ambiguous sentences.

2. **Statistical Methods**:
   - Statistical approaches use probabilistic models trained on large annotated corpora to determine the most likely interpretation.
   - Example: A parser might assign probabilities to different parse trees and select the one with the highest likelihood.
   - Tools like **Hidden Markov Models (HMMs)** or **Probabilistic Context-Free Grammars (PCFGs)** are commonly used.

3. **Machine Learning and Neural Networks**:
   - Modern NLP systems leverage machine learning models, such as **Recurrent Neural Networks (RNNs)**, **Transformers**, or **BERT**, to resolve ambiguity.
   - These models learn contextual relationships between words and phrases from large datasets, enabling them to handle complex ambiguities.
   - Example: A neural dependency parser might use context to decide whether "bank" refers to a financial institution or the side of a river.

4. **Semantic and Pragmatic Analysis**:
   - Semantic analysis involves understanding the meaning of words and phrases in context.
   - Pragmatic analysis considers the broader context, including speaker intent and situational knowledge.
   - Example: In the sentence "I saw the man with the telescope," knowing that the speaker owns a telescope might favor the interpretation that they used it to see the man.

5. **Disambiguation Heuristics**:
   - Heuristic rules can guide ambiguity resolution based on common patterns in language.
   - Example: Prepositional phrases are often attached to the nearest noun unless there is strong evidence to the contrary.

---

#### Challenges in Ambiguity Resolution

1. **Context Sensitivity**:
   - Resolving ambiguity often requires understanding the broader context, which may not always be available.
   - Example: Without additional context, "bank" could refer to either a financial institution or the side of a river.

2. **Scalability**:
   - As the complexity of sentences increases, the number of possible interpretations grows exponentially, making it computationally expensive to evaluate all options.

3. **Idiomatic Expressions**:
   - Idioms and figurative language can introduce ambiguity that defies literal interpretation.
   - Example: "Kick the bucket" means "to die," but its literal interpretation is unrelated.

4. **Cross-Linguistic Differences**:
   - Different languages have unique syntactic and semantic structures, requiring language-specific solutions for ambiguity resolution.

---
