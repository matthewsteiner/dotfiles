// Set modal key binding
var modal = 'alt,cmd,space';

var getModalCommand = function(key) {
  return key + ':' + modal;
};

var screenSizeX = function() {
  if ( slate && slate.screen() && slate.screen().rect() ) {
    return slate.screen().rect().width;
  }
}

var screenSizeY = function() {
  if ( slate && slate.screen() && slate.screen().rect() ) {
    return slate.screen().rect().height;
  }
}

var operations = {
  pushRight: slate.operation('push', {
    'direction' : 'right',
    'style' : 'bar-resize:screenSizeX/2'
  }),

  pushLeft: slate.operation('push', {
    'direction' : 'left',
    'style' : 'bar-resize:screenSizeX/2'
  }),

  pushTop: slate.operation('push', {
    'direction' : 'top',
    'style' : 'bar-resize:screenSizeY/2'
  }),

  pushBottom: slate.operation('push', {
    'direction' : 'bottom',
    'style' : 'bar-resize:screenSizeY/2'
  }),

  pushTopLeft: slate.operation('corner', {
    'direction' : 'top-left',
    'width' : screenSizeX() / 2,
    'height' : screenSizeY() / 2
  }),

  pushTopRight: slate.operation('corner', {
    'direction' : 'top-right',
    'width' : screenSizeX() / 2,
    'height' : screenSizeY() / 2
  }),

  pushBottomLeft: slate.operation('corner', {
    'direction' : 'bottom-left',
    'width' : screenSizeX() / 2,
    'height' : screenSizeY() / 2
  }),

  pushBottomRight: slate.operation('corner', {
    'direction' : 'bottom-right',
    'width' : screenSizeX() / 2,
    'height' : screenSizeY() / 2
  }),

  throwRight: slate.operation('throw', {
    'screen' : 'right'
  }),

  throwLeft: slate.operation('throw', {
    'screen' : 'left'
  }),

  throwRightFullscreen: [
    slate.operation('throw', {
      'screen' : 'right',
      'width' : 'screenSizeX',
      'height' : 'screenSizeY'
    })
  ],

  throwLeftFullscreen: [
    slate.operation('throw', {
      'screen' : 'left',
      'width' : 'screenSizeX',
      'height' : 'screenSizeY'
    })
  ],

  fullscreen: slate.operation('move', {
    'x' : 'screenOriginX',
    'y' : 'screenOriginY',
    'width' : 'screenSizeX',
    'height' : 'screenSizeY'
  })
};

var getOperation = function(op) {
  var operation = function(win) {
    if ( _.isArray(operations[op]) ) {
      _.each(operations[op], function(op) {
        win.doOperation(op);
      });
    } else {
      win.doOperation(operations[op]);
    }
  };

  return operation;
};

// Set key bindings
var bindings = {
  'q': 'pushTopLeft',
  'w': 'pushTop',
  'e': 'pushTopRight',
  'a': 'pushLeft',
  's': 'fullscreen',
  'd': 'pushRight',
  'z': 'pushBottomLeft',
  'x': 'pushBottom',
  'c': 'pushBottomRight',
  'left': 'throwLeft',
  'right': 'throwRight',
  '[': 'throwLeftFullscreen',
  ']': 'throwRightFullscreen'
};

var generateBindings = function() {
  _.each(bindings, function(operation, key) {
    slate.bind(getModalCommand(key), getOperation(operation));
  });
};

generateBindings();
