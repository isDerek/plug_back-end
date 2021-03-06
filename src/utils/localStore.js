export const  localStore = {
    get(item) {
      return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : null;
    },
    set(item,data) {
      return localStorage.setItem(item, JSON.stringify(data));
    },
    clear(item=null) {
      if(item) {
        return localStorage.removeItem(item);
      } else {
        return localStorage.clear();
      }
    }
  }