
demogrid=Ext.define('TutorialApp.view.main.MainGrid', {
    extend: 'Ext.grid.Panel',
    alias:'widget.maingrid',
    // xtype:'maingrid',
    requires:[
        'TutorialApp.store.Contact',
    ],

    title: 'Data Window',
    id:'datawindow',
    // style:'margin:500px auto auto 250px;',
    // store: Ext.data.StoreManager.lookup('DataStore'),
    // store:
    //     {type:'contact'},
    store: Ext.create('TutorialApp.store.Contact',{
        autoLoad: true
    }),


    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Address',  dataIndex: 'address' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Date Birth',  dataIndex: 'datebirth' },
        { text: 'Gender', dataIndex: 'gender' }
    ],
    tools:[{
        type:'refresh',
        tooltip: 'Refresh',
        handler: function(){
            var pnl = this.up('maingrid');
            pnl.getStore().refresh();
            pnl.setTitle('Data Window');
        }
    }],


    height: 200,
    width: 500,
    listeners: {
        select: 'editUser',
        // select: 'cancelEditUser',
        // select:'updateUser'
    },
    items: [
        /* include child components here */
    ]
});


