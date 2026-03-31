# Connections of Creativity and Collaboration

## 5.2.1 Introduction to Wikis

- **Definition:** A wiki is a website that allows any user to edit content, where every modification is recorded and archived.
    
- **Origin:** Invented by **Ward Cunningham** in 1995 (**WikiWikiWeb**). "Wiki" means "quick" in Hawaiian.
    
- **Significance:** Wikis challenge traditional notions of authority and expertise by enabling massive collaborative knowledge construction (e.g., Wikipedia).
    
- **Use Cases:** Knowledge repositories for companies, lesson plans for teachers (Classroom 2.0), medical information sharing, and fan communities (Lostpedia).
    
- **Technical Nature:** Wikis are one of the most demanding social media systems to analyze due to large data volumes, complex page types, and various interaction modes.
    

---

## 5.2.2 Key Features of Wiki Systems

Wikis (specifically those using **MediaWiki** software) have several structural pillars:

- **History:** The "iceberg" of activity. Every edit records the editor, time, description (summary), and specific changes.
    
- **Namespaces:** Organizational categories that separate different types of work:
    
    - **Main/Article:** The actual encyclopedic or topical content.
        
    - **Talk/Discussion:** Threaded spaces for editors to coordinate edits and resolve disputes without affecting the article content.
        
    - **User:** Personal pages for registered contributors.
        
    - **User Talk:** Pages for direct user-to-user communication.
        
    - **Wikipedia/Project:** Policy debates and community governance.
        
- **Everything is a Page:** Collaborative tasks are not just for articles; policies, categories, and templates are all pages that evolve through community edits.
    
- **User Accounts:** While anonymous editing is often allowed, accounts allow for the tracking of "User Contributions" and the building of reputation.
    
![](https://diff.wikimedia.org/wp-content/uploads/2023/01/diff.png?fit=1500%2C1000)

![](https://www.researchgate.net/profile/Mj-Bishop/publication/225680609/figure/fig4/AS:341343319674894@1458393997858/Revision-history-of-a-Wikipedia-entry.png)

---

## 5.2.3 Wiki Networks from Edit Activity

Translating wiki activity into a network graph requires defining vertices, edges, and attributes:

## 5.2.3.1 Defining the Network Components

- **What is a Vertex?** Usually an individual **User ID**. It can also be a **Page** or a **Category** if studying content relationships.
    
- **What counts as an Edge?**
    
    - **User Talk Edits:** Editor A edits User B's talk page (direct communication).
        
    - **Article Talk Replies:** Editor A replies to Editor B in a discussion thread.
        
    - **Co-editing:** Two users edit the same page (shared interest/attention).
        
- **What Attributes matter?** Proportion of "minor" edits (grammar) vs. "major" edits (content), total edit volume in bytes, and specific topics of interest.
    

## Table: Primary Wiki Network Types

|**Network Type**|**Vertices**|**Edge Definition**|
|---|---|---|
|**Page Link**|Pages|Hyperlinks between pages|
|**User Talk**|Users|Comments on another user's profile|
|**User Discussion**|Users|Replies on an Article Talk page|
|**Affiliation (Bimodal)**|Pages & Users|User edits per page|
|**User Co-edit**|Users|Users who have edited the same pages|

---

## 5.2.4 & 5.2.5 Identifying Social Roles (Project Castle Case Study)

This study used data from the **Empire Wiki** to identify different types of editors based on their network signatures.

## 5.2.4.1 Social Roles and Subgraph Analysis

By creating **1.5-degree ego networks** (the user and their neighbors, plus connections between those neighbors), researchers identified four distinct types of participants:

1. **Type 1 Sysop (Administrator):** * **Network Role:** The "public face" of administration.
    
    - **Structure:** High degree of ties to users who are _not_ connected to each other.
        
    - **Function:** Bridges the "outer ring" (general community) to the "inner core" (senior staff).
        
2. **Type 2 Sysop (Senior Administrator):**
    
    - **Network Role:** Internal coordination.
        
    - **Structure:** Smaller number of overall ties, but those neighbors are densely interconnected.
        
    - **Function:** Embedded in a tight core of other senior admins; less direct community interaction.
        
3. **Active Participant (Substantive Expert):**
    
    - **Structure:** High project-specific edits but very low overall network ties.
        
    - **Behavior:** Works autonomously on specific content without much general community integration.
        
4. **Inactive Participant:**
    
    - **Structure:** Well-embedded in the general network but uninvolved in the specific project (e.g., Project Castle).
        

![](https://cdn.discordapp.com/attachments/1121800843193229406/1487471921879716042/image.png?ex=69c943ae&is=69c7f22e&hm=249ec0242ac0dccc18cbec5e293a4b6f43b8ff21d9c124845180786250e2b2db)

---

## 5.2.6 Deliberation in Article Talk Pages

This example explores the quality of discussion and how "structural signatures" identify helpful vs. harmful contributors.

- **Metric:** Deliberation quality (evidence-based reasoning + mutual respect).
    
- **Stoplight Visualization (NodeXL):**
    
    - **Green:** Highly deliberative/collaborative.
        
    - **Red:** Confrontational (hostile/counterproductive).
        
    - **Yellow:** Neutral or balanced.
        
- **Findings:** * **Confrontational users** often have the highest **out-degree** (talking _at_ many people) and form the most intense (thickest) dyadic ties.
    
    - **Deliberative users** tend to have fewer partners and act as mediators to diffuse hostility.
        
![](https://cdn.discordapp.com/attachments/1121800843193229406/1487471942062571582/image.png?ex=69c943b2&is=69c7f232&hm=4f53c06f677ed99a531fb9aecc682363f09a230b2887f33fb5e2d7dc38fe0282)

---

## 5.2.7 Large-Scale Structure (Lostpedia Case Study)

**Lostpedia** (fan wiki for the show _Lost_) was used to demonstrate how to map hundreds of thousands of edits.

## 5.2.7.1 Page-to-Page Co-edit Networks

- **Logic:** A link exists between Page X and Page Y if a significant number of people edited both.
    
- **Insight:** Found a clear cluster of "Theorists" who edit "Theory" pages almost exclusively, separate from those who edit "Article" or "Discussion" pages.
    

## 5.2.7.3 Normalization of Data

- **The Problem:** Power editors (like the example "Santa") edit so many pages that they connect to everyone, creating a "hairball" graph.
    
- **The Solution:** Use **percentages** instead of raw counts.
    
- **Formula:** $\frac{\text{Unique Co-edited Pages}}{\text{User's Total Edited Pages}}$.
    
- **Result:** A higher threshold (e.g., minimum 30% shared interest) reveals the most significant relationships and the true "backbone" of the community.
    

![](https://media.discordapp.net/attachments/1121800843193229406/1487472142974062622/image.png?ex=69c943e2&is=69c7f262&hm=03ec44b64978a411b3d4c5c5ffba7b67a33f1721be9a93292560ad37f4012894&=&format=webp&quality=lossless)

---

## 5.2.8 - 5.2.10 Summary for Practitioners and Researchers

- **For Practitioners:** Wiki analysis is "advanced" because there are no automatic spigots for everything. You must "roll your own" data via web scraping or SQL parsing. Success depends on narrowing the sampling frame (focusing on a specific project or time period).
    
- **For Researchers:** Wikis are the best settings to study the **diffusion of norms** and the **dynamics of cooperation** because the temporal history is perfectly preserved.
    
- **The "Everything is an Edit" Rule:** In wikis, communication _is_ editing. There is no separate message system; coordination happens through the content creation tools themselves.
    

---
