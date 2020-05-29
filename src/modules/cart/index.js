import state from './state'
import * as mutations from './mutations'
import * as getters from './getters'  //sirven para filtrar y acceder a datos q no tendre disponibles de otra forma

export default {
    namespaced: true,
    state,
    mutations,
    getters
}