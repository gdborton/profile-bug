# Test repo for highlighting a bug in webpack's ProgressPlugin

### Reproduction steps

```
git clone git@github.com:gdborton/profile-bug.git
cd profile-bug;
npm install;
npm run build
```

### Expected output

There is a plugin for optimize-chunk-assets in the webpack config. It doesn't do anything, but it does take 10 seconds to complete (more or less). I'd expect this to increase the amount of time logged in the `chunk asset optimization` portion of the profile output.  Instead I'm seeing it in `additional asset processing`, which should be recording values for `additional-assets` plugins.

Should see something like this...
```
...
1ms additional asset processing
10000ms chunk asset optimization
...
```

### Real output output

```
~/code/profile-bug 21s
❯ webpack --profile --progress                   
8ms building modules                                                               
1ms sealing
3ms optimizing
0ms basic module optimization
0ms module optimization
1ms advanced module optimization
0ms basic chunk optimization
0ms chunk optimization
0ms advanced chunk optimization
0ms module and chunk tree optimization
1ms module reviving
0ms module order optimization
0ms module id optimization
0ms chunk reviving
1ms chunk order optimization
1ms chunk id optimization
1ms hashing
0ms module assets processing
5ms chunk assets processing
0ms additional chunk assets processing
0ms recording
10001ms additional asset processing
1ms chunk asset optimization
0ms asset optimization
6ms emitting
Hash: 3a38399e8a7852e28dff
Version: webpack 2.2.1
Time: 10060ms
  Asset     Size  Chunks             Chunk Names
main.js  2.51 kB       0  [emitted]  main
   [0] ./src/main.js 0 bytes {0} [built]
        factory:18ms building:6ms = 24ms
```
