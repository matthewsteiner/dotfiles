// Set modal key binding
var modal = 'alt,cmd,space';

var getModalCommand = function(key) {
  return key + ':' + modal;
};

var operations = {
  pushRight: slate.operation('push', {
    'direction' : 'right',
    'style' : 'bar-resize:screenSizeX/3'
  }),

  pushLeft: slate.operation('push', {
    'direction' : 'left',
    'style' : 'bar-resize:screenSizeX/3'
  }),

  pushTop: slate.operation('push', {
    'direction' : 'top',
    'style' : 'bar-resize:screenSizeY/2'
  }),

  pushBottom: slate.operation('push', {
    'direction' : 'bottom',
    'style' : 'bar-resize:screenSizeY/2'
  }),

  fullscreen: slate.operation('move', {
    'x' : 'screenOriginX',
    'y' : 'screenOriginY',
    'width' : 'screenSizeX',
    'height' : 'screenSizeY'
  })
};

var getOperation = function(op) {
  var operation = function(win) {
    return win.doOperation(operations[op]);
  };

  return operation;
};

// Set key bindings
var bindings = {
  'w': 'pushTop',
  'a': 'pushLeft',
  's': 'fullscreen',
  'd': 'pushRight',
  'x': 'pushDown'
};

var generateBindings = function() {
  _.each(bindings, function(operation, key) {
    slate.bind(getModalCommand(key), getOperation(operation));
  });
};

generateBindings();