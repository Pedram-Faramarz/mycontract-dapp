let provider;
        let signer;
        let contract;

        // 🔴 Replace with your deployed contract address
        
        const contractAddress = "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

        // ABI matching MyContract
        const contractABI = [
            "function message() view returns (string)",
            "function number() view returns (uint)",
            "function status() view returns (bool)",
            "function setMessage(string _newMessage)",
            "function setNumber(uint _newNumber)",
            "function setStatus(bool _newStatus)",
            "function nameOfOwner() view returns (string)"
        ];

        async function connectWallet() {
            // Check if ethers library actually exists
            if (typeof ethers === "undefined") {
                return alert("Ethers library failed to load. Check your script tags!");
            }

            if (window.ethereum) {
                try {
                    await window.ethereum.request({ method: "eth_requestAccounts" });
                    provider = new ethers.BrowserProvider(window.ethereum);
                    signer = await provider.getSigner();
                    
                    // Contract initialization
                    contract = new ethers.Contract(contractAddress, contractABI, signer);
                    
                    // Get account and network info
                    const account = await signer.getAddress();
                    const network = await provider.getNetwork();
                    
                    // Show success modal with connection details
                    document.getElementById("modalContractAddress").innerText = contractAddress;
                    document.getElementById("modalNetwork").innerText = network.name + " (Chain ID: " + network.chainId + ")";
                    document.getElementById("modalAccount").innerText = account;
                    // 
                    document.getElementById("connectionModal").classList.add("show");
                    
                    
                    // Load data
                    await loadData();
                    
                } catch (error) {
                    console.error("Detailed Error:", error);
                    alert("Error: " + error.message);
                }
            } else {
                alert("MetaMask not found. Please install the MetaMask extension");
            }
        }

        async function loadData() {
            try {
                document.getElementById("message").innerText = await contract.message();
                document.getElementById("number").innerText = await contract.number();
                document.getElementById("status").innerText = await contract.status();
                try{
                    document.getElementById("nameOfOwner").innerText = await contract.nameOfOwner();
                } catch (error) {
                    console.error("Error getting owner name:", error);
                    document.getElementById("nameOfOwner").innerText = "Error retrieving owner name";
                }
            } catch (error) {
                console.error("Error loading data:", error);
                alert("Error loading contract data. Make sure the contract address is correct.");
            }
        }

        async function setMessage() {
            const msg = document.getElementById("newMessage").value;
            if (!msg) {
                alert("Please enter a message");
                return;
            }
            try {
                const tx = await contract.setMessage(msg);
                alert("Transaction submitted! Waiting for confirmation...");
                await tx.wait();
                alert("Message updated successfully!");
                await loadData();
                document.getElementById("newMessage").value = "";
            } catch (error) {
                console.error("Error:", error);
                alert("Transaction failed: " + error.message);
            }
        }

        async function setNumber() {
            const num = document.getElementById("newNumber").value;
            if (!num) {
                alert("Please enter a number");
                return;
            }
            try {
                const tx = await contract.setNumber(num);
                alert("Transaction submitted! Waiting for confirmation...");
                await tx.wait();
                alert("Number updated successfully!");
                await loadData();
                document.getElementById("newNumber").value = "";
            } catch (error) {
                console.error("Error:", error);
                alert("Transaction failed: " + error.message);
            }
        }

        async function setStatus() {
            const stat = document.getElementById("newStatus").value === "true";
            try {
                const tx = await contract.setStatus(stat);
                alert("Transaction submitted! Waiting for confirmation...");
                await tx.wait();
                alert("Status updated successfully!");
                await loadData();
            } catch (error) {
                console.error("Error:", error);
                alert("Transaction failed: " + error.message);
            }
        }

        function closeModal() {
            document.getElementById("connectionModal").classList.remove("show");
        }

        // Optional: Close modal when clicking outside
        document.getElementById("connectionModal").addEventListener("click", function(e) {
            if (e.target === this) {
                closeModal();
            }
        });