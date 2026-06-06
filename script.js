(function () {
  var display = document.getElementById("display");

  function getValue() {
    return display.value;
  }

  function setValue(v) {
    display.value = v;
  }

function append(ch) {
    var current = getValue().trim();
    var operators = ['+', '-', '*', '/'];
    var lastChar = current.slice(-1);

    if (current === "" && operators.includes(ch)) {
        return;
    }

    if (operators.includes(lastChar) && operators.includes(ch)) {
        return;
    }

    setValue(current + ch);
}

  function clearAll() {
    setValue("");
  }
  function backspace() {
    setValue(getValue().slice(0, -1));
  }

  function calculate() {
    var expr = getValue();

    if (!/^[0-9+\-*/(). %]*$/.test(expr)) {
      setValue("Error");
      return;
    }
    try {
      var res = eval(expr);
      setValue(String(res));
    } catch (e) {
      setValue("Error");
    }
  }

  document.addEventListener("keydown", function (e) {
    var kc = e.keyCode;

    switch (kc) {
      case 48:
      case 96:
        append("0");
        break;
      case 49:
      case 97:
        append("1");
        break;
      case 50:
      case 98:
        append("2");
        break;
      case 51:
      case 99:
        append("3");
        break;
      case 52:
      case 100:
        append("4");
        break;
      case 53:
      case 101:
        append("5");
        break;
      case 54:
      case 102:
        append("6");
        break;
      case 55:
      case 103:
        append("7");
        break;
      case 56:
      case 104:
        append("8");
        break;
      case 57:
      case 105:
        append("9");
        break;

      case 106:
        append("*");
        break;
      case 107:
      case 187:
        append("+");
        break;
      case 109:
      case 189:
        append("-");
        break;
      case 110:
      case 190:
        append(".");
        break;
      case 111:
      case 191:
        append("/");
        break;
      case 13:
        calculate();
        break;
      case 8:
        backspace();
        break;
      case 46:
      case 67:
        clearAll();
        break;
      default:
        return;
    }
    e.preventDefault();
  });
})();
