from flask import Flask, render_template, request, url_for, redirect, send_file
from flask_login import LoginManager, login_user, login_required, logout_user, current_user
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from database_setup import *
app = Flask(__name__)
engine = create_engine('sqlite:///project.db',
                       connect_args={'check_same_thread': False})
Base.metadata.bind = engine

DBSession = sessionmaker(bind=engine, autoflush=False)
session = DBSession()
Login_manger = LoginManager()
Login_manger.init_app(app)
app.secret_key = 'super_secret_key'
Login_manger.login_view = "login"


@Login_manger.user_loader
def load_user(user_id):
    return session.query(user).get(int(user_id))


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/blog')
def blog():
    allArticle = session.query(article)
    users = session.query(user)
    return render_template('blog.html', users=users, articles=allArticle)


@app.route("/maps")
def map():
    return render_template('Maps.html')


@login_required
@app.route("/edit_profile", methods=['GET', 'POST'])
def edit_profile():
    if request.method == "POST":
        name = request.form['name']
        password = request.form["password"]
        phone = request.form['phone']
        address = request.form['address']
        email = request.form['email']
        job = request.form['job']
        bio = request.form['bio']
        age = int(request.form['age'])
        editUser = user(user_name=name, password=password, age=age, address=address,
                        email=email, phoneNumber=phone, Bio=bio, Job=job, role_fk=0)
        session.add(editUser)
        session.commit()
        return redirect(url_for('profile', roletype=current_user.role.role_type))
    name = current_user
    return render_template("edit-profile.html", name=name)


@app.route('/maps')
def maps():
    return render_template('maps.html')


@app.route("/cupIndex")
def cupIndex():
    return render_template("cup /index.html")

@app.route("/before_visite")
def beforeVisite():
    return render_template("cup /before-visit.html")

@app.route("/Matches")
def matches():
    return render_template("cup /matches.html")




@login_required
@app.route("/addArticle", methods=["POST"])
def addArticle():
    title = request.form["title"]
    text = request.form["text"]
    print(title, text)
    roleType = session.query(role).filter_by(
        role_id=current_user.role_fk).first()
    roletype = roleType.role_type
    newarticle = article(
        article_text=text, article_title=title, user_fk=current_user.id)
    session.add(newarticle)
    session.commit()
    return redirect(url_for("profile", roletype=roletype))


@login_required
@app.route('/updateArticle', methods=["POST"])
def updateArticle():
    title = request.form["title"]
    text = request.form["text"]
    id = request.form['ID']
    roletype = session.query(role).filter_by(
        role_id=current_user.role_fk).first()
    editArticle = session.query(article).filter_by(article_id=id).first()
    editArticle.article_text = text
    editArticle.article_title = title
    session.add(editArticle)
    session.commit()
    return redirect(url_for("profile", roletype=roletype))


@login_required
@app.route('/deleteArticle', methods=['POST'])
def deleteArticle():
    id = request.form['title']
    deletearticle = session.query(article).filter_by(
        article_id=id).first()
    roleType = session.query(role).filter_by(
        role_id=current_user.role_fk).first()
    session.delete(deletearticle)
    session.commit()
    roletype = roleType.role_type
    return redirect(url_for("profile", roletype=roletype))


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == "POST":
        name = request.form['name']
        password = request.form["password"]
        phone = request.form['phone']
        address = request.form['address']
        email = request.form['email']
        job = request.form['job']
        bio = request.form['bio']
        age = int(request.form['age'])
        newUser = user(user_name=name, password=password, age=age, address=address,
                       email=email, phoneNumber=phone, Bio=bio, Job=job, role_fk=0)
        session.add(newUser)
        session.commit()
        return redirect(url_for('login'))
    else:
        return render_template('sign-up.html')


@app.route("/login", methods=['GET', 'POST'])
def login():
    if request.method == "GET":
        return render_template("login.html")
    elif request.method == "POST":
        username = request.form["name"]
        password = request.form["password"]
        users = session.query(user).filter_by(
            user_name=username, password=password).first()
        if users:
            login_user(users)
            roleType = session.query(role).filter_by(
                role_id=current_user.role_fk).first()
            roletype = roleType.role_type
            return redirect(url_for("profile", roletype=roletype))
        else:
            return render_template('login.html', error="Wrong Username or Password")


@app.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect(url_for("login"))


@app.route('/profile/<string:roletype>')
@login_required
def profile(roletype):
    username = current_user.user_name
    age = current_user.age
    address = current_user.address
    job = current_user.Job
    Bio = current_user.Bio
    articles = session.query(article).filter_by(user_fk=current_user.id).all()
    return render_template('profile.html', role=roletype, username=username, articles=articles, job=job, address=address, Bio=Bio, age=age)


if __name__ == '__main__':
    app.debug = True
    app.run(host='localhost', port=5000)
