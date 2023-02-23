'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c54891e41c84e73ee8cfcd0065419f91",
".git/config": "af57529e7677c553fd960bd9197796c7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a92088f0dd01fa34d0fbe4113e16b7c8",
".git/HEAD": "dfebbe193e255e26c1b45fa445375b01",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "90b1c0e7fe9c136fc1877f2fdc222316",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bde1f43b8ea8aafba0f160d5844f21f2",
".git/logs/refs/heads/main": "ef7e59380a4e016e6deefb082c2b2bcb",
".git/logs/refs/heads/release": "467402fea47aa9b8cc6070d2cea993cb",
".git/logs/refs/remotes/origin/main": "703decf3704e25ecab95590c3c0193bb",
".git/logs/refs/remotes/origin/release": "52c9ca445f585424eb4f6bf7e344c3bb",
".git/logs/refs/remotes/origin/stable": "9fb9c200f36eba4847f6f79e60043edc",
".git/objects/00/17ef842c8410659e96e4ac3cff7c43a2378b2c": "94a5cff9dafe1305b9ae9ea976ac9887",
".git/objects/00/f1add20f7d65b48ffaac54b8e9a3ffea600a92": "205a858e7be08a87caa7877c4eeef898",
".git/objects/02/8a8af45ead5b3d6fe599369cf8c31e086a2c63": "bfc72df258ebb9d3442338b5bddd52d0",
".git/objects/03/8143c7145144094f87c267d2f95455539274c5": "71f1b1f9e098e2d434831f808a937d19",
".git/objects/03/fa348c7cefda5fc1c33b912af02916a901c7b6": "6825bc77f5bc67c88a266732afc3f5df",
".git/objects/05/56f03e95f1e2f94b4c84b601257b2b6b91c755": "4d680109cf20770e013efd0850343601",
".git/objects/06/31dd9df110dae957c36895937f6b4a8c730a1e": "b856570f32bd68f0ead8e5eaf1d261e2",
".git/objects/06/adad4543e0c01b9652f8d0044b9fa250c913da": "7c63a4816ced71d49d075efaa242d626",
".git/objects/07/07a009729b16838b4a1471af0b300c2f63dbfb": "1fe7c7435b5edd28f8fbb48519da193a",
".git/objects/07/234801ff3e5d84fb1bb9e100c1b55081dba472": "a60b4d28fd43fb4f845ef51e9ab072b4",
".git/objects/08/4e3c9ffedc062c1e2736fcad23b9827a3b20aa": "74997efa4aa7679a0483e9fc93402a39",
".git/objects/08/f0d9f034f1dad0806bcc998e497fe674accebb": "266d05a786e4784f1792a8a961277487",
".git/objects/0e/c9834b8bef27e21f3fdd58fc645523e12839fe": "b4c8a5b52d70d89e41505850b417031e",
".git/objects/18/d60861f10dd1f45bb7b4c0d038f271dc0ce7bd": "aae0b26bc73192202085c05636634fb7",
".git/objects/1a/c395cb7a3d1b6b31b49436ecdd5befce0f11b6": "56c3197941e506e01984f5ff3cdceab9",
".git/objects/1a/f43993c54a01d64b96cd355c56e5de795f5641": "6bbdafccb7e49b8240d6c2c9ace62205",
".git/objects/20/53aecebcd0f07bde3a0545d2be4725c3636887": "0dd0651f280c4f5195364338ecad7d85",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/7864f2528ece7e1b477b49f139813c5828fe69": "c43472dc7e183b6629ebabe266332dc7",
".git/objects/25/809703d52ba01a0da218e585e273ab31e5dd25": "462ab80355d2e1dde848986172969d95",
".git/objects/25/9767ec107f0fca5b118f82844c0bb10e27b6ef": "04a1dc7eab730b02848c879b3e737436",
".git/objects/27/cea7aa665226ad278840d342fe929ba5299615": "764fe2e72ea3aa765f7b780d88085aa9",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/28/c994fd491d115bff60d8b89abaf03fbe9f0a85": "762d898dcf005c540fbaaffb8d120037",
".git/objects/28/fd5c4a32c515409e71d6f97890f631fc64afa0": "f062ea30d9f787ca9e42abcd43712d07",
".git/objects/2b/ead05f781fef47e9255747ce18353f5f323269": "83555feeb3600638dd32036a75d0a404",
".git/objects/2d/394aeb1158a4c27ac85276ed4291251a110317": "90559325b2d454be6504c3e970cd0182",
".git/objects/2d/cee18344756e2a209ac912cdca4f5ce07df752": "49360c73e757dd412b1121dc0f5d08cc",
".git/objects/30/307ebb67780da6fe608533936a953fc2a9604b": "7d32e0d6a709efda44aae41f3ca04d7e",
".git/objects/31/17ec996312e4b6a511658c2fd38a501f523d6b": "b4d1e5c74dca3b9b41daca0f2d99dd76",
".git/objects/32/22ac68f3e998a42d177c02921d68f49ff8ab08": "775b8c99239f254ec80d17e10ab6b8f8",
".git/objects/33/4a1bef98f130e4f8b1998537f2c9a908d47526": "e4a88383a48c3e94ddf8bf9952bab119",
".git/objects/33/d758446ddf6346b49daee09405f7af3e714c05": "8169fb4cbf1b8988fcf70e0649c8b5af",
".git/objects/35/14d11e71f1ffef674d6b6136ae51a029d63bdc": "0419d1bb6f60aa67a7a5d8f8ad5eb876",
".git/objects/35/b90075ca3339494b9cdb665a18f321ab65020c": "9bd4f302623890e9507ca67ef7aea13b",
".git/objects/36/0e2f98cd8169fed24e8bb51147333cb6878f11": "c72a6f828665cf611c76b78dc5f742ee",
".git/objects/36/989897f6f80ad2193dce8eab8acb67c4e2c858": "497ec478d250e7e0909ccd99baf95219",
".git/objects/37/3aa17844cee472f384064b77a084096a43648e": "f555bed9185f51a5e133691d58323449",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/e32d3d0cc8457470cb1b9817b2af979df58abd": "18673977ec57fa41664fac57fd550f4a",
".git/objects/39/1c7d4ec7e04b5e180e891142bd19931493630b": "dba22866ce083aab3716787dc84e1c65",
".git/objects/39/6aa4d71ab70ff6e6c2747edd9af66379e5a281": "4214e1eedf79a0e624130b3318a3e3c2",
".git/objects/3a/f83a02acdca7260fc23cc4834a53775cf4bcde": "8a700b1c411f456d8216ce72f5ed84f6",
".git/objects/3b/e28458fbf18541143648eca7b597886782e2c9": "511021e4e4f63588becb5f45821cbf6a",
".git/objects/3f/38d33bf700d217311db223a70d81311dd07796": "aed88c5d14d6e5fe121b382eae8c02b4",
".git/objects/41/001ab6459f63bfbfeada010839b4dc6e5e8ffb": "9951f13da230889767a84a6deb16f11b",
".git/objects/43/59b69338ee3c0fd724aa0b5bf68f071d8d890e": "8ca98bbfd9af26df7ba7e25084c2e97e",
".git/objects/44/80061745029758de32457dec7f11cee6c8d040": "7cd3d55c872935171960f69ea342cd22",
".git/objects/44/f6b112f6f52071efb8d693ea942c9fbd59e93b": "a726cb56e1b6ed45d298f1cd8581e256",
".git/objects/45/2f9c20e2e823a737ea2d1bf15bbad3f672814d": "23b6b4b4dbabeb15d7f9a0a0dd1ed39c",
".git/objects/47/2016192fed54d6b705071e49aca8bcdbc7eb48": "77ee003633529d512d67320dfabee6a6",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/49/aee19083d383f16b83813978d30102ec5a73ec": "374dec85e27dbddd5899e842e655714c",
".git/objects/4a/142b0b31b30bafbfa50a85378c62a3f0958401": "c422e271774890145500fa9ab8cd10b1",
".git/objects/4e/644261ba60fdcb81c086413f116acf519d4b00": "3cba227c848211b1d605f606dc1a51d2",
".git/objects/4e/994424c4dffd427bf8dcb8b781d901d9949186": "5fea70e93cc1685fe9556b0420add26c",
".git/objects/4e/eeef89c61e1026c9a449095364b30080953a15": "d9fc4293868a70a299abd4bd89722da2",
".git/objects/50/0373ed84b653571a9627a6d8df9fc9e939aef6": "84afb78461b1456ac0ab5ad54112fdc0",
".git/objects/52/e4634b705b4a040b63dbb4134aa18e3a5790bd": "78ed2921691e2a38966e478d5b9a3dee",
".git/objects/53/191d01817d14ee5691e951689851ab14b656d9": "7bb368e3fdc252ee539d74d263ab90da",
".git/objects/53/b6e690221c303f41e29d2e166529287d309e32": "f31d2370f75af6a10088f282a454a45b",
".git/objects/55/2d5f1fdfec804c70da7dbfe13529164554eb28": "36b2a750e97622987b5192cf7729d117",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/57/022b2a438e1397074166df6c04ae20262ba4c9": "c780d6dd7baeb9e77ffa69e21141539d",
".git/objects/59/3a6bc004f217244584ccd664e6b38f71bfdf3a": "9520966d7c5f1def9631f1bf43078168",
".git/objects/59/7427b834faa069b1070877438e058fef16905f": "a06733012d3c0b0d6f4f46682b06e74c",
".git/objects/5a/6ef2dee811f7c19ae330b65c2304afb0b63bb1": "e4561f2d236fde351fad0ac575c3a18f",
".git/objects/5d/406c841e0b210835f1a953d2d8c7875dac88d5": "49ee6d2e503c8945468e3a2040a860df",
".git/objects/5d/f5cd8d13c64fe3a46b884d94a1e4136c8f1483": "194463008b3d1b18dea9d9a72b698ac3",
".git/objects/5f/2ea1f93168f47e7cf34f2aa28a7a3c06df92a2": "9ddde4770799700bec96908af153483b",
".git/objects/5f/d2d8cf579865b263a6fad200d7cfbffab00da0": "44da9d22645990bbc16173637acc1878",
".git/objects/61/1a572104f6d7257a7787b5864b232b60df7060": "5aace9f4fd9ec54b1ab26c2ce558aaf2",
".git/objects/61/37d65ecc1ad3eee3c6e856ae547ef5aa1e9b11": "7dd8097104101249a582cbda6320abe5",
".git/objects/63/048a41c6fe19e0c7d09090c8303e34f6be5a33": "8e93c1f6c6b1c6d3de663351618ffd1f",
".git/objects/65/28be8171e180182658397532054a203f8d9960": "f71389924c3d9a8e55fcfed66c56a707",
".git/objects/65/4f557ae317334024b48346c383ce5309c77734": "2792300b53604b6c8236f5908b3531f2",
".git/objects/66/49f45348dfe418fda0e5d81e5aa411db70b930": "71e7d4261fe5b52e0284848186a087ac",
".git/objects/67/78d18f5ea1cee8878075221cc6988d8dd42094": "cfdfe8a60696689d7f2657e6d115517e",
".git/objects/69/00ccc7a6cbc58f5b83d6d91d99f66905891653": "c91a8a07e6da7215757a7662f855746b",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6a/5f47ab451fea83f70c681b33a94f05fbe898af": "75b3ba2a9ab8a6fbddddb8d074150147",
".git/objects/6c/6981025edd1ec35ac0bcf1319bc50be333ae7d": "f17ca92f544578278613ff301923da3b",
".git/objects/6c/7dd33a6d0cd544cf5f1441bd4bbe55f37da780": "e7ebfcece488c5ce5185e0552a0189af",
".git/objects/6d/342fbb69fae2882b4acf211ec2ac717501b7e5": "17c00cb5b50b7716e846cd7f95331e85",
".git/objects/6d/6be44a50e23de7cc217829ecad109eb712b73e": "29e56892240326dbf1d064361a590aec",
".git/objects/6f/9f72d9af16d35a90b1794c23e2b2775e395061": "ea281186584347ab5e024ac6052598c7",
".git/objects/70/404080769617a332d1d8a559d4a92b4a7815df": "00bf24183d0be198d0cc09d4616a8338",
".git/objects/70/83b51f5d93760a88ba8e5d5450babcf08f881f": "8e9ae90b5e18a33e655530d3aa039717",
".git/objects/70/977a6b06706f8b062488a2302979710d8310c4": "b7994a20531d6a4f99c2c9155fc762db",
".git/objects/70/ef2a2b7855df20d670c3bf602ed9ed4ffdaa34": "72d009fbe61e870a86c6ce68c7f2b2fc",
".git/objects/72/a2060c3dc57f0c528549e425223e5ca02f095c": "9e4629e314b85051621a2983571fab8f",
".git/objects/73/6c5ace86997502e1bcf733fb9395600a540309": "1642cfd310e1d5be4d13c451a6184309",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/78/61d054c1d902c302758dc8757de6309bc35b20": "1a18e5411804e0ba5ad803aa3249c280",
".git/objects/79/5a00c49b6e24296126eeb1091bf95c8ed6fb12": "3270f4225767ce596e9f97d8aed80abf",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/07455257f34173a86afabe8d9adf4fe118d3df": "de537dadd1ecbdebc825e2565a126462",
".git/objects/7c/c049a89fc2779837657df37e76c9657dc37dae": "22ea3666f81f227ab57407ee3fa436a3",
".git/objects/7c/ca3cbd52cff133eb323eaec5b8410c5e37bb9f": "7323f19366bb207165dd2a7cdb460398",
".git/objects/7e/05e2aaa4e07b7a69dd980a0dceac103075e660": "243f4126f29052276d25552577a22b2f",
".git/objects/7e/99d5404e5b9322c853c5b9695d969010c990f1": "d0355541676b89b09a209a1b4fe7285d",
".git/objects/7e/f1874c243154b3ac2df546d968f776f549cd93": "62882ffc92c7a01047d00d6738acfb77",
".git/objects/7f/2460e16e3f535861615cdbf808f9a04370ed27": "d027783ebb9eb636d74a438bb427b5bb",
".git/objects/7f/98cdb9e874648e58fc180b00c16186d6f2802d": "c16d34d8b14092f01ba54c44d6890254",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/85/44d131c546ba0712d0125f7f93bc2e7f6cd487": "4f6cbc74a9ac3585aebded86ae017644",
".git/objects/86/07f1c35a0a6dab593f44702b4f54e9ce53eafe": "e99f9179d29c55ac816f5db00de8049d",
".git/objects/86/f45524703528527e56d8aae7dc224d71ef40aa": "3f5bd8ddad04a94432008e9e946d9215",
".git/objects/87/d1a704de57158486097dfecbc211642fb85b74": "1ac88805b896ac63fce37e1a43a68249",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/95fe9d159aac2212ea09b8117fe033e70c2cbe": "c5a0be40dbfac1fb66d0d2518e1b6bc3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/866b2f993390d9aebe95e2776ce9e6b18e9154": "1593cd21f4ac7d08981b6a48e1aa33d2",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/c39e2097692a4431e35f4a9d960e711c04122e": "747db451f1f86e3471aff8fb82fab8fd",
".git/objects/8d/c63d972a8d33266e85707aef8db79e7deabdef": "8731976d4b2bbf69dd7016529fe9bbd6",
".git/objects/8e/098fd3a7f245abd7dbc055fb4c334c4ec360a3": "1c68131f373c8fa2cf3cb92eb7c73b42",
".git/objects/91/de3649f5ad60fd7b60c1e5d6c896bcdf6ad242": "573ef392a49923a95f37dc9407d9688b",
".git/objects/92/5641045cfe0c1960607898a7b156fe3bc3e6ab": "facaed754fa444a5d57712827914b472",
".git/objects/92/88057b8257a74ce63966fb5ad9dcfb87be378f": "65495b12b53b2ea86d911368d428ef24",
".git/objects/93/e190d25b0ce237342e85ce54987cd336eff4c4": "45ecba645a2d85bf755daefbafd6628f",
".git/objects/97/b1a330e9b9527940d30334555b688d6db5dfd3": "488691fa59af1c75bdd128a5e331f8cb",
".git/objects/97/d8f93f3aeb2e5d44e129f9345249dd2db8f128": "3f8bf75c6d9b22ea5afbcb0552ce6c88",
".git/objects/9b/22cccaef9b49e39845f7ae1a3dd15faf0cab72": "d30975eeaded006d0c1832ce9235ded4",
".git/objects/9b/80f2e441b273c8632c856624edd11f6391f21f": "3c4fcce518dbd926652b6f7eb1d7ada3",
".git/objects/9e/7b19ba0de3c37bb7fed0e8c13a9bbda33f5c61": "ba1913ac3bc78b14ea5e8f3e22daf23d",
".git/objects/a0/0387c38517e69f90bcab7bdcff339d30fcce2d": "a9d538b1dce50190484709da79cb4d2f",
".git/objects/a0/2ac04b6cca2290ed207729bb5b2b547b408574": "adfcd59bc0e94a1b55ef635caa07c041",
".git/objects/a3/1ca9ce39f7968d66eaf06db2ee9522941be449": "7fdac1385a70bf69b5faa0d7f369ccc7",
".git/objects/a5/e7edd33919e3b9975182603fc833534c752fba": "e191ebedc1836d5c2a8cded7c46a642e",
".git/objects/a7/8729c92ddc4d295d7fc0732935a2ec45630518": "1a5fea7e63514a7ecab5495d7437445d",
".git/objects/a8/5f320b6f410d4564eb29e72ff9bc0cd0d38a98": "e6a42aa9d9f974016f35fbb42b703f5e",
".git/objects/ab/cd404e8d421a41e208121a2436f656437eb089": "b3efae7f1468024fc29cbe41a8b507a2",
".git/objects/ac/4c1a946dca29597f352ef0de5f0fca10b1a4d2": "4cf6154baac94b04642d4741d49337cc",
".git/objects/ac/4e23b47670526289f45e0f1125b1d700995c83": "9f6028f444267ddfdd7539953d2c8959",
".git/objects/ae/289a81e8d59c9364428ea3bce85ba3354c7430": "fec42fe9a6862daf864deedaa4a9ead0",
".git/objects/ae/f36e485f4bdff24ecabd283532cf050aca86de": "dca87742d66fa16daaf23b43941fb12a",
".git/objects/b3/39e7c9ba073cd096293bd05dccbc6e08c723a0": "f0249343fd6b05d1943f32488f5ebad8",
".git/objects/b3/3a573ad26d13d64709daf70d360a7d90d52242": "a75839d740efdbf49cc80c5e42711305",
".git/objects/b5/0216109b89e2fbe212b6bf089a748c2c137fff": "a500d5a99f5adff0dfe2771d64138d30",
".git/objects/b6/8a3ab0a5d638c7497ee6e2078bf73598f19f49": "4248d327c0e842df64233a2437c8d17e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/30f1d451de9d6ededf08a8faa2c692f7621dc7": "ddc99b250164fbf8b3e5584e04e12cc2",
".git/objects/ba/a21213f7616a67e4980c46762dd2044dd99865": "65faa2410ef159a53f7bcd448b47e399",
".git/objects/bb/3bfd3653fb8c3eb9655ab41608011abe63d28f": "f28680933a0f57d047c235fcc6b03411",
".git/objects/c2/e1af19191ac42cf99758d1da0ba747cb887834": "e2d4b71a0aabfc9150c7f513731bcaf8",
".git/objects/c5/feade917fa7be57480bef348875c009141ca28": "368bc71dbe4a16816f4e9a72af6c2f61",
".git/objects/c6/1c08576380038ae688a7149efa3e7c156ede3b": "6531c5048a832468e9ae2363d0470334",
".git/objects/c7/1c5f9cfba424e9b239577b21632e99795c9d42": "d76a60b3f54de03199668cce3524e0db",
".git/objects/cc/db01d2bae7b0d8fe27a27601ac47ec8ffbf719": "d28fcedde86e1fd57df31fbda6873d18",
".git/objects/cd/a1f3dfbb3b13daccd3466320173899f831c36e": "9cc6d2b90bda352b8dd631010e530f75",
".git/objects/cf/972ca799725adeff70e9923238c7eaaced0374": "480ce94b19158187b56144bc68b4814c",
".git/objects/d1/c0fce9a81c7d70fba758cea14533dd171b5dad": "7e2fbb684193e7d9506245b4e4d26bce",
".git/objects/d2/20f986294c439d0a254e04fc535a658b04ce04": "0162c61cac12c02dce08ed8284d5ae49",
".git/objects/d3/b4dc903a9d83334b66db107b68dd1fd4f371f3": "56c70583a1c21a561a3a402a64fbe7c1",
".git/objects/d4/e9dbf5863e3d40845d18b557782f6d9636a3c3": "cf1b40079bff15c28c5fab740d70607e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3291a9243458d908cc32ab2ceafbd5963adc60": "98142d9f63f15277657ec53ec5574e10",
".git/objects/d9/366b02de823d313d68d832dceb9a5d9d61ba34": "9dc0841cf74857c9e1a3579c938eaa4b",
".git/objects/da/3eb332160f781843ba4ed9931c1df91f4ea736": "014a334e13e76343d55e8449a5792f0d",
".git/objects/da/9d752114f23640ec4e75411fe7b2c142db2450": "86558ce9fc21a283f83671811b45a2f3",
".git/objects/da/b0605f0a3fb464a99a7f73f7f691d188bb77cc": "5aedd29c34a5dab52b7071af19a2e249",
".git/objects/da/d8fca5093cfbae1acc4cbc0a9b6c93429af1d8": "283d224b421b61faf5865c03d9c80c04",
".git/objects/db/7cf485a8e0d0fb7e07371ee236360625266723": "962040b818703499cbb18ad241528ece",
".git/objects/df/9effd2591a90c12d1fbaa39892fef4f0a8217b": "bf5b5f70193e0b87ca7287531dc12405",
".git/objects/df/e9a1ad174e472e0d38880edca78a3333207df8": "af13b883c085fb9780a7fa234be95732",
".git/objects/e3/54057ab8fb78d14f3fab6b39c2c342b5c246b1": "0571d5a009a1f1cfedd7f2f80a6bba8e",
".git/objects/e4/22daae9b881232ad0a882dc4ac84df103fa280": "1c0e1de3338e5c15d240652760faf21d",
".git/objects/e5/6edacf1534dbfc39ff27e5f5d478594f0f9e9a": "e65d023ac8a2f44bcf703c07550b090c",
".git/objects/e5/abd16fc2638e3f8b3865b379911bb54725a615": "6299b2fccccde3948d31a89051dca939",
".git/objects/e6/697e57929a9d2eba3fb546f919448ebf1dea79": "ca5c49c0bae86fb84f4e765892454cd6",
".git/objects/e6/db797d0c0865be87c0724541b0908bd78575f7": "5ba4ad10149504d00561f4499a8bc1b1",
".git/objects/e9/db84dd70e3c652331a02c97c3737dad4951f19": "f35346c239c097a672a92861d9740b98",
".git/objects/e9/f942bc099bae44c3cd3c8b981f4a8735d29d21": "78990c961e95bb812cc7b78127f6a36b",
".git/objects/eb/66f2c9305faad420398e39712a7991802a65df": "8cab1ef0d7435e1077b1975b3c0d79ac",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/c8ccaab8a39608516ab190260480e403b00438": "f3590d730fc1f36bd2aaa8a13a6ec278",
".git/objects/ed/e7d4057dc9da03f30a378b62a545da0a89e066": "0371ce7329cd952f662816b1dbea21a7",
".git/objects/ee/5b493824591fb6d773076a88c2b9fee5f8dc71": "eb51cee67cb998a15b99063642795e7e",
".git/objects/ee/d4d12c5fdfcabd460b057bdad96672a813df54": "802057763f82634b3570de03486fb949",
".git/objects/ef/97cfc97d0e658f7ef92134a9167ab850df7645": "400e6cfd5d847aa08e17fbf9128ae374",
".git/objects/f0/9f2cd53250b9deac491611920bac6b5cbec09d": "1da256a5e8bc5b13e0f6de274d21e14e",
".git/objects/f0/f878045090008c664df1a647f62d138bd3c66d": "10a9e8f2659e11b4600029177c4650b9",
".git/objects/f1/0c5d7e4a22eb3f3c94aa025042c563e478d518": "39e1bf754539a7bb2da9328466c44522",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/f3/fd0a3f0c2b325da7406f8cae007fea5fff3a53": "b945b37f3413219d42b4e76c6f0e6c5c",
".git/objects/f4/5a4444f64c8fe3309a0282889bb610fa76b348": "4c17ca08b26c07a74a12414fff53a279",
".git/objects/f5/b0c3832288027cba89457c62e7c1c06a041e09": "38a729415d9f1d553b8db2ec6ae35bbb",
".git/objects/f6/e52115d9a7832142f33ca8b0aafbc33b00286e": "faa8a1fe1f9f9ba54c30790b4bf97ff0",
".git/objects/f7/4cc75d72f5e0db22a6e919cd7dea9b3bfdb212": "4af6e37cca10daa19149741eaf2d1eda",
".git/objects/f9/832a9cc8ec0ce941f86e5985b12d95474f525c": "d19b58173262629c51f66f28c505f357",
".git/objects/f9/c58e2ac60823863d1a6c8d475b4759c33ecf1d": "93265c8f145036bc2c32db312a33715b",
".git/objects/fa/aee7dc35fa1703bf08c154f5f16530e79b7c13": "066daa112f4d9bc045f8e47137d7542c",
".git/objects/fa/ef47b47d3ff423e32fd978dbe26626856dbfda": "349af427415125a70a21575a3cd41f88",
".git/objects/fb/96da8c8fe789dee2a7481ea005f4d2b9c2ef96": "5550c32fa0759e923e9332c5a37e9e1d",
".git/objects/fc/6f09f3f28fa1a317bb571ccd09d145f6599090": "4833cd0b94684c061356a4c6a917ae35",
".git/objects/fd/6318d4baabefd534e5ba587bfd26322d411fd6": "fce766864eee363fc48c790062802296",
".git/objects/pack/pack-5138ac79761e70b2d9158144dbb8b8552c650be2.idx": "d9e902693efa8abe1d318e11be56a0b6",
".git/objects/pack/pack-5138ac79761e70b2d9158144dbb8b8552c650be2.pack": "2e14124af1124f5909c2add3a8488245",
".git/ORIG_HEAD": "13f7c8cf1810a592ca1abe09340c3e93",
".git/refs/heads/main": "7da87714e1862cb14edc6836c573bee5",
".git/refs/heads/release": "13f7c8cf1810a592ca1abe09340c3e93",
".git/refs/remotes/origin/main": "16429852932a254edc45e2a6c5dea5dc",
".git/refs/remotes/origin/release": "13f7c8cf1810a592ca1abe09340c3e93",
".git/refs/remotes/origin/stable": "95583deff230687cb2b535b0013ba6e1",
"assets/AssetManifest.json": "64593abc9ac59361bfbd001ed928d799",
"assets/assets/animations/failed.json": "770b474afa6155c0dd5cfc295bb61c75",
"assets/assets/animations/lonely.json": "c1fbd13eaa4a31021195817d305dae47",
"assets/assets/animations/success.json": "1f0d15e6fd9e07ca09fb051d22c6ae8d",
"assets/assets/logo.png": "3d0c1b111eae9bcc3b43a5d3d466dfb8",
"assets/assets/svg_disabled_bus_seat.svg": "9c78cc8f0b93adb820cf38787eb919d0",
"assets/assets/svg_selected_bus_seats.svg": "c906d5bbcc1179ea14b79c22bfff13bb",
"assets/assets/svg_sold_bus_seat.svg": "3eb7c233aa51cd894da17e3a0a9cedb6",
"assets/assets/svg_unselected_bus_seat.svg": "d9348bee6b2f7fb05326e2e595a9e5ef",
"assets/assets/timemanagement.svg": "f3bd1becf4e14feaf25fb389ecbd93e8",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "abaa0b253e5b80b173bbc8b7df331d04",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "db83e75c73ac430e02ae29cff8a1051d",
"/": "db83e75c73ac430e02ae29cff8a1051d",
"main.dart.js": "2bfc8d1fa11d968bf065c6654033aaa9",
"manifest.json": "378376bf7246d8415958b3376be5b9c2",
"version.json": "ccd5b1ed493eff9a75b3e9522052e54d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
