##### 3rd Feb 2025

### DEE: Digital Electronics for Engineering

- Course Objectives:
  - To provide the basic understanding of properties and theorems of Boolean Algebra.
  - To provide knowledge on **logic gates**, universal gates, and their classifications.
  - To teach the techniques to reduce Boolean expressions by using **K-map (Karnaugh Map)**.
  - To give an introduction to logic families and different types of **Integrated Circuits** (IC 741, operational amplifier _Op-Amp_).

---

#### Unit 1: Number Systems and Boolean Algebra

1.1: Number Systems:
- Number systems, complements of Number systems, and binary codes.

1.2: Boolean Algebra:
- Properties and theorems of Boolean Algebra, **Logic gates** and universal gates, Multilevel NAND, NOR gates.

---

#### Unit 2: Minimization of Boolean Functions and Combinational Circuits

2.1: Minimization Techniques:
- **K-Map** (up to four variables) and Don't Care conditions, Tabular method.

2.2: Combinational Circuits:
- Design and analysis of adders, subtractors, comparators, **multiplexers (MUX)**, demultiplexers (DMUX), decoders, encoders, code converters, and **hazard-free realizations**.

---

##### 4th Feb 2025

#### Unit 3: Sequential Circuits
- Study of sequential circuits, including:
  - Flip-Flops (SR, JK, **JK Master-Slave**, D, T types).
  - Registers (SISO, SIPO, PISO, PIPO).
  - Counters (Ripple counters, Decade counters).

---

#### Unit 4: Logic Families
- Overview of logic families such as RTL, DTL, **TTL**, CMOS, ECL etc.
- AND, OR, NOT gates using diodes and transistors.
- TTL Characteristics
  - Standard TTL.
  - Open Collector.
  - Tri-State.

---

#### Unit 5: Integrated Circuits (ICs)
- IC Interface:
  - IC families/Classification.
- Operational Amplifiers:
  - Ideal (IC 741 Op-Amp) and practical characteristics.
  - DC and AC characteristics of Op-Amps.
  - Modes: Inverting, Non-Inverting.

---

# Unit 1

### Number Systems

Number systems are useful in digital computer technology which give reliable and efficient arithmetic operations.
It is broadly classified into two types:

1. **Non-Positional Number Systems** (e.g., Roman Numerals).
2. **Positional Number Systems**.

---

#### Positional Number Systems

A positional number system must contain a **Radix/Base**. The weight of a digit depends on its relative position within the number.

![[Pasted image 20250204191951.png]]![[Pasted image 20250204192011.png]]

**Radix/Base**:  
It is a term used to describe the positional number system.
or
It specifies the number of symbols used for corresponding number system.

---

| **S.No** | **Number System** | **Base/Radix** | **Essential Numbers**                                                  |
| -------- | ----------------- | -------------- | ---------------------------------------------------------------------- |
| 1        | Binary            | 2              | 0, 1                                                                   |
| 2        | Octal             | 8              | 0, 1, 2, 3, 4, 5, 6, 7                                                 |
| 3        | Decimal           | 10             | 0, 1, 2, 3, 4, 5, 6, 7, 8, 9                                           |
| 4        | Hexadecimal       | 16             | 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A(10), B(11), C(12), D(13), E(14), F(15) |

---

### Representation of Numbers

Each binary digit is called a **BIT** (Binary Digit).

- 1 BIT = Single Binary Digit.

#### 3-Bit Binary Representation

| **Octal** | **Binary (3-bit)**<br>$2^2,2^1,2^0$ |
| --------- | ----------------------------------- |
| 0         | 000                                 |
| 1         | 001                                 |
| 2         | 010                                 |
| 3         | 011                                 |
| 4         | 100                                 |
| 5         | 101                                 |
| 6         | 110                                 |
| 7         | 111                                 |

---

#### 4-Bit Binary Representation

| **Hexadecimal** | **Binary (4-bit)**<br>$2^3,2^2,2^1,2^0$ |
| --------------- | --------------------------------------- |
| 0               | 0000                                    |
| 1               | 0001                                    |
| 2               | 0010                                    |
| 3               | 0011                                    |
| 4               | 0100                                    |
| 5               | 0101                                    |
| 6               | 0110                                    |
| 7               | 0111                                    |
| 8               | 1000                                    |
| 9               | 1001                                    |
| A               | 1010                                    |
| B               | 1011                                    |
| C               | 1100                                    |
| D               | 1101                                    |
| E               | 1110                                    |
| F               | 1111                                    |

#### 2-Bit Binary Representation

| **Decimal** | **Binary (2-bit)**<br>$2^1,2^0$ |
| ----------- | ------------------------------- |
| 0           | 00                              |
| 1           | 01                              |
| 2           | 10                              |
| 3           | 11                              |

##### 5th Feb 2025

### Number System Conversion

Any decimal system is converted into any base.

- Convert Integer part of any base number system by successive division.
- Convert Fractional part of any base number system by successive multiplication.
- This method is popularly called as double dabble Method.

### Decimal to Binary:

**Example:$(24.8)_{10}$**

- **Integer Part:$24$**

  $$
  \begin{aligned}
  &2 | \underline{24} \quad \text{Remainder: } 0 \\
  &2 | \underline{12} \quad \text{Remainder: } 0 \\
  &2 | \underline{6} \quad \text{Remainder: } 0 \\
  &2 | \underline{3} \quad \text{Remainder: } 1 \\
  &2 | \underline{1} \quad \text{Remainder: } 1 \\
  \end{aligned}
  $$

  Binary Integer:$(11000)_2$

- **Fractional Part:$0.8$**
  $$
  \begin{aligned}
  &0.8 \times 2 = 1.6 \quad \text{Carry: } 1 \\
  &0.6 \times 2 = 1.2 \quad \text{Carry: } 1 \\
  &0.2 \times 2 = 0.4 \quad \text{Carry: } 0 \\
  &0.4 \times 2 = 0.8 \quad \text{Carry: } 0 \\
  \end{aligned}
  $$
  Binary Fraction:$(0.1100)_2$

Final Result:$(11000.1100)_2$

---

### Decimal to Octal:

**Example:$(215.14)_{10}$**

- **Integer Part:$215$**

  $$
  \begin{aligned}
  &8 | \underline{215} \quad \text{Remainder: } 7 \\
  &8 | \underline{26} \quad \text{Remainder: } 2 \\
  &8 | \underline{3} \quad \text{Remainder: } 3 \\
  \end{aligned}
  $$

  Octal Integer:$(327)_8$

- **Fractional Part:$0.14$**
  $$
  \begin{aligned}
  &0.14 \times 8 = 1.12 \quad \text{Carry: } 1 \\
  &0.12 \times 8 = 0.96 \quad \text{Carry: } 0 \\
  &0.96 \times 8 = 7.68 \quad \text{Carry: } 7 \\
  \end{aligned}
  $$
  Octal Fraction:$(0.107)_8$

Final Result:$(327.107)_8$

---

### Decimal to Hexadecimal:

**Example:$(1056)_{10}$**

- **Integer Part:$1056$**
  $$
  \begin{aligned}
  &16 | \underline{1056} \quad \text{Remainder: } 0 \\
  &16 | \underline{66} \quad \text{Remainder: } 2 \\
  &16 | \underline{4} \quad \text{Remainder: } 4 \\
  \end{aligned}
  $$
  Hexadecimal Integer:$(420)_{16}$

Final Result:$(420)_{16}$

---

##### 6th Feb 2025

### Any Base to Decimal:

**Example:$(6BE)_{16}$**

$$
\begin{aligned}
(6BE)_{16} &= 6 \times 16^2 + 11 \times 16^1 + 14 \times 16^0 \\
&= 6 \times 256 + 11 \times 16 + 14 \times 1 \\
&= 1536 + 176 + 14 \\
&= (1726)_{10}
\end{aligned}
$$

---

### Problems:

1. **$(101011)_2 = (?)_{16}$**

   - Group binary into sets of 4 bits:$0010 \, 1011$
   - Convert each group to hexadecimal:$2B$
   - Final Result:$(2B)_{16}$

2. **$(ZEBA9)_{16} = (?)_{10}$**

   - Expand using positional values:
     $$
      ZEBA9_{16} = 15 \times 16^4 + 14 \times 16^3 + 11 \times 16^2 + 10 \times 16^1 + 9 \times 16^0
     $$

3. **$(798)_{10} = (?)_8$**

   - Perform successive division by 8:
     $$
      \begin{aligned}
      &8 | \underline{798} \quad \text{Remainder: } 6 \\
      &8 | \underline{99} \quad \text{Remainder: } 3 \\
      &8 | \underline{12} \quad \text{Remainder: } 4 \\
      &8 | \underline{1} \quad \text{Remainder: } 1 \\
      \end{aligned}
     $$
   - Octal Result:$(1436)_8$

4. **$(145)_8 = (?)_2$**
   - Convert each octal digit to 3-bit binary:
     $$
      1_8 = 001_2, \, 4_8 = 100_2, \, 5_8 = 101_2
     $$
   - Combine:$(001 \, 100 \, 101)_2$
   - Final Result:$(1100101)_2$

Here is the corrected and properly formatted version of your notes using single `$` for mathematical notations:

---

### Octal to Binary:

- One octal digit is converted into binary; we require **3 binary bits**.

| **Octal** | **Binary** |
| --------- | ---------- |
| 0         | 000        |
| 1         | 001        |
| 2         | 010        |
| 3         | 011        |
| 4         | 100        |
| 5         | 101        |
| 6         | 110        |
| 7         | 111        |

**Example:**
$(2357)_8$

- Convert each octal digit to 3-bit binary:
  $$
    2 \rightarrow 010, \, 3 \rightarrow 011, \, 5 \rightarrow 101, \, 7 \rightarrow 111
  $$
- Combine:$(010 \, 011 \, 101 \, 111)_2$
- Final Result:$(010011101111)_2$

### **Binary to Octal:**

- Group binary digits into sets of **3 bits** (starting from the right).
- Convert each group to its corresponding octal digit.

**Examples:**

1. **Binary:$1010111011$**

   - Group into 3 bits:$001 \, 010 \, 111 \, 011$
   - Convert:$1 \, 2 \, 7 \, 3$
   - Final Result:$(1273)_8$

2. **Binary:$1110111011011$**

   - Group into 3 bits:$001 \, 110 \, 111 \, 011 \, 011$
   - Convert:$1 \, 6 \, 7 \, 3 \, 3$
   - Final Result:$(16733)_8$

3. **Binary:$10110101110$**
   - Group into 3 bits:$010 \, 110 \, 101 \, 110$
   - Convert:$2 \, 6 \, 5 \, 6$
   - Final Result:$(2656)_8$

---

### **Hexadecimal to Binary:**

- One hexadecimal digit is converted into binary; we require **4 binary bits**.

| **Hexadecimal** | **Binary** |
| --------------- | ---------- |
| 0               | 0000       |
| 1               | 0001       |
| 2               | 0010       |
| 3               | 0011       |
| 4               | 0100       |
| 5               | 0101       |
| 6               | 0110       |
| 7               | 0111       |
| 8               | 1000       |
| 9               | 1001       |
| A               | 1010       |
| B               | 1011       |
| C               | 1100       |
| D               | 1101       |
| E               | 1110       |
| F               | 1111       |

**Examples:**

1. **Hexadecimal:$F294B$**

   - Convert each hexadecimal digit to 4-bit binary:
     $$
      F \rightarrow 1111, \, 2 \rightarrow 0010, \, 9 \rightarrow 1001, \, 4 \rightarrow 0100, \, B \rightarrow 1011
     $$
   - Combine:$(1111 \, 0010 \, 1001 \, 0100 \, 1011)_2$
   - Final Result:$(11110010100101001011)_2$

2. **Hexadecimal:$379BDF$**
   - Convert each hexadecimal digit to 4-bit binary:
     $$
      3 \rightarrow 0011, \, 7 \rightarrow 0111, \, 9 \rightarrow 1001, \, B \rightarrow 1011, \, D \rightarrow 1101, \, F \rightarrow 1111
     $$
   - Combine:$(0011 \, 0111 \, 1001 \, 1011 \, 1101 \, 1111)_2$
   - Final Result:$(001101111001101111011111)_2$

---

### **Binary to Hexadecimal:**

- Group binary digits into sets of **4 bits** (starting from the right).
- Convert each group to its corresponding hexadecimal digit.

**Examples:**

3. **Binary:$101011011011$**

   - Group into 4 bits:$1010 \, 1101 \, 1011$
   - Convert:$A \, D \, B$
   - Final Result:$(ADB)_{16}$

4. **Binary:$1011011011.111011$**
   - Group into 4 bits:$0010 \, 1101 \, 1011 \, . \, 1110 \, 1100$
   - Convert:$2 \, D \, B \, . \, E \, C$
   - Final Result:$(2DB.EC)_{16}$

---

### **Hexadecimal to Octal:**

- Convert hexadecimal to binary first (4 bits per digit).
- Then convert binary to octal (3 bits per group).

**Example:**
**Hexadecimal:$79BC54$**

- Convert to binary:
  $$
    7 \rightarrow 0111, \, 9 \rightarrow 1001, \, B \rightarrow 1011, \, C \rightarrow 1100, \, 5 \rightarrow 0101, \, 4 \rightarrow 0100
  $$
  Binary:$(0111 \, 1001 \, 1011 \, 1100 \, 0101 \, 0100)_2$
- Group into 3 bits for octal:
  $$
    011 \, 110 \, 011 \, 011 \, 110 \, 001 \, 010 \, 100
  $$
- Convert:$3 \, 6 \, 3 \, 3 \, 6 \, 1 \, 2 \, 4$
- Final Result:$(36336124)_8$

---

### **Octal to Hexadecimal:**

- Convert octal to binary first (3 bits per digit).
- Then convert binary to hexadecimal (4 bits per group).

**Example:**
**Octal:$46321$**

- Convert to binary:
  $$
    4 \rightarrow 100, \, 6 \rightarrow 110, \, 3 \rightarrow 011, \, 2 \rightarrow 010, \, 1 \rightarrow 001
  $$
  Binary:$(100 \, 110 \, 011 \, 010 \, 001)_2$
- Group into 4 bits for hexadecimal:
  $$
    0100 \, 1100 \, 1101 \, 0001
  $$
- Convert:$4 \, C \, D \, 1$
- Final Result:$(4CD1)_{16}$

##### 7th Feb 2025

##### Question:$(FB39)_{16} = ()_4$To convert `FB39` (hexadecimal) to base 4:

###### Step 1: Hexadecimal to Decimal

Expand `FB39`:

$$
FB39_{16} = 15 \cdot 16^3 + 11 \cdot 16^2 + 3 \cdot 16^1 + 9 \cdot 16^0
$$

Calculate:

$$
FB39_{16} = 61440 + 2816 + 48 + 9 = 64313_{10}
$$

###### Step 2: Decimal to Base 4

Divide$64313$by$4$repeatedly, recording remainders:

- $64313 \div 4 = 16078$, Remainder =$1$
- $16078 \div 4 = 4019$, Remainder =$2$
- $4019 \div 4 = 1004$, Remainder =$3$
- $1004 \div 4 = 251$, Remainder =$0$
- $251 \div 4 = 62$, Remainder =$3$
- $62 \div 4 = 15$, Remainder =$2$
- $15 \div 4 = 3$, Remainder =$3$
- $3 \div 4 = 0$, Remainder =$3$

Read remainders from bottom to top:

$$
64313_{10} = 3320321_{4}
$$

$$
\boxed{3320321_{4}}
$$

## Binary Arithmetic

### 1. Binary Addition

Binary addition follows simple rules:

- $0 + 0 = 0$
- $0 + 1 = 1$
- $1 + 0 = 1$
- $1 + 1 = 0$ (carry over 1 to the next higher bit)

### **2. Binary Subtraction**

Binary subtraction follows these rules:

- $0 - 0 = 0$
- $1 - 0 = 1$
- $1 - 1 = 0$
- $0 - 1 = 1$ (borrow 1 from the next higher bit)

### **3. Binary Multiplication**

Binary multiplication is similar to decimal multiplication but simpler because it only involves$0$and$1$:

- $0 \times 0 = 0$
- $0 \times 1 = 0$
- $1 \times 0 = 0$
- $1 \times 1 = 1$

### **4. Binary Division**

| Operation  | Result         |
| ---------- | -------------- |
| $0 \div 0$ | $(0)$Undefined |
| $0 \div 1$ | $0$            |
| $1 \div 0$ | $(0)$Undefined |
| $1 \div 1$ | $1$            |

#### Example: Add $26$ and $13$ in binary

- Decimal:$26 + 13 = 39$
- Binary equivalents: -$26 = 11010$ -$13 = 1101$

Perform binary addition:

```
   11010   (26)
+   1101   (13)
---------
  100111   (39)
```

**Steps:**

1. Start from the rightmost bit.
2. Add bits column by column, carrying over if necessary.
3. Final result:$100111_2$, which equals$39_{10}$.

---

#### Example: Subtract $13$ from $26$ in binary

- Decimal:$26 - 13 = 13$
- Binary equivalents:
  - $26 = 11010$
  - $13 = 1101$

Perform binary subtraction:

```
   11010   (26)
-   1101   (13)
---------
    1101   (13)
```

**Steps:**

1. Start from the rightmost bit.
2. Borrow from the next higher bit if necessary.
3. Final result: $1101_2$, which equals$13_{10}$.

---

- Decimal:$13 - 26 = -13$
- Binary equivalents:
  - $26 = 11010$
  - $13 = 1101$

Perform binary subtraction:

```
    1101   (13)
-  11010   (26)
---------
  110011   (13's 2's complement)
```
