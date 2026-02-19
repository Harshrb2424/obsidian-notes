# Unit 1: Knowledge Representation

Knowledge Representation (KRR) is the study of how beliefs, intentions, and knowledge are stored and utilized to solve complex real-life problems, such as communicating with human beings in natural language.

- It allows machines to learn from that knowledge and behave intelligently like a human being.

## Different Kinds of Knowledge in AI

- Object  
- Events  
- Performance  
- Meta Knowledge  
- Knowledge Base  

## Types of Knowledge

- Declarative Knowledge  
- Structural Knowledge  
- Procedural Knowledge  

## Cycles of Knowledge Representation in AI

- Perception  
- Learning  
- KRR  
- Planning  
- Execution  

## Techniques of Knowledge Representation

### Logical Representation  
- It decides how we construct legal sentences in logic.  
- It determines which symbols we can use in knowledge representation.  

Example: With P,Q,R: Truth table  

### Semantic Representation  
In a **Semantic Network**, knowledge is represented in the form of a graphical network.  
- This network consists of nodes representing objects and arcs that describe the relationships between these objects.  

This representation consists of two types of relations:  
- **Is-a**  
- **Kind-of**  

Example: Family Tree  

# Frame Representation

- It is a record-like structure that consists of a collection of attributes and values to describe an entity in the world.

Example: **Bus**  

## Production Rule

It consists of three main parts:  
1. **Set of Production Rules**  
2. **Working Memory**  
3. **Recognized Cycle**  

---

# Role of Logic in Knowledge Representation and Reasoning 
- The relationship between relational language, truth conditions, and rules of inference.  
- The first knowledge representation language is a very popular logical language. It is sometimes called **First-Order Logic**.  

It has two levels:  
4. **Knowledge Level** – We ask questions concerning the representing language and its semantics.  
5. **Symbol Level** – We ask questions concerning the computational aspects.  

---

# Syntax  

- Specifies a group of words or symbols that should be properly formed.  
- Example:  
  - "The cat my mother loves" → Well-formed phrase  
  - "The love mother cat" → Not meaningful in knowledge representation  

---

# Semantics  

- Expressions must be meaningful and represent real-world concepts.  
- Example:  
  - "The hard-nosed decimal holiday" might not mean anything.  
  - We need to be clear about what idea about the world is being expressed.  

---

# Pragmatics  

- Specifies how meaningful expressions in the language are to be used.  
- Example:  
  - "There is someone behind you"  
  - Could be a **warning** to be careful in some contexts.  



# Syntax  

## Logical Symbols  

- **Punctuation**: `""`, `''`  
- **Connectives**: `AND`, `OR`, `NOT`  
- **Quantifiers**: `∃` (There Exists), `∀` (For All)  
- **Variables**: Changes with functions  

---

## Non-Logical Symbols  

- Functional  
- Practical Symbols
---

## Sample Project
### Home Automation System using KRR  

Develop a **Home Automation System** that uses **Knowledge Representation and Reasoning (KRR)** to:  
- Understand **commands and context**  
- Process **requests intelligently**  

**Example Use Case:**  
- **Turn on Light** when **sunset** and **temperature drops below 65°F**           
#### System Architecture  

- **IoT Integration**  
- **KRR Implementation**  
- **Automation Rules**  
- **Natural Language Processing (NLP)**  
