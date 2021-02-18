const { describe, it } = require('mocha');
const assert = require('assert');

const { utils } = require('../dist/gitmojis').default;

describe('gitmojis', function () {
    describe('utils', function () {
        describe('#validate', function () {
            it('valid object', function () {
                const gitmoji = {
                    name: 'art',
                    description: 'Improve structure / format of the code.',
                    emoji: '🎨',
                };

                assert.strictEqual(utils.validate(gitmoji), true);
            });

            it('object with extra properties', function () {
                const gitmoji = {
                    name: 'art',
                    description: 'Improve structure / format of the code.',
                    emoji: '🎨',
                    entity: '&#x1f3a8;',
                    code: ':art:',
                    semver: null,
                };

                assert.strictEqual(utils.validate(gitmoji), true);
            });

            it('objects with only some of the properties', function () {
                const gitmojis = [
                    {
                        name: 'art',
                    },
                    {
                        description: 'Improve structure / format of the code.',
                    },
                    {
                        emoji: '🎨',
                    },
                    {
                        name: 'art',
                        description: 'Improve structure / format of the code.',
                    },
                    {
                        name: 'art',
                        emoji: '🎨',
                    },
                    {
                        description: 'Improve structure / format of the code.',
                        emoji: '🎨',
                    },
                ];

                for (const gitmoji of gitmojis) {
                    assert.strictEqual(utils.validate(gitmoji), false);
                }
            });

            it('objects with all properties but wrong property types', function () {
                const gitmojis = [
                    {
                        name: 1,
                        description: 'Improve structure / format of the code.',
                        emoji: '🎨',
                    },
                    {
                        name: 'art',
                        description: 1,
                        emoji: '🎨',
                    },
                    {
                        name: 'art',
                        description: 'Improve structure / format of the code.',
                        emoji: 1,
                    },
                    {
                        name: true,
                        description: 'Improve structure / format of the code.',
                        emoji: '🎨',
                    },
                    {
                        name: 'art',
                        description: true,
                        emoji: '🎨',
                    },
                    {
                        name: 'art',
                        description: 'Improve structure / format of the code.',
                        emoji: true,
                    },
                    {
                        name: 1,
                        description: 1,
                        emoji: '🎨',
                    },
                    {
                        name: 1,
                        description: 'Improve structure / format of the code.',
                        emoji: 1,
                    },
                    {
                        name: 'art',
                        description: 1,
                        emoji: 1,
                    },
                    {
                        name: 1,
                        description: 1,
                        emoji: 1,
                    },
                    {
                        name: null,
                        description: 'Improve structure / format of the code.',
                        emoji: '🎨',
                    },
                ];

                for (const gitmoji of gitmojis) {
                    assert.strictEqual(utils.validate(gitmoji), false);
                }
            });

            it('empty object', function () {
                assert.strictEqual(utils.validate({}), false);
            });

            it('no arguments', function () {
                assert.strictEqual(utils.validate(), false);
            });

            it('undefined argument', function () {
                assert.strictEqual(utils.validate(undefined), false);
            });

            it('null argument', function () {
                assert.strictEqual(utils.validate(null), false);
            });

            it('string argument', function () {
                assert.strictEqual(utils.validate('art'), false);
            });

            it('array argument', function () {
                const array = [
                    'art',
                    'Improve structure / format of the code.',
                    '🎨',
                ];

                assert.strictEqual(utils.validate(array), false);
            });
        });
    });
});
