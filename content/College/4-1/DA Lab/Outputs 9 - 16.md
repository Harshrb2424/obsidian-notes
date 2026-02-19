## Experiment No: 9
![[Pasted image 20251003112544.png]]
![[Pasted image 20251003112827.png]]
```
> python exp9.py
First 5 rows of the dataset:
   sepal length (cm)  sepal width (cm)  petal length (cm)  petal width (cm)  species
0                5.1               3.5                1.4               0.2        0
1                4.9               3.0                1.4               0.2        0
2                4.7               3.2                1.3               0.2        0
3                4.6               3.1                1.5               0.2        0
4                5.0               3.6                1.4               0.2        0

Dataset info:
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 150 entries, 0 to 149
Data columns (total 5 columns):
 #   Column             Non-Null Count  Dtype
---  ------             --------------  -----
 0   sepal length (cm)  150 non-null    float64
 1   sepal width (cm)   150 non-null    float64
 2   petal length (cm)  150 non-null    float64
 3   petal width (cm)   150 non-null    float64
 4   species            150 non-null    int64
dtypes: float64(4), int64(1)
memory usage: 6.0 KB

Training set size: 120 samples
Testing set size: 30 samples

Model Accuracy: 100.00%

Confusion Matrix:
[[10  0  0]
 [ 0  9  0]
 [ 0  0 11]]

Classification Report:
              precision    recall  f1-score   support

      setosa       1.00      1.00      1.00        10
  versicolor       1.00      1.00      1.00         9
   virginica       1.00      1.00      1.00        11

    accuracy                           1.00        30
   macro avg       1.00      1.00      1.00        30
weighted avg       1.00      1.00      1.00        30



```
## Experiment No: 10
```
> python run.py 
Data saved to 'play_tennis.csv'

Loaded dataset:
    Outlook Temperature Humidity    Wind PlayTennis
0     Sunny         Hot     High    Weak         No
1     Sunny         Hot     High  Strong         No
2  Overcast         Hot     High    Weak        Yes
3      Rain        Mild     High    Weak        Yes
4      Rain        Cool   Normal    Weak        Yes
------------------------------
Calculating Information Gain for each attribute:
Information Gain for 'Outlook': 0.2467
Information Gain for 'Temperature': 0.0292
Information Gain for 'Humidity': 0.1518
Information Gain for 'Wind': 0.0481
------------------------------
The best attribute to split on is 'Outlook' with an Information Gain of 0.2467.
```

```play_tennis.csv
Outlook,Temperature,Humidity,Wind,PlayTennis
Sunny,Hot,High,Weak,No
Sunny,Hot,High,Strong,No
Overcast,Hot,High,Weak,Yes
Rain,Mild,High,Weak,Yes
Rain,Cool,Normal,Weak,Yes
Rain,Cool,Normal,Strong,No
Overcast,Cool,Normal,Strong,Yes
Sunny,Mild,High,Weak,No
Sunny,Cool,Normal,Weak,Yes
Rain,Mild,Normal,Weak,Yes
Sunny,Mild,Normal,Strong,Yes
Overcast,Mild,High,Strong,Yes
Overcast,Hot,Normal,Weak,Yes
Rain,Mild,High,Strong,No
```
## Experiment No: 11
![[Pasted image 20251003113003.png]]

```
> python exp11.py 
First 5 rows of the dataset:
   sepal length (cm)  sepal width (cm)  petal length (cm)  petal width (cm)  species
0                5.1               3.5                1.4               0.2        0
1                4.9               3.0                1.4               0.2        0
2                4.7               3.2                1.3               0.2        0
3                4.6               3.1                1.5               0.2        0
4                5.0               3.6                1.4               0.2        0

Dataset info:
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 150 entries, 0 to 149
Data columns (total 5 columns):
 #   Column             Non-Null Count  Dtype
---  ------             --------------  -----
 0   sepal length (cm)  150 non-null    float64
 1   sepal width (cm)   150 non-null    float64
 2   petal length (cm)  150 non-null    float64
 3   petal width (cm)   150 non-null    float64
 4   species            150 non-null    int64
dtypes: float64(4), int64(1)
memory usage: 6.0 KB

Training set size: 112 samples
Testing set size: 38 samples

Model Accuracy: 100.00%

Confusion Matrix:
[[15  0  0]
 [ 0 11  0]
 [ 0  0 12]]

Classification Report:
              precision    recall  f1-score   support

      setosa       1.00      1.00      1.00        15
  versicolor       1.00      1.00      1.00        11
   virginica       1.00      1.00      1.00        12

    accuracy                           1.00        38
   macro avg       1.00      1.00      1.00        38
weighted avg       1.00      1.00      1.00        38

```
## Experiment No: 12

![[Pasted image 20251003113058.png]]

```
> python exp12.py 
First 5 rows of the dataset:
   sepal length (cm)  sepal width (cm)  petal length (cm)  petal width (cm)  species
0                5.1               3.5                1.4               0.2        0
1                4.9               3.0                1.4               0.2        0
2                4.7               3.2                1.3               0.2        0
3                4.6               3.1                1.5               0.2        0
4                5.0               3.6                1.4               0.2        0

Dataset info:
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 150 entries, 0 to 149
Data columns (total 5 columns):
 #   Column             Non-Null Count  Dtype
---  ------             --------------  -----
 0   sepal length (cm)  150 non-null    float64
 1   sepal width (cm)   150 non-null    float64
 2   petal length (cm)  150 non-null    float64
 3   petal width (cm)   150 non-null    float64
 4   species            150 non-null    int64
dtypes: float64(4), int64(1)
memory usage: 6.0 KB

Training set size: 112 samples
Testing set size: 38 samples

Model Accuracy (with k=3): 100.00%

Confusion Matrix:
[[15  0  0]
 [ 0 11  0]
 [ 0  0 12]]

Classification Report:
              precision    recall  f1-score   support

      setosa       1.00      1.00      1.00        15
  versicolor       1.00      1.00      1.00        11
   virginica       1.00      1.00      1.00        12

    accuracy                           1.00        38
   macro avg       1.00      1.00      1.00        38
weighted avg       1.00      1.00      1.00        38
```
## Experiment No: 13
![[Pasted image 20251003113145.png]]

```
> python exp13.py 
First 5 rows of the dataset:
   sepal_length  petal_length
0           5.1           1.4
1           4.9           1.4
2           4.7           1.3
3           4.6           1.5
4           5.0           1.4
------------------------------
Final cluster centroids for k=3:
[[6.83902439 5.67804878]
 [5.00784314 1.49215686]
 [5.87413793 4.39310345]]
------------------------------
Number of points in each cluster:
cluster
0    41
1    51
2    58
Name: count, dtype: int64
------------------------------
Inertia (Sum of squared distances): 53.81
```
## Experiment No: 14
![[Pasted image 20251003113235.png]]

```
> python exp14.py 
Shape of the dataset: (1000, 2)
First 5 data points:
 [[-8.55503989  7.06461794]
 [-6.13753182 -6.58081701]
 [-6.32130028 -6.8041042 ]
 [ 4.18051794  1.12332531]
 [ 4.38028748  0.47002673]]
------------------------------
Number of clusters found: 4
------------------------------
Number of points assigned to each cluster:
  Cluster 0: 250 points
  Cluster 1: 250 points
  Cluster 2: 250 points
  Cluster 3: 250 points
```

## Experiment No: 15
![[Pasted image 20251003113508.png]]

```
> python exp15.py
Shape of the dataset: (500, 2)
First 5 data points:
 [[-5.73035386 -7.58328602]
 [ 1.94299219  1.91887482]
 [ 6.82968177  1.1648714 ]
 [-2.90130578  7.55077118]
 [ 5.84109276  1.56509431]]
------------------------------
Number of clusters found: 3
Indices of the medoids: [462 449  93]
------------------------------
Number of points in each cluster:
  Cluster 0: 166 points
  Cluster 1: 167 points
  Cluster 2: 167 points
------------------------------
Total distance to medoids (cost): 613.31
```

## Experiment No: 16
![[Pasted image 20251003113556.png]]

```
> python exp16.py 
Shape of the dataset: (200, 2)
First 5 data points:
 [[-1.02069027  0.10551754]
 [ 0.9058265   0.45785751]
 [ 0.61842175  0.75708632]
 [ 1.22770701 -0.42518512]
 [ 0.32935594 -0.20694568]]
------------------------------
Number of clusters found: 2
Outlier points (noise) found: 0
------------------------------
Number of points in each cluster (including outliers):
  Cluster 0: 100
  Cluster 1: 100
```
