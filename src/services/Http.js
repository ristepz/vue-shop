export class Http {
  /**
   * Class constructor method
   */
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:3000/',
      timout: 3000
    })
  }

  /**
   * Get all products
   * @returns {*}
   */
  getProducts(){
    return axios.get('api.json');
  }
}