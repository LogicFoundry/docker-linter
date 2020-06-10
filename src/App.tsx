import React, { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
// @ts-ignore
import { highlight, languages } from 'prismjs/components/prism-core';
// @ts-ignore
import validator from 'validate-dockerfile';
import checkmark from './checkmark.png';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import './App.css';

const exampleCode = `FROM ubuntu:18.04

RUN apt-get update -y && \\
    apt-get install -y g++ build-essential gcc libc6-dev python2.7 python2.7-dev supervisor cron vim unzip curl wget tree

COPY jdk-8u191-linux-x64.tar.gz .

RUN mkdir -p /opt/jdk && \\
    tar -zvxf jdk-8u191-linux-x64.tar.gz -C /opt/jdk && \\
    rm jdk-8u191-linux-x64.tar.gz

RUN update-alternatives --install /usr/bin/java java /opt/jdk/jdk1.8.0_191/bin/java 100 && \\
    update-alternatives --install /usr/bin/javac javac /opt/jdk/jdk1.8.0_191/bin/javac 100 && \\
    update-alternatives --display java && \\
    update-alternatives --display javac && \\
    java -version

CMD java -version`

function App() {
  const [ value, setValue ] = useState(exampleCode);
  const { valid, errors } = validator(value);

  useEffect(() => {
    console.log('\x1b[33m%s\x1b[0m','Contribute to this project on GitHub at https://github.com/LogicFoundry/docker-linter')
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="Editor">
          <Editor
            value={value}
            onValueChange={setValue}
            highlight={(code:string) => highlight(code, languages.js, 'docker')}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              width: 800
            }}
          />
        </div>
        <div className="Text">
          { valid 
              ? (<img alt="checkmark" src={checkmark} className="Checkmark"></img>)
              : (<p style={{fontSize: '1.75vh'}}>{errors[0].message}{errors[0].line && ` at line ${errors[0].line}`}</p>)
          }
        </div>
        <div className="Copyright">
            &copy; 2020 <a href='https://github.com/LogicFoundry'>Logic Foundry</a> - <a href='https://github.com/LogicFoundry/docker-linter/blob/master/LICENSE'>MIT License</a>
        </div>
      </header>
    </div>
  );
}

export default App;
