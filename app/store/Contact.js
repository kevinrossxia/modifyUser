var contact=Ext.define('TutorialApp.store.Contact', {
    extend: 'Ext.data.Store',
    // requires:['TutorialApp.model.griddata'],
    autoLoad:true,
    storeId:'DataStore',
    alias: 'store.contact',
    model:'TutorialApp.model.griddata',
    // fields:['name','address', 'email', 'datebirth','gender'],
    // data:{items:[
    //     {name:'jason',address:'603 st',email:'asdsad@gmail.com',datebirth:'2017-03-29',gender:'male'},
    // ]},
    proxy: {
        type: 'ajax',
        api:{
            read: 'data/Contact.json'
        },
        reader: {
            type: 'json',
            rootProperty: 'contact',
            successProperty: 'success'
        }
    }





});