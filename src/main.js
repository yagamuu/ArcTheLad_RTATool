var Vue = require('vue');
var gameData = require('./game-data');
var mapList = gameData.mapList;
var mapUnitList = gameData.mapUnitList;
var unitParam = gameData.unitParam;
var accessory = gameData.accessory;

Vue.component('lv', {
  props: ['unit-lv'],
  template: '#lv-list'
});

Vue.component('map', {
  props: ['map-list'],
  template: '#map-list',
  data: function () {
    return { selected: 0 }
  },
  methods: {
    setMapUnit: function () {
      this.$dispatch('set-map-unit', this.selected)
    }
  }
});

Vue.component('unit', {
  props: ['unit-param', 'id'],
  template: '#unit-list'
});

Vue.component('paro', {
  props: ['paro'],
  template: '#paro-list'
});

Vue.component('acs', {
  props: ['acs-list', 'acs'],
  template: '#acs-list'
});

Vue.component('speedup', {
  props: ['speedup'],
  template: '#speedup'
});

var vm = new Vue({
  el: '#app',
  data: {
    unitList: [
      { id: 0, lv: 1, paro: 0, acs: 0, speedup: false, action: 95 },
    ],
    mapList: mapList,
    unitParam: unitParam,
    accessory: accessory,
    actionId: 0,
    outputText: "",
  },
  methods: {
    init: function () {
      var l = this.unitList.length;
      for (var i = 0; i < l; i++) {
        this.initActionVal(i);
      }
      this.outputText = "";
    },
    all_init: function () {
      this.unitList = [{ id: 0, lv: 1, paro: 0, acs: 0, speedup: false, action: 95 }];
      this.outputText = "";
    },
    add: function () {
      this.unitList.push({ id: 0, lv: 1, paro: 0, acs: 0, speedup: false, action: 95 });
    },
    remove: function (unit) {
      if (this.unitList.length > 1) {
        this.unitList.$remove(unit);
      } else {
        alert('これ以上削除出来ません');
      }
    },
    action: function () {
      var minAction = 100;
      this.unitList.forEach(function (elm) {
        minAction = elm.action < minAction ? elm.action : minAction;
      });
      minAction = minAction < 1 ? 1 : minAction;
      this.unitList.forEach(function (elm, index) {
        vm.$data.unitList[index].action -= (minAction - 1);
      });
      var loopFlg = true;
      while (loopFlg) {
        for (var len = this.unitList.length; this.actionId < len; this.actionId++) {
          this.unitList[this.actionId].action = this.unitList[this.actionId].action - 1;
          if (this.unitList[this.actionId].action <= 0) {
            this.initActionVal(this.actionId);
            var unitName = this.unitParam[this.unitList[this.actionId].id].name;
            this.outputText += unitName + "の行動<br>";
            this.actionId++;
            loopFlg = false;
            break;
          }
        }
        this.actionId = loopFlg ? 0 : this.actionId;
      }
    },
    loopAction: function (n) {
      for (var i = 0; i < n; i++) {
        this.action();
      }
    },
    initActionVal: function (index) {
      var unitId = this.unitList[index].id;
      var acsPow = this.accessory[this.unitList[index].acs].pow;
      var speed = this.unitParam[unitId].speed + (this.unitList[index].lv - 1) + this.unitList[index].paro;
      speed *= acsPow;
      speed = Math.floor(speed * (this.unitList[index].speedup ? 1.2 : 1.0));
      speed = speed > 100 ? 100 : speed;
      this.unitList[index].action = 100 - speed;
    }
  },
  events: {
    'set-map-unit': function (id) {
      this.unitList = mapUnitList(id);
    }
  }
});
