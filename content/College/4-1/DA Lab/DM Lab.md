# *Experiment No: 1*

*Title:* Data Cleaning, Data Transformation (Normalization), and Data Integration
## *Objective:*
To perform data cleaning, data normalization, and data integration on real-world datasets using Python (Pandas, NumPy, and Scikit-learn libraries).
## *Tools & Technologies:*
* Python 3.x
* Pandas
* NumPy
* Scikit-learn
* Jupyter Notebook / Google Colab
## *Dataset Used:*
* *Customers.csv*: Contains customer information (Customer ID, Name, Email, Country)
* *Transactions.csv*: Contains transaction records (Transaction ID, Customer ID, Date, Amount)
---
## *Step 1: Data Loading*

```python
import pandas as pd
```

# Load datasets
```python
customers = pd.read_csv("Customers.csv")
transactions = pd.read_csv("Transactions.csv")
````

# Display basic info
```python
print(customers.head())
print(transactions.head())
```


---

## *Step 2: Data Cleaning*

### a) Handle Missing Values


```python
# Check for missing values
print(customers.isnull().sum())
print(transactions.isnull().sum())


# Fill missing emails with 'unknown'
customers['Email'].fillna('unknown', inplace=True)

# Drop transactions with missing amount
transactions.dropna(subset=['Amount'], inplace=True)


### b) Remove Duplicates

customers.drop_duplicates(inplace=True)
transactions.drop_duplicates(inplace=True)


### c) Data Type Corrections

transactions['Date'] = pd.to_datetime(transactions['Date'])
transactions['Amount'] = transactions['Amount'].astype(float)


---

## *Step 3: Data Transformation (Normalization)*

### Normalize the transaction amount using Min-Max Scaling:


from sklearn.preprocessing import MinMaxScaler

scaler = MinMaxScaler()
transactions['Amount_Normalized'] = scaler.fit_transform(transactions[['Amount']])


---

## *Step 4: Data Integration*

### Merge datasets on Customer ID:


merged_data = pd.merge(transactions, customers, on='Customer ID', how='inner')
print(merged_data.head())


---

## *Step 5: Save Cleaned and Integrated Data*

merged_data.to_csv("Cleaned_Integrated_Data.csv", index=False)

```

---
## *Result:*
* Successfully performed data cleaning (missing values, duplicates, type correction)
* Normalized the transaction amount using Min-Max normalization
* Integrated the customer and transaction datasets using a common key

---
## *Conclusion:*
Data pre-processing is a crucial step before analysis or model training. This experiment demonstrates basic data cleaning, transformation, and integration techniques using real-world data.