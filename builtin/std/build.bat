clang++ -Wall -std=c++20  -fmodules-ts -Xclang -emit-module-interface -c core.cpp -o std.core.pcm
clang++ -Wall -std=c++20  -fmodules-ts -Xclang -emit-module-interface -c memory.cpp -o std.memory.pcm
pause
