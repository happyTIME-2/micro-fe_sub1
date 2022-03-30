const commonStore: any = reactive({});

export const registerStore = (store: any) => {  
  Object.assign(commonStore, store);
}

export default commonStore;