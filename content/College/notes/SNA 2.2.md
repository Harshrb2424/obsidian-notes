## Calculating and Visualizing Network Metrics

## 2.2.1 Introduction

- **Purpose:** Network metrics (quantitative measures) complement visualization by helping analysts identify important vertices, subgroups, and the overall interconnectedness of a network.
    
- **Aggregate Metrics:** Used to compare entire communities (e.g., density).
    
- **Individual Metrics:** Used to identify specific actors' roles, such as "popular" nodes or "bridge spanners."
    
- **NodeXL Integration:** Metrics calculated in NodeXL can be mapped to visual properties (size, color, etc.) or used for filtering.
    

---

## 2.2.2 - 2.2.3 Computing Graph Metrics (The Kite Network)

The **Kite Network** (by David Krackhardt) is a standard example used to demonstrate different centrality measures.

#### 2.2.3.1 Vertex-Specific Metrics

1. **Degree (Degree Centrality):**
    
    - A count of unique edges connected to a vertex.
        
    - **In-Degree (Directed only):** Number of edges pointing _to_ the vertex (e.g., being invited).
        
    - **Out-Degree (Directed only):** Number of edges pointing _away_ from the vertex (e.g., inviting others).
        
    - _Kite Example:_ **Diane** has the highest degree (6), making her the most "popular."
        
2. **Betweenness Centrality:**
    
    - Measures how often a vertex lies on the shortest path (geodesic) between other vertices.
        
    - Identifies "gatekeepers" or "brokers."
        
    - _Kite Example:_ **Heather** has high betweenness because she is the only bridge between Ike/Jane and the rest of the group.
        
3. **Closeness Centrality:**
    
    - Measures the average shortest distance from a vertex to all others.
        
    - **Note:** In NodeXL v1.0.1.113, a _lower_ score meant _more_ central. In newer versions, the inverse is used (higher is better).
        
    - _Kite Example:_ **Fernando and Garth** are best positioned to spread information quickly.
        
4. **Eigenvector Centrality:**
    
    - Calculates importance based on the importance of your neighbors. A link to a popular person is worth more than a link to a loner.
        
    - _Kite Example:_ **Ed** has a higher score than **Heather** because Ed is connected to the highly popular Diane.
        
2.2. **Clustering Coefficient:**
    
- Measures how connected a vertex's neighbors are to _each other_.
	
- A score of 1 means all your friends know each other (a **clique**).
	

---

## 2.2.3.3 Overall Graph Metrics (Summary Statistics)

- **Connected Components:** Groups of vertices connected to each other but separate from the rest.
    
- **Diameter (Max Geodesic Distance):** The longest "shortest path" between any two nodes in the network.
    
- **Graph Density:** A ratio (0 to 1) of actual edges to the total possible edges. Higher density = more interconnected.
    

---

## 2.2.4 Les Misérables Case Study (Weighted Networks)

This network connects characters from the novel based on co-appearance in scenes.

#### 2.2.4.1 Weighted Edges

- **Edge Weight:** Represents the frequency of interaction (e.g., Valjean and Cosette appear in 31 scenes).
    
- **Visualization:** Edge weights are typically mapped to **Edge Width** or **Edge Opacity**. Using a **Logarithmic Mapping** is often better than linear for data with high variance.
    

#### 2.2.4.3 Identifying Key Roles

- **Jean Valjean:** Highest Degree and Betweenness (the protagonist and main broker).
    
- **Gavroche:** Highest Eigenvector Centrality (the "courier" linking many different character groups).
    
- **Myriel (The Priest):** Low Degree but high Betweenness (he is the only link to several characters at the start of the book).
    

---

## 2.2.4.4 Metrics as Coordinates (Scatterplots)

NodeXL allows mapping metrics to **X and Y coordinates** rather than using a standard layout algorithm.

- **Example:** Degree on the X-axis and Betweenness on the Y-axis.
    
- **Benefit:** Makes outliers and "boundary spanners" (low degree but high betweenness) visually obvious.
    
- **Graph Elements:** You can display **Axes** and a **Legend** via the NodeXL ribbon under "Graph Elements."
    

---

## 2.2.5 - 2.2.6 Summary and Research

- **Practitioners:** Combining quantitative metrics with visual attributes (like size/opacity) allows for a much deeper understanding of social roles than visualization alone.
    
- **Researchers:** Focus is currently on **Parallelization** (speeding up calculations for massive networks) and developing better metrics for **Bipartite** (multimodal) graphs.
    

**Study Tip:** Remember that **Betweenness** is about _control/brokering_ (Heather in the Kite), while **Closeness** is about _speed/access_ (Fernando/Garth).
