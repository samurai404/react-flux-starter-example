import AppDispatcher from '../dispatcher/AppDispatcher';

class AppAction {


setItem(data){
    AppDispatcher.dispatch({
        actionType:'ADD_ITEM',
        value:data
    })
}

}

export default new AppAction();