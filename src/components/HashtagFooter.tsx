import React, { useState } from 'react';
import { WEDDING_DETAILS } from '../data/weddingData';
import { OliveBranchDivider, WeddingRingsCrest } from './BotanicalAccents';
import { Copy, Check, Mail } from 'lucide-react';

export const HashtagFooter: React.FC = () => {
  const [copiedTag, setCopiedTag] = useState<string | null>(null);

  const handleCopyHashtag = (tag: string) => {
    navigator.clipboard.writeText(tag);
    setCopiedTag(tag);
    setTimeout(() => {
      setCopiedTag(null);
    }, 2500);
  };

  const primaryHashtag = WEDDING_DETAILS.hashtags[0] || '#OyinTimiLoveBound26';

  return (
    <footer
      id="hashtag"
      className="relative bg-[#23301D] text-[#FDFBF7] pt-20 pb-12 overflow-hidden border-t border-[#C5A059]/30"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hashtag Spotlight Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="font-serif text-xs uppercase tracking-[0.28em] text-[#C5A059] font-medium mb-3">
            Celebrate With Us Online
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#FDFBF7]">
            Official Wedding Hashtag
          </h2>

          <p className="mt-3 text-sm sm:text-base font-heading italic text-[#FDFBF7]/85 max-w-lg mx-auto font-medium">
            Please capture and tag your photographs and video memories with our official celebration hashtag.
          </p>

          <OliveBranchDivider className="my-6" color="#C5A059" />

          {/* High-Contrast Soft Ivory / Champagne Card with Deep Burgundy Typography */}
          <div className="flex items-center justify-center mt-8">
            <div className="bg-[#FDFBF7] border-2 border-[#C5A059]/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5 sm:gap-8 shadow-xl max-w-lg w-full justify-between">
              <div className="text-center sm:text-left">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#23301D] font-serif block font-semibold mb-1">
                  Tag Your Moments
                </span>
                <span className="text-2xl sm:text-3xl font-display font-bold tracking-wider text-[#4A0E17]">
                  {primaryHashtag}
                </span>
              </div>

              <button
                type="button"
                onClick={() => handleCopyHashtag(primaryHashtag)}
                className={`px-5 py-2.5 rounded-full transition-all flex items-center gap-2 text-xs font-serif uppercase tracking-[0.16em] font-semibold shrink-0 shadow-sm ${
                  copiedTag === primaryHashtag
                    ? 'bg-[#23301D] text-[#FDFBF7]'
                    : 'bg-[#4A0E17] text-[#FDFBF7] hover:bg-[#380A11] active:scale-98'
                }`}
                title="Copy Hashtag to Clipboard"
                aria-label={`Copy hashtag ${primaryHashtag}`}
              >
                {copiedTag === primaryHashtag ? (
                  <>
                    <Check className="w-4 h-4 text-[#E5C378]" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Hashtag</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Gratitude Section */}
        <div className="max-w-xl mx-auto mb-16">
          {/* Warm Gratitude Note */}
          <div className="bg-[#1A2416] border border-[#C5A059]/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div>
              <div className="font-serif text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-2">
                With Sincere Gratitude
              </div>
              <p className="font-heading italic text-sm sm:text-base text-[#FDFBF7]/90 leading-relaxed">
                &ldquo;We are profoundly humbled by your love, fervent prayers, and continual encouragement as we step into holy matrimony. Thank you for celebrating our new beginning.&rdquo;
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="font-display text-lg text-[#E5C378] font-medium block">
                  Oyin-B &amp; Timi-B
                </span>
              </div>
              <div className="p-1.5 rounded-full bg-[#23301D] border border-[#C5A059]/40">
                <WeddingRingsCrest className="w-8 h-8 text-[#E5C378]" />
              </div>
            </div>
          </div>

          {/* Message Us button right below the gratitude card */}
          <div className="mt-6 flex justify-center">
            <a
              href={`mailto:${WEDDING_DETAILS.contactEmail}`}
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#4A0E17] hover:bg-[#380A11] text-[#FDFBF7] text-xs font-serif uppercase tracking-[0.18em] font-semibold transition-all border border-[#C5A059]/40 shadow-md hover:shadow-lg active:scale-98"
              id="send-us-a-message-footer"
            >
              <Mail className="w-4 h-4 text-[#E5C378]" />
              <span>Send Us a Message</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#C5A059]/20 pt-8 pb-2 text-center text-xs text-[#FDFBF7]/60 font-serif tracking-wider space-y-1.5">
          <p>© 2026 Oyin-B &amp; Timi-B. All rights reserved.</p>
          <p className="text-[10px] tracking-widest text-[#FDFBF7]/40 font-mono">
            Crafted by <a href="tel:07055483341" className="hover:text-[#E5C378] transition-colors">TechNinja-07055483341</a>
          </p>
        </div>

      </div>
    </footer>
  );
};
