## Preparing Data and Filtering

## 2.3.1 Introduction

- **Challenge:** Large networks are often too dense to visualize clearly.
    
- **Core Strategies:**
    
    1. **Summarization:** Rolling up relationship data into a weighted form (e.g., merging duplicate interactions).
        
    2. **Filtering:** Removing selected vertices or edges to identify extreme values or specific subsets.
        
- **Goal:** Create understandable visualizations by reducing edge crossings and vertex overlaps.
    

---

## 2.3.2 Serious Eats Network Example

The **Serious Eats Network** is based on community members (people) posting to blogs and discussion forums.

#### 2.3.2.1 Multimodal Network Data

- **Multimodal (Bimodal/Two-Mode):** A network with different types of vertices (e.g., people and the blogs/forums they post to).
    
- **Affiliation Networks:** A specific type of bimodal network connecting people with events or organizations they are affiliated with.
    

#### 2.3.2.2 Merging Duplicate Edges

- **Process:** NodeXL’s "Merge Duplicate Edges" feature condenses multiple identical rows into one.
    
- **Result:** A new **Edge Weight** column is created, indicating how many times that specific connection occurred. No data is lost; the weights simply summarize the frequency.
    

#### 2.3.2.3 - 2.3.2.6 Visualizing Multimodal Data

- **Sorting:** Alphabetical sorting (A to Z) helps group vertices of the same type (e.g., those starting with "B_" for blog or "F_" for forum).
    
- **Visual Coding:**
    
    - **People:** Black disks.
        
    - **Blogs:** Blue solid diamonds.
        
    - **Forums:** Orange solid squares.
        
- **Layout Management:** The "Put smaller components at the bottom" option helps separate isolated groups from the "Giant Component."
    

---

## 2.3.3 Filtering Strategies

Filtering reduces clutter to reveal hidden structures or important features.

#### Types of Filtering:

1. **Value-based:** Removes items above or below a numerical value (e.g., age, degree, or edge weight).
    
2. **Categorical:** Retains or removes items based on a category (e.g., region or gender).
    
3. **Ordinal:** Filters by rank (e.g., showing only the "Top 10" most connected users).
    

#### 2.3.3.1 Dynamic Filters

- **Function:** Real-time sliders that hide/show data in the graph pane without deleting it from the workbook.
    
- **Frequency Distributions:** Histograms above sliders show the concentration of data at different values.
    
- **Filter Opacity:** Allows "filtered out" items to remain visible as faint "ghost" images (e.g., setting opacity to 10%).
    

#### 2.3.3.2 Filtering via Visibility Column

- **Method:** Using the **Autofill Columns** feature to populate the "Visibility" column.
    
- **Difference from Dynamic Filtering:** Items marked as "Skip" in the visibility column are not read into the graph at all. This allows layout algorithms to treat the remaining nodes as the entire network.
    

#### 2.3.3.3 Subgraph Images

- **Egocentric Networks:** Visualizing the "local neighborhood" of a single vertex.
    
- **Levels of Adjacency:** * **1.0:** The vertex and its neighbors.
    
    - **1.5:** The vertex, its neighbors, and connections _between_ those neighbors.
        
    - **2.0:** Includes "friends of friends" (FOAF).
        
- **Purpose:** Helps identify social roles (e.g., distinguishing between a user who posts in isolated topics vs. a "hub" user).
    

---

## 2.3.4 - 2.3.6 Summary and Research

- **Practitioner Perspective:** Filtering is an iterative process. Analysts use dynamic filters to find a threshold and then hard-filter (using Visibility) to create a clean, persuasive final image.
    
- **Researcher Perspective:** Future goals include **Process Models**—standardized sequences of actions (filtering, layout, and metrics) that ensure a complete and systematic exploration of social media data.
    

---

**Study Tip:** Remember the difference between **Hidden/Hide** (Dynamic Filters) and **Skip** (Visibility Column). Skipping removes the data from metric calculations and layout processing; Hiding just makes it invisible.
