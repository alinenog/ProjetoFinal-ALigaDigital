/*Back esta funcionando na porta 3007 */
import axios from 'axios'

/*Criando ponto de conexxão */
const api = axios.create({
    baseURL:'http://localhost:3000'
})

export default api;