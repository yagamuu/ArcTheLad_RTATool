(function () {
  "use strict";

  var mapList = [
    { "id" : 0, "name" : "---", },
    { "id" : 1, "name" : "コルボ平原", },
    { "id" : 2, "name" : "パレンシア城前", },
    { "id" : 3, "name" : "センバラの沼", },
    { "id" : 4, "name" : "ルワジの森", },
    { "id" : 5, "name" : "トヨーケの森", },
    { "id" : 6, "name" : "パレンシア城地下倉庫", },
    { "id" : 7, "name" : "オルニスの丘", },
    { "id" : 8, "name" : "遺跡ダンジョン地下1階", },
    { "id" : 9, "name" : "遺跡ダンジョン地下2階", },
    { "id" : 10, "name" : "遺跡ダンジョン地下3階", },
    { "id" : 11, "name" : "遺跡ダンジョン地下4階", },
    { "id" : 12, "name" : "アゼンダ高地", },
    { "id" : 13, "name" : "ラマダ寺", },
    { "id" : 14, "name" : "ラマダ山", },
    { "id" : 15, "name" : "闘技場", },
    { "id" : 16, "name" : "サリュ族の村", },
    { "id" : 17, "name" : "水の神殿", },
    { "id" : 18, "name" : "水の神殿内部", },
    { "id" : 19, "name" : "パレンシア城地下研究所", },
    { "id" : 20, "name" : "エレベーター前", },
    { "id" : 21, "name" : "精霊の山", },
    { "id" : 22, "name" : "封印の滝", },
    { "id" : 23, "name" : "幻界", },
  ];

  var mapUnitList = function(id) {
    var unitList = [
      [
        {id:0, lv:1, paro:0, acs:0, speedup:false, action:95}
      ],
      [//コルボ平原
        {id:0 , lv:2, paro:0, acs:0, speedup:false, action:94},
        {id:3 , lv:2, paro:0, acs:0, speedup:false, action:96},
        {id:10, lv:1, paro:0, acs:0, speedup:false, action:99},
        {id:9 , lv:1, paro:0, acs:0, speedup:false, action:97},
        {id:8 , lv:1, paro:0, acs:0, speedup:false, action:97},
        {id:18, lv:1, paro:0, acs:0, speedup:false, action:96},
      ],
      [//パレンシア城前
        {id:0 , lv:4, paro:0, acs:0, speedup:false, action:92},
        {id:1 , lv:3, paro:0, acs:0, speedup:false, action:94},
        {id:3 , lv:3, paro:0, acs:0, speedup:false, action:95},
        {id:10, lv:1, paro:0, acs:0, speedup:false, action:99},
        {id:8 , lv:1, paro:0, acs:0, speedup:false, action:97},
        {id:12, lv:1, paro:0, acs:0, speedup:false, action:95},
        {id:14, lv:1, paro:0, acs:0, speedup:false, action:94},
      ],
      [//センバラの沼
        {id:0 , lv:6, paro:1, acs:1, speedup:false, action:88},
        {id:1 , lv:3, paro:0, acs:0, speedup:false, action:94},
        {id:3 , lv:3, paro:0, acs:0, speedup:false, action:95},
        {id:22, lv:1, paro:0, acs:0, speedup:false, action:86},
        {id:13, lv:1, paro:0, acs:0, speedup:false, action:90},
      ],
      [//ルワジの森
        {id:0 , lv:9, paro:1, acs:1, speedup:false, action:85},
        {id:1 , lv:3, paro:0, acs:0, speedup:false, action:94},
        {id:3 , lv:3, paro:0, acs:0, speedup:false, action:95},
        {id:13, lv:1, paro:0, acs:0, speedup:false, action:90},
        {id:26, lv:1, paro:0, acs:0, speedup:false, action:90},
        {id:19, lv:1, paro:0, acs:0, speedup:false, action:94},
      ],
      [//トヨーケの森
        {id:0, lv:1, paro:0, acs:0, speedup:false, action:95}
      ],
      [//パレンシア城地下倉庫
        {id:0, lv:1, paro:0, acs:0, speedup:false, action:95}
      ],
      [//オルニスの丘
        {id:0, lv:1, paro:0, acs:0, speedup:false, action:95}
      ],
      [//遺跡ダンジョン地下1階
        {id:0, lv:1, paro:0, acs:0, speedup:false, action:95}
      ],
      [//遺跡ダンジョン地下2階
        {id:0, lv:1, paro:0, acs:0, speedup:false, action:95}
      ],
      [//遺跡ダンジョン地下3階
        {id:0, lv:1, paro:0, acs:0, speedup:false, action:95}
      ],
      [//遺跡ダンジョン地下4階
        {id:0, lv:1, paro:0, acs:0, speedup:false, action:95}
      ],
      [//アゼンダ高地
        {id:0, lv:1, paro:0, acs:0, speedup:false, action:95}
      ],
      [//ラマダ寺
        {id:0, lv:1, paro:0, acs:0, speedup:false, action:95}
      ],
      [//ラマダ山
        {id:0, lv:1, paro:0, acs:0, speedup:false, action:95}
      ],
      [//闘技場
        {id:0, lv:1, paro:0, acs:0, speedup:false, action:95}
      ],
      [//サリュ族の村
        {id:0, lv:1, paro:0, acs:0, speedup:false, action:95}
      ],
      [//水の神殿
        {id:0, lv:1, paro:0, acs:0, speedup:false, action:95}
      ],
      [//水の神殿内部
        {id:0, lv:1, paro:0, acs:0, speedup:false, action:95}
      ],
      [//パレンシア城地下研究所
        {id:0, lv:1, paro:0, acs:0, speedup:false, action:95}
      ],
      [//エレベーター前
        {id:0, lv:1, paro:0, acs:0, speedup:false, action:95}
      ],
      [//精霊の山
        {id:0, lv:1, paro:0, acs:0, speedup:false, action:95}
      ],
      [//封印の滝
        {id:0, lv:1, paro:0, acs:0, speedup:false, action:95}
      ],
      [//幻界
        {id:0, lv:1, paro:0, acs:0, speedup:false, action:95}
      ],
    ];

    return unitList[id];
  };

  var unitParam = [
    { "id" : 0, "name" : "アーク", "speed" : 5, },
    { "id" : 1, "name" : "ククル", "speed" : 4, },
    { "id" : 2, "name" : "トッシュ", "speed" : 8, },
    { "id" : 3, "name" : "ポコ", "speed" : 3, },
    { "id" : 4, "name" : "ゴーゲン", "speed" : 3, },
    { "id" : 5, "name" : "イーガ", "speed" : 4, },
    { "id" : 6, "name" : "チョンガラ", "speed" : 3, },
    { "id" : 7, "name" : "スケルトン", "speed" : 7, },
    { "id" : 8, "name" : "ゴースト", "speed" : 3, },
    { "id" : 9, "name" : "ゾンビ", "speed" : 3, },
    { "id" : 10, "name" : "グリーンスライム", "speed" : 1, },
    { "id" : 11, "name" : "ニンジャ", "speed" : 16, },
    { "id" : 12, "name" : "メイジ", "speed" : 5, },
    { "id" : 13, "name" : "ファイター", "speed" : 10, },
    { "id" : 14, "name" : "破戒僧", "speed" : 6, },
    { "id" : 15, "name" : "ジャイアントバット", "speed" : 25, },
    { "id" : 16, "name" : "ドールマスター", "speed" : 15, },
    { "id" : 17, "name" : "死神", "speed" : 30, },
    { "id" : 18, "name" : "エレメンタル", "speed" : 4, },
    { "id" : 19, "name" : "妖樹", "speed" : 6, },
    { "id" : 20, "name" : "ファンタズム", "speed" : 30, },
    { "id" : 21, "name" : "シードレイク", "speed" : 6, },
    { "id" : 22, "name" : "マイティフライ", "speed" : 14, },
    { "id" : 23, "name" : "キラードッグ", "speed" : 22, },
    { "id" : 24, "name" : "レッドスケルトン", "speed" : 29, },
    { "id" : 25, "name" : "ブラックスカル", "speed" : 38, },
    { "id" : 26, "name" : "レイス", "speed" : 10, },
    { "id" : 27, "name" : "グール", "speed" : 11, },
    { "id" : 28, "name" : "フリージー", "speed" : 22, },
    { "id" : 29, "name" : "アシッドスライム", "speed" : 30, },
    { "id" : 30, "name" : "アサッシン", "speed" : 32, },
    { "id" : 31, "name" : "スーパーシノビ", "speed" : 35, },
    { "id" : 32, "name" : "ウイッチクラフト", "speed" : 16, },
    { "id" : 33, "name" : "ソーサラー", "speed" : 20, },
    { "id" : 34, "name" : "ネクロマンサー", "speed" : 24, },
    { "id" : 35, "name" : "ウィザード", "speed" : 30, },
    { "id" : 36, "name" : "闇法師", "speed" : 23, },
    { "id" : 37, "name" : "修験者", "speed" : 25, },
    { "id" : 38, "name" : "下法師", "speed" : 27, },
    { "id" : 39, "name" : "ネビュラス", "speed" : 35, },
    { "id" : 40, "name" : "道化師", "speed" : 30, },
    { "id" : 41, "name" : "デスハウンド", "speed" : 30, },
    { "id" : 42, "name" : "デス", "speed" : 42, },
    { "id" : 43, "name" : "ヴァンパイアバット", "speed" : 32, },
    { "id" : 44, "name" : "ソードマン", "speed" : 25, },
    { "id" : 45, "name" : "ナイトマスター", "speed" : 28, },
    { "id" : 46, "name" : "グレートナイト", "speed" : 39, },
    { "id" : 47, "name" : "ポイズンスモッグ", "speed" : 30, },
    { "id" : 48, "name" : "メデューサリザード", "speed" : 15, },
    { "id" : 49, "name" : "ドラゴンフライ", "speed" : 43, },
    { "id" : 50, "name" : "マントラップ", "speed" : 25, },
    { "id" : 51, "name" : "デスフレイム", "speed" : 22, },
    { "id" : 52, "name" : "エレメンタルマスター", "speed" : 30, },
    { "id" : 53, "name" : "野生ヘモジー", "speed" : 21, },
    { "id" : 54, "name" : "レッサーデーモン", "speed" : 23, },
    { "id" : 55, "name" : "グレーターデーモン", "speed" : 34, },
    { "id" : 56, "name" : "スタンゴーレム", "speed" : 22, },
    { "id" : 57, "name" : "ワイバーン", "speed" : 37, },
    { "id" : 58, "name" : "マッドバトラー", "speed" : 27, },
    { "id" : 59, "name" : "アークデーモン", "speed" : 36, },
    { "id" : 60, "name" : "ファイアゴーレム", "speed" : 27, },
    { "id" : 61, "name" : "カッパードラゴン", "speed" : 42, },
    { "id" : 63, "name" : "修行僧", "speed" : 24, },
    { "id" : 64, "name" : "ラマダ大僧正", "speed" : 26, },
    { "id" : 65, "name" : "グラ・アピス", "speed" : 27, },
    { "id" : 66, "name" : "コ・アピス", "speed" : 30, },
    { "id" : 67, "name" : "ムル・アピス", "speed" : 65, },
    { "id" : 68, "name" : "ラ・アピス", "speed" : 70, },
    { "id" : 69, "name" : "ケラック", "speed" : 27, },
    { "id" : 70, "name" : "モフリー", "speed" : 32, },
    { "id" : 71, "name" : "フウジン", "speed" : 30, },
    { "id" : 72, "name" : "ライジン", "speed" : 34, },
    { "id" : 73, "name" : "オドン", "speed" : 32, },
    { "id" : 74, "name" : "ヘモジー", "speed" : 27, },
    { "id" : 75, "name" : "ダークアーク", "speed" : 47, },
    { "id" : 76, "name" : "ダークククル", "speed" : 46, },
    { "id" : 77, "name" : "ダークトッシュ", "speed" : 49, },
    { "id" : 78, "name" : "ダークポコ", "speed" : 45, },
    { "id" : 79, "name" : "ダークゴーゲン", "speed" : 44, },
    { "id" : 80, "name" : "ダークイーガ", "speed" : 45, },
    { "id" : 81, "name" : "ダークチョンガラ", "speed" : 44, },
    { "id" : 82, "name" : "ちょこ（敵）", "speed" : 68, },
    { "id" : 83, "name" : "ちょこ（味方)", "speed" : 62, },
  ];

  var accessory = [
    { "id" : 0, "name" : "なし",           "pow" : "1.0" },
    { "id" : 1, "name" : "疾風のバンダナ", "pow" : "1.1" },
    { "id" : 2, "name" : "ハイパーブーツ", "pow" : "1.2" },
  ];

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
      setMapUnit: function() {
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
      unitList : [
        {id:0, lv:1, paro:0, acs:0, speedup:false, action:95},
      ],
      mapList: mapList,
      unitParam: unitParam,
      accessory: accessory,
      actionId: 0,
      outputText: "",
    },
    methods: {
      init: function() {
        var l = this.unitList.length;
        for(var i=0; i<l; i++) {
          this.initActionVal(i);
        }
        this.outputText = "";
      },
      all_init: function() {
        this.unitList = [{id:0, lv:1, paro:0, acs:0, speedup:false, action:95}];
        this.outputText = "";
      },
      add: function () {
        this.unitList.push({id:0, lv:1, paro:0, acs:0, speedup:false, action:95});
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
        this.unitList.forEach(function(elm) {
          minAction = elm.action < minAction ? elm.action : minAction;
        });
        minAction = minAction < 1 ? 1 : minAction;
        this.unitList.forEach(function(elm, index) {
          vm.$data.unitList[index].action -= (minAction - 1);
        });
        var loopFlg = true;
        while (loopFlg) {
          for(var len=this.unitList.length; this.actionId<len; this.actionId++) {
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
        for(var i=0; i<n; i++) {
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
      'set-map-unit': function(id) {
        this.unitList = mapUnitList(id);
      }
    }
  });
}());