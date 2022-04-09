from FlaskIntro import model1
from FlaskIntro import model2
from FlaskIntro import model3
from FlaskIntro import model4
from FlaskIntro import model5
from FlaskIntro import model6
from FlaskIntro import string

# import test1
from flask import Flask, render_template, request, redirect, url_for, jsonify

# from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
# db = SQLAlchemy(app)

# class Todo(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     content = db.Column(db.String(200), nullable=False)
#     date_created = db.Column(db.DateTime, default=datetime.utcnow)

#     def __repr__(self):
#         return 'Task %r' % self.id

@app.route('/')
def index():
    if request.method == 'post':
        # task_content = request.form['content']
        # new_task = Todo(content = task_content)
        return 'hello world'

    else:
        return render_template('index.html')


@app.route('/save-feedback', methods = ['POST'])
def save_feedback():
    if request.method == 'POST':
        id = request.json['id']
        feedback = request.json['feedbackText'];
        print('id', id);
        print('feedback', feedback);

        X = string.addNewReview(feedback)
        print(X)
        response = {'feedbackType': X[0]}
        return jsonify(response)


@app.route('/members')
def members():
    return {
        "products": [
            {"id": "1",
             "product_name": "Xiaomi Mi 11",
             "description": "Release date: 28th December 2020",
             "ranking": "#1",
             "star_rating": model5.finalRating(0),
             "image": "./images/Xiaomi_Mi_11.png",
             "link": "/xiomi"
             },
            {
                "id": "2",
                "product_name": "One Plus 9 Pro",
                "description": "Release date: 23rd March 2021",
                "ranking": "#2",
                "star_rating": model2.finalRating(0),
                "image": "./images/OnePlus_9_Pro.png",
                "link": "/oneplus"
            },
            {
                "id": "3",
                "product_name": "OnePlus Nord 2",
                "description": "Release date: 17th February 2022 ",
                "ranking": "#3",
                "star_rating": model6.finalRating(0),
                "image": "./images/OnePlus_Nord_2.png",
                "link": "/oneplusnord"
            },
            {
                "id": "4",
                "product_name": "Oppo Find X3 Pro",
                "description": "Release date: 11th March 2021",
                "ranking": "#4",
                "star_rating": model4.finalRating(0),
                "image": "./images/Oppo_Find_X3_Pro.png",
                "link": "/oppofind"
            },
            {
                "id": "5",
                "product_name": "Samsung Galaxy S21 Ultra",
                "description": "Release date: 14th January 2021",
                "ranking": "#5",
                "star_rating": model1.finalRating(0),
                "image": "./images/Samsung_Galaxy_S21_Ultra.png",
                "link": "/samsung"
            },
            {
                "id": "6",
                "product_name": "I Phone 12 Pro Max",
                "description": "Release date: 13th November 2020",
                "ranking": "#6",
                "star_rating": model3.finalRating(0),
                "image": "./images/iphone_13_pro_max.png",
                "link": "/iphone13"
            }
        ]
    }


if __name__ == "__main__":
    app.run(debug=True)
