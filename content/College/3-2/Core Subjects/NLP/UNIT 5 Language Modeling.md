## Topics
- **Introduction to Language Modeling**:
  - Overview of language models and their applications.
- **N-Gram Models**:
  - Statistical models based on sequences of words.
- **Language Model Evaluation**:
  - Metrics for evaluating language model performance.
- **Bayesian Parameter Estimation**:
  - Bayesian methods for estimating model parameters.
- **Language Model Adaptation**:
  - Techniques for adapting models to specific domains or languages.
- **Advanced Models**:
  - Class-based, variable-length, Bayesian topic-based, multilingual, and cross-lingual models.

### 1. Introduction to Language Modeling
#### Definition:
A **language model (LM)** is a probabilistic model that assigns a probability to a sequence of words. It quantifies how likely a sentence or phrase is in a given language. This helps in tasks like predicting the next word in a sentence or evaluating the fluency of a generated text.

Mathematically, it estimates the joint probability of a sequence of words:

$$
P(w_1, w_2, ..., w_n)
$$

Using the **chain rule of probability**, this can be factorized as:

$$
P(w_1, w_2, ..., w_n) = P(w_1) \cdot P(w_2|w_1) \cdot P(w_3|w_1,w_2) \cdots P(w_n|w_1,...,w_{n-1})
$$

But due to computational complexity, approximations like **Markov assumptions** are used (e.g., N-gram models).
#### Applications:
- **Machine Translation**: Models help score possible translations and choose the most fluent one.
- **Speech Recognition**: Helps disambiguate homophones (e.g., "to", "too", "two") based on context.
- **Text Generation**: Powers chatbots, summarizers, and creative writing tools (e.g., GPT-3).
- **Spell Checking & Autocomplete**: Predicts the most probable next word or corrects typos.
- **Information Retrieval**: Enhances search engines by modeling query likelihood.
#### Types of Language Models:
1. **Statistical LMs**: Based on counting word occurrences in corpora.
   - Examples: N-grams, Hidden Markov Models (HMMs)
2. **Neural LMs**: Use deep learning architectures.
   - Examples: RNNs, LSTMs, Transformers (e.g., BERT, GPT)

---
### 2. N-Gram Models
#### Definition:
An **N-gram** is a contiguous sequence of **N items** (typically words) from a given text. These are used to predict the next word in a sequence using only the previous **(N-1)** words.
#### Types:
- **Unigram (N=1)**: Single-word frequency counts.
- **Bigram (N=2)**: Probability of a word given the immediately preceding word.
- **Trigram (N=3)**: Probability of a word given the two preceding words.
#### Example:
Given the sentence:  
**"I love Natural Language Processing."**

- Unigrams: `"I"`, `"love"`, `"Natural"`, `"Language"`, `"Processing"`
- Bigrams: `"I love"`, `"love Natural"`, `"Natural Language"`, `"Language Processing"`
- Trigrams: `"I love Natural"`, `"love Natural Language"`, `"Natural Language Processing"`

#### Probability Estimation:
The **Maximum Likelihood Estimate (MLE)** is commonly used to estimate conditional probabilities in N-gram models:

$$
P(w_n | w_{n-1}) = \frac{\text{Count}(w_{n-1}, w_n)}{\text{Count}(w_{n-1})}
$$

For example:
- Count("I love") = 100
- Count("I") = 500
- $P(\text{"love"}|\text{"I"}) = \frac{100}{500} = 0.2$
#### Limitations:
- **Sparsity Problem**: Many N-grams may not appear in the training data, leading to zero probabilities.
- **Fixed Context**: Can't capture long-range dependencies beyond the fixed window size (N).
- **Scalability Issues**: As N increases, the number of parameters grows exponentially (curse of dimensionality).
#### Smoothing Techniques:
To handle unseen N-grams and improve generalization:
- **Laplace (Add-One) Smoothing**: Adds 1 to all counts.
- **Good-Turing Discounting**: Reallocates probability mass from frequent to unseen events.
- **Kneser-Ney Smoothing**: Considers continuation counts; effective for trigrams and higher.

---
### 3. Language Model Evaluation
#### Metrics:
1. **Perplexity (PP)**:
   - A measure of uncertainty in predictions. Lower perplexity means better performance.
   $$
   \text{Perplexity} = 2^{-\frac{1}{N} \sum_{i=1}^N \log_2 P(w_i | w_{<i})}
   $$

   Interpreted as the **effective branching factor** of the model — lower values indicate more confidence in predictions.

2. **Cross-Entropy (CE)**:
   - Measures the average number of bits needed to encode the test data using the model.
   $$
   H(P, Q) = -\frac{1}{N} \sum_{i=1}^N \log Q(w_i | w_{<i})
   $$
   - Cross-entropy is directly related to perplexity:  
     $$
     \text{PP} = 2^{H(P,Q)}
     $$

3. **Accuracy (Word Prediction Accuracy)**:
   - Proportion of times the model correctly predicts the next word in a sequence.
   - Simple but limited to top-1 prediction; doesn't account for fluency or diversity.

4. **BLEU, ROUGE, METEOR (for generative models)**:
   - Compare n-grams between generated text and reference texts.
   - Used when evaluating machine translation or text generation systems.

---

### 4. Bayesian Parameter Estimation
#### Concept:
Bayesian estimation treats model parameters as random variables with **prior distributions** that get updated using observed data to obtain posterior distributions.

This contrasts with MLE, which gives point estimates without incorporating prior knowledge.

#### Key Methods:
1. **Dirichlet Prior (for N-grams)**:
   - Incorporates smoothing via a prior distribution over word probabilities.
   $$
   P(w_i | w_{i-1}) = \frac{\text{Count}(w_{i-1}, w_i) + \alpha}{\text{Count}(w_{i-1}) + \alpha V}
   $$
   - $ \alpha $: Smoothing parameter
   - $ V $: Vocabulary size

2. **Latent Dirichlet Allocation (LDA)**:
   - A **generative probabilistic model** for collections of documents.
   - Assumes each document is a mixture of topics, and each topic is a distribution over words.
   - Used for **topic modeling** and semantic analysis.

---

### 5. Language Model Adaptation
#### Goal:
Improve the performance of general-purpose language models on **specific domains**, **languages**, or even **individual users**.
#### Techniques:
1. **Domain Adaptation**:
   - Retrain or fine-tune a pre-trained model on domain-specific text (e.g., medical journals, legal contracts).
   - Example: Training a model on clinical notes to enhance accuracy in healthcare applications.

2. **Cross-Lingual Adaptation**:
   - Transfer knowledge from high-resource languages to low-resource ones.
   - Uses multilingual embeddings (e.g., mBERT, XLM-RoBERTa).
   - Enables building NLP systems for under-resourced languages.

3. **User Personalization**:
   - Tailors models to individual writing styles.
   - Used in smart compose features (e.g., Gmail), predictive keyboards, and voice assistants.

4. **Transfer Learning**:
   - Leverage pre-trained models (like BERT, GPT) and fine-tune them on specific downstream tasks.
   - Reduces need for large labeled datasets in niche domains.

---
### 6. Advanced Language Models

| **Model Type**               | **Description**                          | **Example Use Case**          |
|------------------------------|------------------------------------------|-------------------------------|
| **Class-Based LMs**          | Groups words into classes (e.g., verbs, nouns). Improves generalization. | Part-of-speech tagging, grammar modeling |
| **Variable-Length N-grams**  | Uses dynamic context lengths instead of fixed N. More flexible than standard N-grams. | Adaptive text prediction, chatbots |
| **Bayesian Topic Models**    | Uses Bayesian inference for discovering latent topics. E.g., LDA. | Document clustering, content recommendation |
| **Multilingual LMs**         | Trained on multiple languages simultaneously. Understands cross-lingual similarities. | Multilingual translation, global search engines |
| **Cross-Lingual LMs**        | Learns representations shared across languages. Useful for transfer learning. | Building NLP tools for low-resource languages |

---
### Additional Notes:
- **Neural Language Models** overcome many limitations of N-gram models:
  - Handle **long-range dependencies** using recurrent networks or attention mechanisms.
  - Avoid **sparsity issues** by representing words in dense vector spaces (word embeddings).
  - Enable **end-to-end learning**, where the model learns both the representation and prediction together.

- **Transformers** (Vaswani et al., 2017) revolutionized language modeling by introducing **self-attention**, allowing parallel processing and better handling of long contexts.

- **Pretrained Models** like **GPT**, **BERT**, **RoBERTa**, and **T5** have become foundational in modern NLP, achieving state-of-the-art results across diverse tasks.

---
### Summary:

| **Topic**                    | **Key Concepts**                                                                 |
|-----------------------------|----------------------------------------------------------------------------------|
| **Language Models**          | Assign probabilities to word sequences; used in MT, ASR, Text Gen, etc.         |
| **N-gram Models**            | Statistical models using fixed-length sequences; prone to sparsity issues       |
| **Evaluation Metrics**       | Perplexity, Cross-Entropy, Accuracy                                             |
| **Bayesian Estimation**      | Dirichlet priors, LDA                                                           |
| **Adaptation Techniques**    | Domain adaptation, cross-lingual transfer, personalization                      |
| **Advanced Models**          | Class-based, variable-length, topic-based, multilingual, cross-lingual models   |
