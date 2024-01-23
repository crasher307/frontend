homePath="`pwd`/node_js"; clear
cd $homePath && npm i && clear
read -p "Номер урока: " lessonNumber; clear
nodemon "$homePath/lesson_$lessonNumber/lesson.js"