## 4.2.1 Introduction to Web Networks

- **The World Wide Web (WWW)** is the largest machine-readable network graph on Earth.
    
- **Graph Components:**
    
    - **Vertices (Nodes):** Individual web pages.
        
    - **Edges (Ties):** URL hyperlinks connecting one page to another.
        
- **Organizational Web Presence:** While "Web 2.0" (social media) is vital, the "Web 1.0" or **static web presence** remains the primary medium for building corporate or institutional identity.
    
- **Key Insight:** Unlike other social media networks that link _people_, hyperlink networks primarily link **organizations and institutions**.
    
- **Business Value:** Analyzing these networks reveals how an organization’s online position matches its offline brand presence and provides ethical competitive intelligence.
    
---

## 4.2.2 Theory and Methodology of Hyperlinking

## 4.2.2.1 The Theory of Hyperlinking

Hyperlinks act as a form of **"web currency."** There is no single theory for why sites link to each other, but common motivations include:

- **Authority and Endorsement:** A link acts as a "vote" of confidence or credibility.
    
- **Trust:** Reflects a reliable relationship between two entities.
    
- **Alliance Building:** Creating a "critical mass" for a shared message or viewpoint.
    
- **Negative Affect:** Linking to a site specifically to criticize it.
    

#### Visibility vs. Retrievability

- **Retrievability:** An **absolute** concept. A site is retrievable if its server is operational.
    
- **Visibility:** A **relative** concept. Visibility is determined by the number of inbound links from other relevant, high-ranking sites.
    

## 4.2.2.2 Methodological Issues

Analyzing hyperlink networks requires defining three parameters:

1. **Nodes:** Are they pages or entire websites?
    
    - **Meta-nodes:** Analysts often group pages from a single hostname or subdomain into one vertex to represent an entire organization.
        
2. **Ties:** Are the edges directed or undirected?
    
    - **Weighting:** Can be based on the number of links between sites or the "depth" of the link within the site structure.
        
3. **Boundaries:** The web is "borderless," making it hard to define where a network ends.
    
    - **Snowball Sampling:** Starting with a set of "seed sites" and crawling outward to discover the surrounding network.
        

---

## 4.2.3 The VOSON Data Provider

- **Definition:** A NodeXL plug-in (Virtual Observatory for the Study of Online Networks).
    
- **Function:** It provides a front-end for a web crawler that extracts hyperlinks and uses the Yahoo! API to find inbound links to specific sites.
    
- **Significance:** It allows non-programmers to conduct complex web-crawling and network analysis tasks within the familiar Excel interface.
    
![](http://www.connectedaction.net/wp-content/uploads/2011/04/20110221-NodeXL-Twitter-List-valdiskrebs-network-analysts-1024x768.jpg)

---

## 4.2.4 Practical Example 1: The Ego Network

This explores who links to a specific organization (using the VOSON Project site as the "Ego").

## The Process:

1. **Seed Sites:** Input the URL of the target organization.
    
2. **Crawl Parameters:** * **Inbound Crawl:** Finding who links _to_ you.
    
    - **Outbound Crawl:** Finding who _you_ link to.
        
3. **Analysis of TLDs (Top-Level Domains):** * Mapping vertex colors to TLDs (e.g., **.edu**, **.com**, **.org**) reveals the diversity of an organization’s connections.
    

## Managing "Topic Drift"

- **Topic Drift:** As you crawl deeper, the network can "blow up" with irrelevant sites (e.g., a relevant blog linking to a random cooking site).
    
- **The Solution:** Create a subgraph containing only "important sites"—defined here as sites with an **undirected degree $\ge 2$** (meaning they are connected to at least two other sites in your target network).
    
![](https://cdn.harshrb.in/resources/Topic-Drift.png)

---

## 4.2.5 Practical Example 2: Mapping a Field/Industry

Instead of an ego network, this maps an entire sector (e.g., "Social Network Analysis software").

## Key Findings:

- **Central Actors:** Sites like INSNA or software providers (UCINET, Pajek) appear with high **in-degree** (authority) because many others link to them.
    
- **Hubs vs. Authorities (Kleinberg’s Theory):**
    
    - **Authorities:** Provide specialized, high-value information (e.g., software distributors).
        
    - **Hubs:** Sites that provide organized lists of links to authorities (e.g., Wikipedia, Answers.com).
        
- **Actionable Insight:** If a top-ranked site in your industry does _not_ link to you, submitting a request for a link can significantly increase your traffic and search engine ranking.
    
![](https://cdn.harshrb.in/resources/Mapping-a-Field.png)

---

## 4.2.6 Advanced Topics: The "Holy Grails"

1. **Blog Networks:** Much more complex than static sites because they require **longitudinal data** (links at specific time points) and the distinction between **permalinks** (in body text) and **blogrolls** (side lists).
    
2. **Dynamic Network Analysis:** Answering "How did the network get this way?" by looking at archived data (e.g., from the Internet Archive).
    
3. **Network Flow:** Measuring the actual volume of traffic moving along the "pipes" (hyperlinks), which usually requires access to private web logs or expensive third-party data (e.g., Alexa, Hitwise).
    

---

## 4.2.7 Practitioner’s Summary

- **Measuring Success:** Use NodeXL to identify the leaders in your industry and emulate the structure of their hyperlink network.
    
- **Strategy:** * If you want to be a **Hub**, find the best **Authorities** to link to.
    
    - If you want to be an **Authority**, identify the top **Hubs** and request they link to you.
        
- **Caveat:** Always verify automated data with **domain knowledge**. "Garbage in, garbage out" applies heavily to web crawling.
    

## 4.2.8 Researcher’s Agenda

- **E-Government:** Researching the "nodality" (central position) of government sites in social and informational networks.
    
- **Network Ethnography:** A promising area combining quantitative hyperlink analysis with qualitative methods to understand the _meaning_ behind the connections.
    

---
