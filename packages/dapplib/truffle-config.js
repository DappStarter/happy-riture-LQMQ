require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture strong cruise spike purity gown light army gather'; 
let testAccounts = [
"0x56aab020c3e51f363759490964e6570a3458abd45b30379bb54f55db9bd86ab9",
"0xf8a9084a5976c3784a68e4e129446927eb31fd3843cef69153d022cc5e5dd44a",
"0x9bbbe3b322b1122207d15ff5c51ae20ed85065609102082097cf5f2a23b5b0c7",
"0xfce12543e8539430918b2ef83751e080d9abaa015da5325453a4dd5621ae82af",
"0x8c981bbbd1d65f71b63f245012639d237878c1a7c21a21bca75474f0c257f0d2",
"0x69c49a74207265ebdcb4180830b97372d0ac50a22783b56556019bb83621054b",
"0xee5ce9f10e46b4421dce5a660d40a18d7eac8c9ca72d40199ac3a261f6555a2a",
"0x12a4b8af9d54c2f7555312e9343465eaf9186512689a289468f01a2e4d03d743",
"0xca7bd8fb2dbe13d1a29c2716c4bfdcc8179280c5c8ce1948190b2614f454080c",
"0xe7ce77c137b1e3d3fec72cb9159190a0b97b8d2e9a780e581e5e7b190be217c6"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

