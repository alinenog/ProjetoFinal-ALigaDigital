/*Back esta funcionando na porta 3010 */
import axios from 'axios'

/*Criando ponto de conexão */
const api = axios.create({
    baseURL:'http://localhost:3007'
})

export default api;