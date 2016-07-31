/**
 * Created by gonzalomorenominguito on 31/7/16.
 */

module.exports = function(){
    this.names = element.all(by.binding('name'));

    this.getNameTexts = function(){
        return this.names.getText();
    }
}
