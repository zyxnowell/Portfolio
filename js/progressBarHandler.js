var html, bootstrap, materialize, js, uikit, sql, vb, php, csharp, angular;

function readyBars(){
  	html = new ProgressBar.Circle('#skill-html', {
        strokeWidth: 6,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
          value: '',
          alignToBottom: false
        },
        from: {color: '#ecf0f1'},
        to: {color: '#F5AB35'},
        // Set default step function for all animate calls
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
            var value = Math.round(bar.value() * 10);
            if (value === 0) {
                bar.setText('');
            } else {
                bar.setText(value);
            }

          bar.text.style.color = state.color;
        }
    });
    html.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    html.text.style.fontSize = '2rem';

    bootstrap = new ProgressBar.Circle('#skill-bootstrap', {
        strokeWidth: 6,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
          value: '',
          alignToBottom: false
        },
        from: {color: '#ecf0f1'},
        to: {color: '#F5AB35'},
        // Set default step function for all animate calls
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
            var value = Math.round(bar.value() * 10);
            if (value === 0) {
                bar.setText('');
            } else {
                bar.setText(value);
            }

          bar.text.style.color = state.color;
        }
    });
    bootstrap.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bootstrap.text.style.fontSize = '2rem';

    materialize = new ProgressBar.Circle('#skill-materialize', {
        strokeWidth: 6,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
          value: '',
          alignToBottom: false
        },
        from: {color: '#ecf0f1'},
        to: {color: '#F5AB35'},
        // Set default step function for all animate calls
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
            var value = Math.round(bar.value() * 10);
            if (value === 0) {
                bar.setText('');
            } else {
                bar.setText(value);
            }

          bar.text.style.color = state.color;
        }
    });
    materialize.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    materialize.text.style.fontSize = '2rem';

    js = new ProgressBar.Circle('#skill-js', {
        strokeWidth: 6,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
          value: '',
          alignToBottom: false
        },
        from: {color: '#ecf0f1'},
        to: {color: '#F5AB35'},
        // Set default step function for all animate calls
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
            var value = Math.round(bar.value() * 10);
            if (value === 0) {
                bar.setText('');
            } else {
                bar.setText(value);
            }

          bar.text.style.color = state.color;
        }
    });
    js.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    js.text.style.fontSize = '2rem';

    uikit = new ProgressBar.Circle('#skill-uikit', {
        strokeWidth: 6,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
          value: '',
          alignToBottom: false
        },
        from: {color: '#ecf0f1'},
        to: {color: '#F5AB35'},
        // Set default step function for all animate calls
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
            var value = Math.round(bar.value() * 10);
            if (value === 0) {
                bar.setText('');
            } else {
                bar.setText(value);
            }

          bar.text.style.color = state.color;
        }
    });
    uikit.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    uikit.text.style.fontSize = '2rem';

    sql = new ProgressBar.Circle('#skill-sql', {
        strokeWidth: 6,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
          value: '',
          alignToBottom: false
        },
        from: {color: '#ecf0f1'},
        to: {color: '#F5AB35'},
        // Set default step function for all animate calls
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
            var value = Math.round(bar.value() * 10);
            if (value === 0) {
                bar.setText('');
            } else {
                bar.setText(value);
            }

          bar.text.style.color = state.color;
        }
    });
    sql.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    sql.text.style.fontSize = '2rem';

    vb = new ProgressBar.Circle('#skill-vb', {
        strokeWidth: 6,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
          value: '',
          alignToBottom: false
        },
        from: {color: '#ecf0f1'},
        to: {color: '#F5AB35'},
        // Set default step function for all animate calls
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
            var value = Math.round(bar.value() * 10);
            if (value === 0) {
                bar.setText('');
            } else {
                bar.setText(value);
            }

          bar.text.style.color = state.color;
        }
    });
    vb.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    vb.text.style.fontSize = '2rem';

    php = new ProgressBar.Circle('#skill-php', {
        strokeWidth: 6,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
          value: '',
          alignToBottom: false
        },
        from: {color: '#ecf0f1'},
        to: {color: '#F5AB35'},
        // Set default step function for all animate calls
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
            var value = Math.round(bar.value() * 10);
            if (value === 0) {
                bar.setText('');
            } else {
                bar.setText(value);
            }

          bar.text.style.color = state.color;
        }
    });
    php.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    php.text.style.fontSize = '2rem';

    csharp = new ProgressBar.Circle('#skill-csharp', {
        strokeWidth: 6,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
          value: '',
          alignToBottom: false
        },
        from: {color: '#ecf0f1'},
        to: {color: '#F5AB35'},
        // Set default step function for all animate calls
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
            var value = Math.round(bar.value() * 10);
            if (value === 0) {
                bar.setText('');
            } else {
                bar.setText(value);
            }

          bar.text.style.color = state.color;
        }
    });
    csharp.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    csharp.text.style.fontSize = '2rem';

    angular = new ProgressBar.Circle('#skill-angular', {
        strokeWidth: 6,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
          value: '',
          alignToBottom: false
        },
        from: {color: '#ecf0f1'},
        to: {color: '#F5AB35'},
        // Set default step function for all animate calls
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
            var value = Math.round(bar.value() * 10);
            if (value === 0) {
                bar.setText('');
            } else {
                bar.setText(value);
            }

          bar.text.style.color = state.color;
        }
    });
    angular.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    angular.text.style.fontSize = '2rem';

}


function animateBars(){
    html.animate(0.9);
    bootstrap.animate(0.7);
    materialize.animate(0.7);
    js.animate(0.7);
    uikit.animate(0.6);
    sql.animate(0.6);
    vb.animate(0.5);
    php.animate(0.5);
    csharp.animate(0.5);
    angular.animate(0.4);
}

function deAnimateBars(){
    html.animate(0.0);
    bootstrap.animate(0.0);
    materialize.animate(0.0);
    js.animate(0.0);
    uikit.animate(0.0);
    sql.animate(0.0);
    vb.animate(0.0);
    php.animate(0.0);
    csharp.animate(0.0);
    angular.animate(0.0);
}