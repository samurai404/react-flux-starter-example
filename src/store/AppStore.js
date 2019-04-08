import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events'


let items = [];
class AppStore extends EventEmitter {

    setItem(data){
        items.push(data);
    }

    getItem(){
        return items;
    }

    addChangeListener(callback) {
        this.on('event',callback)
    }

    removeChangeListener(callback){
        this.removeListener('event',callback)
    }

    emitChange(){
        this.emit('event')
    }
}

const appStore = new AppStore();
AppDispatcher.register((action) => {
    switch(action.actionType) {
        case 'ADD_ITEM':
        appStore.setItem(action.value);
        break;
        default:{

        }
    }
    appStore.emitChange();
    return true;
});

export default appStore;