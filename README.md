# 🧬 Proof or Dare – Onchain Reputation.

**Proof or Dare** is a mini app built for **World App**, designed to gradually build **onchain reputation** using real wallet activity.

Using **World ID** for human verification and **ZK proofs** or wallet data for interaction validation, users complete evolving challenges to prove they’re active participants in the World ecosystem. As users progress, they unlock **World tokens** as rewards.

---

## 🛠️ What It Does

Proof or Dare reimagines "Truth or Dare" as a Web3-native reputation system:

- **Truths** = Onchain proofs (e.g., you’ve made a tx, hold a token, used a mini app)
- **Dares** = Simple Web3 actions (e.g., bridge tokens, buy NFTs, interact cross-chain)
- Each interaction improves your **reputation score**, unlocking new levels.
- All players are verified humans via **World ID**, no bots allowed.

---

## 🎮 Gameplay Loop

1. **Verify with World ID** to prove you’re human.
2. Start from **Level 1** with basic Truths and Dares.
3. Submit **proofs** to complete challenges:
   - Level 1 Truths:
     - Wallet created at least 48h ago
     - Wallet has a non-zero token balance
     - At least 1 onchain tx
   - Level 1 Dares:
     - Interact with one World App mini app
     - Receive a token from another wallet

4. Progress to higher levels with **evolving proofs**:
   - Level 2 Truths:
     - At least 10 transactions
     - Has bridged tokens at least once
     - Has used 5 different mini apps
   - Level 2 Dares:
     - Stake tokens
     - Trade or swap at least twice in 24h

5. For every **5 proofs** completed, earn **1 World token**.
6. For every **10 additional proofs**, earn **2 more World tokens**.
7. Lives are used to skip challenges. Run out? Pay a small amount in **World tokens** to keep going.

---

## 🧠 Game Logic

- ✅ **Proofs** are validated through zk.
- ⚡ **Dares** trigger backend validations or require onchain actions to be detected.
- 🎯 **Levels** unlock more complex actions and better rewards.
- 🏆 **Rewards** come in the form of:
  - World tokens
  - Ecosystem perks (future integrations)

---

## 🔁 Reputation System

Proof or Dare aims to become a lightweight, transparent reputation layer for World App users. Proofs are **stackable** and **evolutionary**:

| Reputation Category     | Level 1                                | Level 2                                |
|------------------------|----------------------------------------|----------------------------------------|
| Wallet Age             | > 48 hours                             | > 14 days                              |
| Token Ownership        | Has 1 token                            | Holds 3+ different tokens              |
| Transactions           | Has 1 tx                               | Has 10+ txs                            |
| Mini App Usage         | Used 1 mini app                        | Used 5+ mini apps                      |
| WorldChain Activity    | At least 1 tx on WorldChain            | Contract deployed / interacted deeply |
| Bridging               | Has bridged once                       | Bridged to/from 2+ chains              |

---

## 🌐 Built With

- [MiniKit SDK](https://developer.worldcoin.org/docs/minikit/overview) – World ID verification, storage, and session
- [World Chain](https://developer.worldcoin.org/docs/world-chain/overview) – Onchain activity tracking
- [Intmax](https://www.intmax.io) – ZK proof generation
- **Next.js** – Frontend framework  
- **TailwindCSS** – Styling  
- **Node.js** – Backend

---

## 💡 Why Proof or Dare?

- Verifies **real human users** through World ID
- Promotes **progressive, real onchain behavior**
- Rewards users with **World tokens** and onchain reputation
- Simple, fun, and frictionless way to explore Web3  
- Designed to be easily extendable for any mini app or partner protocol

---

## 🚧 Status

This is a **MVP** built for the World App Hackathon. Future plans include:

- Reputation score exportability
- Full SBT integration
- Leaderboards and community challenges
- Support for external ecosystem plugins

---

Made with 💚 for the Worldcoin Hackathon.
