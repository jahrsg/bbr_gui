/// <reference path="jquery-2.1.1.js" />

function initialize() {
    $('#walletitem').on('click', onWalletItemClick);
    $('#openwalletitem').on('click', onOpenWalletItemClick);
    $('#createwalletitem').on('click', onCreateWalletItemClick);
    $('#restorewalletitem').on('click', onRestoreWalletItemClick);
    $('#transactionsitem').on('click', onTransactionsItemClick);
    $('#addressbookitem').on('click', onAddressBookItemClick);
}

function onWalletItemClick() {
    $('.menuitem, .walletmenuitem, .screen').removeAttr('data-state');
    $('#walletitem, #wallet').attr('data-state', 'active');
    $('#walletmenu').attr('data-state', 'active');
}

function onOpenWalletItemClick() {
    $('.menuitem, .walletmenuitem, .screen').removeAttr('data-state');
    $('#walletitem').attr('data-state', 'active');
    $('#walletmenu').attr('data-state', 'active');
    $('#openwalletitem, #openwallet').attr('data-state', 'active');
}

function onCreateWalletItemClick() {
    $('.menuitem, .walletmenuitem, .screen').removeAttr('data-state');
    $('#walletitem').attr('data-state', 'active');
    $('#walletmenu').attr('data-state', 'active');
    $('#createwalletitem, #createwallet').attr('data-state', 'active');
}

function onRestoreWalletItemClick() {
    $('.menuitem, .walletmenuitem, .screen').removeAttr('data-state');
    $('#walletitem').attr('data-state', 'active');
    $('#walletmenu').attr('data-state', 'active');
    $('#restorewalletitem, #restorewallet').attr('data-state', 'active');
}

function onTransactionsItemClick() {
    $('.menuitem, .walletmenuitem, .screen, #walletmenu').removeAttr('data-state');
    $('#transactionsitem, #transactions').attr('data-state', 'active');
}

function onAddressBookItemClick() {
    $('.menuitem, .walletmenuitem, .screen, #walletmenu').removeAttr('data-state');
    $('#addressbookitem, #addressbook').attr('data-state', 'active');
}
