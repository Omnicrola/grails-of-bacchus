import axios from 'axios';

export function getGrailData() {
    return axios.get('data/gallery.data.json')
        .then(response => {
            return response.data;
        });
}