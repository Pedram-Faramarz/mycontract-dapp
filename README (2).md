# MyContract DApp

A simple decentralized application (DApp) built with HTML, CSS, JavaScript, and Ethers.js to interact with an Ethereum smart contract using MetaMask.

## Features

- Connect wallet using MetaMask
- Read on-chain contract data
- Update smart contract state
- Modern responsive UI
- Transaction confirmation handling
- Connection success modal

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Ethers.js v6
- MetaMask

---

## Smart Contract Functions

This DApp interacts with the following contract functions:

### Read Functions
- `message()`
- `number()`
- `status()`
- `nameOfOwner()`

### Write Functions
- `setMessage(string _newMessage)`
- `setNumber(uint _newNumber)`
- `setStatus(bool _newStatus)`

---

## Project Structure

```bash
project-folder/
│
├── index.html
├── app.js
└── README.md
```

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mycontract-dapp.git
cd mycontract-dapp
```

---

### 2. Replace Contract Address

Open `app.js` and replace:

```javascript
const contractAddress = "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
```

with your deployed smart contract address.

Example:

```javascript
const contractAddress = "0x1234567890abcdef1234567890abcdef12345678";
```

---

### 3. Run the Project

You can simply open `index.html` in your browser.

Or use a local server:

#### VS Code Live Server
Install the Live Server extension and click:

```bash
Go Live
```

#### Python HTTP Server

```bash
python -m http.server 5500
```

Then open:

```bash
http://localhost:5500
```

---

## MetaMask Requirements

Before using the DApp:

- Install MetaMask
- Connect to the correct blockchain network
- Import an account with test ETH or ETH
- Approve connection requests

Official Website:

- https://metamask.io/

---

## Example Workflow

1. Open the DApp
2. Click **Connect MetaMask**
3. Approve wallet connection
4. View current contract values
5. Update message, number, or status
6. Confirm transactions in MetaMask
7. Wait for blockchain confirmation

---

## Screenshots

You can add screenshots here later:

```md
![Home Page](screenshots/home.png)
```

---

## Future Improvements

- Add wallet disconnect button
- Add loading spinners
- Add transaction history
- Add event listeners
- Add dark mode
- Improve error handling
- Deploy to GitHub Pages

---

## Deploy to GitHub Pages

1. Push the project to GitHub
2. Open repository settings
3. Go to:

```bash
Settings → Pages
```

4. Select:
- Branch: `main`
- Folder: `/root`

5. Save

GitHub will provide a public URL.

---

## License

This project is open-source and available under the MIT License.

---

## Author

Pedram
