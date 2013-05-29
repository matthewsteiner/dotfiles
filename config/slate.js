// Set modal key binding
var modal = 'alt,cmd,space';

var getModalCommand = function(key) {
  return key + ':' + modal;
};

var screenSizeX = function() {
  if ( slate && slate.screen() && slate.screen().rect() ) {
    return slate.screen().vrect().width;
  }
}

var screenSizeY = function() {
  if ( slate && slate.screen() && slate.screen().rect() ) {
    return slate.screen().vrect().height;
  }
}

var operations = {
  pushRight: slate.operation('push', {
    'direction' : 'right',
    'style' : 'bar-resize:screenSizeX/2'
  }),

  pushRightOneThird: slate.operation('push', {
    'direction' : 'right',
    'style' : 'bar-resize:screenSizeX/3'
  }),

  pushRightTwoThirds: slate.operation('push', {
    'direction' : 'right',
    'style' : 'bar-resize:screenSizeX/1.5'
  }),

  pushLeft: slate.operation('push', {
    'direction' : 'left',
    'style' : 'bar-resize:screenSizeX/2'
  }),

  pushLeftOneThird: slate.operation('push', {
    'direction' : 'left',
    'style' : 'bar-resize:screenSizeX/3'
  }),

  pushLeftTwoThirds: slate.operation('push', {
    'direction' : 'left',
    'style' : 'bar-resize:screenSizeX/1.5'
  }),

  pushTop: slate.operation('push', {
    'direction' : 'top',
    'style' : 'bar-resize:screenSizeY/2'
  }),

  pushTopOneThird: slate.operation('push', {
    'direction' : 'top',
    'style' : 'bar-resize:screenSizeY/3'
  }),

  pushTopTwoThirds: slate.operation('push', {
    'direction' : 'top',
    'style' : 'bar-resize:screenSizeY/1.5'
  }),

  pushBottom: slate.operation('push', {
    'direction' : 'bottom',
    'style' : 'bar-resize:screenSizeY/2'
  }),

  pushBottomOneThird: slate.operation('push', {
    'direction' : 'bottom',
    'style' : 'bar-resize:screenSizeY/3'
  }),

  pushBottomTwoThirds: slate.operation('push', {
    'direction' : 'bottom',
    'style' : 'bar-resize:screenSizeY/1.5'
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
  }),

  centerLarge: [
    slate.operation('move', {
      'x': 'screenOriginX+50',
      'y': 'screenOriginY+50',
      'width': 'screenSizeX-100',
      'height': 'screenSizeY-100'
    })
  ],

  relaunch: slate.operation('relaunch')
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
  'i': 'pushTopOneThird',
  't': 'pushTopTwoThirds',
  'e': 'pushTopRight',
  'a': 'pushLeft',
  'j': 'pushLeftOneThird',
  'f': 'pushLeftTwoThirds',
  'd': 'pushRight',
  'l': 'pushRightOneThird',
  'h': 'pushRightTwoThirds',
  'z': 'pushBottomLeft',
  'x': 'pushBottom',
  ',': 'pushBottomOneThird',
  'b': 'pushBottomTwoThirds',
  'c': 'pushBottomRight',
  's': 'fullscreen',
  'g': 'centerLarge',
  'left': 'throwLeft',
  'right': 'throwRight',
  '[': 'throwLeftFullscreen',
  ']': 'throwRightFullscreen',
  ';': 'relaunch'
};

var generateBindings = function() {
  _.each(bindings, function(operation, key) {
    slate.bind(getModalCommand(key), getOperation(operation));
  });
};

generateBindings();
