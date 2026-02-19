## Topics
- **Number Systems**:
  - Binary, Octal, Decimal, and Hexadecimal number systems.
  - Complements of numbers (1’s complement, 2’s complement).
  - Weighted and Non-weighted codes (BCD, Gray code, Excess-3 code).
- **Boolean Algebra**:
  - Basic theorems and properties.
  - Switching functions: Canonical (SOP, POS) and Standard forms.
  - Algebraic simplification of Boolean expressions.
- **Digital Logic Gates**:
  - AND, OR, NOT, NAND, NOR, XOR, XNOR gates.
  - Universal gates (NAND, NOR).
  - Multilevel NAND/NOR realizations.
# Number Systems in Digital Electronics

In digital electronics, **number systems** are used to represent and manipulate numerical data. The most common number systems include:

1. **Binary (Base-2)**  
2. **Octal (Base-8)**  
3. **Decimal (Base-10)**  
4. **Hexadecimal (Base-16)**  

Each system has a different **base (radix)** and is used in different computing applications.

---

### 1. Binary Number System (Base-2)
- Uses only **two digits**: **0 and 1**.
- Fundamental system in digital circuits (since computers work with ON/OFF states).
- Each digit is called a **bit** (Binary Digit).
- Example:  
  $$1011_2 = 1 \times 2^3 + 0 \times 2^2 + 1 \times 2^1 + 1 \times 2^0 = 8 + 0 + 2 + 1 = 11_{10}$$

#### **Applications**:
- Used in processors, memory, and digital logic circuits.

---

### 2. Octal Number System (Base-8)
- Uses **8 digits**: **0 to 7**.
- Convenient for representing **3-bit binary numbers** (since $8 = 2^3$).
- Example:  
  $$47_8 = 4 \times 8^1 + 7 \times 8^0 = 32 + 7 = 39_{10}$$

#### **Applications**:
- Early computing systems (now less common).
- Sometimes used in file permissions (Unix/Linux).

---

### 3. Decimal Number System (Base-10)
- Uses **10 digits**: **0 to 9**.
- The standard system for human counting.
- Example:  
  $256_{10} = 2 \times 10^2 + 5 \times 10^1 + 6 \times 10^0$

#### **Applications**:
- Everyday arithmetic, financial calculations.

---

### 4. Hexadecimal Number System (Base-16)
- Uses **16 digits**: **0 to 9** and **A (10), B (11), C (12), D (13), E (14), F (15)**.
- Represents **4-bit binary numbers** compactly (since $16 = 2^4$).
- Example:  
  $2F_{16} = 2 \times 16^1 + 15 \times 16^0 = 32 + 15 = 47_{10}$

#### **Applications**:
- Memory addressing, color codes (HTML/CSS), assembly language.

---

## Conversion Between Number Systems

| Conversion Type | Method |
|----------------|--------|
| **Binary ↔ Decimal** | Use **weighted positional expansion** (powers of 2). |
| **Octal ↔ Binary** | **Group 3 bits** per octal digit. |
| **Hexadecimal ↔ Binary** | **Group 4 bits** per hex digit. |
| **Decimal ↔ Binary** | **Repeated division by 2** (for integer part). |
| **Decimal ↔ Hex/Octal** | **Divide by 16/8** and collect remainders. |

### Example Conversions
1. **Binary to Decimal**:  
   $1101_2 = 1 \times 2^3 + 1 \times 2^2 + 0 \times 2^1 + 1 \times 2^0 = 13_{10}$

2. **Decimal to Binary**:  
   $25_{10} \rightarrow 25 ÷ 2 = 12$ (Remainder **1**)  
   $12 ÷ 2 = 6$ (Remainder **0**)  
   $6 ÷ 2 = 3$ (Remainder **0**)  
   $3 ÷ 2 = 1$ (Remainder **1**)  
   $1 ÷ 2 = 0$ (Remainder **1**)  
   → **Read backwards**: $11001_2$

3. **Binary to Hexadecimal**:  
   $11011010_2$ → Group into **4 bits**: $1101 \ 1010$ → $D A_{16}$

4. **Hexadecimal to Binary**:  
   $3E_{16}$ → $3 = 0011$, $E = 1110$ → $00111110_2$

---

## Summary Table

| Number System | Base | Digits | Binary Grouping | Example |
|--------------|------|--------|----------------|---------|
| **Binary** | 2 | 0,1 | - | $1010_2$ |
| **Octal** | 8 | 0-7 | 3 bits | $75_8$ |
| **Decimal** | 10 | 0-9 | - | $99_{10}$ |
| **Hexadecimal** | 16 | 0-9, A-F | 4 bits | $A3F_{16}$ |

---

### Why Different Number Systems?
- **Binary**: Used by computers (simplest for digital logic).  
- **Octal/Hex**: Compact representation of binary (easier for humans).  
- **Decimal**: Natural for human counting.  


# CC
# Weighted and Non-Weighted Codes in Digital Electronics

In digital systems, **binary codes** are used to represent numbers, letters, or symbols. These codes can be classified into two main categories:

1. **Weighted Codes**  
2. **Non-Weighted Codes**  

Each type has different properties and applications in digital circuits and computing.

---

### 1. Weighted Codes
- Each bit position has a **specific weight** (like in traditional binary numbers).
- The decimal equivalent is obtained by **summing the weighted bits**.
- **Examples**:
  - **Binary Coded Decimal (BCD)**
  - **8421 Code**
  - **2421 Code**
  - **Excess-3 Code (XS-3)** (partially weighted but has a bias)

#### (a) Binary Coded Decimal (BCD)
- A **4-bit code** where each decimal digit (0-9) is represented by its **4-bit binary equivalent**.
- **Weights**: 8, 4, 2, 1 (like standard binary).
- **Invalid codes**: 1010 (10) to 1111 (15) are unused.

| **Decimal** | **BCD (8421)** |
|-------------|----------------|
| 0           | 0000           |
| 1           | 0001           |
| ...         | ...            |
| 9           | 1001           |

**Example**:  
$53_{10}$ in BCD → **0101 0011** (5 = 0101, 3 = 0011)  

**Applications**:  
- Digital displays (7-segment LEDs).  
- Financial and calculator systems.

#### (b) 2421 Code
- A **self-complementing weighted code** (9’s complement can be obtained by inverting bits).
- **Weights**: 2, 4, 2, 1.
- **Example**:  
  $5_{10} = 1011$ (since $2×1 + 4×0 + 2×1 + 1×1 = 5$)  

**Applications**:  
- Used in some arithmetic circuits.

---

### 2. Non-Weighted Codes
- **No positional weights** are assigned to bits.
- Used for **error detection, sequencing, and encoding**.
- **Examples**:
  - **Gray Code (Reflected Binary Code)**
  - **Excess-3 Code (XS-3)** (has a fixed bias but is non-weighted in structure)

#### (a) Gray Code
- Only **one bit changes** between consecutive numbers.
- **Prevents glitches** in digital circuits (e.g., encoders, Karnaugh maps).

| **Decimal** | **Binary** | **Gray Code** |
|-------------|------------|---------------|
| 0           | 0000       | 0000          |
| 1           | 0001       | 0001          |
| 2           | 0010       | 0011          |
| 3           | 0011       | 0010          |

**Conversion (Binary → Gray)**:
1. **MSB remains the same**.
2. **XOR each bit with the next higher bit**.
   $G_i = B_i \oplus B_{i+1}$

**Example**:  
Binary: $1010_2$ → Gray:  
- $G_3 = 1$  
- $G_2 = 1 \oplus 0 = 1$  
- $G_1 = 0 \oplus 1 = 1$  
- $G_0 = 1 \oplus 0 = 1$  
→ **Gray Code = 1111**

**Applications**:  
- Rotary encoders (position sensing).  
- Error correction in digital communication.

#### (b) Excess-3 Code (XS-3)
- A **biased code** where each digit is represented by **BCD + 3**.
- **Non-weighted** but derived from BCD.
- **Self-complementing** (9’s complement is obtained by inverting bits).

| **Decimal** | **BCD (8421)** | **Excess-3** |
|-------------|----------------|--------------|
| 0           | 0000           | 0011         |
| 1           | 0001           | 0100         |
| ...         | ...            | ...          |
| 9           | 1001           | 1100         |

**Example**:  
$5_{10}$ in XS-3 → BCD (0101) + 3 (0011) = **1000**  

**Applications**:  
- Older computing systems.  
- Some arithmetic operations (simplifies subtraction).

---

## Comparison: Weighted vs. Non-Weighted Codes

| Feature          | Weighted Codes (BCD, 8421) | Non-Weighted Codes (Gray, XS-3) |
|------------------|----------------------------|----------------------------------|
| **Bit Position Weight** | Yes (e.g., 8-4-2-1) | No |
| **Arithmetic Use** | Common (e.g., BCD adders) | Rare (except XS-3) |
| **Error Detection** | No | Yes (Gray code reduces glitches) |
| **Sequential Changes** | Multiple bits may change | Only **one bit changes** (Gray) |

---

## Key Takeaways
- **Weighted Codes (BCD, 8421, 2421)** → Used in arithmetic operations.
- **Non-Weighted Codes (Gray, XS-3)** → Used in sequencing, error detection.
- **Gray Code** → Prevents glitches in digital transitions.
- **Excess-3** → Simplifies subtraction in some cases.



# Boolean Algebra in Digital Electronics

Boolean algebra is the mathematical foundation of **digital logic circuits**. It deals with **binary variables (0 and 1)** and **logical operations (AND, OR, NOT)**. Below is a structured breakdown of key concepts:

---

### Basic Theorems and Properties
Boolean algebra follows fundamental laws similar to conventional algebra but with binary operations.

#### (a) Fundamental Operations

| Operation | Symbol | Expression |
|-----------|--------|------------|
| **AND**   | $\cdot$ or none | $A \cdot B$ |
| **OR**    | $+$ | $A + B$ |
| **NOT**   | $\overline{A}$ or $A'$ | $\overline{A}$ |

#### (b) Boolean Postulates
1. **Identity Law**  
   - $A + 0 = A$  
   - $A \cdot 1 = A$  
2. **Null Law**  
   - $A + 1 = 1$  
   - $A \cdot 0 = 0$  
3. **Idempotent Law**  
   - $A + A = A$  
   - $A \cdot A = A$  
4. **Inverse Law**  
   - $A + \overline{A} = 1$  
   - $A \cdot \overline{A} = 0$  
5. **Commutative Law**  
   - $A + B = B + A$  
   - $A \cdot B = B \cdot A$  
6. **Associative Law**  
   - $A + (B + C) = (A + B) + C$  
   - $A \cdot (B \cdot C) = (A \cdot B) \cdot C$  
7. **Distributive Law**  
   - $A \cdot (B + C) = A \cdot B + A \cdot C$  
   - $A + (B \cdot C) = (A + B) \cdot (A + C)$  
8. **De Morgan’s Theorem**  
   - $\overline{A + B} = \overline{A} \cdot \overline{B}$  
   - $\overline{A \cdot B} = \overline{A} + \overline{B}$  

#### (c) Duality Principle
- Any Boolean expression remains valid if:  
  - $+$ and $\cdot$ are swapped.  
  - $0$ and $1$ are swapped.  

**Example**:  
$A + 0 = A$ → Dual is $A \cdot 1 = A$.  

---

### Switching functions: Canonical (SOP, POS) and Standard forms
#### 1. Switching Functions
A **switching function** is a Boolean expression that defines the output of a digital circuit based on its input variables. It can be represented as:
$F(A, B, C, \dots) = \text{Boolean expression}$

Example:  
$F(A, B) = A + \overline{A}B$

---

#### 2. Canonical Forms
Canonical forms are **unique** and **standardized** ways of representing Boolean functions using **minterms** (for SOP) or **maxterms** (for POS).

#### (a) Sum of Products (SOP) Form (Minterm Canonical Form)
- Represents a function as a **sum (OR)** of **minterms (AND terms)**.
- A **minterm** is a product term where **all variables appear exactly once** (either in true or complemented form).
- Each minterm corresponds to a **row in the truth table** where the output is **1**.

#### **Example:**
Consider a function $F(A, B)$ with the truth table:

| A | B | F |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

The **SOP form** is:
$F(A, B) = \overline{A}\overline{B} + A\overline{B} + AB$
(OR of all minterms where $F = 1$)

#### Minterm Notation:
$F(A, B) = \sum m(0, 2, 3)$
(where $m_0 = \overline{A}\overline{B}, m_2 = A\overline{B}, m_3 = AB$)

---

#### (b) Product of Sums (POS) Form (Maxterm Canonical Form)
- Represents a function as a **product (AND)** of **maxterms (OR terms)**.
- A **maxterm** is a sum term where **all variables appear exactly once** (either true or complemented).
- Each maxterm corresponds to a **row in the truth table** where the output is **0**.

#### Example:
Using the same truth table as above:

| A | B | F |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

The **POS form** is:
$F(A, B) = (A + \overline{B})$
(Only one maxterm where $F = 0$, i.e., $M_1 = A + \overline{B}$)

#### Maxterm Notation:
$F(A, B) = \prod M(1)$

---

#### 3. Standard Forms
Standard forms are **simplified versions** of canonical forms where **not all variables need to appear** in every term.

##### (a) Standard SOP Form
- A simplified version of the canonical SOP.
- Each product term may **not** contain all variables.

**Example:**
$F(A, B, C) = AB + \overline{B}C$  
(Not all terms have all variables.)

##### (b) Standard POS Form
- A simplified version of the canonical POS.
- Each sum term may **not** contain all variables.

**Example:**
$F(A, B, C) = (A + B)(\overline{B} + C)$  
(Not all terms have all variables.)

---

#### Key Differences: Canonical vs. Standard Forms

| Feature          | Canonical Form | Standard Form |
|------------------|----------------|---------------|
| **Uniqueness**   | Unique for a given truth table | Not unique (multiple possible forms) |
| **Completeness** | All variables appear in every term | Some variables may be missing |
| **Complexity**   | More complex (more terms) | Simplified (fewer terms) |

### 3. Algebraic Simplification of Boolean Expressions
Simplification reduces the number of logic gates required in a circuit.

#### (a) Techniques
1. **Using Boolean Theorems**  
   - Apply **Distributive, De Morgan’s, and Identity Laws**.  
   - **Example**:  
     $A\overline{B} + AB = A(\overline{B} + B) = A \cdot 1 = A$  

2. **Consensus Theorem**  
   - $AB + \overline{A}C + BC = AB + \overline{A}C$  

3. **Karnaugh Maps (K-Maps)** (Graphical method for 2-6 variables).  

#### (b) Example Simplifications
1. **Simplify $F = \overline{A}B + A\overline{B} + AB$**  
   - $F = \overline{A}B + A(\overline{B} + B)$  
   - $F = \overline{A}B + A$ (since $\overline{B} + B = 1$)  
   - $F = A + B$ (Absorption Law)  

2. **Simplify $F = (A + B)(A + \overline{B})$**  
   - $F = A + B\overline{B}$ (Distributive Law)  
   - $F = A + 0 = A$  

---

## Summary Table

| **Concept** | **Key Points** |
|-------------|----------------|
| **Boolean Theorems** | Identity, Null, Distributive, De Morgan’s Laws. |
| **Canonical Forms** | SOP (minterms), POS (maxterms). |
| **Standard Forms** | Simplified SOP/POS. |
| **Simplification** | Boolean algebra rules, K-Maps. |

---

## Applications
- **Logic gate minimization** (fewer transistors, lower power).  
- **Digital circuit design** (adders, multiplexers).  
- **Error detection and correction**.  


# Digital Logic Gates: Fundamentals and Applications
Logic gates are the **basic building blocks** of digital circuits. They perform **Boolean operations** on binary inputs (0 and 1) to produce a single output. Below is a detailed breakdown of logic gates, universal gates, and their implementations.

![](https://www.gsnetwork.com/wp-content/uploads/2023/01/digital-logic-gates-symbols-and-truth-tables.jpg)
## 1. Basic Logic Gates
### (a) AND Gate

- **Truth Table**:

| A   | B   | Y = A·B |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

- **Function**: Output is **1 only if all inputs are 1**.

### (b) OR Gate

- **Truth Table**:

| A | B | Y = A+B |
|---|---|--------|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

- **Function**: Output is **1 if at least one input is 1**.

### (c) NOT Gate (Inverter)

- **Truth Table**:
  
| A | Y = A' |
|---|-------|
| 0 | 1 |
| 1 | 0 |
- **Function**: Output is the **complement** of the input.

### (d) NAND Gate (NOT-AND)
- **Truth Table**:
  
| A | B | Y = (A·B)' |
|---|---|-----------|
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |
- **Function**: Output is **0 only if all inputs are 1**.

### (e) NOR Gate (NOT-OR)

- **Truth Table**:
  
| A | B | Y = (A+B)' |
|---|---|-----------|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 0 |
- **Function**: Output is **1 only if all inputs are 0**.

### (f) XOR Gate (Exclusive-OR)

- **Truth Table**:
  
| A | B | Y = A⊕B |
|---|---|-------|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |
- **Function**: Output is **1 if inputs are different**.

### (g) XNOR Gate (Exclusive-NOR)

- **Truth Table**:
  
| A | B | Y = A⊙B |
|---|---|-------|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |
- **Function**: Output is **1 if inputs are the same**.

---

## 2. Universal Gates
Universal gates can **implement any Boolean function** without needing other gates. The two universal gates are:

### (a) NAND Gate as Universal
- Can implement **NOT, AND, OR**:
  - **NOT**: `A NAND A = A'`  
  - **AND**: `(A NAND B) NAND (A NAND B) = A·B`  
  - **OR**: `(A NAND A) NAND (B NAND B) = A+B`  

### (b) NOR Gate as Universal
- Can implement **NOT, AND, OR**:
  - **NOT**: `A NOR A = A'`  
  - **OR**: `(A NOR B) NOR (A NOR B) = A+B`  
  - **AND**: `(A NOR A) NOR (B NOR B) = A·B`  

---

## 3. Multilevel NAND/NOR Realizations
### (a) NAND-NAND Realization (SOP Form)
- Convert **Sum of Products (SOP)** to **NAND gates only**.
- **Example**:  
  $F = AB + CD$ → Implement as:  
  ```
  AB → NAND + NAND (invert twice)  
  CD → NAND + NAND  
  Final OR → NAND (De Morgan’s Law)  
  ```

### (b) NOR-NOR Realization (POS Form)
- Convert **Product of Sums (POS)** to **NOR gates only**.
- **Example**:  
  $F = (A+B)(C+D)$ → Implement as:  
  ```
  A+B → NOR + NOR (invert twice)  
  C+D → NOR + NOR  
  Final AND → NOR (De Morgan’s Law)  
  ```

---

## Summary Table

| **Gate** | **Function** | **Universal?** |
|----------|-------------|----------------|
| **AND**  | A·B | No |
| **OR**   | A+B | No |
| **NOT**  | A' | No |
| **NAND** | (A·B)' | **Yes** |
| **NOR**  | (A+B)' | **Yes** |
| **XOR**  | A⊕B | No |
| **XNOR** | A⊙B | No |

---

## Applications
- **NAND/NOR**: Used in **IC design** (simplifies fabrication).  
- **XOR**: Used in **adders, parity checkers, cryptography**.  
- **Universal Gates**: Help in **minimizing circuit cost**.  

