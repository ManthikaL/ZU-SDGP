import pickle
import os.path

# loading the trained model from pickle file

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

# preprocessing the newly added review
import re


def clean_url(review_text):
    return re.sub(r'http\S+', '', review_text)


def clean_non_alphanumeric(review_text):
    return re.sub('[^a-zA-Z]', ' ', review_text)


def clean_lowercase(review_text):
    return str(review_text).lower()


import nltk
from nltk.tokenize import word_tokenize


def clean_tokenization(review_text):
    return word_tokenize(review_text)


nltk.download('stopwords')
from nltk.corpus import stopwords

stop_words = set(stopwords.words('english'))


def clean_stopwords(token):
    return [item for item in token if item not in stop_words]


from nltk.stem import WordNetLemmatizer

lemma = WordNetLemmatizer()


def clean_lemmatization(token):
    return [lemma.lemmatize(word=w, pos='v') for w in token]


def clean_length(token):
    return [i for i in token if len(i) > 2]


def clean_phone(token):
    return [i for i in token if i != 'phone']


def convert_to_string(listReview):
    return ' '.join(listReview)


# updating the rating for the new review
def addNewReview(review):
    df = review
    df = clean_url(df)
    df = clean_non_alphanumeric(df)
    df = clean_lowercase(df)
    df = clean_tokenization(df)
    df = clean_stopwords(df)
    df = clean_lemmatization(df)
    df = clean_length(df)
    df = clean_phone(df)
    df = convert_to_string(df)
    print("Filtered review : ", df)

    prediction = clf.predict(vec.transform([df]))

    return prediction
