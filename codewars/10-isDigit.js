function digit(string) {
    let result = false;
    let num = Number(string);
    if (Number.isFinite(num) === true) {
        if (num >= 0 && num <= 9 ) {
            result = true;
        }
    }
    return(result);
  }



  /*
  assert.strictEqual(''.digit(), false);
    assert.strictEqual('7'.digit(), true);
    assert.strictEqual(' '.digit(), false);
    assert.strictEqual('a'.digit(), false);
    assert.strictEqual('a5'.digit(), false);
    assert.strictEqual('14'.digit(), false);
  });
  */