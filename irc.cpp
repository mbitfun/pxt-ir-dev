#include "pxt.h"

using namespace pxt;

namespace IRC {

  //%
  void init(){

    display.scroll("HELLO WORLD! :)");

    release_fiber();
	}
}
