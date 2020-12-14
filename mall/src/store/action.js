/*
商城vuex-action
*/
export default{
  saveUserName(context,username){
    
     context.commit('saveUserName',username)
  },
  saveCartCount(context,cartCount){
    
    context.commit('saveCartCount',cartCount)
 },

}