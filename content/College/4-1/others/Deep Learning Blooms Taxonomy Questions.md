# UNIT III: Convolutional Networks
## Bloom's Taxonomy Level 5: Evaluation Questions

These questions require you to make judgments, critique methodologies, or select and defend the best approach based on criteria.

1. **Critique and Justify (Variants & Structured Outputs):** A medical imaging team needs to build a model for **real-time Semantic Segmentation** of high-resolution surgical videos on an embedded device with limited computational power.
    
    - **Critique** the trade-offs between using **Dilated Convolutions** and **Depthwise Separable Convolutions** within the network architecture.
        
    - **Propose and defend** which variant is the superior choice for meeting both the accuracy (segmentation quality) and efficiency (real-time speed) requirements, explicitly explaining how the chosen variant exploits the **Parameter Sharing** motivation to achieve its efficiency gain.
        
2. **Evaluate and Defend (Pooling & Motivation):** An engineer is experimenting with replacing **Max Pooling** with **Average Pooling** in a standard VGG-like CNN used for image classification.
    
    - **Evaluate** the expected impact of this change on the network's overall resistance to minor shifts in the input data (**Translation Invariance**) and its ability to learn salient, distinct **Hierarchical Features**.
        
    - **Defend** which pooling technique is generally better suited for preserving the **Infinitely Strong Prior** of **Spatial Locality** across deeper layers of the network.
        
3. **Assess and Prioritize (Efficient Algorithms & Fundamentals):** You are managing a large cloud platform that requires an algorithm for extremely fast, high-throughput convolution operations for feature extraction on large images with large kernels (e.g., $15 \times 15$).
    
    - **Assess** the suitability and computational complexity of using the **FFT-based** convolution algorithm versus the **Winograd** algorithm for this task.
        
    - **Defend** which of the two efficient convolution algorithms should be prioritized for deployment, providing a justification based on its theoretical runtime complexity and its efficiency when dealing with large kernel sizes.
        

---

## Bloom's Taxonomy Level 4: Analysis Questions

These questions require you to break down concepts, compare and contrast methodologies, and analyze the relationships between different CNN components.

1. **Analyze and Relate (Transposed Convolutions & Structured Outputs):** Analyze the exact function of a **Transposed Convolution (Deconvolution)** in a **Semantic Segmentation** network. Explain how it differs from a standard convolution with respect to its effect on the **Feature Map** size, and how this operation is essential for re-establishing the spatial resolution and localization accuracy lost due to **Pooling** layers.
    
2. **Compare and Contrast (Data Types & Prior):** Contrast the design and application of a **1D CNN** (used for analyzing a sensor sequence) with a **3D CNN** (used for analyzing video volumes). Analyze how the core principle of **Stationarity** (as part of the Infinitely Strong Prior) is interpreted and applied differently by the kernel in these two models due to the structure of their respective input **Data Types**.
    
3. **Deconstruct and Explain (The Convolution Operation & Parameter Sharing):** Break down the process of the **Convolution Operation** using a kernel, **Stride**, and **Padding**. Explain _why_ and _how_ **Parameter Sharing** is a direct consequence of this operation's mechanism, and analyze the resulting computational saving compared to a fully connected layer with the same input and output dimensions.
    
4. **Analyze Mechanism (Depthwise Separable Convolutions):** Analyze how the **Depthwise Separable Convolution** variant decomposes the standard convolution into two distinct steps. Explain the specific roles of the **depthwise** component and the **pointwise** component, and describe the relationship between this decomposition and the overall reduction in trainable **Parameters** compared to the full operation.
# UNIT IV: Recurrent and Recursive Networks

## Bloom's Taxonomy Level 5: Evaluation Questions

These questions require making judgments, critiquing methodologies, and defending the optimal choice based on deep understanding.

1. **Critique and Justify (LSTM vs. GRU):** A data scientist is developing a low-latency system for financial time-series forecasting, where the input sequences are often very long, making **Gradient Vanishing** a major concern.
    
    - **Critique** the trade-offs in computational overhead and performance between the **LSTM** and the **GRU** (Gated Recurrent Unit) architectures for this task.
        
    - **Propose and defend** the optimal choice of gated RNN, justifying your decision by explicitly relating the selected model's **gating mechanism** (Input/Forget/Output or Reset/Update) to the requirements for high-speed training and effective capture of **long-term dependencies**.
        
2. **Evaluate and Defend (Architecture Selection):** A team needs to build a model for complex, structured natural language inference based on abstract syntax **Parse Trees** rather than linear sentences.
    
    - **Evaluate** the fundamental limitations of a **Bidirectional RNN** or a standard **Encoder-Decoder** architecture for this specific task structure.
        
    - **Defend** the use of a **Recursive Neural Network** as the superior modeling choice, explaining how its inherent ability to process **tree-structured inputs** aligns with the problem's underlying data dependency and information flow.
        
3. **Assess and Prioritize (Memory Networks vs. Gated RNNs):** You are designing a QA system that must answer questions based on a large, external document (the "knowledge base"). The system needs to selectively retrieve relevant information from this document.
    
    - **Assess** the functional difference between an **LSTM's** internal cell state memory and the **Explicit Memory** provided by architectures like **Memory Networks** or **Differentiable Neural Computers**.
        
    - **Prioritize and justify** which type of memory (internal Gated RNN or external Explicit Memory) is fundamentally required to successfully solve the task of referencing and reasoning over large, static external data sources.
        

---

## Bloom's Taxonomy Level 4: Analysis Questions

These questions require breaking down concepts, comparing and contrasting methodologies, and analyzing internal logic.

1. **Deconstruct and Analyze (LSTM Gating):** Analyze the distinct roles of the **Forget Gate** and the **Input Gate** within the **LSTM** architecture. Explain how the synergistic function of these two gates specifically combats the problem of **Gradient Vanishing** and allows the network to maintain relevant information across large temporal distances.
    
2. **Compare and Contrast (RNNs vs. ESNs):** Differentiate between the training procedures of a **Vanilla RNN** and an **Echo State Network (ESN)**. Analyze how the ESN's strategy of using **Fixed Recurrent Weights** and only training the **Readout** layer inherently provides an effective but specialized solution for avoiding the instability of gradient-based training across long sequences.
    
3. **Analyze Unfolding and Bidirectionality:** Analyze the process of **Unfolding the Computational Graph** for a sequential task. Explain how a **Bidirectional RNN** utilizes this unrolled structure to integrate information from both the **forward** and **backward** contexts, and discuss a scenario (like Named Entity Recognition) where this integration is critical for accurate output.
    
4. **Relate Architecture to Challenge (Deep RNNs):** Analyze the motivation for moving from a single-layer RNN to **Deep Recurrent Networks** (Stacked RNNs). Explain why the addition of **Residual Connections** becomes particularly critical in deep RNNs, relating this to the potential challenges of optimizing deep sequential models.
    
5. **Differentiate and Apply (Sequence-to-Sequence):** Differentiate between the roles of the **Encoder** and the **Decoder** in a standard **Sequence-to-Sequence** architecture. Analyze how this architecture models the transformation for a task like **Machine Translation**, specifically explaining how the internal hidden state acts as the fixed-size "context vector" that bridges the variable-length input and output sequences.
# UNIT V: Practical Methodology & Applications
## Bloom's Taxonomy Level 5: Evaluation Questions

These questions require making judgments, critiquing methodologies, and defending the optimal choice based on performance criteria and resource constraints.

1. **Critique and Justify (Metrics & Debugging):** A self-driving car company is training an **Object Detection model (e.g., YOLO)** to prioritize avoiding pedestrians over incorrectly classifying stationary objects.
    
    - **Critique** the sufficiency of using only **Precision and Recall** as performance metrics for this safety-critical task.
        
    - **Justify** which additional metric (**F1-Score, AUC-ROC, or MAP**) should be prioritized for model selection, and **defend** a specific **Debugging Strategy** (e.g., Gradient Checks vs. Activation Distributions) that would be essential to verify the stability of the loss function early in the training process.
        
2. **Evaluate and Defend (System Design & Baselines):** You are tasked with developing a system for **Multi-Digit Number Recognition** from street view images. Initial trials with a **Logistic Regression** baseline show poor performance.
    
    - **Evaluate** the necessity of immediately switching to an **End-to-End Deep Learning System** (like a customized ResNet) versus attempting to fine-tune a **Random Forest** or **Linear SVM** first.
        
    - **Defend** your final choice of model architecture and methodology, explicitly explaining how the system's inherent ability to perform hierarchical feature extraction makes it fundamentally superior for solving the complex **Computer Vision** task compared to the chosen default baseline.
        
3. **Assess and Optimize (Hyperparameters & Scaling):** A large language model team is struggling to train a massive **Transformer (e.g., GPT)** model on a cluster of GPUs. The initial **Grid Search** for the learning rate was too slow, and the training is failing due to memory issues.
    
    - **Assess** the utility of switching the hyperparameter optimization strategy from **Grid Search** to **Bayesian Optimization** or **Random Search** to maximize parameter finding efficiency.
        
    - **Prioritize and justify** a combination of **Distributed Training** techniques (**Model Parallelism** vs. **Data Parallelism**) required to successfully scale the training process, linking the chosen scaling method back to the fundamental memory and computational constraints of the large **NLP** model.
        

---

## Bloom's Taxonomy Level 4: Analysis Questions

These questions require breaking down concepts, comparing and contrasting methodologies, and analyzing internal relationships.

1. **Differentiate and Analyze (Parallelism):** Differentiate between **Data Parallelism** and **Model Parallelism** in **Large-Scale Deep Learning**. Analyze which approach is essential for training models like **BERT** where the full model parameters cannot fit onto a single GPU, and which is suitable for simply speeding up the training of a smaller model on a massive dataset.
    
2. **Relate Metrics to Task (Classification vs. Regression):** Contrast the primary goal of the **AUC-ROC** metric in **Classification** tasks with the goal of the **R²** metric in **Regression** tasks. Analyze how the selection of the most appropriate metric inherently guides the model's optimization process (e.g., cross-entropy minimization vs. least squares minimization).
    
3. **Analyze Data Saturation and Gathering:** Analyze the utility of **Learning Curves** for determining whether to **Gather More Data**. Explain how the shape of the learning curve (specifically, the gap between the training curve and the validation/test curve) indicates whether the model is experiencing high **bias** or high **variance**, and how this diagnosis informs the decision to collect more data.
    
4. **Compare and Contrast (Deep Learning Applications):** Contrast the output structure and loss function requirements for an **End-to-End Speech Recognition model (DeepSpeech)** that uses **CTC Loss** versus an **Image Segmentation model (U-Net)**. Analyze how the temporal alignment challenge in speech dictates the need for CTC, which is fundamentally absent in the pixel-wise prediction of segmentation.
    
5. **Deconstruct and Explain (Ranking and Default Baselines):** Analyze the calculation of the **Normalized Discounted Cumulative Gain (NDCG)** metric in **Ranking** problems. Explain why a **Default Baseline Model** like **Logistic Regression** is often insufficient for achieving high NDCG scores, relating this to the metric's inherent focus on the positional relevance of predictions.