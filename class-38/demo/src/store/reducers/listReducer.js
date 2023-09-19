import axios from "axios";

const initialState = [{
  "id": "tt0994314",
  "title": "Code Geass",
  "year": 2006,
  "type": "tvSeries",
  "image": "https://m.media-amazon.com/images/M/MV5BYzZjY2MzYTAtMmQxMi00MWVjLTlkZGQtYjJmNWVhODY3YjdjXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UY396_CR6,0,277,396_AL_.jpg",
  "image_large": "https://m.media-amazon.com/images/M/MV5BYzZjY2MzYTAtMmQxMi00MWVjLTlkZGQtYjJmNWVhODY3YjdjXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
  "api_path": "/title/tt0994314",
  "imdb": "https://www.imdb.com/title/tt0994314"
}]

export default (state = initialState, action) => {
  const {type, payload} = action;
  console.log(payload)
  switch(type) {
    case 'GET':
      return payload;
    default:
      return state;
  }
}

export const get = () => async dispatch => {
  const res = await axios.get('https://imdb-api.projects.thetuhin.com/search?query=code');
  console.log(res.data);
  dispatch(getActionDispatch(res.data.results))
}

const getActionDispatch = (data) => {
  return {
    type: 'GET',
    payload: data
  }
}