yarn build &&
cd build &&
git init &&
git add . &&
git commit -m "update" &&
git remote add origin git@github.com:SuperPowerZhang/react_bill_website.git &&
git push -u -f origin master &&
git remote add gitee git@gitee.com:tammiezhang/react_bill_website.git &&
git push -u -f gitee master &&
cd .. &&
echo https://github.com/SuperPowerZhang/react_bill_website
echo https://gitee.com/tammiezhang/react_bill_website/pages
