// EMPOWER HUB - Community Feed & Collaboration Page

import React, { useState } from 'react';
import { Users, Heart, MessageSquare, Share2, Sparkles, Send } from 'lucide-react';
import toast from 'react-hot-toast';

export const CommunityPage: React.FC = () => {
  const [postText, setPostText] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Ananya Sharma',
      role: 'Learner & Tailor Artisan',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      time: '2 hours ago',
      content: 'Just received my first 10 tote bag orders on EMPOWER HUB Marketplace! Thanks to Mentor Priya for guiding me on pricing & photography! 🎉',
      likes: 24,
      comments: 5
    },
    {
      id: 2,
      author: 'Priya Sundaram',
      role: 'Verified Craft Specialist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      time: '5 hours ago',
      content: 'Hosted a live session today on eco-textile dyeing techniques. Super proud of our artisan community members scaling their micro-businesses!',
      likes: 48,
      comments: 12
    }
  ]);

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postText.trim()) return;

    const newPost = {
      id: Date.now(),
      author: 'Ananya Sharma',
      role: 'Learner & Tailor Artisan',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      time: 'Just now',
      content: postText,
      likes: 0,
      comments: 0
    };

    setPosts([newPost, ...posts]);
    setPostText('');
    toast.success('Community post published!');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 space-y-8">
      
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold">
          <Users className="w-3.5 h-3.5" /> Empower Entrepreneur Social Network
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">Artisan & Learner Community</h1>
      </div>

      {/* Create Post Card */}
      <form onSubmit={handleCreatePost} className="glass-card p-4 rounded-3xl space-y-3 border border-blue-500/20">
        <textarea
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          placeholder="Share your business milestone, craft story, or ask a mentor question..."
          className="w-full p-3 text-xs rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none resize-none h-24"
        />
        <div className="flex justify-end">
          <button type="submit" className="px-5 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-md flex items-center gap-1">
            <Send className="w-3.5 h-3.5" /> Post Story
          </button>
        </div>
      </form>

      {/* Feed List */}
      <div className="space-y-6">
        {posts.map((p) => (
          <div key={p.id} className="glass-card p-6 rounded-3xl space-y-4 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <img src={p.avatar} alt={p.author} className="w-10 h-10 rounded-full object-cover border border-blue-500" />
              <div>
                <h4 className="font-bold text-xs text-gray-900 dark:text-gray-100">{p.author}</h4>
                <p className="text-[10px] text-gray-400">{p.role} • {p.time}</p>
              </div>
            </div>

            <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{p.content}</p>

            <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center gap-6 text-xs text-gray-400 font-semibold">
              <button onClick={() => toast.success('Liked post!')} className="flex items-center gap-1 hover:text-rose-500">
                <Heart className="w-4 h-4" /> {p.likes} Likes
              </button>
              <button className="flex items-center gap-1 hover:text-blue-500">
                <MessageSquare className="w-4 h-4" /> {p.comments} Comments
              </button>
              <button onClick={() => toast.success('Link copied!')} className="flex items-center gap-1 hover:text-purple-500">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
