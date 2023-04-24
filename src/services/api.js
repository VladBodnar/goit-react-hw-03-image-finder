import axios from 'axios';
const apiKey = '31238546-2d57ca86913699ca663b56d8b';

const getImages = (searchNam, pag) => {
  return axios.get(
    `https://pixabay.com/api/?q=${searchNam}&page=${pag}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
  );
};
export default getImages;
