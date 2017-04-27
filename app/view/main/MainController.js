/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TutorialApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    config: {
        stores: ['Contact'],
        views: ['main.Edit', 'main.MainGrid'],
        alias: 'controller.main',
        refs: [{
            ref: 'maingrid',
            selector: 'maingrid'
        }]
    },


    init: function() {
        this.control({
            'userlist dataview': {
                itemdblclick: this.editUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            },
            'useredit button[action=cancel]': {
                click: this.cancelEditUser
            }
        });
    },
    editUser: function(grid, record) {
        var edit = Ext.create('TutorialApp.view.main.Edit').show();
        edit.down('form').loadRecord(record);

    },

    updateUser: function(button) {
        var win = button.up('window'),
            form = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
        record.set(values);
        win.close();
    },
    cancelEditUser: function(button) {
        var win = button.up('window');
        win.close();
    },

    // onItemSelected: function (sender, record) {
    //     Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    // },
    //
    // onConfirm: function (choice) {
    //     if (choice === 'yes') {
    //         //
    //     }
    // },

    onKeyDown: function() {
        alert('keydown');
    },

    onClickButton: function () {
        // Remove the localStorage key/value
        localStorage.removeItem('TutorialLoggedIn');

        // Remove Main Viewbaidu
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'login'
        });
    }
});