# Unit 3 Classification
## Bloom's Taxonomy Level 5: Evaluation Questions

### Model Selection and Critique

1. **Critique and Justify:** A health organization is building a system to predict a rare but fatal disease, where missing a positive case (False Negative) is significantly more costly than an incorrect positive prediction (False Positive). **Critique** the suitability of a **Decision Tree (C4.5)** versus a **Support Vector Machine (SVM) with an RBF kernel** for this task. **Justify** your final model recommendation by explicitly arguing which performance metric (**Accuracy, Recall, or F1-Score**) should be **prioritized** in the **Cost Matrix** setup, and how that priority would guide the selection and tuning of the recommended algorithm.
    
2. **Evaluate and Defend:** You are tasked with classifying a massive dataset with millions of instances and a large number of irrelevant features (noise). **$k$-Nearest Neighbor ($k$-NN)** is rejected due to the **Curse of Dimensionality** and its **lazy learning** nature. **Evaluate** whether a **Naïve Bayes Classifier** or a **Multilayer Feedforward Neural Network (NN)** is the superior choice for high-speed, scalable classification under these conditions. **Defend** your choice by contrasting the models' inherent assumptions about feature independence/dependence and their mechanisms for handling irrelevant features.
    

---

### Ensemble Methods and Overfitting

3. **Assess and Optimize:** A classification model is suffering from high variance (**Overfitting**) on the training set, exhibiting perfect accuracy but poor performance on the test set. **Assess** the use of **Bagging (Random Forest)** versus **Boosting (AdaBoost)** as an **Ensemble Method** to address this issue. **Decide** which ensemble technique is more appropriate for reducing variance in the base classifier, and **justify** your decision by explaining the fundamental difference in how they combine/weight the results of the base classifiers to manage the bias-variance trade-off.
    

---

### Hyperplane and Feature Space Analysis

4. **Analyze and Defend:** Consider a complex classification problem where the class labels are not linearly separable in the original feature space. An engineer proposes using a **Decision Tree (CART)** due to its interpretability, while another suggests an **SVM** utilizing a **Polynomial Kernel**. **Evaluate** the inherent limitations of the Decision Tree's piece-wise linear approach against the SVM's **Kernel Trick** ability to implicitly map data into a higher-dimensional space. **Defend** which approach is fundamentally more capable of finding the optimal decision boundary for highly non-linear data, and explain the key trade-off involved (interpretability vs. boundary complexity).
    

---

### Rule-Based and Metrics Evaluation

5. **Design and Validate:** You have developed a **Rule-Based Classifier (e.g., using RIPPER)** to categorize legal documents. The goal is high **Precision**, meaning when the system assigns a label, it must be correct. **Design** a validation strategy using the **ROC Curve** and **AUC** metrics that would allow you to definitively **evaluate** your Rule-Based model against a benchmark model (like a simpler **k-NN**) over all possible threshold settings. **Justify** why relying solely on **Accuracy** on the **Test Set** would be an insufficient metric for validating a system prioritizing high Precision.

## Bloom's Taxonomy Level 4: Analysis Questions

### Classification Methods (Comparison and Contrast)

1. **Analyze Assumptions:** Analyze the fundamental difference in how **Naïve Bayes** and **Decision Tree Induction (C4.5/CART)** handle feature interdependence. Explain how the core assumption of feature independence in Naïve Bayes can lead to superior speed but potentially lower accuracy compared to the localized, feature-splitting approach of a Decision Tree.
    
2. **Relate Mechanism to Challenge:** Contrast the approach of **Support Vector Machines (SVM) using the Kernel Trick** with **$k$-Nearest Neighbor ($k$-NN)** in handling non-linear classification boundaries. Analyze why the **$k$-NN** method is highly susceptible to the **Curse of Dimensionality**, while SVM, despite mapping to high dimensions, can often mitigate this effect through the use of the **Maximum Margin Hyperplane** concept.
    
3. **Differentiate Learning Styles:** Differentiate between the "lazy learning" nature of **$k$-NN** and the "eager learning" of a **Multilayer Feedforward Neural Network (NN)** using **Backpropagation**. Analyze the impact of each learning style on the **training time** versus the **classification time** for new instances.
    
4. **Component Analysis (Splitting Criteria):** Analyze the difference in how **Information Gain** (used in ID3/C4.5) and the **Gini Index** (used in CART) determine the optimal split in a **Decision Tree**. Explain the primary computational advantage or disadvantage of one over the other in terms of minimizing impurity.
    

---

### Model Evaluation and Enhancement

5. **Relate Metrics to Bias:** Differentiate between the insights provided by **Precision** and **Recall**. Analyze a scenario where a classifier has a high Precision but low Recall, and explain how this pattern relates to either **Overfitting** or under-representation of the minority class in the **Training Set**.
    
6. **Deconstruct Ensemble Impact:** Analyze the fundamental mechanisms by which **Bagging (Random Forest)** and **Boosting (AdaBoost/Gradient Boosting)** reduce classification error. Explain how Bagging primarily targets the reduction of **variance**, while Boosting primarily focuses on reducing **bias**, and how this leads to different training procedures.
    
7. **Interpret Confusion Matrix/ROC:** Analyze the relationship between the values in a **Confusion Matrix** (True Positives, False Negatives, etc.) and the construction of the **ROC Curve**. Explain why the **Area Under the Curve (AUC)** is considered a more robust performance metric than simple **Accuracy** when dealing with imbalanced **Class Labels** and varying classification thresholds.
    

---

### Integration and Rule Analysis

8. **Process Analysis (Rule-Based):** Analyze the process of generating a set of **IF-THEN Rules** using a **Sequential Covering** algorithm like **RIPPER**. Explain how the process of **Rule Pruning** is essential to prevent the generated rules from resulting in **Overfitting** the specific structure of the training data.

# Unit IV Cluster Analysis & Outlier Detection
## Bloom's Taxonomy Level 5: Evaluation Questions

### Cluster Analysis

1. **Critique and Recommend:** A data scientist is tasked with clustering a massive, high-dimensional dataset of customer transactions. The data contains dense clusters of arbitrary shapes and is known to have significant noise and outliers. **Critique** the suitability of **$k$-Means** and **AGNES** for this specific task, citing the four fundamental **Requirements** of clustering. **Propose and defend** a robust two-step methodology (e.g., using a method like **BIRCH** or **DBSCAN**) that best balances **scalability** with the ability to handle **arbitrary shapes** and **outliers**, explicitly justifying your choice of method parameters ($\epsilon$, MinPts, or CF-Tree parameters).
    

---

### Outlier Detection and Integration

2. **Justify and Prioritize:** You are working for a bank monitoring financial transactions. You need a system to detect **Collective Outliers** that signal coordinated fraud, while also identifying legitimate, high-value transactions that are **Global Outliers**. **Evaluate** the relative merits of a **Density-based** detection method (**LOF**) versus a **Clustering-based** method (e.g., using a **$k$-Medoids** result) for this scenario. **Justify** which approach provides _superior interpretability_ for regulatory reporting, and **defend** a specific method for handling the **high dimensionality** challenge inherent in financial data before applying your chosen detection algorithm.
    

---

### Method Selection and Trade-offs

3. **Assess and Decide:** A remote sensing team needs to identify anomalous geological formations (**Contextual Outliers**) within satellite imagery data, which is stored in a complex spatial format. The volume of data is large, but the formations of interest are small and sparse. **Assess** the trade-offs between using a **Partitioning Method** ($k$-Medoids) and a **Density-Based Method** (**DBSCAN**) for simultaneously achieving cluster discovery and outlier detection in this context. **Decide** which single method is most appropriate for robustly identifying the specific contextual outliers, and **defend** your choice by explaining how its core mechanism (medoid distance or $\epsilon$/MinPts) inherently addresses the challenge of noise **masking** or **high dimensionality**.
## Bloom's Taxonomy Level 4: Analysis Questions

### Cluster Analysis Methods (Comparison and Contrast)

1. **Differentiate and Justify:** Differentiate the operational mechanism and primary output of **$k$-Means** (a Partitioning method) and **AGNES** (an Agglomerative Hierarchical method). Analyze how the reliance on **centroids** versus **inter-cluster distances** affects their ability to meet the requirement of handling **arbitrary shapes** in the data.
    
2. **Analyze Parameters and Scalability:** Analyze how the introduction of the **CF-Tree** in **BIRCH** specifically addresses the **scalability** requirement of clustering, which poses a significant challenge for traditional methods like **$k$-Medoids (PAM)** when dealing with massive datasets.
    
3. **Relate Mechanism to Challenge:** Contrast **$k$-Medoids (PAM)** with **$k$-Means** in terms of robustness to outliers. Analyze the exact mechanism (centroid vs. medoid) that makes $k$-Medoids more effective in dealing with data that violates the implicit assumption of spherical clusters, thereby improving its resistance to noise.
    
4. **Component Analysis (DBSCAN):** Explain the roles of the **$\epsilon$ (epsilon)** and **MinPts** parameters in **DBSCAN**. Analyze how the definition of **Core, Border, and Noise points** allows DBSCAN to inherently handle clusters of **arbitrary shapes** and simultaneously identify outliers without relying on a pre-determined number of clusters ($k$).
    

---

### Outlier Detection and Clustering Integration

5. **Differentiate Outlier Types:** Differentiate between a **Global Outlier** and a **Contextual Outlier**. Provide a scenario where identifying a **Collective Outlier** would require an analysis technique that first performs clustering (e.g., using **DBSCAN**) before the anomaly itself becomes apparent.
    
6. **Compare Detection Strategies:** Contrast the fundamental principle of a **Distance-based** outlier detection method (**$k$-NN**) with a **Density-based** method (**LOF**). Analyze why LOF is often more effective at tackling the challenge of **noise masking** in datasets where clusters have significantly different densities.
    
7. **Challenge Analysis:** Analyze the challenges of **High Dimensionality** and **Interpretability** in the context of outlier detection. Explain how converting a high-dimensional dataset into a lower-dimensional representation _before_ applying a **Statistical method** (like a Z-score) might alleviate one challenge but exacerbate the other.

# UNIT V: Advanced Concepts in Data Mining

## Bloom's Taxonomy Level 5: Evaluation Questions

### Web Mining

1. **Critique and Justify:** A major e-commerce company wants to improve user engagement and site navigation. Design a comprehensive system that integrates **Web Content Mining**, **Web Structure Mining** (using a sophisticated link analysis technique beyond basic PageRank), and **Web Usage Mining** (clickstream analysis and session reconstruction). **Justify** which component provides the _most critical_ insight for identifying the highest-value content pages, and **defend** your choice of algorithms for each component against alternatives, considering scalability and real-time performance.
    

---

### Spatial Data Mining

2. **Evaluate and Prioritize:** Imagine you are a city planner analyzing the spread of a localized infectious disease. You have access to geospatial data (patient locations, infrastructure, demographics). **Evaluate** and **prioritize** the use of either **Spatial Classification Algorithms** (like a Spatial Decision Tree with Moran's I consideration) or **Spatial Clustering Algorithms** (like STING or GDBSCAN) to identify _both_ the high-risk areas _and_ the underlying spatial features contributing to the risk. **Argue** which approach is superior for generating _actionable policy recommendations_ (e.g., resource allocation, infrastructure changes), and **defend** your choice of specific spatial data mining primitives (predicates, distance) necessary for a reliable analysis.
    

---

### Temporal Data Mining

3. **Synthesize and Assess:** A financial institution is analyzing high-frequency stock trading data. They need a system to predict short-term price movements and detect fraudulent activity. **Propose** an integrated methodology that utilizes **Time Series Analysis** (e.g., ARIMA or similar forecasting), **Sequential Pattern Mining** (GSP or PrefixSpan), and **Temporal Association Rules**. **Assess** the trade-offs between using a purely statistical model (Time Series) versus a pattern-based model (Sequences/Rules) for _robust_ anomaly detection, and **defend** a criterion (e.g., false positive rate, predictive window accuracy) for **evaluating** the overall success of your proposed combined system.

---

## Bloom's Taxonomy Level 4: Analysis Questions

### Web Mining

1. **Differentiate and Relate:** Differentiate between the _primary input data_ (e.g., text vs. links vs. logs) and the _main objective_ of **Web Content Mining** and **Web Structure Mining**. Analyze why a researcher interested in the _authority_ of information on a specific topic must necessarily integrate results from both to achieve a comprehensive view, and how **HITS** and **Text Mining** are related in this context.
    
2. **Analysis of Process:** Analyze the key steps and inherent challenges in transforming raw web server log files into structured data suitable for **Web Usage Mining**. Specifically, explain the critical role of **Session Reconstruction** and how errors in this process (e.g., misinterpreting bot traffic or back-button usage) could lead to misleading results in **User Profiling**.
    

### Spatial Data Mining

3. **Compare and Contrast:** Contrast the fundamental goals and output of a **Spatial Classification Algorithm** (like a Spatial Decision Tree) versus a **Spatial Clustering Algorithm** (like GDBSCAN). Describe a scenario in urban planning where identifying **Co-location Patterns** (Spatial Rules) would be a necessary _prerequisite_ for performing a meaningful spatial classification.
    
4. **Relate and Infer:** Analyze the role of **Spatial Autocorrelation (Moran's I)** within the spatial data mining process. Explain how a high Moran's I value for a feature (e.g., crime rate) should influence the design of a **Spatial Decision Tree** or the parameter settings (e.g., epsilon and minimum points) for a spatial clustering algorithm like **GDBSCAN**.
    

### Temporal Data Mining

5. **Distinguish and Apply:** Differentiate between the nature of the output generated by **Sequential Pattern Mining (e.g., PrefixSpan)** and **Temporal Association Rules**. Provide a concrete example in a hospital patient dataset to illustrate how each technique yields a distinct, but equally valuable, clinical insight regarding event sequences and time-constrained relationships.
    
6. **Component Analysis:** Analyze how the **Autoregressive (AR)** and **Moving Average (MA)** components of an **ARIMA** model specifically account for **trend** and **seasonality** in a time series of sales data. Explain the function of the **Integrated (I)** component in a non-stationary time series, and how its application fundamentally alters the data's properties for successful forecasting.