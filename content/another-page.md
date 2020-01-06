---
layout: page
title: 'Example Markdown page'
---

```cpp
#include <iostream>

int main() {
  std::cout << "Bonjour, tout le monde!" << std::endl;

  return 0;
}
```

:::Is this fun or what?:::

---

```rust
let guess: u32 = match guess.trim().parse::<u32>() {
  Ok(num) => num,
  Err(_) => {
      println!("Please enter a number!");
      continue;
  },
};
```
```d
import std.algorithm;
import std.conv;
import std.exception;
import std.path;
import std.stdio;
import std.typecons;

import clid;
import clid.validate;

private struct Options {
	@Parameter("pattern", 'p')
	@Required
	string pattern;

	@Parameter("file_path", 'f')
	@Validate!isFile
	@Required
	string file_path;
}

void main() {
	File in_file;
	auto options = parseArguments!Options();

	writeln("You entered: pattern: [", options.pattern, "]",
	                  " file_path: [", options.file_path, "]");

	// cli-d's isFile validation method effectively overrides this,
	// but I am leaving this here just in case.
	try {
		in_file.open(options.file_path);
	} catch (ErrnoException e) {
		writeln(e.msg);
		return;
	}

	// Convert the contents of the file into an array of newline-delimited strings
	auto contents = in_file.byLine(Yes.keepTerminator);

	foreach (ref line; contents) {
		if (canFind(line, options.pattern)) {
			write(line);
		}
	}
}
```
[![A dope ass advertiser-friendly video](http://img.youtube.com/vi/IndDk5xtye0/0.jpg)](http://www.youtube.com/watch?v=IndDk5xtye0 "Si K. K. o Mode")

CLICK THIS IMAGE TO ASCEND INSTANTLY


[That's cool! Okay, take me back home.](/)
