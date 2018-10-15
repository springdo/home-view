const express = require('express');

const app = express();
const port = 8888;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const FAKE_WEATHER_RESP = '{"coord":{"lon":-0.07,"lat":51.45},"weather":[{"id":701,"main":"Mist","description":"mist","icon":"50n"},{"id":741,"main":"Fog","description":"fog","icon":"50n"}],"base":"stations","main":{"temp":13.87,"pressure":1014,"humidity":93,"temp_min":13,"temp_max":15},"visibility":1100,"wind":{"speed":1.5},"clouds":{"all":90},"dt":1539629400,"sys":{"type":1,"id":5091,"message":0.0026,"country":"GB","sunrise":1539584717,"sunset":1539623136},"id":6690877,"name":"Brixton","cod":200}';
const FAKE_FORECAST_RESP = '{"cod":"200","message":0.0033,"cnt":40,"list":[{"dt":1539626400,"main":{"temp":286.57,"temp_min":286.57,"temp_max":288.521,"pressure":1018.35,"sea_level":1025.95,"grnd_level":1018.35,"humidity":100,"temp_kf":-1.95},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":88},"wind":{"speed":0.89,"deg":328.006},"rain":{"3h":0.2},"sys":{"pod":"n"},"dt_txt":"2018-10-15 18:00:00"},{"dt":1539637200,"main":{"temp":286.45,"temp_min":286.45,"temp_max":287.917,"pressure":1019.98,"sea_level":1027.51,"grnd_level":1019.98,"humidity":100,"temp_kf":-1.46},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":48},"wind":{"speed":0.56,"deg":142.001},"rain":{"3h":0.24},"sys":{"pod":"n"},"dt_txt":"2018-10-15 21:00:00"},{"dt":1539648000,"main":{"temp":284.39,"temp_min":284.39,"temp_max":285.37,"pressure":1020.68,"sea_level":1028.28,"grnd_level":1020.68,"humidity":93,"temp_kf":-0.98},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":32},"wind":{"speed":1.16,"deg":168.004},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-10-16 00:00:00"},{"dt":1539658800,"main":{"temp":283.87,"temp_min":283.87,"temp_max":284.354,"pressure":1020.56,"sea_level":1028.13,"grnd_level":1020.56,"humidity":87,"temp_kf":-0.49},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":12},"wind":{"speed":1.15,"deg":77.0041},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-10-16 03:00:00"},{"dt":1539669600,"main":{"temp":282.819,"temp_min":282.819,"temp_max":282.819,"pressure":1020.7,"sea_level":1028.41,"grnd_level":1020.7,"humidity":87,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":12},"wind":{"speed":1.15,"deg":51.5036},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-10-16 06:00:00"},{"dt":1539680400,"main":{"temp":288.112,"temp_min":288.112,"temp_max":288.112,"pressure":1021.39,"sea_level":1028.86,"grnd_level":1021.39,"humidity":99,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.77,"deg":130.501},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-10-16 09:00:00"},{"dt":1539691200,"main":{"temp":291.761,"temp_min":291.761,"temp_max":291.761,"pressure":1021.22,"sea_level":1028.63,"grnd_level":1021.22,"humidity":96,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.47,"deg":188.001},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-10-16 12:00:00"}],"city":{"id":6545174,"name":"Kennington","coord":{"lat":51.488,"lon":-0.1057},"country":"GB","population":4000}}';

app.get('/api/weather', (req, res) => res.send(JSON.parse(FAKE_WEATHER_RESP)));
app.get('/api/forecast', (req, res) => res.send(JSON.parse(FAKE_FORECAST_RESP)));

app.use(express.static('/usr/src/app'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
