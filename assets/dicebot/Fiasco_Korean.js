/* Generated by Opal 1.0.3 */
(function(Opal) {
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy, $send = Opal.send;

  Opal.add_stubs(['$setPrefixes', '$match', '$[]', '$==', '$makeStartDiceRoll', '$makeWhiteBlackDiceRoll', '$roll', '$each', '$split', '$-', '$to_i', '$+', '$[]=', '$makeArgsDiceRoll', '$>', '$<']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'Fiasco_Korean');

    var $nesting = [self].concat($parent_nesting), $Fiasco_Korean_rollDiceCommand$1, $Fiasco_Korean_makeStartDiceRoll$2, $Fiasco_Korean_makeWhiteBlackDiceRoll$4, $Fiasco_Korean_makeArgsDiceRoll$5;

    
    Opal.const_set($nesting[0], 'ID', "Fiasco:Korean");
    Opal.const_set($nesting[0], 'NAME', "피아스코");
    Opal.const_set($nesting[0], 'SORT_KEY', "国際化:Korean:피아스코");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "  ・판정 커맨드(FSx, WxBx)\n" + "    관계, 비틀기 요소용(FSx)：관계나 비틀기 요소를 위해 x개의 다이스를 굴려 나온 값별로 분류한다.\n" + "    흑백차이판정용(WxBx)    ：비틀기, 후기를 위해 흰 다이스(W지정)과 검은 다이스(B지정)으로 차이를 구한다.\n" + "      ※ W와B는 한 쪽만 지정(Bx, Wx), 앞뒤 바꿔 지정(WxBx,BxWx)도 가능\n");
    Opal.const_set($nesting[0], 'COMMAND_TYPE_INDEX', 1);
    Opal.const_set($nesting[0], 'START_DICE_INDEX', 2);
    Opal.const_set($nesting[0], 'BW_FIRST_DICE_INDEX', 2);
    Opal.const_set($nesting[0], 'BW_SECOND_DICE_INDEX', 5);
    Opal.const_set($nesting[0], 'BW_SECOND_DICE_TAG_INDEX', 4);
    Opal.const_set($nesting[0], 'START_COMMAND_TAG', "FS");
    Opal.const_set($nesting[0], 'W_DICEROLL_COMMAND_TAG', "W");
    Opal.const_set($nesting[0], 'B_DICEROLL_COMMAND_TAG', "B");
    self.$setPrefixes(["(FS|[WB])(\\d+).*"]);
    
    Opal.def(self, '$rollDiceCommand', $Fiasco_Korean_rollDiceCommand$1 = function $$rollDiceCommand(command) {
      var self = this, m = nil, type = nil;

      
      m = /^(FS|[WB])(\d+)(([WB])(\d+))?/.$match(command);
      if ($truthy(m)) {
      } else {
        return ""
      };
      type = m['$[]']($$($nesting, 'COMMAND_TYPE_INDEX'));
      if (type['$==']($$($nesting, 'START_COMMAND_TAG'))) {
        return self.$makeStartDiceRoll(m)
      } else {
        return self.$makeWhiteBlackDiceRoll(type, m)
      };
    }, $Fiasco_Korean_rollDiceCommand$1.$$arity = 1);
    
    Opal.def(self, '$makeStartDiceRoll', $Fiasco_Korean_makeStartDiceRoll$2 = function $$makeStartDiceRoll(m) {
      var $a, $b, $$3, self = this, dice = nil, _ = nil, diceText = nil, diceList = nil;

      
      dice = m['$[]']($$($nesting, 'START_DICE_INDEX'));
      $b = self.$roll(dice, 6), $a = Opal.to_ary($b), (_ = ($a[0] == null ? nil : $a[0])), (diceText = ($a[1] == null ? nil : $a[1])), $b;
      diceList = [0, 0, 0, 0, 0, 0];
      $send(diceText.$split(","), 'each', [], ($$3 = function(takeDice){var self = $$3.$$s || this, $writer = nil;

      
        
        if (takeDice == null) {
          takeDice = nil;
        };
        $writer = [$rb_minus(takeDice.$to_i(), 1), $rb_plus(diceList['$[]']($rb_minus(takeDice.$to_i(), 1)), 1)];
        $send(diceList, '[]=', Opal.to_a($writer));
        return $writer[$rb_minus($writer["length"], 1)];}, $$3.$$s = self, $$3.$$arity = 1, $$3));
      return "" + "１ => " + (diceList['$[]'](0)) + "개 ２ => " + (diceList['$[]'](1)) + "개 ３ => " + (diceList['$[]'](2)) + "개 ４ => " + (diceList['$[]'](3)) + "개 ５ => " + (diceList['$[]'](4)) + "개 ６ => " + (diceList['$[]'](5)) + "개";
    }, $Fiasco_Korean_makeStartDiceRoll$2.$$arity = 1);
    
    Opal.def(self, '$makeWhiteBlackDiceRoll', $Fiasco_Korean_makeWhiteBlackDiceRoll$4 = function $$makeWhiteBlackDiceRoll(type, m) {
      var $a, $b, self = this, whiteTotal = nil, whiteDiceText = nil, blackTotal = nil, blackDiceText = nil, result = nil;

      
      if (type['$==']($$($nesting, 'W_DICEROLL_COMMAND_TAG'))) {
        
        $b = self.$makeArgsDiceRoll(m['$[]']($$($nesting, 'BW_FIRST_DICE_INDEX')), m['$[]']($$($nesting, 'BW_SECOND_DICE_INDEX'))), $a = Opal.to_ary($b), (whiteTotal = ($a[0] == null ? nil : $a[0])), (whiteDiceText = ($a[1] == null ? nil : $a[1])), (blackTotal = ($a[2] == null ? nil : $a[2])), (blackDiceText = ($a[3] == null ? nil : $a[3])), $b;
        result = "" + "흰색" + (whiteTotal) + "[" + (whiteDiceText) + "]";
        if ($truthy(blackDiceText)) {
          
          if (m['$[]']($$($nesting, 'BW_SECOND_DICE_TAG_INDEX'))['$==']($$($nesting, 'W_DICEROLL_COMMAND_TAG'))) {
            return "" + (m) + "：흰색 지정(" + ($$($nesting, 'W_DICEROLL_COMMAND_TAG')) + ")은 중복될 수 없습니다."};
          result = $rb_plus(result, "" + " 검은색" + (blackTotal) + "[" + (blackDiceText) + "]");};
      } else if (type['$==']($$($nesting, 'B_DICEROLL_COMMAND_TAG'))) {
        
        $b = self.$makeArgsDiceRoll(m['$[]']($$($nesting, 'BW_FIRST_DICE_INDEX')), m['$[]']($$($nesting, 'BW_SECOND_DICE_INDEX'))), $a = Opal.to_ary($b), (blackTotal = ($a[0] == null ? nil : $a[0])), (blackDiceText = ($a[1] == null ? nil : $a[1])), (whiteTotal = ($a[2] == null ? nil : $a[2])), (whiteDiceText = ($a[3] == null ? nil : $a[3])), $b;
        result = "" + "검은색" + (blackTotal) + "[" + (blackDiceText) + "]";
        if ($truthy(whiteDiceText)) {
          
          if (m['$[]']($$($nesting, 'BW_SECOND_DICE_TAG_INDEX'))['$==']($$($nesting, 'B_DICEROLL_COMMAND_TAG'))) {
            return "" + (m) + "：검은색 지정(" + ($$($nesting, 'B_DICEROLL_COMMAND_TAG')) + ")은 중복될 수 없습니다."};
          result = $rb_plus(result, "" + " 흰색" + (whiteTotal) + "[" + (whiteDiceText) + "]");};
      } else {
        return ""
      };
      if ($truthy($rb_gt(blackTotal, whiteTotal))) {
        return "" + (result) + " ＞ 검은색" + ($rb_minus(blackTotal, whiteTotal))
      } else if ($truthy($rb_lt(blackTotal, whiteTotal))) {
        return "" + (result) + " ＞ 흰색" + ($rb_minus(whiteTotal, blackTotal))};
      return "" + (result) + " ＞ 0";
    }, $Fiasco_Korean_makeWhiteBlackDiceRoll$4.$$arity = 2);
    return (Opal.def(self, '$makeArgsDiceRoll', $Fiasco_Korean_makeArgsDiceRoll$5 = function $$makeArgsDiceRoll(firstDice, secondDice) {
      var $a, $b, self = this, secondTotal = nil, firstTotal = nil, firstDiceText = nil, secondDiceText = nil;

      
      secondTotal = 0;
      $b = self.$roll(firstDice, 6), $a = Opal.to_ary($b), (firstTotal = ($a[0] == null ? nil : $a[0])), (firstDiceText = ($a[1] == null ? nil : $a[1])), $b;
      if ($truthy(secondDice)) {
        if ($truthy($rb_gt(secondDice.$to_i(), 0))) {
          $b = self.$roll(secondDice, 6), $a = Opal.to_ary($b), (secondTotal = ($a[0] == null ? nil : $a[0])), (secondDiceText = ($a[1] == null ? nil : $a[1])), $b
        } else {
          secondDiceText = "0"
        }};
      return [firstTotal, firstDiceText, secondTotal, secondDiceText];
    }, $Fiasco_Korean_makeArgsDiceRoll$5.$$arity = 2), nil) && 'makeArgsDiceRoll';
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting)
})(Opal);
