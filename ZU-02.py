#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("Amazon_Unlocked_Mobile.csv")

df


# In[2]:


df.isna().sum()


# In[4]:


pd.set_option('display.max_colwidth', None)

df= df [['Rating','Reviews']]
df


# In[6]:


df.isna().sum()


# In[7]:


def LableFunc(rating):
    if rating >=3:
        return 'positive'
    else:
        return 'negative'
    
df['Label'] = df['Rating'].apply(LableFunc)

df.head(10)


# In[8]:


df['Reviews'].iloc[5]


# In[9]:


import re
def clean_url(review_text):
    return re.sub(r'http\S+', '', review_text)

df['CleanReview'] = df['Reviews'].apply(clean_url)


# In[10]:


df.head(10)


# In[11]:


def clean_non_alphanumeric(review_text):
    return re.sub('[^a-zA-Z]' , ' ' , review_text)

df['CleanReview'] = df['CleanReview'].apply(clean_non_alphanumeric)


# In[12]:


df.head(10)


# In[13]:


def clean_lowercase(review_text):
    return str(review_text).lower()
df['CleanReview'] = df['CleanReview'].apply(clean_lowercase)

df.head(10)


# In[15]:


import nltk
nltk.download('punkt')
from nltk.tokenize import word_tokenize

def clean_tokenization(review_text):
    return word_tokenize(review_text)

df['CleanReview'] = df['CleanReview'].apply(clean_tokenization)

df.head(10)


# In[17]:


import nltk
nltk.download('stopwords')
from nltk.corpus import stopwords

stopwords.words('english')


# In[18]:


stop_words = set(stopwords.words('english'))
def clean_stopwords(token):
    return [item for item in token if item not in stop_words]

df['CleanReview'] = df['CleanReview'].apply(clean_stopwords)

df.head(10)


# In[20]:


import nltk
nltk.download('wordnet')
from nltk.stem import WordNetLemmatizer
lemma = WordNetLemmatizer()

def clean_lemmatization(token):
    return [lemma.lemmatize(word=w, pos='v') for w in token]

df['CleanReview'] = df['CleanReview'].apply(clean_lemmatization)

df.head(10)


# In[21]:


def Clean_length(token):
    return [i for i in token if len(i) > 2]

df['CleanReview'] = df['CleanReview'].apply(Clean_length)

df.head(10)


# In[22]:


def convert_to_string(listReview):
    return ' '.join(listReview)

df['CleanReview'] = df['CleanReview'].apply(convert_to_string)

df.head(10)


# In[ ]:




