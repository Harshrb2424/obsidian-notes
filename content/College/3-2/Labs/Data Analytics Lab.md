### **Course Objectives**
1. To explore the foundational principles of data analytics.
2. To understand and apply statistical analysis methods.
3. To discover patterns in data, analyze supervised and unsupervised models, and evaluate algorithm accuracy.
4. To implement search methods and visualization techniques effectively.

---

### **Course Outcomes**
Upon completion of this course, students will be able to:
1. Understand and implement linear regression and logistic regression.
2. Analyze and compare the functionality of various classifiers.
3. Apply visualization techniques using different types of graphs.
4. Use descriptive and predictive analytics for diverse datasets.

---

### **List of Experiments**

#### **1. Data Preprocessing**
Perform the following tasks on a dataset:
- **a) Handling Missing Values**: Impute or remove missing values.
- **b) Noise Detection and Removal**: Identify and handle noisy data.
- **c) Identifying Data Redundancy and Elimination**: Remove duplicate or redundant data.

**Example Code Snippet**:
```python
import pandas as pd

# Load dataset
data = pd.read_csv("data.csv")

# Handle missing values
data.fillna(data.mean(), inplace=True)

# Remove duplicates
data.drop_duplicates(inplace=True)

# Noise removal (example: removing outliers)
Q1 = data.quantile(0.25)
Q3 = data.quantile(0.75)
IQR = Q3 - Q1
data = data[~((data < (Q1 - 1.5 * IQR)) | (data > (Q3 + 1.5 * IQR))).any(axis=1)]
```

---

#### **2. Implement Any One Imputation Model**
Use mean, median, or KNN imputation to handle missing values.

**Example Code Snippet**:
```python
from sklearn.impute import KNNImputer

imputer = KNNImputer(n_neighbors=2)
data_imputed = imputer.fit_transform(data)
print(data_imputed)
```

---

#### **3. Implement Linear Regression**
Build a linear regression model to predict continuous values.

**Example Code Snippet**:
```python
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error

X = data[['feature1', 'feature2']]
y = data['target']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = LinearRegression()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
mse = mean_squared_error(y_test, y_pred)
print(f"Mean Squared Error: {mse}")
```

---

#### **4. Implement Logistic Regression**
Build a logistic regression model for binary classification.

**Example Code Snippet**:
```python
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

model = LogisticRegression()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy}")
```

---

#### **5. Implement Decision Tree Induction for Classification**
Build a decision tree classifier and visualize the tree structure.

**Example Code Snippet**:
```python
from sklearn.tree import DecisionTreeClassifier, plot_tree
import matplotlib.pyplot as plt

model = DecisionTreeClassifier()
model.fit(X_train, y_train)

plt.figure(figsize=(12, 8))
plot_tree(model, filled=True, feature_names=['feature1', 'feature2'], class_names=['Class 0', 'Class 1'])
plt.show()
```

---

#### **6. Implement Random Forest Classifier**
Build a random forest classifier and evaluate its performance.

**Example Code Snippet**:
```python
from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy}")
```

---

#### **7. Implement ARIMA on Time Series Data**
Apply ARIMA (AutoRegressive Integrated Moving Average) for time series forecasting.

**Example Code Snippet**:
```python
from statsmodels.tsa.arima.model import ARIMA

# Fit ARIMA model
model = ARIMA(data['value'], order=(5, 1, 0))
model_fit = model.fit()

# Forecast
forecast = model_fit.forecast(steps=10)
print(forecast)
```

---

#### **8. Object Segmentation Using Hierarchical-Based Methods**
Perform hierarchical clustering for object segmentation.

**Example Code Snippet**:
```python
from sklearn.cluster import AgglomerativeClustering
import matplotlib.pyplot as plt

cluster = AgglomerativeClustering(n_clusters=3, affinity='euclidean', linkage='ward')
labels = cluster.fit_predict(data)

plt.scatter(data[:, 0], data[:, 1], c=labels, cmap='rainbow')
plt.show()
```

---

#### **9. Perform Visualization Techniques**
Create various types of graphs (Bar, Column, Line, Scatter, 3D Cubes).

**Example Code Snippet**:
```python
import matplotlib.pyplot as plt
import seaborn as sns

# Bar Chart
sns.barplot(x='category', y='value', data=data)
plt.show()

# Scatter Plot
plt.scatter(data['feature1'], data['feature2'])
plt.show()
```

---

#### **10. Perform Descriptive Analytics on Healthcare Data**
Analyze healthcare data using descriptive statistics.

**Example Code Snippet**:
```python
print(data.describe())
sns.boxplot(x='age', y='health_status', data=data)
plt.show()
```

---

#### **11. Perform Predictive Analytics on Product Sales Data**
Predict future sales using regression or time series models.

**Example Code Snippet**:
```python
# Use Linear Regression or ARIMA for prediction
```

---

#### **12. Apply Predictive Analytics for Weather Forecasting**
Forecast weather conditions using time series or machine learning models.

**Example Code Snippet**:
```python
# Use ARIMA or LSTM for weather forecasting
```

---

### **Textbooks**
1. **Student’s Handbook for Associate Analytics – II, III**.
2. **Data Mining Concepts and Techniques** by Han, Kamber (3rd Edition).

---

### **Reference Books**
1. **Introduction to Data Mining** by Tan, Steinbach, Kumar.
2. **Data Mining Analysis and Concepts** by M. Zaki and W. Meira.
3. **Mining of Massive Datasets** by Jure Leskovec, Anand Rajaraman, Jeffrey D Ullman.
