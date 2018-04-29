window.onload = function () {
    var table = document.createElement ('table');
    var tr = document.createElement('tr');
    var th = document.createElement('th')
    table.appendChild(tr);
    document.getElementsByTagName('body')[0].appendChild(table);
    setProperties(table, 'outlay');

}

function setProperties(elem, class, id, inner) {
    if (elem) {
        id && elem.id = id;
        class && elem.className = class;
        inner && elem.innerHTML = inner;
    }
}

function createElemWithProps (name, class, id, inner, handler) {
    var elem = document.createElement(name);
    setProperties(elem, class, id, inner);
    elem.addEventListener(handler.event, handler.func);
}