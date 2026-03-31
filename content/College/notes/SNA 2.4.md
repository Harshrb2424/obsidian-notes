## Clustering and Grouping

## 2.4.1 Introduction to Clusters

- **Definition:** Clusters (also called communities or groups) are pockets of densely connected vertices that are only sparsely connected to other pockets.
    
- **Strategic Value:** Identifying groups helps in recognizing competing or complementary coalitions, potential allies, and key individuals who bridge different groups.
    
- **Groups vs. Hierarchies:** Networks reveal authentic groups based on actual ties (e.g., communication patterns) rather than formal memberships or "org-charts."
    

---

## 2.4.2 The 2007 Senate Voting Analysis

This case study examines the voting patterns of U.S. Senators to identify political coalitions based on "Percent Agreement" (how often two senators vote the same way).

#### 2.4.2.1 Filtering for Structure

- **Problem:** In a weighted network where everyone has at least some connection, the initial visualization is often a "dark mass" of lines.
    
- **Solution:** Filter edges by a threshold (e.g., showing only ties with >65% agreement).
    
- **Outcome:** This "skips" weak ties, allowing the layout algorithm to visually separate the senators into distinct groups (Democrats vs. Republicans).
    

#### 2.4.2.2 Automatic Clustering in NodeXL

- **Algorithm:** NodeXL uses a dynamic algorithm (Wakita & Tsurumi) that finds groups without needing a predetermined number of clusters.
    
- **Logic:** It maximizes "modularity"—looking for dense internal connections vs. sparse external ones.
    
- **Worksheets:**
    
    - **Clusters:** Lists the identified groups (C1, C2, etc.) and assigns default colors/shapes.
        
    - **Cluster Vertices:** Maps each individual node to exactly one cluster.
        
- **Limitation:** Algorithms lack cultural context (e.g., they might assign "Red" to Democrats), requiring manual color correction by the analyst.
    

#### 2.4.2.3 Manual Grouping

- Analysts can override algorithms by pasting known affiliations (e.g., official Party labels) into the **Cluster Vertices** worksheet.
    
- **Visual Insight:** Manual grouping in the 2007 Senate data revealed that Independent senators (Lieberman, Sanders) clustered with Democrats, and identified specific "boundary spanners" (Snowe, Collins, Specter) who sat between the two parties.
    

---

## 2.4.3 Les Misérables Character Clusters

- Applying automatic clustering to the _Les Misérables_ co-appearance network groups characters like the "student revolutionaries" together.
    
- **Insight:** Even if vertices aren't adjacent in a specific layout, being in the same cluster color suggests shared ties (e.g., Javert and Fantine grouped together due to mutual connections to Valjean).
    

---

## 2.4.4 Case Study: FCC Lobbying Coalitions

This complex network analyzed joint filings by organizations to the FCC.

- **Vertices:** Organizations.
    
- **Edges:** Joint filings (thickness = frequency).
    
- **Metrics Used:**
    
    - **Vertex Size:** Total filings (investment proxy).
        
    - **Vertex Color:** Eigenvector Centrality (influence/strategic position).
        
- **Analysis:** The layout used the **Fruchterman-Reingold** algorithm followed by the **Find Clusters** feature to identify real-world coalitions (e.g., rural telephone companies vs. competitive local carriers).
    

---

## 2.4.5 Practitioner’s Summary

- **Iterative Process:** Finding groups often requires a "filter $\rightarrow$ layout $\rightarrow$ cluster" workflow.
    
- **Layout vs. Cluster:** While layout algorithms (like Fruchterman-Reingold) visually group nodes, the Clustering feature mathematically defines them, allowing for specific color/shape coding that persists even if the layout changes.
    

---

## 2.4.6 Researcher’s Agenda

- **Speed:** Current clustering algorithms are computationally expensive; research is focused on **parallelization** for "mega-scale" networks.
    
- **Attribute vs. Topology:** Researchers are exploring "semantic substrates"—clustering nodes by their attributes (e.g., university attended) rather than just their connections.
    
- **Overlapping Communities:** Developing models where a vertex can belong to more than one group (e.g., a person who is part of both a "family" cluster and a "work" cluster).
    

---

## Technical Sidebar: Fruchterman-Reingold Layout

- **Force-Directed:** Treats edges like springs and vertices like repelling magnets.
    
- **Advanced Settings:**
    
    - **Repulsive Force:** Increase this to spread out "hairballs" and reduce vertex overlap.
        
    - **Iterations:** The number of times the "springs" are allowed to move. High-complexity networks require more iterations to reach a stable state.
        
