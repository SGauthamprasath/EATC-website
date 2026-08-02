import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { supabase, Review } from '../lib/supabaseClient';
import StarRating from './StarRating';
import ReviewModal from './ReviewModal';

const AVATAR_COLORS = [
  'bg-accent',
  'bg-primary-container ring-2 ring-white/20',
];

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  const initials = parts.slice(0, 2).map((part) => part[0]?.toUpperCase() ?? '');
  return initials.join('') || '?';
}

function getAvatarColor(name: string) {
  const index = name.charCodeAt(0) % AVATAR_COLORS.length;
  return AVATAR_COLORS[index];
}

const COMMENT_PREVIEW_LENGTH = 220;

function truncateComment(comment: string) {
  if (comment.length <= COMMENT_PREVIEW_LENGTH) return comment;
  return `${comment.slice(0, COMMENT_PREVIEW_LENGTH).trimEnd()}…`;
}

const TOP_REVIEWS_LIMIT = 5;

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [stats, setStats] = useState({ average: 0, count: 0 });
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const fetchReviews = useCallback(async () => {
    setLoading(true);
    const [{ data: topReviews, error: topError }, { data: allRatings, error: statsError }] = await Promise.all([
      supabase
        .from('reviews')
        .select('id, name, rating, comment, created_at')
        .order('rating', { ascending: false })
        .order('created_at', { ascending: false })
        .limit(TOP_REVIEWS_LIMIT),
      supabase.from('reviews').select('rating'),
    ]);

    if (!topError && topReviews) {
      setReviews(topReviews as Review[]);
    }
    if (!statsError && allRatings) {
      const count = allRatings.length;
      const average = count ? allRatings.reduce((sum, r) => sum + r.rating, 0) / count : 0;
      setStats({ average, count });
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  useEffect(() => {
    setIndex(0);
  }, [reviews.length]);

  useEffect(() => {
    if (reviews.length < 2) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const goPrev = () => setIndex((current) => (current - 1 + reviews.length) % reviews.length);
  const goNext = () => setIndex((current) => (current + 1) % reviews.length);

  const current = reviews[index];

  return (
    <section className="relative py-20 bg-primary overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent, transparent 78px, #ffffff 78px, #ffffff 80px)',
        }}
      ></div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 85% 20%, rgba(13,148,136,0.18), transparent 55%)',
        }}
      ></div>
      <span
        className="material-symbols-outlined absolute -left-24 top-1/2 -translate-y-1/2 text-white/[0.04] pointer-events-none select-none"
        style={{ fontSize: '34rem', fontVariationSettings: "'FILL' 1" }}
      >
        format_quote
      </span>

      <div className="relative z-10 max-w-[1200px] mx-auto px-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-white/70 max-w-lg mx-auto">
            Real experiences from professionals and businesses who trusted EATC Group with their most sensitive documents.
          </p>
          {stats.count > 0 && (
            <div className="flex items-center justify-center gap-3 mt-4">
              <StarRating rating={Math.round(stats.average)} size="sm" />
              <span className="text-sm font-bold text-white">{stats.average.toFixed(1)} / 5</span>
              <span className="text-xs text-white/60">({stats.count} reviews)</span>
            </div>
          )}
        </div>

        {loading ? (
          <div className="max-w-2xl mx-auto h-64 rounded-2xl bg-white/5 border border-white/10 animate-pulse" />
        ) : reviews.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-white/15 rounded-2xl bg-white/5">
            <p className="text-white/60">
              No reviews yet. Be the first to share your experience!
            </p>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous review"
                className="flex-shrink-0 w-11 h-11 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:border-accent transition-colors"
              >
                <span className="material-symbols-outlined text-white">chevron_left</span>
              </button>

              <div className="flex-1 min-w-0 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="bg-white/[0.06] backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/15 flex flex-col items-center text-center gap-4 shadow-xl min-h-[260px] justify-center"
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold ${getAvatarColor(
                        current.name
                      )}`}
                    >
                      {getInitials(current.name)}
                    </div>
                    <StarRating rating={current.rating} size="md" />
                    <p className="text-white/80 leading-relaxed max-w-md break-words">
                      &ldquo;{truncateComment(current.comment)}&rdquo;
                    </p>
                    <span className="text-sm font-bold text-white">{current.name}</span>
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next review"
                className="flex-shrink-0 w-11 h-11 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:border-accent transition-colors"
              >
                <span className="material-symbols-outlined text-white">chevron_right</span>
              </button>
            </div>

            {reviews.length > 1 && (
              <div className="flex items-center justify-center gap-2 mt-6">
                {reviews.map((review, dotIndex) => (
                  <button
                    key={review.id}
                    type="button"
                    onClick={() => setIndex(dotIndex)}
                    aria-label={`Go to review ${dotIndex + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      dotIndex === index ? 'w-6 bg-accent' : 'w-2 bg-white/20'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        <div className="flex justify-center mt-12">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-accent text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <span className="material-symbols-outlined text-base">rate_review</span>
            Review Us
          </button>
        </div>
      </div>

      <ReviewModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmitted={fetchReviews}
      />
    </section>
  );
}
