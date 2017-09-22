exports.addClass = (el, className) => {
  let existing = el.getAttribute('class');
  let allClass = `${existing} ${className}`;
  let arr = allClass.split(' ');

  arr = reduceDupes(arr);
  let newClass = arr.join(' ');

  el.setAttribute('class', newClass);
}

exports.removeClass = (el, className) => {
  let existing = el.getAttribute('class');
  let arr = existing.split(' ');
  let index = arr.indexOf(className);

  if(index > -1) {
    arr.splice(index, 1);
  }
  arr = reduceDupes(arr);

  let newClass = arr.join(' ');
  el.setAttribute('class', newClass);
}

exports.asyncLoop = (o) => {
  let i = -1;

  let loop = () => {
    i++;
    if(i==o.length){ o.callback(); return; }
    o.functionToLoop(loop, i);
  }

  loop();
}

let reduceDupes = (arr) => {
  arr = arr.filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
  });
  return arr;
}
exports.reduceDupes = reduceDupes;

exports.sendMail = (data) => {
  let json = JSON.stringify(data);

  return fetch('/api/send', {
    method: 'post',
    body: json,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
}
