var index_now = -1
var index_latest = -1
var formula_now = "0";
var formula_past = [];
var ans_now = "";
var ans_past = [];

function init() {
  document.forms[0].elements[0].value = formula_now;
  document.forms[0].elements[2].value = ans_now;
}

function backspace() {
  document.forms[0].elements[0].value = document.forms[0].elements[0].value.slice(0, -1);
  if (document.forms[0].elements[0].value == "") {
    insert_0();
  }
  formula_now = document.forms[0].elements[0].value;
}

function insert_0() {
  if (document.forms[0].elements[2].value != "") {
    all_clear();
  } else if (document.forms[0].elements[0].value != "0") {
    document.forms[0].elements[0].value += "0";
  } else if (document.forms[0].elements[2].value != "") {
    all_clear();
  }
  formula_now = document.forms[0].elements[0].value;
}

function insert_1() {
  if (document.forms[0].elements[2].value != "") {
    all_clear();
    document.forms[0].elements[0].value = "1";
  } else if (document.forms[0].elements[0].value != "0") {
    document.forms[0].elements[0].value += "1";
  } else {
    document.forms[0].elements[0].value = "1";
  }
  formula_now = document.forms[0].elements[0].value;
}

function insert_2() {
  if (document.forms[0].elements[2].value != "") {
    all_clear();
    document.forms[0].elements[0].value = "2";
  } else if (document.forms[0].elements[0].value != "0") {
    document.forms[0].elements[0].value += "2";
  } else {
    document.forms[0].elements[0].value = "2";
  }
  formula_now = document.forms[0].elements[0].value;
}

function insert_3() {
  if (document.forms[0].elements[2].value != "") {
    all_clear();
    document.forms[0].elements[0].value = "3";
  } else if (document.forms[0].elements[0].value != "0") {
    document.forms[0].elements[0].value += "3";
  } else {
    document.forms[0].elements[0].value = "3";
  }
  formula_now = document.forms[0].elements[0].value;
}

function insert_4() {
  if (document.forms[0].elements[2].value != "") {
    all_clear();
    document.forms[0].elements[0].value = "4";
  } else if (document.forms[0].elements[0].value != "0") {
    document.forms[0].elements[0].value += "4";
  } else {
    document.forms[0].elements[0].value = "4";
  }
  formula_now = document.forms[0].elements[0].value;
}

function insert_5() {
  if (document.forms[0].elements[2].value != "") {
    all_clear();
    document.forms[0].elements[0].value = "5";
  } else if (document.forms[0].elements[0].value != "0") {
    document.forms[0].elements[0].value += "5";
  } else {
    document.forms[0].elements[0].value = "5";
  }
  formula_now = document.forms[0].elements[0].value;
}

function insert_6() {
  if (document.forms[0].elements[2].value != "") {
    all_clear();
    document.forms[0].elements[0].value = "6";
  } else if (document.forms[0].elements[0].value != "0") {
    document.forms[0].elements[0].value += "6";
  } else {
    document.forms[0].elements[0].value = "6";
  }
  formula_now = document.forms[0].elements[0].value;
}

function insert_7() {
  if (document.forms[0].elements[2].value != "") {
    all_clear();
    document.forms[0].elements[0].value = "7";
  } else if (document.forms[0].elements[0].value != "0") {
    document.forms[0].elements[0].value += "7";
  } else {
    document.forms[0].elements[0].value = "7";
  }
  formula_now = document.forms[0].elements[0].value;
}

function insert_8() {
  if (document.forms[0].elements[2].value != "") {
    all_clear();
    document.forms[0].elements[0].value = "8";
  } else if (document.forms[0].elements[0].value != "0") {
    document.forms[0].elements[0].value += "8";
  } else {
    document.forms[0].elements[0].value = "8";
  }
  formula_now = document.forms[0].elements[0].value;
}

function insert_9() {
  if (document.forms[0].elements[2].value != "") {
    all_clear();
    document.forms[0].elements[0].value = "9";
  } else if (document.forms[0].elements[0].value != "0") {
    document.forms[0].elements[0].value += "9";
  } else {
    document.forms[0].elements[0].value = "9";
  }
  formula_now = document.forms[0].elements[0].value;
}

function insert_add() {
  last = document.forms[0].elements[0].value.slice(-1);
  if (document.forms[0].elements[2].value != "") {
    tmp = document.forms[0].elements[2].value;
    all_clear();
    document.forms[0].elements[0].value = tmp;
  } else if (last != "0" && last != "1" && last != "2" && last != "3" && last != "4" && last != "5" && last != "6" && last != "7" && last != "8" && last != "9" && last != "^" && last != "π") {
    backspace();
  }
  document.forms[0].elements[0].value += "+";
  formula_now = document.forms[0].elements[0].value;
}

function insert_sub() {
  last = document.forms[0].elements[0].value.slice(-1);
  if (document.forms[0].elements[2].value != "") {
    tmp = document.forms[0].elements[2].value;
    all_clear();
    document.forms[0].elements[0].value = tmp;
  } else if (last != "0" && last != "1" && last != "2" && last != "3" && last != "4" && last != "5" && last != "6" && last != "7" && last != "8" && last != "9" && last != "^" && last != "π") {
    backspace();
  }
  document.forms[0].elements[0].value += "-";
  formula_now = document.forms[0].elements[0].value;
}

function insert_multi() {
  last = document.forms[0].elements[0].value.slice(-1);
  if (document.forms[0].elements[2].value != "") {
    tmp = document.forms[0].elements[2].value;
    all_clear();
    document.forms[0].elements[0].value = tmp;
  } else if (last != "0" && last != "1" && last != "2" && last != "3" && last != "4" && last != "5" && last != "6" && last != "7" && last != "8" && last != "9" && last != "π") {
    backspace();
  }
  document.forms[0].elements[0].value += "*";
  formula_now = document.forms[0].elements[0].value;
}

function insert_div() {
  last = document.forms[0].elements[0].value.slice(-1);
  if (document.forms[0].elements[2].value != "") {
    tmp = document.forms[0].elements[2].value;
    all_clear();
    document.forms[0].elements[0].value = tmp;
  } else if (last != "0" && last != "1" && last != "2" && last != "3" && last != "4" && last != "5" && last != "6" && last != "7" && last != "8" && last != "9" && last != "π") {
    backspace();
  }
  document.forms[0].elements[0].value += "/";
  formula_now = document.forms[0].elements[0].value;
}

function insert_point() {
  document.forms[0].elements[0].value += ".";
  formula_now = document.forms[0].elements[0].value;
}

function insert_exp() {
  if (document.forms[0].elements[2].value != "") {
    tmp = document.forms[0].elements[2].value;
    all_clear();
    document.forms[0].elements[0].value = tmp;
  } else if (last != "0" && last != "1" && last != "2" && last != "3" && last != "4" && last != "5" && last != "6" && last != "7" && last != "8" && last != "9" && last != "π") {
    backspace();
  }
  document.forms[0].elements[0].value += "^";
  formula_now = document.forms[0].elements[0].value;
}

function insert_open() {
  document.forms[0].elements[0].value += "(";
  formula_now = document.forms[0].elements[0].value;
}

function insert_close() {
  document.forms[0].elements[0].value += ")";
  formula_now = document.forms[0].elements[0].value;
}

function pi() {
  last = document.forms[0].elements[0].value.slice(-1);
  if (document.forms[0].elements[2].value != "") {
    all_clear();
    document.forms[0].elements[0].value = "π";
  } else if (last == "0") {
    document.forms[0].elements[0].value = "π";
  } else if (last == "" || last == "+" || last == "-" || last == "*" || last == "/" || last == "^" || last == "(") {
    document.forms[0].elements[0].value += "π";
  }
  formula_now = document.forms[0].elements[0].value;
}

function all_clear() {
  document.forms[0].elements[0].value = "0";
  document.forms[0].elements[2].value = "";
  formula_now = document.forms[0].elements[0].value;
  ans_now = document.forms[0].elements[2].value;
}

function copy() {
  ans = document.forms[0].elements[2].value
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(ans);
  }
}

function undo() {
  if (index_now > 0) {
    document.forms[0].elements[0].value = formula_past[--index_now]
    document.forms[0].elements[2].value = ans_past[index_now]
  }
}

function redo() {
  if (index_now < index_latest) {
    document.forms[0].elements[0].value = formula_past[++index_now]
    document.forms[0].elements[2].value = ans_past[index_now]
  }
}

function nothing() {
}

function calculation() {
  formula_past.push(document.forms[0].elements[0].value);
  var ans = document.forms[0].elements[0].value.replace("^", "**");
  ans = ans.replace("π", "Math.PI")
  var result = (new Function("return " + ans))();
  document.forms[0].elements[2].value = String(result);
  ans_past.push(String(result));
  ans_now = document.forms[0].elements[2].value;
  past.push({No: index_latest, formula: formula_now, ans: ans_now,},);
  index_latest++;
  index_now = index_latest;
}

