# @blankapp/uiexplorer

<img width="200" height="200" src="http://blankapp.org/logo.png" alt="@blankapp/ui" align="right">

Table of Contents
=================

  * [Introduction](#introduction)
    * [Features](#features)
    * [Live Demo](#live-demo)
  * [Quick Start](#quick-start)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
    * [Run the app](#run-the-app)
  * [Discussion](#discussion)
  * [License](#license)

Created by [gh-md-toc](https://github.com/ekalinin/github-markdown-toc)

## Introduction

*Coming soon*

### Features

- Coming soon


### Live Demo

[![Live Demo][live-demo-image]][live-demo-url]

[live-demo-image]: http://blankapp.org/assets/images/live_demo_screenshot.png
[live-demo-url]: http://blankapp.org/docs/#Live-Demo

## Quick Start

### Prerequisites

Before starting make sure you have:

- Installed [Yarn](https://yarnpkg.com/)
- Installed [React Native](https://facebook.github.io/react-native/)

### Installation

```
$ git clone https://github.com/blankapp/ui.git
$ cd ui && git checkout develop && cd ../
$ git clone https://github.com/blankapp/ui-pro.git
$ cd ui-pro && git checkout develop && cd ../
$ git clone https://github.com/blankapp/uiexplorer.git
$ cd uiexplorer
$ yarn install
```

### Run the app

- Running on Android

```bash
$ yarn run-android
$ adb reverse tcp:8081 tcp:8081   # required to ensure the Android app can
```

- Running on iOS

```bash
$ yarn run-ios
```

- Running on Web

```bash
$ yarn run-web
```

## Discussion

If you have any suggestions or questions about this project, you can discuss it by [Gitter](https://gitter.im/blankapp/ui?utm_source=share-link&utm_medium=link&utm_campaign=share-link) or my private wechat.

![](http://blankapp.org/assets/images/wechat_qrcode.png)

## License

```
MIT License

Copyright (c) 2018 JianyingLi <lijy91@foxmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
