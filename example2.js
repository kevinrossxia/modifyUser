/**
 * Created by bushido on 4/24/2017.
 */
Ext.create('Ext.data.Store', {
    storeId:'DataStore',
    fields:['name','salary','department'],

    data:{'items':[
        { 'active':true,'name': 'Eric','salary':'$5000','department':'Software Engineering '},
        { 'active':false,'name': 'Eric','salary':'$5000','department':'Software Engineering '},
        { 'active':true,'name': 'Eric','salary':'$5000','department':'Software Engineering '},
        { 'active':true,'name': 'Eric','salary':'$5000','department':'Software Engineering '},

    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'items'
        }
    }
});

Ext.create('Ext.panel.Panel', {
    width: 500,
    height: 400,
    //title: 'MainBorder',
    layout: 'border',
    items: [
        {
            //title: 'north ',
            region:'north',
            xtype: 'tabpanel',
            margins: '5 0 0 5',
            width: 200,
            //collapsible: true,
            id: 'west-region-container',
            layout: 'fit',
            activeTab: 0,
            items:[{
                title:'Home',
                bodyPadding:10,
                html:'<h2>Welcome to my new App</h2>'
            },

                {

                    title:'Main',
                    bodyPadding:10,



                    items:[
                        {
                            xtype:'gridpanel',
                            id:'gridcool',

                            title: 'Data Window',
                            store: Ext.data.StoreManager.lookup('DataStore'),
                            //autoLoad:false,
                            columns: [
                                { xtype: 'checkcolumn', text: 'Active', dataIndex: 'active' },
                                { text: 'Name',  dataIndex: 'name' },
                                { text: 'Salary',  dataIndex: 'salary' },
                                { text: 'Department', dataIndex: 'department', flex: 1 },
                            ],

                            width: 500,
                            renderTo: Ext.getBody()

                        }]




                },

                {
                    title:'Product',
                    bodyPadding:10,
                    html:'software'
                },
                {
                    title:'About us',
                    bodyPadding:10,
                    html:'It\'s a great team'
                },
                {
                    title:'FAQ',
                    bodyPadding:10,
                    html:'FAQ'
                },

            ],
            renderTo : Ext.getBody()



        },{
            //title: 'Center Region',
            region: 'center',
            xtype: 'panel',
            layout: 'border',
            margins: '5 5 0 0',





        }],
    renderTo: Ext.getBody()
});