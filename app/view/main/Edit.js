/**
 * Created by borui on 2017/4/27.
 */
Ext.define('TutorialApp.view.main.Edit', {
    extend: 'Ext.window.Window',
    alias : 'widget.mainedit',
    requires: ['Ext.form.Panel'],
    title : 'Edit User',
    layout: 'fit',
    autoShow: true,
    height: 400,
    width: 300,
    style: 'background-color: #D2B48C',
    bodyStyle: 'background-color: #FFFACD',
    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                padding: '5 5 5 5',
                border: false,
                items: [
                    {
                        xtype: 'textfield',
                        name : 'name',
                        fieldLabel: 'Name'
                    },
                    {
                        xtype: 'textfield',
                        name : 'address',
                        fieldLabel: 'Email'
                    },
                    {
                        xtype: 'textfield',
                        name : 'email',
                        fieldLabel: 'Name'
                    },
                    {
                        xtype: 'textfield',
                        name : 'datebirth',
                        fieldLabel: 'Name'
                    },
                    {
                        xtype: 'textfield',
                        name : 'gender',
                        fieldLabel: 'Name'
                    },
                ]
            }
        ];
        this.buttons = [
            {
                text: 'Save',
                action: 'save',
                icon:'resources/images/save.png',
            },
            {
                text: 'Cancel',
                action: 'cancel',
                icon:'resources/images/cancel.png',
            }
        ];
        this.callParent(arguments);
    }
});
