@echo off
REM ==============================================================================
REM Tool: Git Upload Source
REM Description: Adds all changes, commits, and pushes
REM ==============================================================================

cd /d "%~dp0"
git add .
git commit -m "%date% %time%"
git push --set-upstream origin master
git push github master:main
