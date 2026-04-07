## Conversation, Entertainment, and Information

## 3.3.1 Introduction: The Rise of the Microblog

- **Simplicity as Strategy:** Twitter’s success stems from its "brass-tacks" construction: a stream of short messages and an empty box.
    
- **Cultural Impact:** Used for political campaigns, fan engagement, and real-time coordination during natural disasters (hurricanes, wildfires) or political turmoil (Iran 2009).
    
- **Growth Milestones:** * **SXSW 2007:** Initial "tech-savvy" buzz.
    
    - **The "Oprah" Effect (2009):** Mainstream adoption driven by celebrities like Shaquille O’Neal, Ashton Kutcher, and Oprah Winfrey.
        
- **Ecosystem:** Beyond the web interface, third-party clients like **TweetDeck** and **Twhirl** allow for specialized views (columns, search queries).
    

![Image Placeholder: Figure 3.3.1 - Estimated growth curve of Twitter showing sharp spikes in 2007 and 2009](https://i.guim.co.uk/img/static/sys-images/Media/Pix/pictures/2010/3/12/1268403777336/Twitter-RJMetrics-001.jpg?width=445&dpr=1&s=none&crop=none)


---

## 3.3.2 The Nuts and Bolts

Twitter is a **conversational microblog** where users post "tweets" limited to **140 characters** (originally for SMS compatibility).

#### Key Terminology

- **Followers:** People who subscribe to your messages.
    
- **Friends:** People whom _you_ follow.
    
- **@replies & @mentions:**
    
    - **@reply:** A tweet starting with a username (e.g., `@redlog`). A "marker of addressivity" that keeps conversations coherent in a noisy environment.
        
    - **@mention:** Including a name within a tweet but not at the start.
        
    - **Symmetry:** While following is often asymmetric (celebrities have fans but don't follow back), the exchange of @replies creates a **symmetric connection**, indicating a stronger social tie.
        
- **#hashtags:** * Community-driven descriptive keywords.
    
    - Used for events (#chi2010), news (#mumbai), or games (#robotpickuplines).
        
- **Retweeting (RT):** * Rebroadcasting someone else’s tweet with attribution.
    
    - Functions as **validation** (I like this) and **amplification** (I want my followers to see this).
        

![Image Placeholder: Figure 3.3.2 - Twitter’s web-based interface dashboard](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxYi7m52v8K20pMbWXv41RY5bUPwjNUp-fg&s)

---

## 3.3.3 Networks in Twitter: Attention vs. Information

The "Friends/Followers" network is actually two distinct networks overlaying the same people:

1. **Attention Network:** Follower ties show where attention flows (e.g., from a fan to a celebrity).
    
2. **Information Network:** The reverse direction; shows where information flows (from the tweeter to the followers).
    


#### Centrality Metrics in Twitter

- **Eigenvector Centrality (Importance):** Measures influence. You are important if you are followed by other "important" people (similar to Google's PageRank).
    
    - _Practical Use:_ Identifying **spammers** who may have many followers, but whose followers are unimportant/fake.
        
- **Betweenness Centrality (Brokerage):** Measures access to **non-redundant information**.
    
    - _The "Bridge":_ An actor who connects two otherwise unconnected clusters. High betweenness actors are "information brokers" who see diverse content first.
        

![Image Placeholder: Figure 3.3.10 - A bridge actor connecting two separate communities, illustrating high betweenness vs. low eigenvector centrality](https://memgraph.com/images/blog/why-are-nodes-with-a-high-betweenness-centrality-score-high-maintenance/why-are-nodes-with-a-high-betweenness-centrality-score-high-maintenance%2FBetweennes-centrality-high-score.png)

---

## 3.3.4 Acquiring Data & Limitations

- **NodeXL Options:** "From Twitter User’s Network" (Ego-centric) or "From Twitter Search Network" (Topic-centric).
    
- **Rate Limits:** Twitter restricts standard accounts to **150 requests per hour**. **Whitelisting** can increase this to 20,000/hour.
    
- **Speed:** Data collection is slow (10–30 seconds per user). Mapping a network of 1,000 users can take hours.
    

---

## 3.3.5 Discovery with NodeXL

#### 3.3.5.1 The Ego Network

- **Ego:** The focal user. **Alters:** The user's friends and followers.
    
- **Strong Ties vs. Weak Ties:**
    
    - **Reciprocal Ties:** (You follow me, I follow you) usually indicate close friends or colleagues.
        
    - **Closed Triads:** If two of your friends know each other, it forms a "closed triad," suggesting a tight, cohesive community.
        
- **Cluster Detection:** Using NodeXL’s "Find Clusters" can automatically separate your Twitter alters into real-world groups (e.g., "Family" vs. "Work Colleagues").
    


#### 3.3.5.2 Trending Topics (Information Diffusion)

- **Diffusion Patterns:**
    
    - **Star Pattern:** One user’s tweet is retweeted by many followers (highly influential "seed").
        
    - **Grid Pattern:** Users only mention a topic after seeing it from multiple sources (social influence/redundancy is key).
        
- **Case Study: #BlackFriday:**
    
    - Analysis reveals "seeds"—specialized accounts that may have few followers but are highly effective at getting their messages retweeted by larger, more active accounts.
        

---

## 3.3.6 Practitioner’s Summary

- **Strategy is Key:** Whether for personal branding or business, you must identify the **network structure**.
    
- **Starlike networks** prioritize the center; **Cohesive networks** prioritize the group.
    
- Identify "seeds" (influential promoters) to maximize information spread for free.
    

---

## 3.3.7 Researcher’s Agenda

- **Micro-level:** Studying individual features like retweets and @replies.
    
- **Macro-level:** Mapping memes, idea spread, and organizational connections across institutional boundaries.
    
- **Challenge:** Obtaining and visualizing the "minute details" of human conversation as networks change over time.
    

---
