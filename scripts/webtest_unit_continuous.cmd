REM - continuous unit webtest with webpack-dev-server
REM webtest_unit_continuous.cmd
start chrome ^
  http://localhost:8080/annotated-error-webtest-unit.html
yarn run webpack-dev-server --config webpack.config.webtest.unit.js
