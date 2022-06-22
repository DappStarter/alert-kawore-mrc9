require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe stove radar tank unusual gown light army gauge'; 
let testAccounts = [
"0x5ee8bb2626267c87854519306b7c577bff2996f1d90bfe620acd0f38364a7ecf",
"0xff355a8991c952bde9b67d16a9390f6b4bdd4ae83a794a1681662885cd7165b7",
"0xd0937cc3409420880994ee886d4c6819262239282a15cc0d2ec31005e393c879",
"0x59ceed8775ba6015871df2fac19f0bbd7cab261ab4ac9fe42ddecb9b8a878a79",
"0x598d002832fe7e76ec3d009f5baed3c1bb807839b772f6038dec9a32c2b4ab6a",
"0xf354eae9ebfdecb54de9a11f97b55c1e2c0e213c746060ec5caf116c56555db3",
"0xf753cd62126481082e523270ec3601af5e820336cccf37272ae543f38bd68294",
"0x73a677c161af3000f2b3cabc184a042c69ec99e877c0408dc52a7c627a371bb5",
"0xa6bd949b8fc0dd824e8117e83640eff5434dc57236ccecfd8329f39e82433f37",
"0x16c5ed1c183c6e6c8c5d6de22903f65faae3c3823d511b1452e5001f0242524a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


