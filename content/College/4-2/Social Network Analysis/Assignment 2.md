
# 1. Explain how Facebook networks can be visualized and interpreted. Discuss key concepts such as nodes, edges, communities, and centrality measures.
Facebook networks are "publicly articulated" egocentric networks that reveal how individuals connect and manage their social contexts. Visualizing these networks in tools like NodeXL typically involves mapping 1.5-degree networks, which include a user’s friends and the connections between those friends.

### Nodes and Edges

- **Nodes (Vertices):** Represent a user's friends, also known as "alters". In visual maps, the central user (Ego) is typically hidden. Because Ego is connected to everyone, excluding them declutters the graph and exposes the actual underlying social structure.
- **Edges (Ties):** Represent mutual friendships between the alters. These ties are inherently undirected and unweighted, as Facebook requires mutual consent to establish a friend connection.
![](https://www.connectedaction.net/wp-content/uploads/2009/09/2009-September-Bernie-Hogan-Facebook-Network-Visualization.png)
### Communities (Clusters)

- Facebook networks naturally segment into distinct **clusters** or communities representing different facets of a person’s life, such as high school friends, coworkers, or family.
- These communities are visualized using nonordered data attributes, meaning distinct colors or shapes are assigned to visually differentiate each social group.

### Centrality Measures

Centrality metrics expose a user's structural importance and are visualized using ordered attributes like node size and opacity:

- **Degree:** Indicates the number of mutual friends an alter shares with the Ego.
- **Betweenness Centrality:** Identifies "bridges" or "brokers" who connect completely different social groups (e.g., a spouse who links your family cluster to your coworker cluster).
- **Eigenvector Centrality:** Highlights individuals located at the center of dense clusters. Mapping this metric to node opacity makes densely packed groups much easier to interpret visually.

By analyzing these components through force-directed graphs or customized "pinwheel" layouts, users can strategically interpret their networking styles and privacy boundaries.
# 2. Describe the structure of WWW hyperlink networks. How do concepts like hubs, authorities, and PageRank help in understanding web connectivity?
### Structure of WWW Hyperlink Networks

- The World Wide Web is the largest machine-readable network graph on Earth, built fundamentally upon vertices and edges.
- **Nodes (Vertices):** These represent individual web pages or entire websites. For analytical purposes, pages are often grouped into "meta-nodes" to represent the comprehensive web presence of whole organisations or institutions.
- **Ties (Edges):** URL hyperlinks connect these pages. Ties can be directed or undirected, and they can be weighted based on link frequency or the depth of the link within a site's structure.
- Unlike social media platforms that connect individuals, static hyperlink networks primarily connect organisations, with hyperlinks acting as a form of "web currency" to confer trust, endorsement, or even criticism.

### Hubs and Authorities

- **Authorities:** These are web sites that provide highly specialised, valuable, and authoritative information within a specific industry or field.
- **Hubs:** These sites act as directories (such as Wikipedia or Answers.com), providing organised lists of links that direct visitors to authoritative sources.
- According to Kleinberg's theory of web connectivity, the web relies on a symbiotic relationship: a good hub links to many good authorities, and a good authority receives inbound links from many good hubs.

### PageRank and Web Connectivity

- A website's online visibility is relative and heavily determined by the quantity of inbound links it receives from other relevant, high-ranking sites.
- Search engine algorithms, such as Google's PageRank, utilise concepts like eigenvector centrality to measure this structural importance; a site becomes highly influential and visible if it receives attention from other "important" web sites.
# 3. Compare the patterns of content interaction and prominence in YouTube and Wiki networks. How do user participation and collaboration differ in both platforms?
### Content Interaction and Collaboration

- **YouTube (Consumption and Affinity):** User participation revolves around consuming, sharing, and reacting to media. Interaction is driven by subscriptions, tags, ratings, textual comments, and video responses. Collaboration is often implicit, resulting in either sparse, asymmetric "star" networks-where fans follow a central celebrity-or dense "hubs" formed around shared niche interests, such as indie music or makeup tutorials.
- **Wiki (Co-creation and Coordination):** In wikis, collaboration is the fundamental engine of the platform, where "communication is editing". Users interact explicitly by co-editing articles and coordinating tasks through specialized "Talk" and "User" namespaces. Participation is highly structural and consensus-driven; for example, deliberative users often act as network mediators, whereas confrontational editors create thick, high-intensity dyadic ties.

### Patterns of Prominence and Social Roles

- **YouTube (Popularity vs. Centrality):** Prominence is superficially measured by view counts and ratings, but global popularity does not always equal network influence. Structurally prominent videos often act as "boundary objects" that bridge otherwise isolated sub-communities, even if their overall view counts are relatively low.
- **Wiki (Structural Governance):** Prominence is deeply tied to distinct administrative and editorial roles. For instance, "Type 1 Sysops" act as the public face bridging the general community to the core, while "Type 2 Sysops" form a dense, interconnected management core. Interestingly, the most prolific substantive experts often work autonomously and remain structurally isolated from the broader community.