from FlaskIntro import mainModel
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


# updating the rating for the new review
def addNewReview(review):
    prediction = clf.predict(vec.transform([review]))

    return prediction



