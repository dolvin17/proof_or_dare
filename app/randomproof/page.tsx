"use client";

import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

// Fun, formatted questions in English
const questions: string[] = [
  "🕰️ Is your wallet older than 48 hours?",
  "🪙 Do you hold at least 1 token (fungible or NFT) in your wallet?",
  "🔗 Have you made at least 1 onchain transaction?",
  "💰 Is your balance positive? (More than 0.0001 ETH or equivalent)",
  "📥 Have you received at least 1 incoming transaction?",
  "📤 Have you sent at least 1 transaction?",
  "🌐 Have you completed World ID verification?",
  "📲 Have you logged into at least one World App mini app?",
  "🤝 Have you interacted with any smart contract?",
  "🌍 Do you have at least one transaction on World Chain or any EVM chain?",
];

// Typed function for random question
function getRandomQuestion(arr: string[]): string {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

export default function RandomQuestion() {
  const [loading, setLoading] = useState(true);
  const [question, setQuestion] = useState<string | null>(null);

  useEffect(() => {
    // Simulate loading, then pick a random question
    const timer = setTimeout(() => {
      setQuestion(getRandomQuestion(questions));
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-72 gap-6">
      <div className="min-h-24 flex items-center justify-center">
        {loading ? (
          <FaSpinner className="text-4xl text-pink-500 animate-spin" />
        ) : question ? (
          <div className="text-2xl font-semibold text-center text-gray-800 animate-bounce">
            {question}
          </div>
        ) : null}
      </div>
      {!loading && (
        <button
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-md text-lg cursor-not-allowed opacity-60"
          disabled
        >
          Let's Proof!
        </button>
      )}
    </div>
  );
}
