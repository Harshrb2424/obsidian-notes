# UNIT – III: Swarm Intelligence
## Bloom's Taxonomy Level 5: Evaluation Questions

1. **Critique and Justify (Algorithm Selection):** A logistics company needs to dynamically optimize the shortest delivery routes for hundreds of vehicles in a rapidly changing urban environment (traffic is the main variable).
    
    - **Critique** the suitability of **Ant Colony Optimization (ACO)** versus **Particle Swarm Optimization (PSO)** for this specific, large-scale, and time-sensitive **Routing** problem.
        
    - **Defend** which algorithm is the superior choice, explicitly justifying your decision by relating the chosen method's core mechanism (pheromone trails vs. velocity/position updates) to its ability to handle dynamic changes and avoid premature convergence to a sub-optimal local solution.
        
2. **Evaluate and Prioritize (Swarm Robotics & Coordination):** Imagine designing a swarm of cheap, small **Swarm Robotics** units for environmental cleanup (e.g., oil spill). The system must exhibit robustness against the failure of individual units and rapidly adapt to the spread of the pollutant.
    
    - **Evaluate** the role of **Decentralized Coordination** in achieving the required robustness and adaptability compared to a centralized control system.
        
    - **Prioritize and justify** which principle from **Social Adaptation of Knowledge** (e.g., the local interaction of fireflies or the collective memory of bees) provides the most critical behavioral mechanism for ensuring successful task completion despite individual unit failures.
        
3. **Assess and Decide (Optimization Challenge):** A manufacturing plant needs to solve a complex **Scheduling** problem with numerous constraints (machine availability, material flow). The objective function is highly non-linear, making gradient-based methods infeasible.
    
    - **Assess** the trade-offs between using the **Bee Colony Optimization** algorithm and the **Firefly Algorithm** for this task.
        
    - **Decide** which of the two algorithms is more likely to escape local optima effectively, and **defend** your choice by explaining how its specific mechanism for movement (e.g., following a better bee vs. intensity attraction) handles exploration and exploitation.
        

---

## Bloom's Taxonomy Level 4: Analysis Questions

1. **Differentiate and Relate (ACO vs. PSO Mechanisms):** Differentiate the primary information exchange mechanisms in **Ant Colony Optimization (ACO)** (specifically for **Foraging Behavior**) and **Particle Swarm Optimization (PSO)**. Analyze how the ACO mechanism relies on an _indirect_ form of communication while PSO relies on a more _direct_ form, and how this difference impacts the long-term memory of solutions in each system.
    
2. **Analyze and Explain (Swarm Robotics Decentralization):** Analyze the necessity of **Decentralized Coordination** in **Swarm Robotics** applications. Explain why relying on local interaction and simple rules, rather than global communication, is key to achieving **scalability** and **robustness** in a large swarm, particularly when deployed in dynamic, unknown environments.
    
3. **Compare and Contrast (Glow/Attraction vs. Velocity/Position):** Contrast the core update logic of the **Firefly Algorithm** (attraction based on light intensity/distance) with the core update logic of **Particle Swarm Optimization (PSO)** (velocity and position updates based on personal and global bests). Analyze how the use of attractiveness (Firefly) rather than social memory ($gBest$, $pBest$ in PSO) affects the algorithm's capability to search for global optima in multi-modal landscapes.
    
4. **Deconstruct and Infer (Bee Colony Optimization):** Deconstruct the roles of the **Employed Bees**, **Onlooker Bees**, and **Scout Bees** in the **Bee Colony Optimization** algorithm. Analyze how this division of labor ensures that the algorithm balances the search process between the exploitation of known, high-quality solutions and the exploration of new, unknown areas of the solution space.
# UNIT – IV: Immunocomputing
## Bloom's Taxonomy Level 5: Evaluation Questions

1. Critique and Justify (Negative Selection for Intrusion Detection):
    
    A security firm is deploying an Intrusion Detection system. They propose using a Negative Selection Algorithm to monitor network traffic for anomalies. Critique the inherent trade-off in the Negative Selection approach between the computational cost of generating a robust set of "non-self" detectors and the system's False Positive rate. Justify whether a Negative Selection model, which is excellent at detecting novel attacks, is fundamentally superior to a supervised machine learning classifier (trained on known attacks) for comprehensive network security, considering the challenges of "self" definition and potential noise in real-world data.
    
2. Evaluate and Defend (Clonal Selection for Optimization):
    
    You are tasked with solving a high-dimensional, multi-modal Optimization problem. Your team is deciding between using a Clonal Selection Algorithm and a Particle Swarm Optimization (PSO) algorithm. Evaluate how the Clonal Selection and Affinity Maturation process (specifically the high-rate mutation/selection cycle) provides a distinct advantage or disadvantage over PSO's velocity and position updates in maintaining population diversity and escaping local optima. Defend which algorithm is generally better suited for problems where the solution landscape is constantly changing, linking your choice back to the core Biological Principles of immune learning.
    
3. Assess and Decide (AIS Architecture for Bioinformatics):
    
    A research group is attempting to classify new protein sequences (Bioinformatics) using an Artificial Immune System (AIS). They are debating between using a basic Bone Marrow Model with simple matching versus a complex Artificial Immune Network. Assess how incorporating the concepts from Immune Network Theory in Computing (i.e., suppression and stimulation) would theoretically improve the classification specificity and memory management compared to an approach that relies solely on the initial generation of antibodies and simple clonal expansion. Decide which architecture (network or simple model) is required to prevent the problem of detector redundancy and ensure a robust classification capability across a wide range of protein classes.
    

---

## Bloom's Taxonomy Level 4: Analysis Questions

1. Differentiate and Analyze (Natural vs. Artificial Abstraction):
    
    Differentiate between the Biological Principle of Bone Marrow Models for T-cell maturation and the computational process used to implement a detector set in a Negative Selection Algorithm. Analyze how the step of Computational Abstraction transforms the physiological process of central tolerance (self-nonself discrimination) into a mathematical mechanism for Anomaly Detection.
    
2. Compare and Contrast (Clonal Selection vs. Immune Networks):
    
    Contrast the primary purpose and flow of information within a standalone Clonal Selection algorithm (focused on learning a single best solution) with the continuous interaction and regulation inherent in an Artificial Immune Network. Analyze how the inclusion of suppressive links in the network (a key aspect of Immune Network Theory) serves to enhance or restrict the affinity maturation process.
    
3. Analyze Mechanism (Negative Selection):
    
    Analyze the challenge in a Negative Selection Algorithm of defining the "self" detectors. Explain why generating a detector set that is only sensitive to non-self patterns is a necessity for achieving high reliability in Fault Tolerance applications, and what happens if a "self" pattern is incorrectly classified as "non-self" due to an incomplete initial self-set.
    
4. Deconstruct and Explain (Clonal Selection Components):
    
    Break down the two primary components of Clonal Selection and Affinity Maturation—Cloning and Hypermutation—as they apply to Optimization. Explain the function of each component and how, together, they balance the need for exploitation (refining known good solutions) and exploration (searching new areas) within the solution space.
# UNIT – V: Case Studies
## Bloom's Taxonomy Level 5: Evaluation Questions

1. Critique and Justify (Bioinformatics & Algorithm Selection):
    
    A research lab is analyzing massive, noisy Gene Expression Analysis datasets to identify biomarkers for a rare disease. They must choose between using Neural Networks (NNs) for feature extraction and classification, or an Evolutionary Algorithm (e.g., Genetic Algorithm) for feature selection followed by a simpler classifier.
    
    - **Critique** the trade-offs between the NN's ability to capture non-linear interactions and the Evolutionary Algorithm's superior transparency and interpretability in identifying the relevant genes.
        
    - **Justify** which approach provides a _more defensible and scientifically actionable_ result for biomarker discovery, explicitly considering the need for **biological validation** of the findings.
        
2. Evaluate and Defend (Information Display & Anomaly):
    
    A financial monitoring system needs to visualize real-time trading data to help analysts spot fraudulent or highly unusual transactions (Anomalies). They are considering two visualization strategies: a Swarm-based Layout to cluster related transactions, or an Immune-inspired Anomaly Highlighting system that alerts based on "non-self" patterns.
    
    - **Evaluate** which approach is fundamentally superior for a human analyst to quickly and accurately identify subtle, evolving financial fraud patterns.
        
    - **Defend** your choice by explaining how the chosen visualization technique's underlying nature-inspired principle (swarm movement or immune self/non-self) better manages the **false positive rate** and the **cognitive load** of the user.
        
3. Assess and Prioritize (Adaptive Design):
    
    You are designing a critical operations dashboard for a nuclear power plant. The interface must be highly adaptive to operator behavior and changing conditions. Assess the utility of using Evolutionary Design for the dashboard's initial layout structure versus using Neural Network-driven Adaptive Interfaces for real-time dynamic adjustment of displayed data. Prioritize and justify which nature-inspired approach is more crucial for ensuring high Fault Tolerance and low cognitive load under high-stress conditions.
    

---

## Bloom's Taxonomy Level 4: Analysis Questions

1. Differentiate and Relate (Sequence Alignment):
    
    Differentiate between the goal of Sequence Alignment and the goal of Protein Structure Prediction in Bioinformatics. Analyze how the use of Evolutionary Algorithms (e.g., to maximize fitness score) or Immune Algorithms (e.g., to find high-affinity matches) is more directly suited to solving the sequence alignment problem than the structure prediction problem, given the constraints of the data.
    
2. Analyze and Explain (Visualization Layout):
    
    Analyze the underlying principle of a Swarm-based Layout for Information Display (e.g., using a variation of PSO or ACO movement rules). Explain how the decentralized, local interaction rules of a swarm are computationally abstracted to organize complex, multi-dimensional data points in a 2D or 3D visualization, enabling users to visually perceive natural clustering and distances in the data.
    
3. Compare and Contrast (NN in Genomics vs. Interface):
    
    Contrast the primary purpose of using Neural Networks in Genomic Data Mining (e.g., for classification of sequences) with their use in Neural Network-driven Adaptive Interfaces (e.g., user pattern recognition). Analyze how the NN's core function of pattern recognition is applied differently in the two scenarios—one focusing on static biological features, the other on dynamic human behavior—and the differing requirements for network complexity.
    
4. Deconstruct and Infer (Evolutionary Design):
    
    Deconstruct the process of using an Evolutionary Algorithm for the Evolutionary Design of Dashboards and User Interfaces. Explain how the core components of the algorithm (e.g., mutation, crossover, and fitness function) are mapped to design features and user experience metrics, and how this process inherently helps to optimize a complex multi-objective problem (e.g., balancing aesthetic appeal with task efficiency).