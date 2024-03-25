from flask import Flask,request,render_template

app=Flask(__name__)

@app.route('/',methods=['POST','GET'])
def index():
    if request.method == 'GET':
        return render_template("index.html")
    else:
        return render_template("login.html",name=request.form['name'],email=request.form['email'],pas=request.form['password'])
    
if __name__ == '__main__':
    app.run(debug=True)