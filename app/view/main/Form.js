/**
 * This view is an example list of people.
 */
// Ext.define('model',{
//     extend:'Ext.data.Model',
//     fields:['name','address','email','datebirth','gender']
// });
//
// var store = Ext.create('Ext.data.Store',{
//     alias: 'store.store',
//     model:'model'
// });

    var Myform = Ext.define('TutorialApp.view.main.Form', {
        extend: 'Ext.form.Panel',
        xtype: 'mainform',
        alias: 'widget.mainform',
        width:500,
        // requires: [
        //     'TutorialApp.store.Personnel'
        // ],
        requires : ['TutorialApp.view.main.MainController'],
        controller : 'main',
        title: 'Contact Information',
        items: [{
            xtype: 'textfield',
            margin: '10 auto 10 auto ',
            msgTarget: 'under',
            blankText: 'This should not be blank!',
            name: 'name',
            fieldLabel: 'Name',
            id: 'namefield',
            allowBlank: false,  // requires a non-empty value
            // listeners : {
            //     focusleave : 'onKeyDown'
            // }
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
                allowBlank: true,
                msgTarget: 'under',
                blankText: 'This should not be blank!',
            },
            {    fieldLabel: 'Date Birth&nbsp;',
                name: 'datebirth',
                xtype: 'datefield',
                format: 'd/m/Y',
                submitFormat: 'Y-m-d H:i:s',
                id: 'datefield',
                allowBlank: true,
                msgTarget: 'under',
                blankText: 'This should not be blank!',
            },
            {
                xtype: 'radiogroup',
                fieldLabel: 'Gender',
                columns: 2,

                vertical: true,
                allowBlank: true,
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
                handler:function(button){
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
                    {

                    var form = button.up('form');


                    if(form.isValid()){
                        var rec = form.getValues();
                        var datagrid = Ext.getCmp('datawindow');

                        var mydata=[
                            [rec.name,rec.address,rec.email,rec.datebirth,rec.rb]
                        ]
                      datagrid.getStore().loadRawData(mydata,true);
                     //  datagrid.getStore().loadData(rec);
                        alert('finally successful');




                        //get the grid here   -    datawindow
                        //get the store from grid
                        // load the rec into the store
                    }








                    } else{
                        alert('there are some fields required');
                    }
                }
            },

            {
                text:'Clear',

                handler: function(){
                    this.up('form').getForm().reset();
                }
            }
        ],
        listeners: {
            select: 'onItemSelected'
        }
});





