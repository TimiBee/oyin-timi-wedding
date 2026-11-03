import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { DONATION_ACCOUNTS, WEDDING_DETAILS } from '../data/weddingData';
import { OliveBranchDivider } from './BotanicalAccents';

export const GiftRegistry: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <section
      id="registry"
      className="relative py-20 lg:py-28 bg-[#FDFBF7] border-t border-[#C5A059]/25 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="font-serif text-xs uppercase tracking-[0.28em] text-[#C5A059] font-medium mb-3">
            Honoring Our Union
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#4A0E17]">
            Gift &amp; Donation
          </h2>

          <OliveBranchDivider className="my-5" />

          {/* Flowing Registry Quote (breathing freely, no boxy card) */}
          <p className="font-heading italic text-base sm:text-lg text-[#23301D]/85 leading-relaxed max-w-xl mx-auto mt-4">
            &ldquo;{WEDDING_DETAILS.registryQuote}&rdquo;
          </p>
        </div>

        {/* Bespoke Wedding Gift Stationery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {DONATION_ACCOUNTS.map((account) => {
            const isCopied = copiedId === account.id;

            return (
              <div
                key={account.id}
                className="relative bg-white rounded-2xl p-8 sm:p-10 border border-[#C5A059]/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-center group"
                style={{
                  boxShadow: '0 4px 20px -2px rgba(197, 160, 89, 0.08)',
                }}
              >
                {/* Delicate top gold stationery accent line */}
                <div className="w-12 h-[1px] bg-[#C5A059] mx-auto mb-6" />

                <div>
                  {/* Clean centered Bank Name in refined serif */}
                  <h3 className="font-display text-2xl font-medium text-[#4A0E17] mb-1">
                    {account.bankName}
                  </h3>

                  {/* Account Name in elegant serif */}
                  <p className="font-serif text-xs sm:text-sm uppercase tracking-[0.2em] text-[#23301D] font-semibold mb-6">
                    {account.accountName}
                  </p>

                  {/* Prominent, Centered Account Number */}
                  <div className="my-6 py-4 border-y border-[#C5A059]/20">
                    <span className="font-serif text-[10px] uppercase tracking-[0.25em] text-[#C5A059] block mb-1 font-semibold">
                      Account Number
                    </span>
                    <span className="text-3xl sm:text-4xl font-mono font-bold tracking-widest text-[#4A0E17]">
                      {account.accountNumber}
                    </span>
                  </div>

                  {/* Discrete, tasteful burgundy Copy Button */}
                  <div className="mt-4 flex justify-center">
                    <button
                      type="button"
                      onClick={() => handleCopy(account.accountNumber, account.id)}
                      className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-serif uppercase tracking-[0.16em] transition-all shadow-xs ${
                        isCopied
                          ? 'bg-[#23301D] text-[#FDFBF7]'
                          : 'bg-[#4A0E17] text-[#FDFBF7] hover:bg-[#380A11] active:scale-98'
                      }`}
                      aria-label={`Copy account number for ${account.bankName}`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#E5C378]" />
                          <span>Copied to Clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Account Number</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Subtle bottom note */}
                {account.notes && (
                  <p className="text-xs text-[#23301D]/70 font-sans-clean mt-6 pt-4 border-t border-[#C5A059]/15">
                    {account.notes}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Cordial Sincere Appreciation Note */}
        <div className="mt-12 text-center max-w-lg mx-auto">
          <p className="text-xs sm:text-sm text-[#23301D]/80 font-heading italic leading-relaxed">
            Every token of love and gift sent towards our union is received with sincere appreciation and heartfelt prayers.
          </p>
        </div>

      </div>
    </section>
  );
};
