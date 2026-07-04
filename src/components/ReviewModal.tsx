import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { supabase } from '../lib/supabaseClient';
import StarRating from './StarRating';

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmitted: () => void;
};

const MAX_COMMENT_LENGTH = 300;

export default function ReviewModal({ open, onClose, onSubmitted }: Props) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resetAndClose = () => {
    setName('');
    setRating(0);
    setComment('');
    setError(null);
    onClose();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !comment.trim() || rating === 0) {
      setError('Please add your name, a rating, and a comment.');
      return;
    }

    setSubmitting(true);
    setError(null);

    const { error: insertError } = await supabase
      .from('reviews')
      .insert({ name: name.trim(), rating, comment: comment.trim() });

    setSubmitting(false);

    if (insertError) {
      setError('Something went wrong submitting your review. Please try again.');
      return;
    }

    onSubmitted();
    resetAndClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
        >
          <motion.div
            className="bg-white rounded-2xl border border-outline-variant shadow-2xl w-full max-w-lg p-8 relative"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={resetAndClose}
              className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors"
              aria-label="Close"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <h3 className="text-2xl font-display font-bold text-primary mb-1">Share Your Experience</h3>
            <p className="text-sm text-on-surface-variant mb-6">
              Your feedback helps us serve clients better.
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-xs font-bold text-primary uppercase tracking-wider">Your Name</label>
                <input
                  className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:border-primary focus:ring-0 transition-all outline-none"
                  placeholder="Jane Doe"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-primary uppercase tracking-wider">Rating</label>
                <StarRating rating={rating} size="lg" interactive onChange={setRating} />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-primary uppercase tracking-wider">Your Review</label>
                  <span className="text-[10px] text-on-surface-variant">{comment.length} / {MAX_COMMENT_LENGTH}</span>
                </div>
                <textarea
                  className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:border-primary focus:ring-0 transition-all outline-none"
                  placeholder="Tell us about your experience..."
                  rows={4}
                  maxLength={MAX_COMMENT_LENGTH}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>

              {error && <p className="text-sm text-red-600 font-medium">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {submitting ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
