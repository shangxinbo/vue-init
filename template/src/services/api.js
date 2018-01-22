
const API_PRE = process.env.NODE_ENV == 'production' ? '' : '/api'
export default {
    index: API_PRE + '/index'
}