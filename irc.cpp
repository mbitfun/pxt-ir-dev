#include "pxt.h"

MicroBit uBit;

using namespace pxt;

namespace IRC {

  //%
  void init(){
    uBit.init();

    uBit.display.scroll("HELLO WORLD! :)");

    release_fiber();
	}
}
