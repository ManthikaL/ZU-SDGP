import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
import re

df = pd.read_csv("Amazon_Unlocked_Mobile new 03.csv")

df.isna().sum()

pd.set_option('display.max_colwidth', None)
df = df[['Rating', 'Reviews']]
df.dropna(inplace=True)

df.isna().sum()


def LableFunc(rating):
    if rating >= 3.0:
        return 'positive'
    else:
        return 'negative'


df['Label'] = df['Rating'].apply(LableFunc)

df['Label'].value_counts()


def clean_url(review_text):
    return re.sub(r'http\S+', '', review_text)


df['CleanReview'] = df['Reviews'].apply(clean_url)


def clean_non_alphanumeric(review_text):
    return re.sub('[^a-zA-Z]', ' ', review_text)


df['CleanReview'] = df['CleanReview'].apply(clean_non_alphanumeric)


def clean_lowercase(review_text):
    return str(review_text).lower()


df['CleanReview'] = df['CleanReview'].apply(clean_lowercase)


def clean_tokenization(review_text):
    return word_tokenize(review_text)


df['CleanReview'] = df['CleanReview'].apply(clean_tokenization)

nltk.download('stopwords')
stopwords.words('english')
stop_words = set(stopwords.words('english'))


def clean_stopwords(token):
    return [item for item in token if item not in stop_words]


df['CleanReview'] = df['CleanReview'].apply(clean_stopwords)

nltk.download('omw-1.4')
lemma = WordNetLemmatizer()


def clean_lemmatization(token):
    return [lemma.lemmatize(word=w, pos='v') for w in token]


df['CleanReview'] = df['CleanReview'].apply(clean_lemmatization)


def Clean_length(token):
    return [i for i in token if len(i) > 2]


df['CleanReview'] = df['CleanReview'].apply(Clean_length)


def convert_to_string(listReview):
    return ' '.join(listReview)


df['CleanReview'] = df['CleanReview'].apply(convert_to_string)

df.head(15)

positiveCount = df['Label'].value_counts().positive
negativeCount = df['Label'].value_counts().negative

trueRating = positiveCount / (positiveCount + negativeCount) * 100


y = df['Label']

x = df['CleanReview']


##############################

# divide dataset into training and testing set
from sklearn.model_selection import train_test_split

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.3)

# training set shape(number of rows and columns)
x_train.shape

# testing set shape(number of rows and columns)
x_test.shape

df['Label'] = df['Label'].astype('str')
df['CleanReview'] = df['CleanReview'].astype('str')

df.drop(labels=['Reviews', 'Rating'], axis=1, inplace=True)

from sklearn.feature_extraction.text import TfidfVectorizer

vectorizer = TfidfVectorizer()

X_train = vectorizer.fit_transform(x_train)
X_test = vectorizer.transform(x_test)

from sklearn.naive_bayes import MultinomialNB

model = MultinomialNB()

MNB = MultinomialNB()
MNB.fit(X_train, y_train)

print("Accuracy = ", MNB.score(X_test, y_test))

##################################################################################


df = pd.read_csv("SamsungGalaxyS21Ultra_reviews.csv")

df.isna().sum()

import re


def clean_url(review_text):
    return re.sub(r'http\S+', '', review_text)


df['CleanReview'] = df['userComments'].apply(clean_url)


def clean_non_alphanumeric(review_text):
    return re.sub('[^a-zA-Z]', ' ', review_text)


df['CleanReview'] = df['CleanReview'].apply(clean_non_alphanumeric)


def clean_lowercase(review_text):
    return str(review_text).lower()


df['CleanReview'] = df['CleanReview'].apply(clean_lowercase)

from nltk.tokenize import word_tokenize


def clean_tokenization(review_text):
    return word_tokenize(review_text)


df['CleanReview'] = df['CleanReview'].apply(clean_tokenization)

import nltk

nltk.download('stopwords')
from nltk.corpus import stopwords

stop_words = set(stopwords.words('english'))


def clean_stopwords(token):
    return [item for item in token if item not in stop_words]


df['CleanReview'] = df['CleanReview'].apply(clean_stopwords)

from nltk.stem import WordNetLemmatizer

lemma = WordNetLemmatizer()


def clean_lemmatization(token):
    return [lemma.lemmatize(word=w, pos='v') for w in token]


df['CleanReview'] = df['CleanReview'].apply(clean_lemmatization)


def Clean_length(token):
    return [i for i in token if len(i) > 2]


df['CleanReview'] = df['CleanReview'].apply(Clean_length)


def convert_to_string(listReview):
    return ' '.join(listReview)


df['CleanReview'] = df['CleanReview'].apply(convert_to_string)

df.drop(labels=['userComments'], axis=1, inplace=True)

# df

X_fresh = df['CleanReview']
X_fresh = vectorizer.transform(X_fresh)

X_fresh.shape

y_pred = MNB.predict(X_fresh)


df['predicted_label'] = y_pred.tolist()


df['predicted_label'].value_counts()

positiveCount = df['predicted_label'].value_counts().positive
negativeCount = df['predicted_label'].value_counts().negative


def finalRating(rating):
    rating = round(positiveCount / (positiveCount + negativeCount) * 10, 2)
    ratingX = rating, "/10"
    return ratingX


# updating the rating for the new review
def addNewReview(review):
    newCountP = MNB.predict(vectorizer.transform([review]))

    if newCountP == 'positive':
        print('p')
        rating = (positiveCount + 1) / (positiveCount + negativeCount + 1) * 100
        print("NewRating = ", rating)
    else:
        print('n')
        rating = positiveCount / (positiveCount + negativeCount + 1) * 100
        print("NewRating = ", rating)




