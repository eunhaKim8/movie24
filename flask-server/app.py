from flask import Flask, requests, jsonify
import requests

app = Flask(__name__)

# TMDB API KEY
API_KEY =  "953c7f3db1b660a32c0598a36ad9fb95"

@app.route('/genres', methods=['GET'])
def get_genres():
  url = f"https://api.themoviedb.org/3/genre/movie/list?language=ko-KR&api_key={API_KEY}"
  response = requests.get(url)
  if response.status_code == 200:
    return jsonify(response.json())
  else:
    return jsonify({"error": response.text}), response.status_code

@app.route('/movies/popular', methods=['GET'])
def get_movies_popular():
  url = f"https://api.themoviedb.org/3/movie/popular?language=ko-KR&api_key={API_KEY}"
  response = requests.get(url)
  if response.status_code == 200:
    return jsonify(response.json())
  else:
    return jsonify({"error": response.text}), response.status_code

@app.route('/movies/now_playing', methods=['GET'])
def get_movies_now_playing():
  url = f"https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&api_key={API_KEY}"
  response = requests.get(url)
  if response.status_code == 200:
    return jsonify(response.json())
  else:
    return jsonify({"error": response.text}), response.status_code
  

if __name__ == '__main__':
  app.run('0.0.0.0', port=5001, debug=True)