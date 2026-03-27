/* --- ARROW & PIXY: IRONCLAD VERIFICATION ENGINE --- */

const PRODUCTS = [
    { name: "Perm Kitsune", price: "$18.50", type: "fruit", img: "https://preview.redd.it/perm-kitsune-giveaway-v0-foaxzfogemsf1.jpeg?auto=webp&s=94a2a2c0048bf4711a9f21178cedfca3b8edcd93" },
    { name: "Perm Leopard", price: "$15.00", type: "fruit", img: "https://preview.redd.it/looking-for-perm-leopard-v0-k4pv2ki6aiaa1.jpg?width=640&crop=smart&auto=webp&s=82f89ddc78fd669995580cf1bad5ad724ab97389" },
    { name: "Perm Dragon", price: "$20.00", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLovGwYvr49lrw5kpgEvrLNKDd8Ic4qEa7iQ&s" },
    { name: "Perm Dough", price: "$12.00", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0wrTjb1UMO5S4iPCdLZxplBCEqZTcXVmTiA&s" },
    { name: "Perm Portal", price: "$10.00", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQn8yRYpQRE4oemeIAFr-6Wn4FIMqJnE-0-w&s" },
    { name: "Perm Buddha", price: "$8.50", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfRajWNQo3fRYVs5BWQYWramjiHCXp3SeEBw&s" },
    { name: "Perm Magma", price: "$6.00", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNn2RvVQYFgNa57CvYTIl3K-cU_LxXhMJkog&s" },
    { name: "Perm Ice", price: "$4.00", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagQnm0exENY-Eg_3et1_Ly2GKyv833p6k-w&s" },
    { name: "Fruit Notifier", price: "$24.00", type: "pass", img: "https://tr.rbxcdn.com/180DAY-d90e7a4dc5a82f0d8b0d22951c99bd63/150/150/Image/Webp/noFilter" },
    { name: "Dark Blade", price: "$11.50", type: "pass", img: "https://tr.rbxcdn.com/180DAY-d11805051612e36ad5b32c0b78459680/150/150/Image/Webp/noFilter" },
    { name: "2x Mastery", price: "$4.50", type: "pass", img: "https://tr.rbxcdn.com/180DAY-acf0a1f1983c30f7ccded0c756845f36/150/150/Image/Webp/noFilter" },
    { name: "2x Money", price: "$4.50", type: "pass", img: "https://tr.rbxcdn.com/180DAY-63a5bf6ea7e029c50bd82024ac2beae4/150/150/Image/Webp/noFilter" },
    { name: "Fast Boats", price: "$3.50", type: "pass", img: "https://tr.rbxcdn.com/180DAY-021c08aab80ee2cbdba77de1fd128a7a/150/150/Image/Webp/noFilter" },
    { name: "+1 Storage", price: "$3.50", type: "pass", img: "https://api.dicebear.com/7.x/shapes/svg?seed=box" }
];

const MY_LTC_WALLET = "LUTPGLQ8B84n5D9gWhjCyDQx6Leb8o91tC";
const WEBHOOK_URL = "https://discord.com/api/webhooks/1487133287880331406/o1EAfZifztySMNI8zNH5pqNsrNDbdmj6H4_mt2PnWOMbjhRN0t1DcHLL7P258jltw3WX";

// Store setup
function renderStore() {
    const fruitGrid = document.getElementById('bf-fruits');
    const passGrid = document.getElementById('bf-passes');
    if(!fruitGrid || !passGrid) return;
    fruitGrid.innerHTML = '';
    passGrid.innerHTML = '';
    PRODUCTS.forEach(p => {
        const card = `<div class="item-card"><img src="${p.img}"><h3>${p.name}</h3><p class="price">${p.price}</p><button onclick="openModal('${p.name}')">PURCHASE</button></div>`;
        if(p.type === 'fruit') fruitGrid.innerHTML += card; else passGrid.innerHTML += card;
    });
}

function openModal(name) {
    document.getElementById('modal-item-name').innerText = name;
    document.getElementById('checkout-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('checkout-modal').style.display = 'none';
    document.getElementById('step-1').classList.remove('hidden');
    document.getElementById('step-2').classList.add('hidden');
    document.getElementById('step-success').classList.add('hidden');
}

function goToStep2() {
    if(!document.getElementById('roblox-user').value || !document.getElementById('contact-method').value) {
        return alert("Please fill details!");
    }
    document.getElementById('step-1').classList.add('hidden');
    document.getElementById('step-2').classList.remove('hidden');
}

function showAddress() {
    const crypto = document.getElementById('crypto-select').value;
    const box = document.getElementById('address-box');
    const display = document.getElementById('wallet-address');
    if(!crypto) { box.classList.add('hidden'); return; }
    box.classList.remove('hidden');
    display.innerText = crypto === 'LTC' ? MY_LTC_WALLET : "YOUR_USDT_ADDRESS";
}

function copyAddress() {
    const address = document.getElementById('wallet-address').innerText;
    navigator.clipboard.writeText(address).then(() => {
        const btn = document.getElementById('copy-btn');
        btn.innerText = "COPIED!";
        setTimeout(() => btn.innerText = "COPY ADDRESS", 1500);
    });
}

// --- MAIN VERIFICATION LOGIC ---
async function confirmPurchase() {
    const tx = document.getElementById('tx-hash').value.trim();
    const cryptoUsed = document.getElementById('crypto-select').value;
    const itemName = document.getElementById('modal-item-name').innerText;
    const robloxUser = document.getElementById('roblox-user').value;
    const contact = document.getElementById('contact-method').value;
    const comments = document.getElementById('order-comments').value || "None";

    if(!tx) return alert("Please paste the TXID!");

    const btn = document.querySelector('button[onclick="confirmPurchase()"]');
    btn.innerText = "VERIFYING...";
    btn.disabled = true;

    // UI Elements
    const icon = document.getElementById('status-icon');
    const header = document.getElementById('status-header');
    const text = document.getElementById('status-text');

    let verificationStatus = "❌ VERIFICATION FAILED";
    let statusColor = 15158332; // Default Red
    let confirms = 0;

    try {
        if (cryptoUsed === 'LTC') {
            const res = await fetch(`https://api.blockcypher.com/v1/ltc/main/txs/${tx}`);
            const data = await res.json();
            
            // CHECK 1: Does the transaction exist?
            if (!data || !data.outputs) {
                throw new Error("Invalid TXID");
            }

            // CHECK 2: Does it contain YOUR wallet address?
            const isSentToMe = data.outputs.some(out => 
                out.addresses && out.addresses.some(addr => addr.toLowerCase() === MY_LTC_WALLET.toLowerCase())
            );

            if (!isSentToMe) {
                // If wrong address, force Red UI and Stop!
                icon.innerText = "❌";
                header.innerText = "Wrong Wallet Address";
                header.style.color = "#e74c3c";
                text.innerText = "The transaction found does not send funds to our wallet. Please check and try again.";
                verificationStatus = "❌ ADDRESS MISMATCH";
                statusColor = 15158332;
            } else {
                // Address matches! Now check confirmations.
                confirms = data.confirmations || 0;
                if (confirms >= 1) {
                    icon.innerText = "✅";
                    header.innerText = "Payment Confirmed!";
                    header.style.color = "#2ecc71";
                    text.innerText = "Your payment is verified. We will contact you shortly!";
                    verificationStatus = `✅ LTC VERIFIED (${confirms} Confirms)`;
                    statusColor = 3066993;
                } else {
                    icon.innerText = "⏳";
                    header.innerText = "Payment Pending...";
                    header.style.color = "var(--gold)";
                    text.innerText = "We found your payment! Please wait for network confirmations.";
                    verificationStatus = "⏳ LTC PENDING (0 Confirms)";
                    statusColor = 16763904;
                }
            }
        }
    } catch (e) { 
        console.error(e);
        icon.innerText = "❌";
        header.innerText = "Invalid Transaction";
        header.style.color = "#e74c3c";
        text.innerText = "This TXID was not found on the blockchain. Ensure it is correct.";
    }

    // Send the final result to Discord
    await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: "Store Admin",
            embeds: [{
                title: verificationStatus,
                color: statusColor,
                fields: [
                    { name: "🛍️ Item", value: itemName, inline: true },
                    { name: "👤 Roblox", value: robloxUser, inline: true },
                    { name: "📱 Contact", value: contact, inline: true },
                    { name: "🔗 TXID", value: `\`${tx}\`` }
                ],
                timestamp: new Date()
            }]
        })
    });

    // Final Screen Switch
    document.getElementById('step-2').classList.add('hidden');
    document.getElementById('step-success').classList.remove('hidden');
    btn.innerText = "CONFIRM PURCHASE";
    btn.disabled = false;
}

renderStore();