/* Generated by Opal 1.0.3 */
(function(Opal) {
  function $rb_divide(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs / rhs : lhs['$/'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy;

  Opal.add_stubs(['$==', '$%', '$floor', '$/', '$<=', '$>=', '$-']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'EclipsePhase');

    var $nesting = [self].concat($parent_nesting), $EclipsePhase_check_1D100$1;

    
    Opal.const_set($nesting[0], 'ID', "EclipsePhase");
    Opal.const_set($nesting[0], 'NAME', "エクリプス・フェイズ");
    Opal.const_set($nesting[0], 'SORT_KEY', "えくりふすふえいす");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "1D100<=m 方式の判定で成否、クリティカル・ファンブルを自動判定");
    return (Opal.def(self, '$check_1D100', $EclipsePhase_check_1D100$1 = function $$check_1D100(total, _dice_total, cmp_op, target) {
      var self = this, diceValue = nil, dice_ten_place = nil, dice_one_place = nil, diff_threshold = nil;

      
      if (target['$==']("?")) {
        return ""};
      if (cmp_op['$==']("<=")) {
      } else {
        return ""
      };
      diceValue = total['$%'](100);
      dice_ten_place = $rb_divide(diceValue, 10).$floor();
      dice_one_place = diceValue['$%'](10);
      if (dice_ten_place['$=='](dice_one_place)) {
        
        if (diceValue['$=='](99)) {
          return " ＞ 決定的失敗"};
        if (diceValue['$=='](0)) {
          return " ＞ 00 ＞ 決定的成功"};
        if ($truthy($rb_le(total, target))) {
          return " ＞ 決定的成功"};
        return " ＞ 決定的失敗";};
      diff_threshold = 30;
      if ($truthy($rb_le(total, target))) {
        if ($truthy($rb_ge(total, diff_threshold))) {
          return " ＞ エクセレント"
        } else {
          return " ＞ 成功"
        }
      } else if ($truthy($rb_ge($rb_minus(total, target), diff_threshold))) {
        return " ＞ シビア"
      } else {
        return " ＞ 失敗"
      };
    }, $EclipsePhase_check_1D100$1.$$arity = 4), nil) && 'check_1D100';
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting)
})(Opal);
