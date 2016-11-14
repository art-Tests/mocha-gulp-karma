# mocha-gulp-karma
單元測試練習
參考自[https://github.com/hcnode/mocha-should-karma-examples](https://github.com/hcnode/mocha-should-karma-examples "https://github.com/hcnode/mocha-should-karma-examples")

----------
## 如何執行 ##
1. npm install
2. bower install
3. gulp


## UnitTest ##
1. 報告：./report/UnitTestReport.html
2. 設定：./gulpfile.js

## Coverage ##
1. 報告：./report/coverage/chrome/index.html
2. 設定：./karma.conf.js



## Memo ##
gulp karma發生錯誤出現TypeError的時候，可能與karma的一個lib有關
[Karma middleware causing bug for non-english windows environment](https://github.com/karma-runner/karma/issues/1994 "https://github.com/karma-runner/karma/issues/1994")

於\node_modules\karma\lib\middleware\CommonJS.js當中的setNoCacheHeaders
有一段是response.setHeader('Expires', (new Date(0)).toString())
這一段會因為使用者電腦的地區設定不同有可能返回中文字或其他國家特殊的字體
造成接下來的程式無法解讀，目前我為了測試方便是將該行註解調即可順利運作
在Win10會發生這樣的情況，但是Win8.1似乎就沒碰到。





