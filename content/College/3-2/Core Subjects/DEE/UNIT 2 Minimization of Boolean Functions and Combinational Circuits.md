## Topics

- **Minimization Techniques**:
  - Karnaugh Map (K-map) method for up to four variables.
  - Don’t care conditions in K-maps.
  - Tabular method (Quine-McCluskey method).
- **Combinational Logic Circuits**:
  - Adders (Half Adder, Full Adder), Subtractors (Half Subtractor, Full Subtractor).
  - Comparators, Multiplexers, Demultiplexers.
  - Encoders, Decoders, Code Converters.
  - Hazards and Hazard-free relations.
  - 
## 1. Minimization Techniques
The goal of Boolean function minimization is to **reduce the number of logic gates** and **simplify circuit design** while maintaining the same functionality. The primary methods include:

### (a) Karnaugh Map (K-map) Method
- A **graphical method** for simplifying Boolean expressions with **2 to 4 variables**.
- Works by **grouping adjacent 1’s** (for SOP) or **0’s** (for POS) in a grid.

#### Steps for K-map Simplification (SOP Form)
1. **Draw the K-map** based on the number of variables.
2. **Fill the map** with 1’s (minterms) and 0’s (or don’t cares, if any).
3. **Group adjacent 1’s** in powers of 2 (1, 2, 4, 8, etc.).
   - Groups must be **rectangular** and as large as possible.
   - **Wrap-around grouping** is allowed (top-bottom, left-right).
4. **Write the simplified expression**:
   - For each group, identify **unchanged variables**.
   - If a variable changes within a group, **eliminate it**.

#### Example (3-variable K-map)
Simplify $F(A,B,C) = \sum m(0,1,2,4,6)$.  

| **AB\C** | **0** | **1** |
|---------|------|------|
| **00**  | 1    | 1    |
| **01**  | 1    | 0    |
| **11**  | 0    | 0    |
| **10**  | 1    | 1    |

**Groupings**:
1. **Blue**: $\overline{A} \overline{B}$ (m0, m1, wrap-around to m4, m5 → but m5 is 0, so only m0, m1, m4).
2. **Red**: $B \overline{C}$ (m2, m6).

**Simplified SOP**:  
$F = \overline{A} \overline{B} + B \overline{C}$

#### Don’t Care Conditions in K-maps
- Sometimes, certain input combinations **do not affect output** (denoted by **X**).
- **Can be treated as 0 or 1** to maximize grouping.

**Example**:  
Simplify $F(A,B,C) = \sum m(0,2,4) + d(1,3)$.  

| **AB\C** | **0** | **1** |
|---------|------|------|
| **00**  | 1    | X    |
| **01**  | 0    | X    |
| **11**  | 0    | 0    |
| **10**  | 1    | 0    |

**Groupings**:
- Use **X at m1** to form a larger group with m0.
- **Simplified SOP**: $F = \overline{A} \overline{C} + A \overline{B} \overline{C}$.

---

### (b) Quine-McCluskey (Tabular) Method
- A **step-by-step algorithmic approach** for minimizing Boolean functions with **any number of variables**.
- More systematic than K-maps but **complex for large functions**.

#### **Steps**:
1. **List all minterms** in binary form.
2. **Group minterms** by the number of 1’s.
3. **Compare and combine** terms that differ by **one bit** (marked with a dash "-").
4. **Repeat** until no further combinations are possible.
5. **Identify essential prime implicants** (must-include terms).
6. **Select minimal cover** (minimum number of largest groups).

#### Example
Simplify $F(A,B,C,D) = \sum m(0,1,2,5,6,7,8,9,10,14)$.

**Step 1**: Group minterms by number of 1’s.  

| **Group** | **Minterms** | **Binary** |
|-----------|--------------|------------|
| 0         | 0            | 0000       |
| 1         | 1,2,8        | 0001, 0010, 1000 |
| 2         | 5,6,9,10     | 0101, 0110, 1001, 1010 |
| 3         | 7,14         | 0111, 1110 |

**Step 2**: Combine terms where **one bit differs**.  
- (0,1) → 000-  
- (0,2) → 00-0  
- (1,5) → 0-01  
- (2,6) → 0-10  
- (8,9) → 100-  
- (8,10) → 10-0  
- (5,7) → 01-1  
- (6,7) → 011-  
- (6,14) → -110  
- (10,14) → 1-10  

**Step 3**: Repeat until no more combinations.  
- Final prime implicants:  
  $\overline{A} \overline{B} \overline{C}, \overline{A} \overline{B} \overline{D}, \overline{A} C \overline{D}, A \overline{B} \overline{C}, B C D, A B \overline{D}$

**Step 4**: Select **essential prime implicants** (must cover all minterms).  
- **Minimal SOP**:  
  $F = \overline{A} \overline{B} \overline{C} + A \overline{B} \overline{C} + B C D$

---

## 2. Combinational Circuits
Combinational circuits produce outputs **based only on current inputs** (no memory). Examples:

### (a) Multiplexers (MUX)
- Selects **one of many inputs** based on control signals.
- **Example**: 2:1 MUX → $Y = S \cdot D_0 + \overline{S} \cdot D_1$.

### (b) Demultiplexers (DEMUX)
- Routes **one input to one of many outputs**.
- **Example**: 1:4 DEMUX → Controlled by 2 select lines.

### (c) Encoders & Decoders
- **Encoder**: Converts multiple inputs into a coded output (e.g., 4:2 encoder).
- **Decoder**: Converts coded inputs into outputs (e.g., 3:8 decoder).

### (d) Adders
- **Half Adder**: Adds 2 bits (Sum = A⊕B, Carry = A·B).
- **Full Adder**: Adds 3 bits (including carry-in).

---

## Summary Table

| **Method**          | **Best For**       | **Advantages**                     |
|---------------------|-------------------|------------------------------------|
| **K-map**           | 2-4 variables     | Visual, quick for small functions  |
| **Quine-McCluskey** | Any variables     | Systematic, works for large functions |
| **Don’t Cares**     | Optimizing logic  | Reduces gate count                 |

---

## Key Takeaways
- **K-maps** are best for **manual minimization** (up to 4 variables).
- **Quine-McCluskey** is **algorithmic** and scalable.
- **Don’t cares** help in **further optimization**.
- **Combinational circuits** include MUX, DEMUX, adders, and decoders.

# Combinational Logic Circuits

Combinational circuits are digital circuits where the **output depends only on the current inputs** (no memory element). They perform various logical operations and are fundamental building blocks in digital systems.

---

## 1. Arithmetic Circuits
### (a) Half Adder (HA)
- Adds **two 1-bit binary numbers** (A, B).
- **Outputs**: Sum (S) and Carry (C).
- **Boolean Equations**:
  - $S = A \oplus B$ (XOR)
  - $C = A \cdot B$ (AND)

| **A** | **B** | **S** | **C** |
|-------|-------|-------|-------|
| 0     | 0     | 0     | 0     |
| 0     | 1     | 1     | 0     |
| 1     | 0     | 1     | 0     |
| 1     | 1     | 0     | 1     |


### (b) Full Adder (FA)
- Adds **three 1-bit numbers** (A, B, and Carry-in $C_{in}$).
- **Outputs**: Sum (S) and Carry-out ($C_{out}$).
- **Boolean Equations**:
  - $S = A \oplus B \oplus C_{in}$
  - $C_{out} = (A \cdot B) + (B \cdot C_{in}) + (A \cdot C_{in})$

| **A** | **B** | **C_in** | **S** | **C_out** |
|-------|-------|----------|-------|-----------|
| 0     | 0     | 0        | 0     | 0         |
| 0     | 1     | 0        | 1     | 0         |
| 1     | 0     | 0        | 1     | 0         |
| 1     | 1     | 0        | 0     | 1         |
| ...   | ...   | ...      | ...   | ...       |

**Logic Diagram**:
- Can be built using **two Half Adders + OR gate**.

### (c) Half Subtractor (HS)
- Subtracts **two 1-bit numbers** (A - B).
- **Outputs**: Difference (D) and Borrow (B_out).
- **Boolean Equations**:
  - $D = A \oplus B$
  - $B_{out} = \overline{A} \cdot B$

| **A** | **B** | **D** | **B_out** |
|-------|-------|-------|-----------|
| 0     | 0     | 0     | 0         |
| 0     | 1     | 1     | 1         |
| 1     | 0     | 1     | 0         |
| 1     | 1     | 0     | 0         |

### (d) Full Subtractor (FS)
- Subtracts **three 1-bit numbers** (A, B, Borrow-in $B_{in}$).
- **Outputs**: Difference (D) and Borrow-out ($B_{out}$).
- **Boolean Equations**:
  - $D = A \oplus B \oplus B_{in}$
  - $B_{out} = (\overline{A} \cdot B) + (B \cdot B_{in}) + (\overline{A} \cdot B_{in})$

---

## 2. Data Selectors & Distributors
### (a) Multiplexer (MUX)
- **Selects one input** from many based on control lines.
- **Example**: 4:1 MUX (2 select lines, 4 inputs, 1 output).
- **Boolean Equation**:
  - $Y = S_1 S_0 D_0 + S_1 \overline{S_0} D_1 + \overline{S_1} S_0 D_2 + \overline{S_1} \overline{S_0} D_3$

### (b) Demultiplexer (DEMUX)
- **Routes one input** to one of many outputs.
- **Example**: 1:4 DEMUX (2 select lines, 1 input, 4 outputs).

---

## 3. Encoders & Decoders
### (a) Encoder
- Converts **2ⁿ inputs** into an **n-bit code**.
- **Example**: 4:2 Encoder (4 inputs, 2 outputs).

| **Inputs (I3 I2 I1 I0)** | **Outputs (Y1 Y0)** |
|--------------------------|---------------------|
| 0001                     | 00                  |
| 0010                     | 01                  |
| 0100                     | 10                  |
| 1000                     | 11                  |

### (b) Decoder
- Converts **n-bit code** into **2ⁿ outputs**.
- **Example**: 2:4 Decoder (2 inputs, 4 outputs).

| **Inputs (A B)** | **Outputs (D3 D2 D1 D0)** |
|------------------|---------------------------|
| 00               | 0001                      |
| 01               | 0010                      |
| 10               | 0100                      |
| 11               | 1000                      |

### (c) Code Converters
- Converts one binary code to another (e.g., **Binary to Gray**, **BCD to Excess-3**).

---

## 4. Comparators
- **Compares two binary numbers** (A, B).
- **Outputs**: A > B, A < B, A = B.
- **Example**: 1-bit comparator.

| **A** | **B** | **A > B** | **A < B** | **A = B** |
|-------|-------|-----------|-----------|-----------|
| 0     | 0     | 0         | 0         | 1         |
| 0     | 1     | 0         | 1         | 0         |
| 1     | 0     | 1         | 0         | 0         |
| 1     | 1     | 0         | 0         | 1         |

---

## 5. Hazards in Combinational Circuits
### (a) Static Hazard
- Occurs when **output temporarily changes** due to unequal path delays.
- **Example**: Output should remain **1**, but glitches to **0**.

### (b) Dynamic Hazard
- Occurs when **multiple transitions** happen before output stabilizes.

### (c) Hazard-Free Design
- **Solution**: Add **redundant terms** in K-map to eliminate race conditions.

---

## Summary Table

| **Circuit**         | **Function**                          | **Key Equations**                     |
|----------------------|---------------------------------------|---------------------------------------|
| **Half Adder**       | Adds 2 bits                           | $S = A \oplus B$, $C = A \cdot B$ |
| **Full Adder**       | Adds 3 bits                           | $S = A \oplus B \oplus C_{in}$    |
| **Multiplexer**      | Data selector                         | $Y = \sum (S_i \cdot D_i)$        |
| **Decoder**          | Converts n-bit to 2ⁿ outputs          | $D_i =$ minterm activation        |
| **Comparator**       | Compares two numbers                  | $A > B, A < B, A = B$             |

---

## Applications
- **Adders**: Used in ALUs, CPUs.
- **MUX/DEMUX**: Data routing, memory addressing.
- **Encoders/Decoders**: Keyboards, memory systems.
- **Hazard-Free Design**: Critical in high-speed circuits.

