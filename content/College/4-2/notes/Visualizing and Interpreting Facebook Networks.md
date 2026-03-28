
## 4.1.1 Introduction: The World’s Social Graph

- **Publicly Articulated Networks:** Facebook represents a unique class of networks. They are not based on invisible behavior (like email traffic) but on the relationships we intentionally "show" to others to manage access to information.
    
- **Scope:** At the time of writing, Facebook was the largest social network (~400 million members), with the **News Feed** acting as the primary stream of information shared between friends.
    

---

## 4.1.2 Historical Context

- **Growth Strategy:** Unlike MySpace (which allowed total customization), Facebook used **exclusivity**. It started at Harvard, moved through specific universities, and finally opened to the general public.
    
- **Network Effects:** By targeting universities, Facebook benefited from pre-existing real-world connections.
    
- **Contradiction:** Facebook provides granular privacy tools but pushes "information libertarianism" by making data as public and discoverable as possible (e.g., the introduction of the News Feed in 2006).
    

---

## 4.1.3 Why Map a Facebook Network?

1. **Privacy Management:** Identifying if a specific group (like "Family") is truly separate from other clusters.
    
2. **Networking Style:** Identifying if you are a **Team Player** (closing triads/introducing people) or a **Broker** (keeping groups separate to maintain strategic value).
    
3. **Strategic Planning:** Event planners use maps to see if their audience is one dense cluster or multiple disconnected groups.
    
4. **Social Hygiene:** Finding "zombie" contacts added years ago but never engaged with.
    

---

## 4.1.4 What Kind of Network is Facebook?

Facebook friendship networks are **Egocentric Networks**.

- **Ego:** The focal person (the owner of the network).
    
- **Alters:** The friends connected to the Ego.
    
- **Network Levels:**
    
    - **1.0 Degree:** Just Ego and their alters (a simple star shape).
        
    - **1.5 Degree:** Ego, alters, and the connections _between_ those alters. **This is what NodeXL maps.**
        
    - **2.0 Degree:** ego, alters, and _their_ friends (including people Ego doesn't know). Facebook's API does not allow this.
        
- **Properties:**
    
    - **Undirected:** Friendships must be mutual.
        
    - **Unweighted:** By default, all friend connections are treated as equal.
        

---

## 4.1.5 - 4.1.6 Basic Visualization in NodeXL

- **Data Source:** Traditionally imported via apps like `NameGenWeb` using the **GraphML** format.
    
- **Hiding Ego:** In an ego network analysis, it is standard practice to **exclude the owner (Ego)**. Since Ego is connected to everyone, including them clutters the graph and obscures the internal clustering of friends.
    
- **The "Networky" Look:**
    
    - **Layouts:** Fruchterman-Reingold and Harel-Koren are best.
        
    - **Iterations:** Default settings (10 iterations) are often too low for Facebook. Increasing to **80-100 iterations** helps resolve distinct clusters.
        
![](https://www.connectedaction.net/wp-content/uploads/2009/09/2009-September-Bernie-Hogan-Facebook-Network-Visualization.png)

---

## 4.1.7 Data Types and Attributes

#### Categorical (Nonordered) Data

- **Examples:** Gender, Hometown, Cluster ID.
    
- **Visual Mapping:** Use **Color** or **Shape**.
    
- **VLOOKUP Strategy:** Advanced users create a "Categories" worksheet to manually assign colors/shapes to groups like "Male," "Female," or "Unknown."
    

#### Numerical (Ordered) Data

- **Examples:** Degree, Betweenness Centrality, Age.
    
- **Visual Mapping:** Use **Size** or **Opacity**.
    
- **Key Interpretations in Ego Networks:**
    
    - **Degree:** The number of mutual friends between you and that person.
        
    - **Betweenness:** Identifies **Bridges**. A person who links your high school friends to your work colleagues has high betweenness and likely knows you very well.
        
    - **Eigenvector Centrality:** Identifies those in the center of dense clusters. Mapping this to opacity can make dense groups "glow" or become transparent to see the structure inside.
        

---

## 4.1.8 From Friend Wheel to Pinwheel

- **Friend Wheel:** A popular radial layout where nodes are arranged in a circle. It is aesthetically pleasing and avoids node overlap, but can be hard to interpret.
    
- **Pinwheel Layout (The NodeXL Way):** A customized clustered radial layout.
    
    - **Logic:** Groups are arranged in "flames" or wedges around a circle.
        
    - **Mapping:** Radius is scaled to **Betweenness** (pulling brokers toward the center), while Size/Color are mapped to **Degree**.
        
    - **Benefit:** Reveals the internal density of a cluster while simultaneously showing how that cluster links to the rest of the network.
        

---

## 4.1.9 - 4.1.10 Practitioner and Researcher Summary

- **Practitioners:** Facebook maps reveal the "social context" of your life. Using Excel features like `VLOOKUP` and `LOG` formulas allows for much more sophisticated visuals than the standard "one-click" apps.
    
- **Researchers:** * **Clustering Limits:** Is it more useful to see "Work" as a group, or to find the "soft partition" of people who belong to both "Work" and "Sports"?
    
    - **Dunbar’s Number:** Human brains have a cognitive ceiling of about **150 stable relationships**. Does Facebook act as a "cognitive enhancement" to break this limit, or just lead to information overload?
        

---

**Exam Tip:** Be prepared to explain why **Betweenness Centrality** is used to identify "Bridges" in Facebook and why the **Ego** should be removed before calculating metrics.
