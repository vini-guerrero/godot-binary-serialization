const INT = require('../int');

describe('[get_8 / get_u8]', () => {
  test('should decode 8-bits integer positive value', () => {
    // given
    const buffer = Buffer.from('05', 'hex');

    // when
    const data = INT.get_8(buffer);

    // then
    expect(data).toEqual({
      variant: 5,
      byteLength: 1,
    });
  });

  test('should decode 8-bits integer negative value', () => {
    // given
    const buffer = Buffer.from('fb', 'hex');

    // when
    const data = INT.get_8(buffer);

    // then
    expect(data).toEqual({
      variant: -5,
      byteLength: 1,
    });
  });

  test('should decode 8-bits unsigned integer value', () => {
    // given
    const buffer = Buffer.from('fb', 'hex');

    // when
    const data = INT.get_u8(buffer);

    // then
    expect(data).toEqual({
      variant: 251,
      byteLength: 1,
    });
  });
});

describe('[get_16 / get_u16]', () => {
  test('should decode 16-bits integer positive value', () => {
    // given
    const buffer = Buffer.from('0500', 'hex');

    // when
    const data = INT.get_16(buffer);

    // then
    expect(data).toEqual({
      variant: 5,
      byteLength: 2,
    });
  });

  test('should decode 16-bits integer negative value', () => {
    // given
    const buffer = Buffer.from('fbff', 'hex');

    // when
    const data = INT.get_16(buffer);

    // then
    expect(data).toEqual({
      variant: -5,
      byteLength: 2,
    });
  });

  test('should decode 16-bits unsigned integer value', () => {
    // given
    const buffer = Buffer.from('fbff', 'hex');

    // when
    const data = INT.get_u16(buffer);

    // then
    expect(data).toEqual({
      variant: (256 * 256) - 5,
      byteLength: 2,
    });
  });
});

describe('[get_32 / get_u32]', () => {
  test('should decode 32-bits integer positive value', () => {
    // given
    const buffer = Buffer.from('05000000', 'hex');

    // when
    const data = INT.get_32(buffer);

    // then
    expect(data).toEqual({
      variant: 5,
      byteLength: 4,
    });
  });

  test('should decode 32-bits integer negative value', () => {
    // given
    const buffer = Buffer.from('fbffffff', 'hex');

    // when
    const data = INT.get_32(buffer);

    // then
    expect(data).toEqual({
      variant: -5,
      byteLength: 4,
    });
  });

  test('should decode 32-bits unsigned integer value', () => {
    // given
    const buffer = Buffer.from('fbffffff', 'hex');

    // when
    const data = INT.get_u32(buffer);

    // then
    expect(data).toEqual({
      variant: (256 * 256 * 256 * 256) - 5,
      byteLength: 4,
    });
  });
});

describe('[get_64 / get_u64]', () => {
  test('should decode 64-bits integer positive value', () => {
    // given
    const buffer = Buffer.from('0400000001000000', 'hex');

    // when
    const data = INT.get_64(buffer);

    // then
    expect(data).toEqual({
      variant: 4294967300,
      byteLength: 8,
    });
  });

  test('should decode 64-bits integer negative value', () => {
    // given
    const buffer = Buffer.from('fcfffffffeffffff', 'hex');

    // when
    const data = INT.get_64(buffer);

    // then
    expect(data).toEqual({
      variant: -4294967300,
      byteLength: 8,
    });
  });

  test('should decode 64-bits unsigned integer value', () => {
    // given
    const buffer = Buffer.from('fbffffffffffffff', 'hex');

    // when
    const data = INT.get_u64(buffer);

    // then
    expect(data).toEqual({
      variant: (256 * 256 * 256 * 256 * 256 * 256 * 256 * 256) - 5,
      byteLength: 8,
    });
  });
});
