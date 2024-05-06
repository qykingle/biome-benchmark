## 测试步骤
- 在webpack-prettier文件夹下，运行node run.js
- 在webpack-eslint文件夹下，运行node run.js

## 测试结果
```txt
hyperfine  --show-output -i -w 2 -n Prettier "npx prettier 'lib/**/*.js'  --write --loglevel=error" -n Biome "npx biome format  'lib'  --write --max-diagnostics=0"
Benchmark 1: Prettier
  Time (mean ± σ):      2.928 s ±  0.015 s    [User: 5.857 s, System: 0.213 s]
  Range (min … max):    2.912 s …  2.953 s    10 runs
 
Benchmark 2: Biome
Formatted 546 files in 76ms. Fixed 463 files.
Formatted 546 files in 65ms. No fixes needed.
Formatted 546 files in 65ms. No fixes needed.
Formatted 546 files in 58ms. No fixes needed.
Formatted 546 files in 62ms. No fixes needed.
Formatted 546 files in 61ms. No fixes needed.
Formatted 546 files in 62ms. No fixes needed.
Formatted 546 files in 59ms. No fixes needed.
Formatted 546 files in 62ms. No fixes needed.
Formatted 546 files in 63ms. No fixes needed.
Formatted 546 files in 57ms. No fixes needed.
Formatted 546 files in 56ms. No fixes needed.
  Time (mean ± σ):     281.9 ms ±   7.4 ms    [User: 703.2 ms, System: 69.0 ms]
  Range (min … max):   271.0 ms … 295.9 ms    10 runs
 
Summary
  Biome ran
   10.38 ± 0.28 times faster than Prettier

----------------------------------------

   hyperfine  --show-output -i -w 2 -n ESLint "npx eslint 'lib/**/*.js'  --no-ignore" -n Biome "npx biome check 'lib' --max-diagnostics=0"
Benchmark 1: ESLint  
Time (mean ± σ):      6.803 s ±  0.082 s    [User: 11.996 s, System: 0.542 s]
  Range (min … max):    6.654 s …  6.916 s    10 runs
 
  Warning: Ignoring non-zero exit code.
 
Benchmark 2: Biome  
Time (mean ± σ):     362.7 ms ±   5.6 ms    [User: 1467.2 ms, System: 75.8 ms]
  Range (min … max):   357.2 ms … 371.8 ms    10 runs
 
  Warning: Ignoring non-zero exit code.
 
Summary
  Biome ran
   18.76 ± 0.37 times faster than ESLint

```