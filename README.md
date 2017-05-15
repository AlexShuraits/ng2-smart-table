###Build
```
git checkout master
npm run build:release
git checkout installable
git add .
git commit -am "new release"
git push origin installable
```