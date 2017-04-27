/**
 * Created by bushido on 4/24/2017.
 */
var Myform = Ext.create('Ext.form.Panel', {
    title: 'Contact Information',
    width: 500,
    bodyPadding: 20,
    renderTo: Ext.getBody(),
    items: [{
        xtype: 'textfield',
        msgTarget: 'under',
        blankText: 'This should not be blank!',
        name: 'name',
        fieldLabel: 'Name',
        id: 'namefield',
        allowBlank: false  // requires a non-empty value
    },

        {
            xtype     : 'textareafield',
            grow      : true,
            name      : 'address',
            fieldLabel: 'Address',
            msgTarget: 'under',
            blankText: 'This should not be blank!',
            anchor    : '100%',
            id: 'addressfield',
            allowBlank: false
        },

        {
            xtype: 'textfield',
            name: 'email',
            fieldLabel: 'Email Address',
            vtype: 'email'  ,// requires value to be a valid email address format
            id: 'emailfield',
            allowBlank: false,
            msgTarget: 'under',
            blankText: 'This should not be blank!',
        },

        {    fieldLabel: 'Date Birth&nbsp;',
            name: 'date_debut',
            xtype: 'datefield',
            format: 'd/m/Y',
            submitFormat: 'Y-m-d H:i:s',
            id: 'datefield',
            allowBlank: false,
            msgTarget: 'under',
            blankText: 'This should not be blank!',
        },

        {
            xtype: 'radiogroup',
            fieldLabel: 'Gender',
            columns: 2,
            vertical: true,
            allowBlank: false,
            msgTarget: 'under',
            blankText: 'This should not be blank!',
            id:'genderfield',
            items: [
                {boxLabel: 'Male', name: 'rb', inputValue: 'Male'},
                {boxLabel: 'Female', name: 'rb', inputValue: 'Female'},
            ]
        },


    ],

    buttons:[
        {

            text:'Submit',
            handler:function(){
                var namedata = Ext.getCmp('namefield').getValue();
                var addressdata = Ext.getCmp('addressfield').getValue();
                var emaildata = Ext.getCmp('emailfield').getValue();
                var birthdata = Ext.getCmp('datefield').getValue();
                var radiodata = Ext.getCmp('genderfield').getValue();

                Ext.getCmp('namefield').isValid();
                Ext.getCmp('addressfield').isValid();
                Ext.getCmp('emailfield').isValid();
                Ext.getCmp('datefield').isValid();

                if( Ext.getCmp('namefield').isValid()&&Ext.getCmp('addressfield').isValid()&&
                    Ext.getCmp('emailfield').isValid()&&Ext.getCmp('datefield').isValid()
                    &&Ext.getCmp('genderfield').isValid())
                {//   create store
                    Ext.create('Ext.data.Store', {
                        storeId:'DataStore',
                        fields:['name','address', 'email', 'datebirth','gender'],

                        data:{'items':[
                            { 'name': namedata,'address':addressdata, 'email':emaildata,
                                'datebirth':birthdata,'gender':radiodata.rb  },
                        ]},
                        proxy: {
                            type: 'memory',
                            reader: {
                                type: 'json',
                                root: 'items'
                            }
                        }
                    });


                    //grid panel
                    Ext.create('Ext.grid.Panel', {
                        title: 'Data Window',
                        id:'datawindow',
                        store: Ext.data.StoreManager.lookup('DataStore'),
                        autoLoad:false,
                        columns: [
                            { text: 'Name',  dataIndex: 'name' },
                            { text: 'Address',  dataIndex: 'address' },
                            { text: 'Email', dataIndex: 'email', flex: 1 },
                            { text: 'Date Birth',  dataIndex: 'datebirth' },
                            { text: 'Gender', dataIndex: 'gender' }
                        ],
                        height: 200,
                        width: 500,
                        renderTo: Ext.getBody()
                    });

                } else{
                    alert('there are some fields required');
                }

            }
        },

        {
            text:'Clear',

            handler: function(){
                Myform.getForm().reset();
                {Ext.getCmp('datawindow').close(); }


            }

        }
    ],


});