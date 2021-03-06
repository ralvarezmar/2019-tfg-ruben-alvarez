const path = require('path');

var configWebsim = {
  entry : {
    websim: path.join(__dirname, 'simcore/websim.js')
  },
  resolve: {
    extensions: ['.js']
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: "/node_modules/",
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  mode: 'development'
};

var configScratch = {
  entry : {
    editor: path.join(__dirname, 'Scratch-editor/js/editor.js')
  },
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    host: '0.0.0.0',
    port: '8000',
    inline: true
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: "/node_modules/"
      }
    ]
  },
  mode: 'development'
};

var configJavaScript = {
  entry : {
    editor: path.join(__dirname, 'JavaScript-editor/js/editor.js')
  },
  resolve: {
    extensions: ['.js']
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: "/node_modules/"
      }
    ]
  },
  mode: 'development'
};

var configPython = {
  entry : {
    editor: path.join(__dirname, 'Python-editor/js/editor.js')
  },
  resolve: {
    extensions: ['.js']
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: "/node_modules/"
      }
    ]
  },
  mode: 'development'
}

var configJavaScriptCompetitive = {
  entry : {
    editor: path.join(__dirname, 'Competitive-JavaScript/js/editor.js')
  },
  resolve: {
    extensions: ['.js']
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: "/node_modules/"
      }
    ]
  },
  mode: 'development'
}

var configScratchCompetitive = {
  entry : {
    editor: path.join(__dirname, 'Competitive-Scratch/js/editor.js')
  },
  resolve: {
    extensions: ['.js']
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: "/node_modules/"
      }
    ]
  },
  mode: 'development'
}

var scratchOutput = Object.assign({}, configWebsim, {
  name: "ScratchAPP",
  output: {
    path: path.join(__dirname, "Scratch-editor/build/"),
    filename: "[name].bundle.js"
  }
});

var jsOutput = Object.assign({}, configWebsim, {
  name: "JavaScriptAPP",
  output: {
    path: path.join(__dirname, "JavaScript-editor/build/"),
    filename: "[name].bundle.js"
  }
});

var pythonOutput = Object.assign({}, configWebsim, {
  name: "PythonAPP",
  output: {
    path: path.join(__dirname, "Python-editor/build/"),
    filename: "[name].bundle.js"
  }
});

var jsCompetitiveOutput = Object.assign({}, configWebsim, {
  name: "CompetitiveJavaScriptAPP",
  output: {
    path: path.join(__dirname, "Competitive-JavaScript/build/"),
    filename: "[name].bundle.js"
  }
});

var scratchCompetitiveOutput = Object.assign({}, configWebsim, {
  name: "CompetitiveScratchAPP",
  output: {
    path: path.join(__dirname, "Competitive-Scratch/build/"),
    filename: "[name].bundle.js"
  }
});

var teleopOutput = Object.assign({}, configWebsim, {
  name: "TeleopAPP",
  output: {
    path: path.join(__dirname, "teleoperators/build/"),
    filename: "[name].bundle.js"
  }
});

var scratchEditor = Object.assign({}, configScratch, {
  name: "ScratchEditor",
  output: {
    path: path.join(__dirname, "Scratch-editor/build"),
    filename: "[name].bundle.js"
  }
});

var jsEditor = Object.assign({}, configJavaScript, {
  name: "JavaScriptEditor",
  output: {
    path: path.join(__dirname, "JavaScript-editor/build"),
    filename: "[name].bundle.js"
  }
});

var pythonEditor = Object.assign({}, configPython, {
  name: "PythonEditor",
  output: {
    path: path.join(__dirname, "Python-editor/build"),
    filename: "[name].bundle.js"
  }
});

var jsCompetitiveEditor = Object.assign({}, configJavaScriptCompetitive, {
  name: "CompetitiveJavaScript",
  output: {
    path: path.join(__dirname, "Competitive-JavaScript/build"),
    filename: "[name].bundle.js"
  }
});

var scratchCompetitiveEditor = Object.assign({}, configScratchCompetitive, {
  name: "CompetitiveScratch",
  output: {
    path: path.join(__dirname, "Competitive-Scratch/build"),
    filename: "[name].bundle.js"
  }
});


module.exports = [scratchOutput, jsOutput, teleopOutput, jsCompetitiveOutput, scratchCompetitiveOutput, scratchEditor, jsEditor,jsCompetitiveEditor, scratchCompetitiveEditor, pythonOutput, pythonEditor];
