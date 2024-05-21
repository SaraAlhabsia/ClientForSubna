import pandas as pd
from sklearn.decomposition import FactorAnalysis
from sklearn.feature_selection import f_classif 
from sklearn import preprocessing as p
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score,confusion_matrix

try:
    
    #read the dataset from the csv file and print it
    loan=pd.read_csv('train_loan prediction.csv')
    loan
    
    #drop if there is duplicates rows
    loan=loan.drop_duplicates()
    loan
    
    
    #Chexk the data type
    print(loan.dtypes)
    
    
    
    #Data Cleaning and Preprocessing:
        
    #check for missing values
    print(loan.isnull().sum())
    
    print(loan['Gender'].unique())
    print(loan['Married'].unique())
    print(loan['Dependents'].unique())
    print(loan['Education'].unique())
    print(loan['Self_Employed'].unique())
    print(loan['Property_Area'].unique())
    
    
    
    
    # fill the null value in Gender with it mode
    loan['Gender']=loan['Gender'].fillna(loan['Gender'].mode().iloc[0])
    print(loan.isnull().sum())
    
    # fill the null value in Married with it mode
    loan['Married']=loan['Married'].fillna(loan['Married'].mode().iloc[0])
    print(loan.isnull().sum())
    
    #fill the null value in Dependents with method forward fill (ffill)
    loan['Dependents']=loan['Dependents'].fillna(method='ffill',axis=0)
    print(loan.isnull().sum())
    
    print(loan['Self_Employed'].unique())
    print(loan['Education'].unique())
    
    # Fill the missing values in the 'Self_Employed' column based on the 'Education' column if Graduate=Yes else Not Graduate=No
    loan.loc[loan['Self_Employed'].isnull(), 'Self_Employed'] = loan['Self_Employed'].apply(lambda x: 'Yes' if x == 'Graduate' else 'No')
    print(loan.isnull().sum())
    
    # fill the null value in LoanAmount with it mean
    loan['LoanAmount']=loan['LoanAmount'].fillna(loan['LoanAmount'].mean())
    print(loan.isnull().sum())
    
    # fill the null value in Loan_Amount_Term with it median
    loan['Loan_Amount_Term']=loan['Loan_Amount_Term'].fillna(loan['Loan_Amount_Term'].median())
    print(loan.isnull().sum())
    
    
    #fill the null value in Credit_History with method back fill (bfill)
    loan['Credit_History']=loan['Credit_History'].fillna(method='bfill',axis=0)
    print(loan.isnull().sum())
    
    print(loan.describe())
    print(loan.info())
    print(loan.columns)
    
    #groupby
    print(loan.groupby('Loan_Status').sum()[['LoanAmount']])
    
    
    
    
    #Feature Engineering
    
    #unique values for object columns
    #print(loan['Loan_ID'].unique())
    print(loan['Gender'].unique())
    print(loan['Married'].unique())
    print(loan['Dependents'].unique())
    print(loan['Education'].unique())
    print(loan['Self_Employed'].unique())
    print(loan['Property_Area'].unique())
    
    # apply one hot encoding 
    #Nots:columns. It creates dummy variables for each unique value in each columns, representing them as binary columns
    #perform one-hot encoding on the "Loan_ID","Gender","Married","Dependents","Education ","Self_Employed ","Property_Area" 
    # Assuming 'loan' is the DataFrame you want to apply one-hot encoding on
    #loandm = pd.get_dummies(loan, columns=["Gender","Married","Dependents","Education","Self_Employed","Property_Area"])
    
    # Print the updated DataFrame
    #print(loandm)
    
    #print(loandm.info())
    
    #print(loandm.columns)
    #print('loan')
    
    #re-arange the columns
    # Define the new column order
    # Handle categorical variables (One-Hot Encoding)
    # Define the categorical columns for one-hot encoding
    categorical_columns = ['Loan_ID','Gender', 'Married', 'Dependents', 'Education', 'Self_Employed',
                           'Property_Area']
    
    # Perform one-hot encoding
    loan_encoded = pd.get_dummies(loan, columns=categorical_columns)
    
    # Print the updated dataset
    print(loan_encoded.head())
    
    print(loan_encoded.columns)
    
    newcolumns=['ApplicantIncome', 'CoapplicantIncome', 'LoanAmount',
           'Loan_Amount_Term', 'Credit_History', 'Gender_Female',
           'Gender_Male', 'Married_No', 'Married_Yes', 'Dependents_0',
           'Dependents_1', 'Dependents_2', 'Dependents_3+', 'Education_Graduate',
           'Education_Not Graduate', 'Self_Employed_No', 'Self_Employed_Yes',
           'Property_Area_Rural', 'Property_Area_Semiurban',
           'Property_Area_Urban','Loan_Status']
    
    print(newcolumns)
    
    loan_encoded =loan_encoded[newcolumns]
    print(loan_encoded)
    
    
    loan_encoded.to_csv('loan_encoded_EDA.csv',index=False)
    
    #Dimensionality Reduction
    
    #Factor Analysis
    
    loan=pd.read_csv('loan_encoded_EDA.csv')
    print(loan)
    
    #x=features
    x=loan.iloc[:,:-1]
    print(x)
    
    #y=target
    y=loan.iloc[:,-1]
    print(y)
    
    loan.info()
    
    #Find the correlation matrix
    ### Notes...
    #1. -1 > -0.5 = negative Correlation (strong)
    #2. -0.5 > 0 = negative Correlation (weak)
    #3. 0 = no Correlation
    #4. 0 > 0.5 = positive Correlation (weak)
    #5. 0.5 > 1 = positive Correlation (strong)
    print(loan.corr())
    
    
    # Factor Analysis is a dimensionality reduction technique.
    # n_components=3 indicates that the analysis will attempt to identify three underlying factors.
    f=FactorAnalysis(n_components=3)
    
    newx=f.fit_transform(x)
    print(newx)
    
    ### Notes...
    #fit_transform method applies the factor analysis to the input data x, and returns the transformed data in the factor space.
    
    FX=pd.DataFrame(newx,columns=['f1','f2','f3'])
    print(FX)
    
    ## ANOVA f SCORE - Feature Selection (Filter Methods)
    #we use to find beast feature selection
    
    # Combine featue with target using
    # use f_classif becaue the datafrane have strings value in target column
    f_scores = f_classif(x, y)[0]
    print(f_scores)
    
    
    
    ### Notes..
    #"Feature" and "Score" are the two columns in the new DataFrame f_cancer.
    #Names of features are included in the "Feature" column.
    #The F-values obtained by using the f_classif(x, y)[0] function are shown in the "Score" column(F-value).
    
    f_loan = pd.DataFrame({'Feature':x.columns, 'Score':f_classif(x,y)[0]})
    print(f_loan)
    
    #DataFrame f_cancer is sorted in descending order based on the values in the "Score" column(F-value).
    print(f_loan.sort_values('Score',ascending=False))
    
    
    
    # Part 5: Predictive Modeling
    
    print(loan)
    
    
    
    # converting  the string to numeric data using label encoding ()
    le= p.LabelEncoder()
    
    loan.Loan_Status = le.fit_transform(loan.Loan_Status)
    print(loan)
    
    # Get x & y
    x = loan.iloc[:,:-1] # feature
    print(x)
    
    y = loan.iloc[:,-1]  # target
    print(y)
    
    
    
    # Splitting the dataset into the training set and test set
    xtrain,xtest,ytrain,ytest = train_test_split(x,y,train_size=0.2,random_state=42)
    
    print(xtest)
    
    print(ytest)
    
    ## Classification Model
    #1. Classification is used to predict a category
    #2. Classification is the process of predicting the class of given data points.
    #3. Classification is the task of approximating a mapping function from input variables (X) to discrete output variables (y).
    
    ## Classification Algorithms
     
    #K-Nearest Neighbors (K-NN),
    #1. K-NN is a non linear model
    #2. stores all available cases and classifies new cases based on a similarity measure.
    
    
    
    k = KNeighborsClassifier()
    
    # training model
    k.fit(xtrain,ytrain)
    
    ### Notes...
    #Predict( ) method is used to generate predictions for new, unseen data based on a trained model.
    
    # the predict for each row depend on the stauts (target column)
    print(k.predict(xtest))
    
    ### Accuracy
    #Accuracy is the ratio between the number of correctly classified points to the total number of points.
    
    
    
    ypred = k.predict(xtest)
    print(ypred)
    
    # the score of correct data
    print(accuracy_score(ytest,ypred))
    
    
    ### Confusion matrix
    #A confusion matrix shows the number of correct and incorrect predictions with count values and broken down by each class.
    
    # how many are wrong(mising value)
    print(confusion_matrix(ytest,ypred))
    
    print(ytest.value_counts())


except FileNotFoundError:
    print("File not found. Please make sure the file exists in the specified location.")

except pd.errors.EmptyDataError:
    print("The dataset is empty.")

except ValueError as ve:
    print("An error occurred:", str(ve))

except Exception as e:
    print("An unexpected error occurred:", str(e))














