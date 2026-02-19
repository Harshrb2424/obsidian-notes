# Program to implement DBSCAN Clustering Algorithm

# 1. Import necessary libraries
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import DBSCAN
from sklearn.datasets import make_moons

# 2. Generate a synthetic dataset
# We'll create a dataset with two crescent-shaped clusters and some noise
X, y = make_moons(n_samples=200, noise=0.05, random_state=42)
print("Shape of the dataset:", X.shape)
print("First 5 data points:\n", X[:5])
print("-" * 30)

# 3. Apply the DBSCAN algorithm
# We'll choose eps and min_samples based on the dataset's characteristics
dbscan = DBSCAN(eps=0.2, min_samples=5)
dbscan.fit(X)

# Get the cluster labels. Labels with -1 indicate noise points.
labels = dbscan.labels_
n_clusters = len(np.unique(labels)) - (1 if -1 in labels else 0)
print(f"Number of clusters found: {n_clusters}")
print(f"Outlier points (noise) found: {list(labels).count(-1)}")
print("-" * 30)

# 4. Visualize the clusters and outliers
plt.figure(figsize=(10, 7))
unique_labels = np.unique(labels)
colors = plt.cm.Spectral(np.linspace(0, 1, len(unique_labels)))

for k, col in zip(unique_labels, colors):
    if k == -1:
        # Black color for noise points
        col = 'k'
    
    # Create a mask for points belonging to the current cluster
    class_member_mask = (labels == k)
    
    # Plot the points
    xy = X[class_member_mask]
    plt.scatter(xy[:, 0], xy[:, 1], c=[col], s=50, label=f'Cluster {k}' if k != -1 else 'Noise')

plt.title('DBSCAN Clustering')
plt.xlabel('Feature 1')
plt.ylabel('Feature 2')
plt.legend()
plt.show()

# 5. Display and interpret the results
print("Number of points in each cluster (including outliers):")
unique_labels, counts = np.unique(labels, return_counts=True)
for label, count in zip(unique_labels, counts):
    if label == -1:
        print(f"  Noise points (-1): {count}")
    else:
        print(f"  Cluster {label}: {count}")