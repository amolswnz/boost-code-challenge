describe('Cipher text descrypt', function () {
  it('should decrypt text with cipher 1', function () {
    expect(descryptText('zodvqukgwefbyitmrsplhacxnj', 'dzs')).toEqual('car');
  });
});

describe('Cipher text descrypt', function () {
  it('should decrypt text with cipher 2', function () {
    expect(descryptText('xipmuzfkbrlwotjancqgveshdy', 'skd qj qucbjvq?')).toEqual('why so serious?');
  });
});

describe('Cipher text descrypt', function () {
  it('should decrypt text with cipher 3', function () {
    expect(descryptText('oephjizkxdawubnytvfglqsrcm','knlfgnb, sj koqj o yvnewju')).toEqual('houston, we have a problem');
  });
});
