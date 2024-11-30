from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
  return 'this is home'

@app.route('/movies', methods=['GET'])
def get_movies():
  return {"movies": ["movie1", "movie2", "movie3"]}

if __name__ == '__main__':
  app.run('0.0.0.0', port=5001, debug=True)