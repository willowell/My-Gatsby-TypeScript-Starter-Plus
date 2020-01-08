---
layout: page
title: "Another Page"
date: "2020-01-08"
excerpt: "ASCENSION!!!!!!"
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

CLICK THIS VIDEO TO ASCEND INSTANTLY

<iframe width="560" height="315" src="https://www.youtube.com/embed/IndDk5xtye0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>




[That's cool! Okay, take me back home.](/)
