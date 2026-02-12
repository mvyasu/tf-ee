@echo off
:: Start the browser
start chrome "http://localhost:8080"

:: Use 'call' so the script returns here even if Quartz crashes
call npx quartz build --serve

:: This line will now be reached even after an error
echo.
echo -------------------------------------------------------
echo  QUARTZ HAS STOPPED (OR ENCOUNTERED AN ERROR)
echo  Press any key to close this window...
echo -------------------------------------------------------
pause >nul