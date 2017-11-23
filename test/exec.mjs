#! node --experimental-modules
import test from '../test/test.mjs';

if (! test()) {
  process.exit(1);
}
