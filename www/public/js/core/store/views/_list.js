YUI.add('iot-views-store-list', function(Y) {

  var tmpls = Y.namespace('iot.tmpls');
  var mu = new Y.Template();

  var ListView = Y.Base.create('storeList', Y.View, [], {

    containerTemplate: '<main class=layout-content></main>',
    template: mu.revive(tmpls.store.list.compiled),

    render: function() {
      var list = this.get('modelList');
      var listData;
      var content;

      listData = list.map(function(snap) {
        return snap;
      });

      content = this.template(listData);
      this.get('container').setHTML(content);

      return this;
    }
  });

  Y.namespace('iot.views.store').List = ListView;

}, '0.0.1', {
  requires: [
    'view',
    'template',
    't-tmpls-store-list'
  ]
});