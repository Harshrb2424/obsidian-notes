## Mapping Message Boards and Email Lists

## 3.2.1 Introduction

- **Core Function:** Threaded conversations are the primary communication channel for virtual communities (email lists, web boards, Usenet).
    
- **Versatility:** They serve diverse groups—from medical support to corporate workgroups.
    
- **Network Suitability:** The "post-and-reply" structure is ideal for network analysis because every reply creates a directed link between individuals.
    
- **Modern Integration:** Threaded conversations are now embedded in platforms like Facebook, YouTube, and Flickr.
    

---

## 3.2.2 Definition and Key Properties

Threaded conversation is a design theme using a post-reply-reply structure. Key characteristics include:

- **Topics:** Hierarchically organized, persistent spaces (e.g., "Social Media," "NodeXL").
    
- **Threads:** A top-level message plus the entire tree of responses.
    
- **Single Authored:** Each message is created by one user.
    
- **Permanence:** Posts usually cannot be edited or retracted (though newer systems like Google Wave/Google Docs changed this).
    
- **Homogeneous View:** All users see the same chronological or reverse-chronological order.
    
- **Push vs. Pull:** Email lists "push" content to users; forums require users to "pull" (visit the site).
    

---

## 3.2.3 Analytical Questions

1. **Individuals:** Who are the experts, answer-people, and discussion-starters? Who can replace an outgoing administrator?
    
2. **Groups:** Who is the "core" vs. "periphery"? What subgroups exist?
    
3. **Temporal:** How do participation patterns change over time? How does a member transition from "newbie" to "expert"?
    
4. **Structural:** What roles reoccur? Is the community sustainable?
    

---

## 3.2.4 Threaded Conversation Networks

There are three main ways to map these interactions:

1. **Reply Network:**
    
    - **Mechanism:** A directed link from the person replying to the specific person they are answering.
        
    - **Utility:** Captures the true conversational flow.
        
2. **Top-Level Reply Network:**
    
    - **Mechanism:** Connects all repliers directly to the person who _started_ the thread.
        
    - **Utility:** Emphasizes thread-starters; useful for Q&A communities where most answers are directed at the original asker.
        
3. **Bimodal (Affiliation) Network:**
    
    - **Mechanism:** Connects users (Mode 1) to specific threads or forums (Mode 2).
        
    - **Utility:** Identifies "boundary spanners" who participate in multiple distinct topics.
        

---

## 3.2.5 Case Study: Technical Support (CSS-D)

Technical support lists like CSS-D (Cascading Style Sheets) are often analyzed to find high-value contributors.

#### Identifying Social Roles

Social Network Analysis (SNA) identifies roles better than simple post counts:

- **Answer People:** * High **Out-Degree** (they reply to many people).
    
    - Low **Clustering Coefficient** (the people they help usually don't know each other).
        
    - They act as "hubs" for information.
        
- **Question People:**
    
    - Low Degree.
        
    - High **Average Degree of Neighbors** (they are connected to experts/answer-people).
        
- **Discussion Starters:**
    
    - High **In-Degree** (they get many replies).
        
    - High **Clustering Coefficient** (the people replying to them often talk to each other).
        

#### The "Answer Person" Score

Analysts create composite metrics to find these users automatically:

- **Formula Example:** (Percent Out-Degree) × (Clustering Coefficient Inverse).
    
- **Strategic Value:** Identifying these users helps managers know who to thank and protect from burnout.
    

---

## 3.2.6 Case Study: Finding a New Administrator (ABC-D)

When an administrator leaves, SNA can find a replacement based on their position in the network:

- **Key Metric:** **Betweenness Centrality**. Candidates with high betweenness already act as bridges between different clusters of the community.
    
- **The "What-If" Analysis:** By manually removing the current administrator from the graph (using "Skip") and recalculating metrics, managers can see whose influence increases and who might naturally step into the role.
    

---

## 3.2.7 Case Study: Ravelry Groups

Ravelry (a yarn/knitting community) illustrates the use of **Bimodal Networks**:

- **Connection:** Links users to the forums they post in.
    
- **Insights:** Shows that location-based groups (e.g., "Chicago Fiber Arts") have different patterns than project-based groups.
    
- **Boundary Spanners:** Users connected to multiple blue text boxes (forums) are identified as the connectors of the wider community.
    

---

## 3.2.8 - 3.2.9 Practitioner and Researcher Summary

- **Practitioners:** SNA provides a "forest view" of massive conversation archives, revealing social structures that participation statistics alone miss.
    
- **Researchers:** Future study is needed on the "right mix" of roles (how many answer-people are needed to sustain a community?) and the impact of combining threaded conversations with other tools like wikis.
    

---

**Study Tip:** For the exam, be able to differentiate between **Answer People** (High Out-Degree/Low Clustering) and **Discussion Starters** (High In-Degree/High Clustering). This is a frequent technical question in SNA.
