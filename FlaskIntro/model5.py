import pandas as pd

df = pd.read_csv("XiaomiMi11_reviews.csv")

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
#############################################
import pickle
import os.path

# loading the trained model from pickle file
import os.path

if os.path.exists("trained_model.pickle"):
    print("Loading Trained Model")
    clf = pickle.load(open("trained_model.pickle", "rb"))

else:
    print("nope")

# loading the vectorizer in trained model from pickle file
import os.path

if os.path.exists("vectorizer.pickle"):
    print("vectorizer loading")
    vec = pickle.load(open("vectorizer.pickle", 'rb'))

else:
    print("nope v")

#############################################

X_fresh = df['CleanReview']
X_fresh= vec.transform(X_fresh)

X_fresh.shape

y_pred = clf.predict(X_fresh)


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
    newCountP = clf.predict(vec.transform([review]))

    if newCountP == 'positive':
        print('p')
        rating = (positiveCount + 1) / (positiveCount + negativeCount + 1) * 100
        print("NewRating = ", rating)
    else:
        print('n')
        rating = positiveCount / (positiveCount + negativeCount + 1) * 100
        print("NewRating = ", rating)
