import { useState } from "react";
import { Check, Copy } from "lucide-react";

export  function CliTabs({ commands } : { commands: { [key: string]: string } }) {
  const tabList = Object.keys(commands);
  const [activeTab, setActiveTab] = useState(tabList[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(commands[activeTab] as string);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full max-w-3xl rounded-xl bg-white text-black dark:bg-neutral-900 dark:text-white shadow-md overflow-hidden border border-gray-200 dark:border-[#2a2a2a]">
      {/* Tabs */}
      <div className="flex space-x-4 px-4 pt-4">
        {tabList.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm font-medium transition-colors ${
              tab === activeTab
                ? "text-black border-b-2 border-black dark:text-white dark:border-white"
                : "text-gray-500 hover:text-black dark:hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Command */}
      <div className="relative px-4 py-4 font-mono text-sm text-white dark:text-white">
        <span className="break-all text-black dark:text-white">{commands[activeTab]}</span>
        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 p-1 rounded hover:bg-white/10 transition"
          title="Copy to clipboard"
        >
          {copied ? (
            <Check size={16} className="text-green-400" />
          ) : (
            <Copy size={16} className="dark:text-white text-black" />
          )}
        </button>
      </div>
    </div>
  );
}
