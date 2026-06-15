/* --- ARROW & PIXY: MULTI-GAME PREMIUM HUB v2.5 --- */


const PRODUCTS = [
    // --- BLOX FRUITS: PERMANENT FRUITS ---
    { name: "Perm Kitsune", price: "$24.00", category: "bloxfruits", type: "fruit", img: "https://preview.redd.it/perm-kitsune-giveaway-v0-foaxzfogemsf1.jpeg?auto=webp&s=94a2a2c0048bf4711a9f21178cedfca3b8edcd93" },
    { name: "Perm Tiger", price: "$18.00", category: "bloxfruits", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-gyZCxTRCgfyEm6bPMuZrHkiBbF8G1xxmCQ&s" },
    { name: "Perm Dragon", price: "$28.00", category: "bloxfruits", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLovGwYvr49lrw5kpgEvrLNKDd8Ic4qEa7iQ&s" },
    { name: "Perm Dough", price: "$14.00", category: "bloxfruits", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0wrTjb1UMO5S4iPCdLZxplBCEqZTcXVmTiA&s" },
    { name: "Perm Portal", price: "$12.00", category: "bloxfruits", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQn8yRYpQRE4oemeIAFr-6Wn4FIMqJnE-0-w&s" },
    { name: "Perm Buddha", price: "$10.00", category: "bloxfruits", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfRajWNQo3fRYVs5BWQYWramjiHCXp3SeEBw&s" },
    { name: "Perm Magma", price: "$8.00", category: "bloxfruits", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNn2RvVQYFgNa57CvYTIl3K-cU_LxXhMJkog&s" },
    { name: "Perm Ice", price: "$4.50", category: "bloxfruits", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagQnm0exENY-Eg_3et1_Ly2GKyv833p6k-w&s" },
    { name: "Perm Control", price: "$24.00", category: "bloxfruits", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh20HvZ8zEqO4q5R8ydkyxEMbT8b4o9csUdg&s" },
    { name: "Perm Yeti", price: "$18.00", category: "bloxfruits", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExFeJZqCBXRXx0qm7aBlTnCf_H0DMdHxD0w&s" },
    { name: "Perm Spirit", price: "$15.50", category: "bloxfruits", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw2RfexXPWXc6g48Z4U4WR1zyisAK1dR8jvw&s" },
    { name: "Perm Gas", price: "$15.00", category: "bloxfruits", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy9G1EKxOivFnbcPWPB_gePwHhdr1x_C7clg&s" },

    // --- BLOX FRUITS: GAMEPASSES ---
    { name: "Fruit Notifier", price: "$16.00", category: "bloxfruits", type: "pass", img: "https://tr.rbxcdn.com/180DAY-d90e7a4dc5a82f0d8b0d22951c99bd63/150/150/Image/Webp/noFilter" },
    { name: "Dark Blade", price: "$7.00", category: "bloxfruits", type: "pass", img: "https://tr.rbxcdn.com/180DAY-d11805051612e36ad5b32c0b78459680/150/150/Image/Webp/noFilter" },
    { name: "2x Mastery", price: "$2.50", category: "bloxfruits", type: "pass", img: "https://tr.rbxcdn.com/180DAY-acf0a1f1983c30f7ccded0c756845f36/150/150/Image/Webp/noFilter" },
    { name: "2x Money", price: "$2.50", category: "bloxfruits", type: "pass", img: "https://tr.rbxcdn.com/180DAY-63a5bf6ea7e029c50bd82024ac2beae4/150/150/Image/Webp/noFilter" },
    { name: "Fast Boats", price: "$2.00", category: "bloxfruits", type: "pass", img: "https://tr.rbxcdn.com/180DAY-021c08aab80ee2cbdba77de1fd128a7a/150/150/Image/Webp/noFilter" },
    { name: "+1 Storage", price: "$3.50", category: "bloxfruits", type: "pass", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcOjUGNYSrdLiMjb6DKS0gGvqb1Fi-RnH6UA&s" },
    { name: "2x Drop Chance", price: "$2.00", category: "bloxfruits", type: "pass", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtlzIH6JXX5qYbSHT-LsTDxK555C4AlsHz7g&s" },

    // --- ADOPT ME: HIGH TIERS (WITH FR/NFR/MFR) ---
    { 
        name: "Shadow Dragon", category: "adoptme", type: "pet", 
        img: "https://adoptmetradingvalues.com/images/1.png",
        variants: [{ label: "FR", price: "$157.00" }, { label: "NFR", price: "$355.00" }, { label: "MFR", price: "$850.00" }]
    },
    { 
        name: "Bat Dragon", category: "adoptme", type: "pet", 
        img: "https://adoptmetradingvalues.com/images/3.png",
        variants: [{ label: "FR", price: "$240.00" }, { label: "NFR", price: "$615.00" }, { label: "MFR", price: "$1650.00" }]
    },
    { 
        name: "Frost Dragon", category: "adoptme", type: "pet", 
        img: "https://adoptmetradingvalues.com/images/4.png",
        variants: [{ label: "FR", price: "$75.00" }, { label: "NFR", price: "$172.50" }, { label: "MFR", price: "$440.00" }]
    },
    { 
        name: "Giraffe", category: "adoptme", type: "pet", 
        img: "https://adoptmetradingvalues.com/images/2.png",
        variants: [{ label: "FR", price: "$107.00" }, { label: "NFR", price: "$255.00" }, { label: "MFR", price: "$824.00" }]
    },
    { 
        name: "Owl", category: "adoptme", type: "pet", 
        img: "https://adoptmetradingvalues.com/images/6.png",
        variants: [{ label: "FR", price: "$69.00" }, { label: "NFR", price: "$187.00" }, { label: "MFR", price: "$620.00" }]
    },
    { 
        name: "Parrot", category: "adoptme", type: "pet", 
        img: "https://adoptmetradingvalues.com/images/5.png",
        variants: [{ label: "FR", price: "$55.00" }, { label: "NFR", price: "$118.00" }, { label: "MFR", price: "$377.00" }]
    },
    { 
        name: "Evil Unicorn", category: "adoptme", type: "pet", 
        img: "https://adoptmetradingvalues.com/images/7.png",
        variants: [{ label: "FR", price: "$36.00" }, { label: "NFR", price: "$72.00" }, { label: "MFR", price: "$269.00" }]
    },
    { 
        name: "Crow", category: "adoptme", type: "pet", 
        img: "https://adoptmetradingvalues.com/images/8.png",
        variants: [{ label: "FR", price: "$46.50" }, { label: "NFR", price: "$113.00" }, { label: "MFR", price: "$437.00" }]
    },

    // --- MURDER MYSTERY 2 ---
    { name: "Corrupt", price: "$11.00", category: "mm2", type: "weapon", img: "https://i.postimg.cc/sD936Kmg/Corrupt-Transparent.webp" },
    { name: "Harvester", price: "$7.50", category: "mm2", type: "weapon", img: "https://i.postimg.cc/NFdpF3Yg/Harvester-Improved.webp" },
    { name: "Icepiercer", price: "$6.50", category: "mm2", type: "weapon", img: "https://i.postimg.cc/RF9kHzr0/no-Filter.webp" },
    { name: "Turkey", price: "$30.00", category: "mm2", type: "weapon", img: "https://i.postimg.cc/Jn1NXppt/Turkey-2023.webp" },
    { name: "Dark Set", price: "$35.00", category: "mm2", type: "weapon", img: "https://i.postimg.cc/xdPH9K9r/Darkset.webp" },
    { name: "Travelers Set", price: "$145.00", category: "mm2", type: "weapon", img: "https://i.postimg.cc/hj5XGsw2/Traveler-Set.webp" },
    { name: "Sakura Set", price: "$35.00", category: "mm2", type: "weapon", img: "https://i.postimg.cc/RC2TsLFb/Sakura-Set.webp" },
    { name: "Celestial Set", price: "$68.00", category: "mm2", type: "weapon", img: "https://i.postimg.cc/pd0fDD4T/5b63b5431082f50e49cac9b22dfbe962.webp" },
    { name: "Vampire Set", price: "$45.00", category: "mm2", type: "weapon", img: "https://i.postimg.cc/8PhLy8xv/Vampires-Set.webp" },
    { name: "Ever Set", price: "$88.00", category: "mm2", type: "weapon", img: "https://i.postimg.cc/LXcZTvT6/bd77924ec927a2f62235f8bfa672d9e6Evergreen-Set.png" },
    { name: "1000 Value", price: "$15.00", category: "mm2", type: "weapon", img: "https://production-gameflipusercontent.fingershock.com/us-east-1:9caa5859-f660-4c80-9667-6322748fcb06/fd346457-ec01-43a1-9678-cd6ee8f7aee1/76213771-e0fe-4fd6-b822-865ea2cbe7c2/640x640.webp" },

    // --- RIVALS (ADD YOUR NEW STUFF BELOW) ---
    { name: "Skin Case", price: "$1.50", category: "rivals", type: "skin", img: "https://i.postimg.cc/L6M1gChs/Skin-Case-1.webp" },
    { name: "Skin Case (x3)", price: "$4.00", category: "rivals", type: "skin", img: "https://i.postimg.cc/L6M1gChs/Skin-Case-1.webp" },
    { name: "Skin Case 2", price: "$1.50", category: "rivals", type: "skin", img: "https://i.postimg.cc/Mp9M4z52/Skin-Case-2.webp" },
    { name: "Skin Case 2 (x3)", price: "$4.00", category: "rivals", type: "skin", img: "https://i.postimg.cc/Mp9M4z52/Skin-Case-2.webp" },
    { name: "Skin Case 3", price: "$1.50", category: "rivals", type: "skin", img: "https://i.postimg.cc/Rh1qTmh8/Skin-Case3Purple.webp" },
    { name: "Skin Case 3 (x3)", price: "$4.00", category: "rivals", type: "skin", img: "https://i.postimg.cc/Rh1qTmh8/Skin-Case3Purple.webp" },
    { name: "Prime Bundle", price: "$3.50", category: "rivals", type: "skin", img: "https://pic.mmowts.com/web/image/roblox/34cbdea48f807adee0e3562483d8e22d.png?width=300" },
    { name: "Heavy Duty Bundle", price: "$11.00", category: "rivals", type: "skin", img: "https://i.postimg.cc/fysRyPCF/Heavy-Weapons-Bundel.webp" },
    { name: "Classic Bundle", price: "$6.50", category: "rivals", type: "skin", img: "https://i.postimg.cc/rFQwyQrt/Classic-Bundel-Rivals.webp" },
    { name: "Pixel Bundle", price: "$4.00", category: "rivals", type: "skin", img: "https://i.postimg.cc/qRspPLrR/Pixel-Bundel-Rivals.webp" },
    { name: "Standard Weapons Bundle", price: "$6.00", category: "rivals", type: "skin", img: "https://i.postimg.cc/VkJmf1wZ/Standard-Weapons-Bundel.webp" },
    { name: "Contraband Bundle", price: "$6.00", category: "rivals", type: "skin", img: "https://pic.mmowts.com/web/image/roblox/b69669d2a775ceb7ff562546c0d00efe.png?width=300" },
    // Example: { name: "New Skin", price: "$5.00", category: "rivals", type: "skin", img: "URL_HERE" }

    // --- BLADE BALL ---
    { name: "1000 RAP (Different Weapons & Abilities according to 1000 token value)", price: "$4.50", category: "bladeball", type: "ability", img: "https://cdn-offer-photos.zeusx.com/88f5360c-c5b1-4a95-805e-dd3658d00dec.jpg" },
    { name: "1000 Tokens", price: "$5.00", category: "bladeball", type: "ability", img: "https://kboosting.com/img/32336/c/blade-ball-tokens-500x500.png" },

    // --- JAILBREAK ---
    { name: "Torpedo (OG)", price: "$37.00", category: "jailbreak", type: "car", img: "https://jbvalues.com/images/items/vehicle/torpedo.webp" },
    { name: "Javelin", price: "$42.00", category: "jailbreak", type: "car", img: "https://jbvalues.com/images/items/vehicle/javelin.webp" },
    { name: "ICEBreaker", price: "$16.00", category: "jailbreak", type: "car", img: "https://jbvalues.com/images/items/vehicle/icebreaker.webp" },
    { name: "Beignet", price: "$32.00", category: "jailbreak", type: "car", img: "https://jbvalues.com/images/items/vehicle/beignet.webp" },
    { name: "Beam Hybrid", price: "$16.00", category: "jailbreak", type: "car", img: "https://jbvalues.com/images/items/vehicle/beamhybrid.webp" },
    { name: "Beam Hybrid", price: "$16.00", category: "jailbreak", type: "car", img: "https://jbvalues.com/images/items/vehicle/beamhybrid.webp" },
    { name: "Proto-8", price: "$24.00", category: "jailbreak", type: "car", img: "https://jbvalues.com/images/items/vehicle/proto-8.webp" },
    { name: "Hypershift", price: "$261.00", category: "jailbreak", type: "item", img: "https://jbvalues.com/images/items/color/hypershift.webp" },
    { name: "Void", price: "$38.00", category: "jailbreak", type: "item", img: "https://jbvalues.com/images/items/rim/void.webp" },
    { name: "Checker", price: "$32.00", category: "jailbreak", type: "item", img: "https://jbvalues.com/images/items/texture/checker.webp" },
    { name: "Hypercolors Lvl.5", price: "$32.00-50.00", category: "jailbreak", type: "item", img: "https://jbvalues.com/images/items/color/hyperbluelvl5.webp" },

    // --- +1 SPEED KEYBOARD ESCAPE ---
    { name: "ADMIN Treadmill", price: "$7.67", category: "speedkeyboard", type: "treadmill", img: "https://tr.rbxcdn.com/180DAY-3277314252cabc11d9eb2c232ae39d74/150/150/Image/Png/noFilter" },
    { name: "Candy Treadmill", price: "$3.59", category: "speedkeyboard", type: "treadmill", img: "https://tr.rbxcdn.com/180DAY-b8f39647ec6a577f6a325c90d7399488/150/150/Image/Png/noFilter" },
    { name: "Diamond Treadmill", price: "$1.26", category: "speedkeyboard", type: "treadmill", img: "https://tr.rbxcdn.com/180DAY-60d3aaf83e4a18703154e06ba9de882f/150/150/Image/Png/noFilter" },
    { name: "Gold Treadmill", price: "$0.30", category: "speedkeyboard", type: "treadmill", img: "https://tr.rbxcdn.com/180DAY-d0ba1b185424a1073c5b58eb3f0138bf/150/150/Image/Png/noFilter" },
    { name: "More Equipped Items (20 slots)", price: "$1.43", category: "speedkeyboard", type: "upgrade", img: "https://tr.rbxcdn.com/180DAY-77ef2d695f297fda7645bdc241a2ab0c/150/150/Image/Png/noFilter" },
    { name: "Unlock Soundpacks", price: "$0.30", category: "speedkeyboard", type: "upgrade", img: "https://tr.rbxcdn.com/180DAY-ffc48f60c6d282e29162e807a85687e1/150/150/Image/Png/noFilter" },
    { name: "Speed Multiplier [Tier 6]", price: "$0.66", category: "speedkeyboard", type: "upgrade", img: "https://tr.rbxcdn.com/180DAY-576244e0278ab24b7b92832c2a6414ad/150/150/Image/Png/noFilter" },
    { name: "Speed Multiplier [Tier 9]", price: "$2.15", category: "speedkeyboard", type: "upgrade", img: "https://tr.rbxcdn.com/180DAY-576244e0278ab24b7b92832c2a6414ad/150/150/Image/Png/noFilter" },
    { name: "InfinityTrail", price: "$14.39", category: "speedkeyboard", type: "trail", img: "https://tr.rbxcdn.com/180DAY-483cb7c5ad0914e84c8fe87c138edd28/150/150/Image/Png/noFilter" },
    { name: "CosmicTrail", price: "$7.67", category: "speedkeyboard", type: "trail", img: "https://tr.rbxcdn.com/180DAY-1564c4401ea621ccd57c33193422ee80/150/150/Image/Png/noFilter" },
    { name: "RainbowTrail", price: "$1.19", category: "speedkeyboard", type: "trail", img: "https://tr.rbxcdn.com/180DAY-487e143c26ee84d382aaa3935c94b7ba/150/150/Image/Png/noFilter" },
    { name: "GalaxyTrail", price: "$1.91", category: "speedkeyboard", type: "trail", img: "https://tr.rbxcdn.com/180DAY-92dcd4cbac739ce94360681e8d827b05/150/150/Image/Png/noFilter" },
    { name: "GreenTrail", price: "$0.10", category: "speedkeyboard", type: "trail", img: "https://tr.rbxcdn.com/180DAY-bd3a7e0170313f90ff45dff8dd5e024d/150/150/Image/Png/noFilter" },
    { name: "BlueTrail", price: "$0.14", category: "speedkeyboard", type: "trail", img: "https://tr.rbxcdn.com/180DAY-285d937cddbc40abb123fbd5ddce55fd/150/150/Image/Png/noFilter" },
    { name: "PurpleTrail", price: "$0.30", category: "speedkeyboard", type: "trail", img: "https://tr.rbxcdn.com/180DAY-249b4530f64fb18838d6f569d1d4137a/150/150/Image/Png/noFilter" },
    { name: "VoidTrail", price: "$9.59", category: "speedkeyboard", type: "trail", img: "https://tr.rbxcdn.com/180DAY-336fbf245df5a29a83008e2d46d943d2/150/150/Image/Png/noFilter" },
    { name: "GodlikeTrail", price: "$12.48", category: "speedkeyboard", type: "trail", img: "https://tr.rbxcdn.com/180DAY-2f1f20522199ba6dd742872d70b31979/150/150/Image/Png/noFilter" },
    { name: "RedTrail", price: "$0.71", category: "speedkeyboard", type: "trail", img: "https://tr.rbxcdn.com/180DAY-c0f1e4d2e5f76109c434fd8530166242/150/150/Image/Png/noFilter" },
    { name: "SupernovaTrail", price: "$11.03", category: "speedkeyboard", type: "trail", img: "https://tr.rbxcdn.com/180DAY-88315b7cee6c14ecf9d51477f21649e6/150/150/Image/Png/noFilter" },
    { name: "GlowAura", price: "$0.30", category: "speedkeyboard", type: "aura", img: "https://tr.rbxcdn.com/180DAY-acbb7cd24087147663b662d69750e603/150/150/Image/Png/noFilter" },
    { name: "FireAura", price: "$3.11", category: "speedkeyboard", type: "aura", img: "https://tr.rbxcdn.com/180DAY-267118c5082396c1feebf0fab7bf4d7a/150/150/Image/Png/noFilter" },
    { name: "WindAura", price: "$1.19", category: "speedkeyboard", type: "aura", img: "https://tr.rbxcdn.com/180DAY-57f8807589030ceafbb5b91784ddc942/150/150/Image/Png/noFilter" },
    { name: "WaterAura", price: "$2.39", category: "speedkeyboard", type: "aura", img: "https://tr.rbxcdn.com/180DAY-7fa9f88b2adfdeb9d23bd17b6600cbf5/150/150/Image/Png/noFilter" },
    // --- GROW A GARDEN 2

    { name: "Power Hose", price: "$1.95", category: "gag2", type: "gamepass", img: "https://tr.rbxcdn.com/180DAY-be18fcb33c2182bcf94ef294e700e650/150/150/Image/Webp/noFilter" },
    { name: "Vine Wrapper", price: "$3.25", category: "gag2", type: "gamepass", img: "https://tr.rbxcdn.com/180DAY-41a1fa4bb3a4915ebc52e3acb949a33b/150/150/Image/Webp/noFilter" },
    { name: "Rainbow Magic Carpet", price: "$3.90", category: "gag2", type: "gamepass", img: "https://tr.rbxcdn.com/180DAY-c39b49314789ba8e6cd19070fa25718c/150/150/Image/Webp/noFilter" },
    { name: "Freeze Ray!", price: "$4.85", category: "gag2", type: "gamepass", img: "https://tr.rbxcdn.com/180DAY-d16defaa10b8648fd64f9b4c7d896632/150/150/Image/Webp/noFilter" },
    // --- GROW A GARDEN 2 (SEED SHOP) ---
    
    { name: "x1 Poison Apple", price: "$8.40", category: "gag2", type: "seed", img: "https://assetsio.gnwcdn.com/gag-2-seed-shop.jpg?width=2070&height=1164&fit=crop&quality=85&format=jpg&auto=webp" },
    { name: "x1 Moon Bloom", price: "$8.70", category: "gag2", type: "seed", img: "https://assetsio.gnwcdn.com/gag-2-seed-shop.jpg?width=2070&height=1164&fit=crop&quality=85&format=jpg&auto=webp" },
    { name: "x1 Dragon's Breath", price: "$9.50", category: "gag2", type: "seed", img: "https://assetsio.gnwcdn.com/gag-2-seed-shop.jpg?width=2070&height=1164&fit=crop&quality=85&format=jpg&auto=webp" },
    { name: "x1 Sunflower", price: "$3.90", category: "gag2", type: "seed", img: "https://assetsio.gnwcdn.com/gag-2-seed-shop.jpg?width=2070&height=1164&fit=crop&quality=85&format=jpg&auto=webp" },
    { name: "x1 Venus Fly Trap", price: "$5.20", category: "gag2", type: "seed", img: "https://assetsio.gnwcdn.com/gag-2-seed-shop.jpg?width=2070&height=1164&fit=crop&quality=85&format=jpg&auto=webp" },
    { name: "x1 Pomegranate", price: "$6.50", category: "gag2", type: "seed", img: "https://assetsio.gnwcdn.com/gag-2-seed-shop.jpg?width=2070&height=1164&fit=crop&quality=85&format=jpg&auto=webp" },
    // --- KICK A LUCKY BLOCK STORES ---

// --- KICK A LUCKY BLOCK OFFICIAL STORES ---
    { name: "x2 Kick Power", price: "$1.67", category: "kickluckyblock", type: "gamepass", img: "https://tr.rbxcdn.com/180DAY-2af03e39987ec4038e25e729b775aaf7/150/150/Image/Webp/noFilter" },
    { name: "x2 Cash", price: "$3.00", category: "kickluckyblock", type: "gamepass", img: "https://tr.rbxcdn.com/180DAY-13a80eacf462f1b4b6e54f508b40cdc6/150/150/Image/Webp/noFilter" },
    { name: "VIP", price: "$3.54", category: "kickluckyblock", type: "gamepass", img: "https://tr.rbxcdn.com/180DAY-8ef99f03b4611b1b2ae24dde4b59650c/150/150/Image/Webp/noFilter" },
    { name: "x2 Brainrot Luck", price: "$1.19", category: "kickluckyblock", type: "gamepass", img: "https://tr.rbxcdn.com/180DAY-7a0abad7eb7652737204761838d9843a/150/150/Image/Webp/noFilter" },
    { name: "x2 Mutation Luck", price: "$1.67", category: "kickluckyblock", type: "gamepass", img: "https://tr.rbxcdn.com/180DAY-f4b45fe437a284ace4c003f9e2b2687d/150/150/Image/Webp/noFilter" }
]; // End of PRODUCTS array
const WALLETS = {
    LTC: "LUTPGLQ8B84n5D9gWhjCyDQx6Leb8o91tC",
    USDT_TRX: "TCrPMWfvVZjQdDDQdTyK7DNDzxgKGFhDZR",
    USDT_ETH: "0x1758Cd49b80C309D8B9aD7ad025BD5E1830f7e1E",
    USDT_BNB: "0x1758Cd49b80C309D8B9aD7ad025BD5E1830f7e1E"
};

const WEBHOOK_URL = "https://discord.com/api/webhooks/1487133287880331406/o1EAfZifztySMNI8zNH5pqNsrNDbdmj6H4_mt2PnWOMbjhRN0t1DcHLL7P258jltw3WX";


// --- HUB NAVIGATION ---
// --- HUB NAVIGATION ---
// --- HUB NAVIGATION (FORCE SHOW VERSION) ---
// --- HUB NAVIGATION (FORCE VISIBILITY VERSION) ---
/* --- STORE & MODAL CORE --- */

function openStore(game) {
    console.log("--- 🏁 openStore Started for:", game);
    const hubView = document.getElementById('hub-view');
    const mainStore = document.getElementById('main-store');
    const storeTitle = document.getElementById('store-title');

    if (!hubView || !mainStore) {
        console.error("❌ Critical Error: hub-view or main-store not found in HTML");
        return;
    }

    // --- NEW: DISCORD ACTIVITY PING ---
    const activityWebhook = "https://discord.com/api/webhooks/1487133287880331406/o1EAfZifztySMNI8zNH5pqNsrNDbdmj6H4_mt2PnWOMbjhRN0t1DcHLL7P258jltw3WX"; 
    
    fetch(activityWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            embeds: [{
                title: "👀 Store Browsing Activity",
                description: `A potential customer is now viewing the **${game.toUpperCase()}** store.`,
                color: 0xffcc00, // Gold
                timestamp: new Date(),
                footer: { text: "Arrow & Pixy Hub Activity" }
            }]
        })
    }).catch(err => console.log("Webhook failed (Normal if adblocker is on):", err));

    hubView.style.display = 'none'; 
    mainStore.style.display = 'block'; 
    mainStore.style.visibility = 'visible'; 
    mainStore.style.opacity = '1'; 
    mainStore.classList.remove('hidden'); 
    
    window.scrollTo(0, 0); 

    if (storeTitle) {
        storeTitle.innerHTML = `Arrow & Pixy <span class="highlight">${game.toUpperCase()}</span>`;
    }

    renderItems(game);
}

function backToHub() {
    const hubView = document.getElementById('hub-view');
    const mainStore = document.getElementById('main-store');

    if (hubView) {
        hubView.style.display = 'block';
        hubView.classList.remove('hidden');
    }

    if (mainStore) {
        mainStore.style.display = 'none';
        mainStore.classList.add('hidden');
    }

    window.scrollTo(0, 0);
}

/* --- PAYMENT SELECTOR LOGIC --- */
function updatePaymentUI() {
    const method = document.getElementById('payment-method').value;
    const ltcSection = document.getElementById('section-ltc');
    const bep20Section = document.getElementById('section-usdt-bep20');
    const trc20Section = document.getElementById('section-usdt-trc20');
    const manualSection = document.getElementById('section-manual');
    const cryptoInputs = document.getElementById('crypto-inputs');

    // 1. Hide everything first
    [ltcSection, bep20Section, trc20Section, manualSection, cryptoInputs].forEach(el => {
        if(el) el.classList.add('hidden');
    });

    // 2. Logic for showing specific sections
    if (method === 'ltc') {
        ltcSection.classList.remove('hidden');
        cryptoInputs.classList.remove('hidden');
    } else if (method === 'usdt_bep20') {
        bep20Section.classList.remove('hidden');
        cryptoInputs.classList.remove('hidden');
    } else if (method === 'usdt_trc20') {
        trc20Section.classList.remove('hidden');
        cryptoInputs.classList.remove('hidden');
    } else if (method === 'manual') {
        manualSection.classList.remove('hidden');
    }
}

function updatePrice(selectElement) {
    if (selectElement && selectElement.value) {
        const card = selectElement.closest('.item-card');
        const priceDisplay = card.querySelector('.price');
        if (priceDisplay) {
            priceDisplay.innerText = selectElement.value;
        }
    } 
}



function renderItems(game) {
    const container = document.getElementById('store-content');
    if (!container) return;
    
    container.innerHTML = ''; 
    if (typeof PRODUCTS === 'undefined') return;

    const filtered = PRODUCTS.filter(p => p && p.category === game);

    if (filtered.length === 0) {
        container.innerHTML = `<h2 style="color:var(--gold); text-align:center; padding:100px;">COMING SOON</h2>`;
        return;
    }

    const types = [...new Set(filtered.map(p => p.type).filter(t => t))];

    types.forEach(type => {
        const section = document.createElement('section');
        section.className = 'game-section';
        section.innerHTML = `
            <div class="section-title"><h2>${type.toUpperCase()}S</h2></div>
            <div class="items-grid"></div>
        `;
        const grid = section.querySelector('.items-grid');

        filtered.filter(p => p.type === type).forEach(p => {
            let variantHtml = "";
            let displayPrice = p.price;

            if (p.variants && p.variants.length > 0) {
                displayPrice = p.variants[0].price; 
                variantHtml = `
                    <select class="variant-select" onchange="updatePrice(this)">
                        ${p.variants.map(v => `<option value="${v.price}">${v.label} - ${v.price}</option>`).join('')}
                    </select>`;
            }
            
            const safeName = p.name ? p.name.replace(/'/g, "\\'") : "Unknown Item";

            grid.innerHTML += `
                <div class="item-card">
                    <img src="${p.img}" onerror="this.src='https://via.placeholder.com/150'">
                    <h3>${p.name || "Unnamed Item"}</h3>
                    ${variantHtml}
                    <p class="price">${displayPrice || "Contact"}</p>
                    <button onclick="preparePurchase(this, '${safeName}')">PURCHASE</button>
                </div>`;
        });
        container.appendChild(section);
    });
}

function preparePurchase(btn, baseName) {
    const card = btn.closest('.item-card');
    const price = card.querySelector('.price').innerText;
    const select = card.querySelector('.variant-select');
    
    let finalName = baseName;
    if (select) {
        const selectedLabel = select.options[select.selectedIndex].text.split(' - ')[0];
        finalName = `${baseName} (${selectedLabel})`;
    }

    openModal(finalName, price);
}


function openModal(name, price) {
    const modal = document.getElementById('checkout-modal');
    const step1 = document.getElementById('step-1');
    const stepSuccess = document.getElementById('step-success');

    // 1. Reset Step Visibility
    if(step1) step1.classList.remove('hidden');
    if(stepSuccess) stepSuccess.classList.add('hidden');
    
    // 2. Clear all input fields so old data doesn't stay
    const robloxInput = document.getElementById('cust-roblox');
    const discordInput = document.getElementById('cust-discord');
    const hashInput = document.getElementById('tx-hash');
    const commentInput = document.getElementById('cust-comments');

    if(robloxInput) robloxInput.value = "";
    if(discordInput) discordInput.value = "";
    if(hashInput) hashInput.value = "";
    if(commentInput) commentInput.value = "";

    // 3. Set Item Name & Price
    document.getElementById('modal-item-name').innerText = name + " - " + price;
    
    // 4. Force Show the Modal
    modal.style.display = 'flex';
    
    // 5. Reset Payment Dropdown
    const paymentDropdown = document.getElementById('payment-method');
    if (paymentDropdown) {
        paymentDropdown.value = 'ltc'; 
        updatePaymentUI(); 
    }

    // 6. Log activity to Discord
    fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            embeds: [{
                title: "👀 Checkout Started",
                description: `User is looking at **${name}** (${price})`,
                color: 0x3498db
            }]
        })
    }).catch(err => console.log("Silent log failed"));
}

function closeModal() { 
    // Hide the main modal container
    document.getElementById('checkout-modal').style.display = 'none'; 
    
    // Reset the "Proceed" button state in case it was stuck on "Verifying"
    const btn = document.getElementById('main-pay-btn');
    if(btn) {
        btn.innerText = "PROCEED TO VERIFICATION";
        btn.disabled = false;
    }
}
function goToStep2() { 
    if(!document.getElementById('roblox-user').value || !document.getElementById('contact-method').value) return alert("Fill details!");
    document.getElementById('step-1').classList.add('hidden'); document.getElementById('step-2').classList.remove('hidden'); 
}

function showAddress() {
    const method = document.getElementById('crypto-select').value;
    document.getElementById('address-box').classList.toggle('hidden', !method);
    if(method) document.getElementById('wallet-address').innerText = WALLETS[method];
}

function copyAddress() {
    navigator.clipboard.writeText(document.getElementById('wallet-address').innerText).then(() => {
        document.getElementById('copy-btn').innerText = "COPIED!";
        setTimeout(() => document.getElementById('copy-btn').innerText = "COPY ADDRESS", 1500);
    });
}
async function processPayment() {
    const robloxUser = document.getElementById('cust-roblox').value.trim();
    const contact = document.getElementById('cust-discord').value.trim();
    const hash = document.getElementById('tx-hash').value.trim();
    const comments = document.getElementById('cust-comments').value.trim() || "None";
    const itemName = document.getElementById('modal-item-name').innerText;
    const method = document.getElementById('payment-method').value;

    const errorBox = document.getElementById('error-message');
    const errorText = document.getElementById('error-text');

    // 1. UI ERROR CHECK (Replaces the alert)
    if (!robloxUser || !contact || !hash) {
        errorBox.classList.remove('hidden');
        errorText.innerText = "All fields marked with * are required!";
        errorBox.classList.remove('shake');
        void errorBox.offsetWidth;
        errorBox.classList.add('shake');

        setTimeout(() => {
            errorBox.classList.add('hidden');
            errorBox.classList.remove('shake');
        }, 4000);
        return;
    }

    // 2. SWITCH TO LOADING SCREEN
    document.getElementById('step-1').classList.add('hidden');
    document.getElementById('step-success').classList.remove('hidden');

    const icon = document.getElementById('status-icon');
    const header = document.getElementById('status-header');
    const text = document.getElementById('status-text');

    let verificationStatus = "⏳ MANUAL REVIEW REQUIRED";
    let statusColor = 16763904; // Gold

    // 4. VERIFICATION LOGIC
    if (method === 'ltc') {
        text.innerText = "Checking Litecoin network...";
        try {
            const res = await fetch(`https://api.blockcypher.com/v1/ltc/main/txs/${hash}`);
            const data = await res.json();
            
            const walletMatch = data.outputs?.some(out => 
                out.addresses?.some(addr => addr.toLowerCase() === WALLETS.LTC.toLowerCase())
            );

            if (walletMatch) {
                const confs = data.confirmations || 0;
                if (confs >= 1) {
                    icon.innerText = "✅";
                    header.innerText = "Payment Confirmed!";
                    text.innerText = "LTC payment verified on-chain! Processing your order.";
                    verificationStatus = "✅ LTC VERIFIED (ON-CHAIN)";
                    statusColor = 3066993; // Green
                } else {
                    icon.innerText = "⏳";
                    header.innerText = "Confirming...";
                    text.innerText = "Transaction found! Waiting for 1 block confirmation (usually 2-5 mins).";
                    verificationStatus = "⏳ LTC PENDING (0 CONF)";
                }
            } else {
                icon.innerText = "❌";
                header.innerText = "Wrong Wallet";
                text.innerText = "The LTC TXID is valid, but it wasn't sent to our address.";
                verificationStatus = "⚠️ LTC WALLET MISMATCH";
                statusColor = 15158332; // Red
            }
        } catch (e) {
            verificationStatus = "🚨 LTC API ERROR - CHECK MANUALLY";
            text.innerText = "LTC Network is busy. An admin will verify your hash shortly.";
        }
    } else {
        // --- FIX FOR USDT AND OTHERS ---
        // Since we don't have auto-verify for USDT yet, we show a "Manual Review" screen
        icon.innerText = "⏳";
        header.innerText = "Submission Received";
        header.style.color = "#f1c40f"; // Gold
        text.innerText = "Your USDT/Manual payment hash has been sent to our team. Please allow 5-15 minutes for manual verification, You will be contacted via Discord or Email Address you Provided, **INCASE OF WRONG DISCORD OR EMAIL CONTACT SUPPORT**";
        verificationStatus = `⏳ MANUAL REVIEW: ${method.toUpperCase()}`;
        statusColor = 16763904; // Gold
    }

    // 4. FINAL WEBHOOK LOG
    fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            embeds: [{
                title: verificationStatus,
                color: statusColor,
                fields: [
                    { name: "🛍️ Item", value: itemName },
                    { name: "👤 Roblox", value: robloxUser, inline: true },
                    { name: "📱 Contact", value: contact, inline: true },
                    { name: "🔗 Hash", value: `\`${hash}\`` },
                    { name: "💬 Comments", value: comments }
                ],
                timestamp: new Date()
            }]
        })
    }).catch(err => console.error("Webhook failed:", err));
}
